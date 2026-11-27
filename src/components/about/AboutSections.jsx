import Link from "@/components/common/Link";
import Image from "@/components/common/Image";
import { Slide, Sparkles, Tap, Words } from "@/components/motion/playful";
import { Reveal, spring } from "@/components/motion/primitives";
import { HowBg, light } from "@/components/how-it-works/HowBg";
import { m as M } from "framer-motion";
import { site, team } from "@/data/site";

// Paths are relative to the shared background's folder (/images/how), the same trick the For Parents page uses.
export const ABOUT_IMG = "/images/about";
const L = (file, x, y, size, inset) => light(`../about/${file}`, x, y, size, inset);

const copy = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const line = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: spring } };

const confetti = [
  { shape: "star", left: "62%", top: "14%", size: 34, color: "#ffc21c", delay: 0.1, rotate: 12 },
  { shape: "ring", left: "90%", top: "58%", size: 44, color: "#ff2d8a", delay: 0.25 },
  { shape: "pill", left: "47%", top: "70%", size: 70, color: "#4fd11c", delay: 0.4, rotate: -8 },
  { shape: "dot", left: "3%", top: "72%", size: 16, color: "#203eff", delay: 0.5 },
  { shape: "star", left: "30%", top: "8%", size: 22, color: "#ff2d8a", delay: 0.35, rotate: -10 },
];

export function AboutIntro() {
  return (
    <section className="hw-sec hw-intro ab-intro" aria-labelledby="ab-title">
      <HowBg
        base={ABOUT_IMG}
        wave="wave-intro.svg"
        clip={false}
        lights={[L("light-intro-1.svg", 792, -270, 860, 0.1977), L("light-intro-2.svg", 892.8, 90, 640, 0.2656), L("light-intro-3.svg", -220, 180, 560, 0.2857)]}
      />
      <M.div className="ab-intro__copy" variants={copy} initial="hidden" animate="show">
        <M.p className="hw-eyebrow" variants={line}>
          ABOUT KALQY
        </M.p>
        <M.h1 id="ab-title" className="hw-h1 ab-h1" variants={line}>
          <span>A place for movement.</span> <span>A spark for curiosity.</span>
        </M.h1>
        <M.p className="hw-lead hw-lead--22" variants={line}>
          Kalqy brings smart movement tracking and playful games together so young children learn by moving.
        </M.p>
      </M.div>
    </section>
  );
}

