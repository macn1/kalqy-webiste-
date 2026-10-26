import Image from "next/image";
import Link from "next/link";
import { footerGroups, legalNav } from "@/data/navigation";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-logo" aria-label="Kalqy home">
              <Image src="/images/brand/kalqy-logo.png" alt="Kalqy" width={250} height={76} style={{ height: 36, width: "auto" }} />
            </Link>
            <p style={{ maxWidth: "36ch" }}>
              Movement-based learning games that use your webcam, so children learn by moving, playing and exploring.
            </p>
          </div>

          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2>Get in touch</h2>
            <address>
              <ul>
                <li>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li>
                  <a href={site.phoneHref}>{site.phone}</a>
                </li>
                <li>{site.address}</li>
                <li>
                  <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">
                    Instagram<span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                  {" · "}
                  <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn<span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                  {" · "}
                  <a href={site.social.youtube} target="_blank" rel="noopener noreferrer">
                    YouTube<span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <nav aria-label="Legal">
            <ul>
              {legalNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              <li>
                <a href={site.officialLegal.cookies} target="_blank" rel="noopener noreferrer">
                  Cookie policy<span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a href={site.officialLegal.disclaimer} target="_blank" rel="noopener noreferrer">
                  Disclaimer<span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
