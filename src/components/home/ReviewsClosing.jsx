import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import { GrowBar, Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";

const reviews = [
  {
    key: "a",
    text: "From this game, everyone will learn a lot of things. It was really interesting, really good. Amazing!",
    avatar: "#77ddb3",
  },
  {
    key: "b",
    featured: true,
    text: "Kalqy has done a wonderful job. Learning by doing is what’s inculcated here, rather than using books to rote memorise. Learners are so enthusiastic about games, I think this is the best way possible. A great high-five to the team!",
  },
  {
    key: "c",
    text: "A really heartwarming, beautiful initiative. I’m a true believer in early education. This is what lays the foundation, and you’re doing a beautiful job.",
    avatar: "#5146e5",
  },
];

function Stars() {
  return (
    <span className="rd-stars" role="img" aria-label="5 out of 5 stars">
      {"★★★★★"}
    </span>
  );
}

export function ReviewsSection() {
  return (
    <section className="rd-sec rd-bgsec rd-reviews" style={{ "--rd-bg": 'url("/images/redesign/bg-reviews.webp")' }} aria-labelledby="reviews-title">
      <span className="rd-reviews__glow fx-pulse" aria-hidden="true" />
      <span className="rd-reviews__star fx-twinkle" aria-hidden="true">
        ✦
      </span> make 
      <Reveal as="header" className="rd-reviews__head">
        <div>
          <h2 id="reviews-title" className="rd-h2 rd-h2--64">
            Little players.
            <span>Big smiles.</span>
          </h2>
          <p>What educators and young learners said after trying Kalqy at DIDAC, Asia’s largest edtech expo.</p>
        </div>
        <ul className="rd-reviews__tabs" aria-hidden="true">
          <li className="is-on">All reviews</li>
          <li>Educators</li>
          <li>Students</li>
        </ul>
      </Reveal>
      <Stagger as="ul" className="rd-reviews__cards" gap={0.14}>
        {reviews.map((r) => (
          <StaggerItem as="li" key={r.key} y={32} className={`rd-review${r.featured ? " rd-review--top" : ""}${r.key === "c" ? " rd-review--low" : ""}`}>
            {r.featured && <span className="rd-review__ribbon">★ TOP REVIEW</span>}
            <div className="rd-review__player">
              <span className="rd-review__avatar" style={r.avatar ? { background: r.avatar, "--ring": r.avatar } : undefined} aria-hidden="true">
                ★
              </span>
              <div>
                <strong>DIDAC Expo visitor</strong>
                <small>Tried Kalqy live</small>
              </div>
              <span className="rd-review__quote" aria-hidden="true">
                “
              </span>
            </div>
            <Stars />
            <blockquote>{r.text}</blockquote>
            <div className="rd-review__foot">
              <span className="rd-review__tag">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <rect x="1.5" y="3.5" width="13" height="9" rx="4.5" stroke="currentColor" strokeWidth="2" />
                </svg>
                At DIDAC Expo
              </span>
              <span className="rd-review__fun">
                FUN LEVEL
                <i>
                  <GrowBar as="b" style={{ width: r.featured ? "100%" : "81%" }} delay={0.3} />
                </i>
              </span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <div className="rd-reviews__controls" aria-hidden="true">
        <span className="rd-reviews__progress">
          <i className="is-on" />
          <i />
          <i />
          <i />
        </span>
        <span className="rd-reviews__arrows">
          <b>←</b>
          <b className="is-on">→</b>
        </span>
      </div>
    </section>
  );
}

export function ClosingInvitation() {
  return (
    <section className="rd-sec rd-bgsec rd-closing" style={{ "--rd-bg": 'url("/images/redesign/bg-closing.webp")' }} aria-labelledby="closing-title">
      <div className="rd-closing__inner">
        <Reveal>
          <h2 id="closing-title" className="rd-h2">
            Ready to discover Kalqy?
          </h2>
          <p>Start with a conversation about your setting, your questions and what comes next.</p>
        </Reveal>
        <div className="rd-closing__actions">
          <Image className="rd-closing__boy fx-sway" data-sparkle="" src="/images/brand/kalqy-mascot.webp" alt="" width={173} height={259} loading="lazy" />
          <Image className="rd-closing__pig rd-tab-only" src="/images/hero/pig.png" alt="" width={508} height={814} loading="lazy" />
          <Link href="/product#download" className="rd-btn rd-btn--primary rd-btn--sm">
            Download Now <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/contact" className="rd-btn rd-btn--outline-violet">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
