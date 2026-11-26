import { useEffect, useState } from "react";
import { Reveal } from "@/components/motion/primitives";
import { site } from "@/data/site";
import { sections as privacySections, privacyExtras } from "./privacyData";

const num = (i) => String(i + 1).padStart(2, "0");

// Shared by /privacy and /terms: pass `sections` and `extras` (callout and contact copy) to change the content.
export function PrivacyBody({ sections = privacySections, extras = privacyExtras }) {
  const [active, setActive] = useState(sections[0].id);

  // Highlights the "on this page" entry for the section currently near the top of the screen.
  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-10% 0px -70% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  const go = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    setActive(id);
  };

  return (
    <div className="pv-body">
      <aside className="pv-toc" aria-label="On this page">
        <p className="pv-toc__label">ON THIS PAGE</p>
        <ol>
          {sections.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className={active === s.id ? "is-on" : undefined} aria-current={active === s.id ? "location" : undefined} onClick={(e) => go(e, s.id)}>
                <span>{num(i)}</span>
                {s.toc}
              </a>
            </li>
          ))}
        </ol>
        <p className="pv-toc__note">
          {extras.source}
          <br />
          No active links or controls in this draft.
        </p>
      </aside>

      <div className="pv-main">
        <Reveal as="div" className="pv-callout">
          <h2>{extras.calloutTitle}</h2>
          <p>{extras.calloutText}</p>
          <small>{extras.calloutNote}</small>
        </Reveal>

        {sections.map((s, i) => (
          <Reveal as="section" key={s.id} id={s.id} className="pv-sec" aria-labelledby={`${s.id}-h`}>
            <span className="pv-sec__n">{num(i)}</span>
            <h2 id={`${s.id}-h`}>{s.title}</h2>
            {s.paras.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        ))}

        <Reveal as="div" className="pv-contact">
          <h2>{extras.contactTitle}</h2>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a> · {site.phone}
            <br />
            {extras.showAddress ? site.address : site.legalName}
          </p>
          <small>{extras.contactNote}</small>
        </Reveal>
      </div>
    </div>
  );
}
