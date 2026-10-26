import Link from "next/link";
import { Icon } from "@/components/common/Icon";
import { LinkButton } from "@/components/common/LinkButton";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { standardsReferenced } from "@/data/site";

/**
 * No testimonials or usage numbers are published. This section shows only verifiable, transparent information.
 */
export function TrustSection() {
  return (
    <section className="section section--navy section--sheet" aria-labelledby="trust-title">
      <div className="container">
        <SectionHeading
          id="trust-title"
          eyebrow="Clear and transparent"
          title="What you can check for yourself"
          intro="We would rather show you how Kalqy works than make big promises."
        />
        <div className="grid grid--3" data-stagger>
          <div className="card" style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.18)", boxShadow: "none" }}>
            <div className="card__icon">
              <Icon name="shield" />
            </div>
            <h3>Published privacy policy</h3>
            <p>Kalqy&apos;s policy explains what is collected and why, including how webcam data is handled.</p>
            <LinkButton href="/privacy" variant="primary" small>
              Read about privacy
            </LinkButton>
          </div>
          <div className="card" style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.18)", boxShadow: "none" }}>
            <div className="card__icon card__icon--mint">
              <Icon name="camera" />
            </div>
            <h3>Webcam only</h3>
            <p>Games are played with a regular webcam. Kalqy says video is processed mainly on the device.</p>
            <LinkButton href="/faq" variant="primary" small>
              Read the FAQ
            </LinkButton>
          </div>
          <div className="card" style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.18)", boxShadow: "none" }}>
            <div className="card__icon card__icon--coral">
              <Icon name="book" />
            </div>
            <h3>Frameworks Kalqy refers to</h3>
            <ul style={{ paddingLeft: "1.1em", margin: 0 }}>
              {standardsReferenced.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
                    {s.label}
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p style={{ marginTop: 24 }}>
          Referencing a framework is not a certification or endorsement.{" "}
          <Link href="/testimonials" style={{ color: "#fff" }}>
            Why there are no testimonials yet
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