export function AboutApproach() {
  return (
    <section className="hw-sec" aria-labelledby="ab-approach-title">
      <HowBg
        base={ABOUT_IMG}
        wave="wave-approach.svg"
        lights={[L("light-approach-1.svg", 960, -260, 700, 0.2571), L("light-approach-2.svg", -200, 131.35, 560, 0.3036)]}
      />
      <div className="hw-split hw-split--center">
        <Slide from="left" className="hw-card-wrap">
          <div className="hw-media__poster ab-poster">
            <Image src={`${ABOUT_IMG}/poster.webp`} alt="A child playing a Kalqy balloon game by moving in front of the screen" width={1803} height={882} loading="lazy" />
          </div>
          <p className="hw-media__caption">Kalqy turns any classroom into a place to move and learn.</p>
        </Slide>
        <div className="hw-col">
          <p className="hw-eyebrow">THE APPROACH</p>
          <Words as="h2" id="ab-approach-title" className="hw-h2">
            Not passive tapping. Active participation.
          </Words>
          <Reveal as="p" className="hw-lead hw-lead--18" delay={0.15}>
            Kalqy follows children’s movement and connects it to on-screen play. Its games explore themes such as reading comprehension, music and
            photosynthesis.
          </Reveal>
          <Reveal className="hw-actions" delay={0.25}>
            <Tap>
              <Link href="/how-it-works" className="rd-btn rd-btn--primary hw-btn">
                See How It Works <span aria-hidden="true">↗</span>
              </Link>
            </Tap>
            <Tap>
              <Link href="/games" className="rd-btn rd-btn--outline hw-btn hw-btn--line">
                Explore Experiences
              </Link>
            </Tap>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const principles = [
  { n: "01", bg: "#f0edff", title: "Movement-led", text: "Smart movement tracking makes every move part of the game." },
  { n: "02", bg: "#fff4d7", title: "Experience-first", text: "A published library introduces different themes and playful ways to take part." },
  { n: "03", bg: "#e8f7ef", title: "Grounded in context", text: "School and preschool settings, supervised students and clear questions about setup and access." },
];

export function AboutPrinciples() {
  return (
    <section className="hw-sec ab-stack" aria-labelledby="ab-principles-title">
      <HowBg base={ABOUT_IMG} wave="wave-principles.svg" lights={[L("light-principles.svg", -200, -260, 620, 0.2742)]} />
      <Words as="h2" id="ab-principles-title" className="hw-eyebrow ab-eyebrow">
        WHAT WE CAN SAY CLEARLY
      </Words>
      <ul className="ab-cols">
        {principles.map((p, i) => (
          <Reveal as="li" className="ab-principle" key={p.n} delay={i * 0.12}>
            <span className="hw-step__n" style={{ background: p.bg }} aria-hidden="true">
              {p.n}
            </span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export function AboutTeam() {
  return (
    <section className="hw-sec ab-stack" aria-labelledby="ab-team-title">
      <HowBg base={ABOUT_IMG} wave="wave-team.svg" lights={[L("light-principles.svg", 900, -260, 620, 0.2742)]} />
      <div className="hw-head">
        <p className="hw-eyebrow">THE PEOPLE BEHIND KALQY</p>
        <Words as="h2" id="ab-team-title" className="hw-h2">
          Meet the team.
        </Words>
        <Reveal as="p" className="hw-lead" delay={0.15}>
          The founders building Kalqy from Kerala.
        </Reveal>
      </div>
      <ul className="ab-cols ab-cols--cards">
        {team.map((member, i) => (
          <Reveal as="li" className="hw-card ab-member" key={member.name} delay={i * 0.12}>
            <span className="ab-member__initial" aria-hidden="true">
              {member.name[0]}
            </span>
            <div className="ab-member__info">
              <h3>{member.name.split(" ")[0]}</h3>
              <p>{member.role}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export function AboutCompany() {
  return (
    <section className="hw-sec" aria-labelledby="ab-company-title">
      <HowBg base={ABOUT_IMG} wave="wave-company.svg" lights={[L("light-principles.svg", -200, -260, 620, 0.2742)]} />
      <div className="hw-split hw-split--center">
        <Words as="h2" id="ab-company-title" className="hw-h2 ab-h2--36">
          A conversation is a good place to begin.
        </Words>
        <Reveal className="hw-col ab-company" delay={0.15}>
          <p className="ab-company__name">{site.legalName}</p>
          <p className="hw-lead">{site.address}</p>
          <p className="hw-lead">
            {site.email} · {site.phone}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function AboutClosing() {
  return (
    <section className="hw-sec hw-close" aria-labelledby="ab-close-title">
      <HowBg
        base={ABOUT_IMG}
        wave="wave-closing.svg"
        lights={[L("light-approach-1.svg", 960, -260, 700, 0.2571), L("light-approach-2.svg", -200, -103, 560, 0.3036)]}
      />
      <Sparkles items={confetti} />
      <div className="hw-split hw-split--close">
        <div className="hw-col hw-col--16">
          <Words as="h2" id="ab-close-title" className="hw-h2 hw-h2--48">
            Ready to discover Kalqy?
          </Words>
          <Reveal as="p" className="hw-lead" delay={0.2}>
            Start with a conversation about your setting, your questions and what comes next.
          </Reveal>
        </div>
        <Slide from="right" className="hw-actions" delay={0.15}>
          <Tap>
            <Link href="/how-it-works#download" className="rd-btn rd-btn--primary hw-btn">
              Download Now <span aria-hidden="true">↗</span>
            </Link>
          </Tap>
          <Tap>
            <Link href="/contact" className="rd-btn rd-btn--outline hw-btn hw-btn--line">
              Get in Touch
            </Link>
          </Tap>
        </Slide>
      </div>
    </section>
  );
}
