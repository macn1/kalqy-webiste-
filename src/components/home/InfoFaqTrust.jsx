import { useId, useState } from "react";
import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import { site } from "@/data/site";

const info = [
  ["What it does", "Connects body movement with on-screen games through smart movement tracking."],
  ["Who it’s for", "Children aged 3 to 5, in schools and preschools."],
  ["What you need", "A Windows PC or Mac and room to move."],
  ["Who to ask", `Speak directly with Kalqy: ${site.email} or ${site.phone}.`],
];

export function ProductInfo() {
  return (
    <section className="rd-sec rd-bgsec rd-info" style={{ "--rd-bg": 'url("/images/redesign/bg-info.webp")' }} aria-labelledby="info-title">
      <h2 id="info-title" className="rd-h2">
        Built on clarity.
        <br />
        Designed for confidence.
      </h2>
      <dl className="rd-info__grid">
        {info.map(([t, d]) => (
          <div key={t}>
            <dt>{t}</dt>
            <dd>{d}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

const faqs = [
  {
    q: "How do I start playing Kalqy?",
    a: "Download Kalqy on your Windows PC or Mac, open a game and stand a few steps back from the screen. Your child plays by moving: jumping, reaching, balancing and waving. No controller, mouse or touchscreen needed.",
  },
  {
    q: "How does my child play without a controller?",
    a: "The games use your device’s webcam to track hand, pose and body movement in real time. Children jump, reach, point and move to play.",
  },
  {
    q: "How much space do we need to play?",
    a: "All it takes is a computer and room to move: children stand a few steps back from the screen. Our team will help you get set up.",
  },
  {
    q: "Which games can my child play?",
    a: "Experiences span English, science, maths, colours, music and calm sensory play.",
  },
  {
    q: "How do the kinesthetic toys work with the games?",
    a: `The Learning Kit includes hands-on toys that get children jumping, balancing and reaching while they play, alongside the Kalqy movement games. For details of the toys, contact us at ${site.email} or ${site.phone}.`,
  },
  {
    q: "How do I install Kalqy on a Mac?",
    a: "Use the Mac download button on the How it works page. The first launch may be blocked by macOS because the app is downloaded outside the App Store; the install guide on that page explains how to allow it.",
  },
  {
    q: "How do I track progress in the Parent App?",
    a: "After every session, the Kalqy Parent App shows your child’s progress, skills and new milestones, so you always know how they’re growing.",
  },
  { q: "What ages is Kalqy made for?", a: "Children aged 3 to 5, in schools and preschools." },
  {
    q: "What’s inside the ₹4,999 Learning Kit?",
    a: "A kinesthetic toy kit, Kalqy movement games and the Kalqy Parent App, with easy setup and help from our team.",
  },
  { q: "Who can help if we get stuck?", a: `Email ${site.email} or call ${site.phone}. You can also reach Kalqy on WhatsApp from the Contact page.` },
];

export function FaqSection() {
  const [open, setOpen] = useState(0);
  const base = useId();
  return (
    <section className="rd-sec rd-bgsec rd-faq" id="faq" style={{ "--rd-bg": 'url("/images/redesign/bg-faq.webp")' }} aria-labelledby="faq-title">
      <div className="rd-faq__inner">
        <div className="rd-faq__intro">
          <p className="rd-eyebrow rd-eyebrow--blue">FAQ</p>
          <h2 id="faq-title" className="rd-h2 rd-h2--44">
            How to play,
            <br />
            answered.
          </h2>
          <p className="rd-lead rd-lead--16">Everything parents ask before the first game.</p>
        </div>
        <div className="rd-faq__list">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className="rd-faq__item" key={f.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${base}-${i}`}
                    id={`${base}-b${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{f.q}</span>
                    <i className={isOpen ? "is-open" : undefined} aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </i>
                  </button>
                </h3>
                <div id={`${base}-${i}`} role="region" aria-labelledby={`${base}-b${i}`} hidden={!isOpen}>
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const parts = ["Part 1", "Part 2", "Part 3", "Part 4", "Part 5", "Part 6"];

export function TrustSection() {
  return (
    <section className="rd-sec rd-bgsec rd-trust" style={{ "--rd-bg": 'url("/images/redesign/bg-seen.webp")' }} aria-labelledby="trust-title">
      <header className="rd-trust__head">
        <div>
          <h2 id="trust-title" className="rd-h2 rd-h2--56">
            Trusted on screen.
            <span>Proven on the expo floor.</span>
          </h2>
          <p className="rd-lead">
            Kalqy was featured on Manorama Online’s Elevate and demonstrated live at DIDAC, Asia’s largest edtech expo, so
            parents, schools and partners can see the product and the team behind it.
          </p>
        </div>
        <div className="rd-trust__actions">
          <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" className="rd-btn rd-btn--primary rd-btn--md">
            ▶ Watch the episode<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
          <Link href="/contact" className="rd-btn rd-btn--outline rd-btn--md">
            Partner with us <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </header>
      <article className="rd-episode">
        <div className="rd-episode__shot">
          <Image src="/images/redesign/episode.jpg" alt="Manorama Online Elevate, Season 2: Dreams to Reality, featuring Kalqy" width={1079} height={567} />
        </div>
        <div className="rd-episode__info">
          <div>
            <h3>Manorama Online · Elevate</h3>
            <p>Season 2 · Dreams to Reality</p>
          </div>
          <span>Full episode in 6 short parts</span>
        </div>
        <ol className="rd-episode__parts" aria-label="Episode parts">
          {parts.map((p, i) => (
            <li key={p} className={i === 0 ? "is-on" : undefined}>
              {i === 0 ? "▶ " : ""}
              {p}
              <i />
            </li>
          ))}
        </ol>
      </article>
    </section>
  );
}
