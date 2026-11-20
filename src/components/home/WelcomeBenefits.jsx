import Image from "@/components/common/Image";
import Link from "@/components/common/Link";

const reasons = [
  { icon: "↗", tint: "#f0edff", title: "Move to Explore", text: "Make movement part of every lesson, with hands-free play." },
  { icon: "✦", tint: "#fff4d7", title: "Play with Purpose", text: "Explore playful experiences around published learning topics." },
  { icon: "+", tint: "#e8f7ef", title: "Discover More", text: "Meet a library of different games, themes and ways to take part." },
];

const games = [
  { name: "Math Quest", stars: "★★★", score: 92 },
  { name: "Word Jungle", stars: "★★☆", score: 78 },
  { name: "Balance Run", stars: "★★★", score: 88 },
];

/** Decorative preview of the Parent App results screen (not interactive, hidden from assistive tech). */
function ParentAppPreview() {
  return (
    <div className="rd-phone" aria-hidden="true">
      <div className="rd-phone__screen">
        <div className="rd-phone__top">
          <div>
            <p className="rd-phone__muted">Today’s result</p>
            <p className="rd-phone__name">Aarav, age 5</p>
          </div>
          <span className="rd-phone__avatar">A</span>
        </div>
        <div className="rd-phone__score">
          <p>Session score</p>
          <p className="rd-phone__score-row">
            <strong>86</strong> <span>/ 100</span>
          </p>
          <p>18 min played · 3 games</p>
        </div>
        <p className="rd-phone__label">Games played</p>
        {games.map((g) => (
          <div className="rd-phone__game" key={g.name}>
            <div>
              <p className="rd-phone__game-name">{g.name}</p>
              <p className="rd-phone__stars">{g.stars}</p>
            </div>
            <strong>{g.score}</strong>
          </div>
        ))}
        <div className="rd-phone__next">
          <span>🎯</span> Practise next: letter sounds
        </div>
      </div>
    </div>
  );
}

export function WelcomeBenefits() {
  return (
    <>
      <section className="rd-hero" aria-labelledby="hero-title">
        <div className="rd-hero__inner">
          <div className="rd-hero__copy">
            <span className="rd-chip rd-chip--ink">THE KALQY KIT</span>
            <h1 id="hero-title">
              Play. Move.
              <span className="rd-hero__accent">Learn. Grow.</span>
            </h1>
            <p className="rd-hero__lead">
              A complete child development experience that brings together physical brain development toys, movement-based
              digital games and intelligent parental insights.
            </p>
            <div className="rd-price-line">
              <span className="rd-chip rd-chip--yellow">EARLY BIRD</span>
              <s className="rd-price-line__old">₹20,000</s>
              <span className="rd-price-line__new">₹4,999</span>
              <span className="rd-price-line__note">for the complete ecosystem</span>
            </div>
            <div className="rd-actions">
              <Link href="/product#download" className="rd-btn rd-btn--primary">
                Explore the KALQY Kit
              </Link>
              <Link href="/product" className="rd-btn rd-btn--outline">
                Discover How It Works
              </Link>
            </div>
            <p className="rd-hero__count" aria-hidden="true">
              <span className="rd-dots">
                <i className="is-on" />
                <i />
                <i />
                <i />
              </span>
              01 / 04
            </p>
          </div>

          <div className="rd-hero__visual" aria-hidden="true">
            <div className="rd-visual">
              <Image className="rd-visual__glow" src="/images/redesign/glow.svg" width={455} height={455} />
              <div className="rd-visual__box">
                <span className="rd-visual__box-band" />
                <Image src="/images/redesign/kit-box.png" width={318} height={212} priority />
              </div>
              <div className="rd-visual__photo">
                <Image src="/images/redesign/child-playing.jpg" width={206} height={141} priority />
              </div>
              <span className="rd-visual__cube">K</span>
              <Image className="rd-visual__ring" src="/images/redesign/toy-ring.svg" width={76} height={76} />
              <span className="rd-visual__board" />
              <div className="rd-visual__phone">
                <ParentAppPreview />
              </div>
              <span className="rd-visual__chip">Scroll to walk with me!</span>
              <Image className="rd-visual__mascot" src="/images/redesign/hero-boy.webp" width={103} height={214} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="rd-reasons" aria-label="Three simple reasons to explore">
        <ul className="rd-reasons__grid">
          {reasons.map((r) => (
            <li key={r.title}>
              <span className="rd-reasons__icon" style={{ background: r.tint }} aria-hidden="true">
                {r.icon}
              </span>
              <h2>{r.title}</h2>
              <p>{r.text}</p>
            </li>
          ))}
        </ul>
        <div className="rd-reasons__guide rd-tab-only" aria-hidden="true">
          <Image src="/images/hero/boy.png" alt="" width={527} height={1093} loading="lazy" />
          <span>Scroll to walk with me!</span>
        </div>
      </section>
    </>
  );
}
