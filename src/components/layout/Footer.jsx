import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import { useLocation } from "react-router-dom";
import { site } from "@/data/site";
import { Stagger, StaggerItem } from "@/components/motion/primitives";

const groups = [
  {
    title: "Explore",
    color: "#77ddb3",
    links: [
      ["How It Works", "/how-it-works"],
      ["Explore Experiences", "/games"],
      ["About Kalqy", "/about"],
    ],
  },
  {
    title: "Audiences",
    color: "#ffd166",
    links: [
      ["For Parents", "/product#parents"],
      ["For Schools", "/schools"],
      ["Book a Demo", "/schools#demo"],
    ],
  },
  {
    title: "Support",
    color: "#ff786b",
    links: [
      ["Get in Touch", "/contact"],
      ["Privacy", "/privacy"],
      ["Terms", "/terms"],
    ],
  },
];

const social = [
  ["LinkedIn", site.social.linkedin, "social-linkedin.svg"],
  ["Instagram", site.social.instagram, "social-instagram.svg"],
  ["YouTube", site.social.youtube, "social-youtube.svg"],
];

export function Footer() {
  // The entrance only plays on the homepage; every other page shows the footer straight away.
  const { pathname } = useLocation();
  const calm = pathname !== "/" ? { initial: "show" } : {};
  return (
    <footer className="site-footer rd-footer">
      <div className="rd-footer__waves" aria-hidden="true">
        <Image src="/images/redesign/footer-waves.svg" width={1440} height={344} />
        <Image className="rd-footer__lion fx-sway" data-sparkle="" src="/images/redesign/footer-character.webp" width={152} height={217} />
      </div>
      <div className="rd-footer__body">
        <Stagger className="rd-footer__cols" gap={0.1} {...calm}>
          <StaggerItem className="rd-footer__brand" y={16}>
            <Link href="/" aria-label="Kalqy home">
              <Image src="/images/redesign/logo.png" alt="Kalqy" width={140} height={43} />
            </Link>
            <p>Movement-based learning for young children, with games to enjoy at home, in school and in preschool.</p>
            <address>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.phoneHref}>{site.phone}</a>
              <span>{site.address}</span>
            </address>
          </StaggerItem>
          {groups.map((g) => (
            <StaggerItem as="nav" key={g.title} aria-label={g.title} className="rd-footer__group" y={16}>
              <h2 style={{ color: g.color }}>
                <i style={{ background: g.color }} aria-hidden="true" />
                {g.title}
              </h2>
              <ul>
                {g.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
        <Image className="rd-footer__divider" src="/images/redesign/footer-divider.svg" width={1280} height={12} aria-hidden="true" />
        <div className="rd-footer__bar">
          <p>© {new Date().getFullYear()} {site.legalName}.</p>
          <ul className="rd-footer__social">
            {social.map(([name, href, icon]) => (
              <li key={name}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Image src={`/images/redesign/${icon}`} width={18} height={18} />
                  {name}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="rd-footer__legal">
            <span>
              <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link>
            </span>
            <a
              href="#top"
              className="rd-footer__top"
              aria-label="Back to top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
