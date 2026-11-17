import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { announcement, headerCta, primaryNav } from "@/data/navigation";
import { Icon } from "@/components/common/Icon";
import { LinkButton } from "@/components/common/LinkButton";
export function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);
  const listRef = useRef(null);
  const [hovered, setHovered] = useState(null);
  const [pill, setPill] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const isCurrent = (href) => pathname === href || pathname.startsWith(href + "/");
  const currentIndex = primaryNav.findIndex((n) => isCurrent(n.href));
  const lit = hovered ?? (currentIndex >= 0 ? currentIndex : null);
  // Sliding pill: sits behind the hovered/focused link, and rests on the current page's link.
  useEffect(() => {
    const place = () => {
      const el = lit === null ? null : listRef.current?.children[lit]?.firstElementChild;
      if (!(el instanceof HTMLElement)) return setPill(null);
      setPill({ x: el.offsetLeft, w: el.offsetWidth });
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [lit]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // Close on navigation.
  useEffect(() => setOpen(false), [pathname]);
  // Escape closes and returns focus; body scroll is locked while open; Tab is kept inside menu + toggle.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector("a")?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab") {
        const nodes = [toggleRef.current, ...Array.from(menuRef.current?.querySelectorAll("a, button") ?? [])].filter(Boolean);
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const onResize = () => window.innerWidth >= 1040 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);
  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="announce-bar">{announcement}</div>
      <div className="container site-header__bar">
        <Link href="/" className="brand-link" aria-label="Kalqy home">
          <Image
            src="/images/brand/kalqy-logo.png"
            alt="Kalqy"
            width={250}
            height={76}
            priority
            style={{ height: 42, width: "auto" }}
          />
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          <div className="nav-track" onMouseLeave={() => setHovered(null)} onBlur={() => setHovered(null)}>
            <span
              className="nav-pill"
              aria-hidden="true"
              style={pill ? { transform: `translateX(${pill.x}px)`, width: pill.w, opacity: 1 } : undefined}
            />
            <ul className="nav-list" ref={listRef}>
              {primaryNav.map((item, i) => (
                <li key={item.href}>
                  <Link
                    className={`nav-link${lit === i ? " is-lit" : ""}`}
                    href={item.href}
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                    onMouseEnter={() => setHovered(i)}
                    onFocus={() => setHovered(i)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Link href={headerCta.href} className="header-cta">
            {headerCta.label}
            <Icon name="external" size={14} />
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" ref={menuRef} className="mobile-nav">
          <nav aria-label="Mobile">
            <ul>
              {primaryNav.map((item, i) => (
                <li key={item.href} style={{ "--i": i }}>
                  <Link className="nav-link" href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <LinkButton href={headerCta.href} icon="download">
            {headerCta.label}
          </LinkButton>
        </div>
      )}
    </header>
  );
}
