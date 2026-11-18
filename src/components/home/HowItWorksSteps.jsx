import Image from "@/components/common/Image";
import Link from "@/components/common/Link";

const needs = [
  ["need-computer.svg", "A computer"],
  ["need-kit.svg", "The Kalqy Learning Kit"],
  ["need-os.svg", "Windows or Mac"],
  ["need-room.svg", "Room to move"],
  ["need-app.svg", "The Parent App"],
];

const photoSteps = [
  { img: "step-2.jpg", pill: "Hands-free play", dot: "pill-dot-green.svg" },
  { img: "step-3.jpg", pill: "Every move counts", dot: "pill-dot-coral.svg" },
];

function Pill({ dot, children }) {
  return (
    <span className="rd-pill">
      <Image src={`/images/redesign/${dot}`} width={8} height={8} />
      {children}
    </span>
  );
}

function Step({ n, title, text, bg, accent, children }) {
  return (
    <li className="rd-step" style={{ "--step-bg": bg }}>
      {children}
      <div className="rd-step__copy">
        <p className="rd-step__label" aria-hidden="true">
          {n}
          <i style={accent ? { background: "var(--rd-primary)" } : undefined} />
        </p>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </li>
  );
}

const bars = [
  ["Motor skills", 82, "var(--rd-mint)"],
  ["Memory", 64, "var(--rd-primary)"],
  ["Phonics", 48, "#ffd166"],
];

export function HowItWorksSteps() {
  return (
    <section className="rd-how" id="how-it-works" aria-labelledby="how-title">
      <header className="rd-how__head">
        <div>
          <p className="rd-eyebrow">HOW IT WORKS</p>
          <h2 id="how-title">
            Simple to start.
            <span>Exciting to explore.</span>
          </h2>
        </div>
        <div className="rd-how__lead">
          <p>No controllers. No touchscreens. Just a child ready to move, and results you can see in the Parent App.</p>
          <Link href="/product" className="rd-btn rd-btn--ink">
            See how it works <span aria-hidden="true">→</span>
          </Link>
        </div>
      </header>

      <ol className="rd-steps">
        <Step
          n="01"
          title="Pick a game"
          text="Choose from the Kalqy library: letters, numbers, colours, science and more."
          bg="#ffeec5"
        >
          <div className="rd-step__visual rd-step__visual--tiles" aria-hidden="true">
            <Image className="rd-tile rd-tile--a" src="/images/redesign/game-1.png" width={109} height={109} />
            <Image className="rd-tile rd-tile--b" src="/images/redesign/game-2.png" width={109} height={109} />
            <Image className="rd-tile rd-tile--c" src="/images/redesign/game-3.png" width={109} height={109} />
            <Pill dot="pill-dot-blue.svg">7 published games</Pill>
          </div>
        </Step>

        {photoSteps.map((s, i) => (
          <Step
            key={s.img}
            n={`0${i + 2}`}
            title={i === 0 ? "Step back and play" : "Move to learn"}
            text={
              i === 0
                ? "Children stand a few steps back from the screen and play with their whole body. No controllers, no touch."
                : "Jumps, reaches and stretches become answers, so every lesson is remembered through the body."
            }
            bg={i === 0 ? "#cff3e4" : "#ffe4e1"}
          >
            <div className="rd-step__visual rd-step__visual--photo" aria-hidden="true">
              <Image src={`/images/redesign/${s.img}`} width={250} height={250} />
              <Pill dot={s.dot}>{s.pill}</Pill>
            </div>
          </Step>
        ))}

        <Step
          n="04"
          title="See results in the Parent App"
          text="After every session, the Kalqy Parent App shows your child's progress, skills and new milestones, so you always know how they're growing."
          bg="#f0edff"
          accent
        >
          <div className="rd-step__visual rd-step__visual--card" aria-hidden="true">
            <div className="rd-weekcard">
              <div className="rd-weekcard__head">
                <strong>Aarav's week</strong>
                <span>+12%</span>
              </div>
              {bars.map(([label, pct, color]) => (
                <div className="rd-weekcard__skill" key={label}>
                  <div>
                    <span>{label}</span>
                    <b>{pct}%</b>
                  </div>
                  <span className="rd-weekcard__track">
                    <i style={{ width: `${pct * 1.82}px`, background: color }} />
                  </span>
                </div>
              ))}
              <div className="rd-weekcard__milestone">
                <b>★</b> New milestone: counts to 20
              </div>
            </div>
            <Pill dot="pill-dot-coral.svg">Updated after every game</Pill>
          </div>
        </Step>
      </ol>

      <div className="rd-needs">
        <p>All you need</p>
        <ul>
          {needs.map(([icon, label]) => (
            <li key={label}>
              <span aria-hidden="true">
                <Image src={`/images/redesign/${icon}`} width={20} height={20} />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
