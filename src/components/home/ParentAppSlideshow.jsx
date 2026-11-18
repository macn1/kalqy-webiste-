import Image from "@/components/common/Image";
import Link from "@/components/common/Link";

const tabs = ["Child progress", "Results", "Therapist help"];

const features = [
  ["📈", "Learning progress", "Watch skills build week by week."],
  ["🤸", "Motor skills", "Balance, coordination and reaction speed."],
  ["🧠", "Cognitive development", "Memory, attention and problem solving."],
  ["⏱️", "Session activity", "When and how long your child played."],
  ["⭐", "Skill mastery", "See which skills are fully mastered."],
  ["💪", "Strengths", "Celebrate what your child does best."],
  ["🎯", "Areas to practise", "Gentle pointers for what to try next."],
  ["🏆", "Milestones", "Every achievement, saved and shared."],
];

const stats = [
  { label: "Daily streak", value: "12 days", bg: "#ffd6d3" },
  { label: "Top score", value: "24,500", bg: "#fff1d1" },
  { label: "Progress", value: "78%", bg: "#d6f5e8" },
];

const skills = [
  { label: "Motor skills", pct: 82, color: "var(--rd-tiffany)" },
  { label: "Memory & attention", pct: 68, color: "var(--adventure-blue)" },
  { label: "Phonics", pct: 55, color: "var(--sunshine-yellow)" },
  { label: "Balance", pct: 60, color: "#ff017b" },
];

const recent = [
  { name: "Math Quest", sub: "Mathematics", color: "#ffe3a3" },
  { name: "Science Lab", sub: "Science", color: "#adebd1" },
  { name: "Word Jungle", sub: "Language", color: "#ffaea6" },
];

export function ParentAppSlideshow() {
  return (
    <section className="rd-app" id="parents" aria-labelledby="app-title">
      <Image className="rd-app__deco" src="/images/redesign/app-deco.svg" width={620} height={620} aria-hidden="true" />
      <div className="rd-app__copy">
        <span className="rd-chip rd-chip--violet">KALQY PARENT APP</span>
        <ol className="rd-app__tabs" aria-label="Parent App views">
          {tabs.map((t, i) => (
            <li key={t} className={i === 0 ? "is-active" : undefined} aria-current={i === 0 ? "true" : undefined}>
              <b>{String(i + 1).padStart(2, "0")}</b> {t}
            </li>
          ))}
        </ol>
        <h2 id="app-title">
          See how your child grows,
          <span>one move at a time.</span>
        </h2>
        <p className="rd-app__lead">
          Every game your child plays turns into simple insights on your phone, so you always know what they’re learning,
          where they shine and what to practise next.
        </p>
        <ul className="rd-app__features">
          {features.map(([icon, title, text]) => (
            <li key={title}>
              <span aria-hidden="true">{icon}</span>
              <div>
                <strong>{title}</strong>
                <small>{text}</small>
              </div>
            </li>
          ))}
        </ul>
        <div className="rd-app__actions">
          <Link href="/product#download" className="rd-btn rd-btn--violet rd-btn--lg">
            Get the app with the Learning Kit
          </Link>
          <p>Included free in the ₹4,999 Learning Kit</p>
        </div>
      </div>

      <div className="rd-app__stage" aria-hidden="true">
        <div className="rd-dash">
          <div className="rd-dash__screen">
            <div className="rd-dash__top">
              <div>
                <p className="rd-dash__hello">Good evening</p>
                <p className="rd-dash__title">Aarav’s progress</p>
              </div>
              <Image src="/images/redesign/app-avatar.svg" width={34} height={34} />
            </div>
            <div className="rd-dash__stats">
              {stats.map((s) => (
                <div key={s.label} style={{ background: s.bg }}>
                  <p>{s.label}</p>
                  <strong>{s.value}</strong>
                </div>
              ))}
            </div>
            <div className="rd-dash__goal">
              <p className="rd-dash__goal-label">WEEKLY GOAL</p>
              <p className="rd-dash__goal-title">Master fractions</p>
              <span className="rd-dash__goal-track">
                <i style={{ width: 180 }} />
              </span>
              <p className="rd-dash__goal-note">15 / 20 XP · 75% complete</p>
            </div>
            <p className="rd-dash__h">Skills growing</p>
            {skills.map((s) => (
              <div className="rd-dash__skill" key={s.label}>
                <div>
                  <span>{s.label}</span>
                  <b>{s.pct}%</b>
                </div>
                <span className="rd-dash__track">
                  <i style={{ width: `${(s.pct / 100) * 252}px`, background: s.color }} />
                </span>
              </div>
            ))}
            <p className="rd-dash__h">Recently played</p>
            {recent.map((r) => (
              <div className="rd-dash__game" key={r.name}>
                <span style={{ background: r.color }} />
                <div>
                  <strong>{r.name}</strong>
                  <small>{r.sub}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rd-float rd-float--a">
          <Image src="/images/redesign/app-dot-yellow.svg" width={10} height={10} />
          <div>
            <strong>Milestone unlocked ⭐</strong>
            <small>Counted to 20 by jumping</small>
          </div>
        </div>
        <span className="rd-app__chip">See your child’s progress in the Parent App!</span>
        <Image className="rd-app__boy" src="/images/brand/kalqy-mascot.webp" width={173} height={259} />
      </div>
    </section>
  );
}
