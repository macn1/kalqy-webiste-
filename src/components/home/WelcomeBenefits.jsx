import { useEffect, useRef, useState } from "react";
import { m as M } from "framer-motion";
import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import { Stagger, StaggerItem, spring } from "@/components/motion/primitives";

// Hero entrance: the copy lines rise in one after another, then the visual settles in.
const heroCopy = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }, exit: { opacity: 0, x: -36, transition: { duration: 0.35, ease: "easeIn" } } };
const heroLine = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: spring } };

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

const SLIDE_COUNT = 4;
const SLIDE_MS = 3000; // time each slide is on screen, including its exit
const EXIT_MS = 350;

/**
 * One animated hero object. It pops in (staggered by `i`), then idles with a gentle loop.
 * Rotation/scale live here (not in CSS) because Framer owns the element's transform.
 * Everything is positioned by the same CSS classes as before, so desktop / tablet / mobile layouts are unchanged.
 */
function Obj({ as = "div", i = 0, rotate = 0, scale = 1, float = 8, loop, dur = 5, from = { y: 28 }, style, ...rest }) {
  const [settled, setSettled] = useState(false);
  const Tag = M[as];
  const idle = loop ?? { y: [0, -float, 0] };
  return (
    <Tag
      {...rest}
      style={style}
      initial={{ opacity: 0, scale: scale * 0.6, rotate: rotate - 6, ...from }}
      animate={
        settled
          ? { opacity: 1, scale, rotate, x: 0, y: 0, ...idle, transition: { duration: dur + (i % 3) * 0.7, repeat: Infinity, ease: "easeInOut" } }
          : { opacity: 1, scale, rotate, x: 0, y: 0, transition: { type: "spring", stiffness: 150, damping: 15, delay: 0.15 + i * 0.09 } }
      }
      onAnimationComplete={() => setSettled(true)}
    />
  );
}
const appPills = [
  ["📊", "Results after every game"],
  ["🧩", "Skill-by-skill reports"],
  ["🩺", "Talk to a therapist"],
];

export function WelcomeBenefits() {
  const [slide, setSlide] = useState(0);
  const [phase, setPhase] = useState("in"); // "out" plays the exit animation before the next slide mounts
  const [paused, setPaused] = useState(false);
  const target = useRef(0);
  const goTo = (n) => {
    if (n === slide || phase === "out") return;
    target.current = n;
    setPhase("out");
  };
  useEffect(() => {
    if (phase !== "out") return;
    const t = setTimeout(() => {
      setSlide(target.current);
      setPhase("in");
    }, EXIT_MS);
    return () => clearTimeout(t);
  }, [phase]);
  useEffect(() => {
    if (phase !== "in" || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => goTo((slide + 1) % SLIDE_COUNT), SLIDE_MS - EXIT_MS);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, slide, paused]);
  const stage = phase === "in" ? "show" : "exit";

  const pager = (
    <M.div className="rd-hero__count" variants={heroLine}>
      <span className="rd-dots" role="tablist" aria-label="Choose slide">
        {Array.from({ length: SLIDE_COUNT }, (_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === slide}
            aria-label={`Slide ${i + 1}`}
            className={i === slide ? "is-on" : ""}
            onClick={() => goTo(i)}
          />
        ))}
      </span>
      <span aria-hidden="true">
        {String(slide + 1).padStart(2, "0")} / {String(SLIDE_COUNT).padStart(2, "0")}
      </span>
    </M.div>
  );

  return (
    <>
      <section
        className={`rd-hero${slide === 1 ? " rd-hero--app" : ""}${slide === 2 ? " rd-hero--deal" : ""}${slide === 3 ? " rd-hero--demo" : ""}`}
        aria-labelledby="hero-title"
        aria-roledescription="carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="rd-hero__inner">
          {slide === 3 ? (
            <>
          <M.div key="copy-4" className="rd-hero__copy" variants={heroCopy} initial="hidden" animate={stage}>
            <M.span className="rd-chip rd-chip--violet" variants={heroLine}>
              AI-POWERED LEARNING
            </M.span>
            <M.h1 id="hero-title" variants={heroLine}>
              Where movement
              <span className="rd-hero__accent">meets magic.</span>
            </M.h1>
            <M.p className="rd-hero__lead" variants={heroLine}>
              Children jump, reach and dance to play. Every move becomes an answer, and every game builds real skills.
            </M.p>
            <M.div className="rd-actions" variants={heroLine}>
              <Link href="/product#demo" className="rd-btn rd-btn--ink">
                <span aria-hidden="true">▶</span> Watch demo
              </Link>
              <Link href="/product#download" className="rd-btn rd-btn--outline rd-btn--app-line">
                Get the Kalqy Kit
              </Link>
            </M.div>
            {pager}
          </M.div>
            </>
          ) : slide === 2 ? (
            <>
          <M.div key="copy-3" className="rd-hero__copy" variants={heroCopy} initial="hidden" animate={stage}>
            <M.span className="rd-chip rd-chip--red" variants={heroLine}>
              PRICE DROP · 75% OFF
            </M.span>
            <M.h1 id="hero-title" variants={heroLine}>
              Worth <s className="rd-deal__old">₹20,000</s>.
              <span className="rd-deal__line">
                Yours for just <span className="rd-hero__accent rd-deal__new">₹4,999</span>.
              </span>
            </M.h1>
            <M.p className="rd-hero__lead" variants={heroLine}>
              Kinesthetic toys, movement games and the new Kalqy Parent App, all in one Learning Kit. Same kit, ₹15,000 less.
            </M.p>
            <M.ul className="rd-pills rd-pills--deal" variants={heroLine}>
              <li className="is-save">You save ₹15,000</li>
              <li className="is-limited">Limited-time price</li>
            </M.ul>
            <M.div className="rd-actions" variants={heroLine}>
              <Link href="/product#download" className="rd-btn rd-btn--violet rd-btn--app">
                Get the Kalqy Kit for ₹4,999
              </Link>
              <Link href="/product" className="rd-btn rd-btn--outline rd-btn--app-line">
                See what’s inside
              </Link>
            </M.div>
            {pager}
          </M.div>
            </>
          ) : slide === 0 ? (
            <>
          <M.div key="copy-1" className="rd-hero__copy" variants={heroCopy} initial="hidden" animate={stage}>
            <M.span className="rd-chip rd-chip--ink" variants={heroLine}>
              THE KALQY KIT<span className="rd-mob-only">&nbsp;· NOW LAUNCHING</span>
            </M.span>
            <M.h1 id="hero-title" variants={heroLine}>
              Play. Move.
              <span className="rd-hero__accent">Learn. Grow.</span>
            </M.h1>
            <M.p className="rd-hero__lead" variants={heroLine}>
              A complete child development experience that brings together physical brain development toys, movement-based
              digital games and intelligent parental insights.
            </M.p>
            <M.div className="rd-price-line" variants={heroLine}>
              <span className="rd-chip rd-chip--yellow">EARLY BIRD</span>
              <s className="rd-price-line__old">₹20,000</s>
              <span className="rd-price-line__new">₹4,999</span>
              <span className="rd-price-line__note">for the complete ecosystem</span>
            </M.div>
            <M.div className="rd-actions" variants={heroLine}>
              <Link href="/product#download" className="rd-btn rd-btn--primary fx-glow">
                Explore the KALQY Kit
              </Link>
              <Link href="/product" className="rd-btn rd-btn--outline">
                Discover How It Works
              </Link>
            </M.div>
            {pager}
          </M.div>

            </>
          ) : (
            <>
          <M.div key="copy-2" className="rd-hero__copy" variants={heroCopy} initial="hidden" animate={stage}>
            <M.span className="rd-chip rd-chip--violet" variants={heroLine}>
              NEW · KALQY PARENT APP
            </M.span>
            <M.h1 id="hero-title" variants={heroLine}>
              Your child’s progress,
              <span className="rd-hero__accent">now on your phone.</span>
            </M.h1>
            <M.p className="rd-hero__lead" variants={heroLine}>
              The new Parent App shows your child’s result after every game, tracks every skill, and lets you consult a child
              therapist whenever you need advice.
            </M.p>
            <M.ul className="rd-pills" variants={heroLine}>
              {appPills.map(([icon, label]) => (
                <li key={label}>
                  <span aria-hidden="true">{icon}</span> {label}
                </li>
              ))}
            </M.ul>
            <M.div className="rd-actions" variants={heroLine}>
              <Link href="/product#download" className="rd-btn rd-btn--violet rd-btn--app">
                Get the app with the Kalqy Kit
              </Link>
              <Link href="/product" className="rd-btn rd-btn--outline rd-btn--app-line">
                See what it does
              </Link>
            </M.div>
            {pager}
          </M.div>
            </>
          )}

          <M.div
            key={`visual-${slide}`}
            className={`rd-hero__visual${slide === 3 ? " rd-hero__visual--demo" : ""}`}
            aria-hidden="true"
            initial={{ opacity: 0, x: 48 }}
            animate={
              phase === "in"
                ? { opacity: 1, x: 0, transition: { ...spring, delay: 0.1 } }
                : { opacity: 0, x: -36, transition: { duration: EXIT_MS / 1000, ease: "easeIn" } }
            }
          >
            {slide === 3 ? (
              <div className="rd-visual rd-visual--demo">
                <Obj as="img" i={0} float={7} className="rd-demo__img" src="/images/hero/demo-visual.png" alt="" width={676} height={580} />
              </div>
            ) : slide === 2 ? (
              <div className="rd-visual rd-visual--deal">
                <Obj as="img" i={0} float={6} className="rd-deal__kit" src="/images/hero/deal-toy-kit.png" alt="" width={645} height={608} />
                <Obj as="span" i={1} rotate={-8} float={5} from={{ y: -30, x: -20 }} className="rd-deal__tag">
                  <s>₹20,000</s>
                  <b>₹4,999</b>
                </Obj>
                <Obj as="img" i={2} float={10} className="rd-deal__games" src="/images/hero/deal-games.png" alt="" width={639} height={602} />
                <Obj as="img" i={3} float={7} from={{ y: 40, x: 30 }} className="rd-deal__phone" src="/images/hero/deal-phone.png" alt="" width={520} height={940} />
                <Obj as="span" i={5} float={4} className="rd-deal__label">Parent App</Obj>
                <Obj as="span" i={4} float={5} className="rd-deal__plus">+</Obj>
                <Obj as="img" i={6} loop={{ rotate: [-4, 4, -4], scale: [1, 1.06, 1] }} dur={3.6} className="rd-deal__burst" src="/images/hero/deal-burst.png" alt="" width={186} height={190} />
              </div>
            ) : slide === 1 ? (
              <div className="rd-visual rd-visual--app">
                <Obj as="img" i={0} scale={1.43} loop={{ opacity: [1, 0.8, 1] }} dur={4} className="rd-visual__glow" src="/images/redesign/glow.svg" alt="" width={455} height={455} />
                <Obj as="img" i={1} float={9} className="rd-visual__app" src="/images/hero/Visual.png" alt="" width={1232} height={1080} />
              </div>
            ) : (
            <div className="rd-visual">
              <Obj as="img" i={0} scale={1.43} loop={{ opacity: [1, 0.8, 1] }} dur={4} className="rd-visual__glow" src="/images/redesign/glow.svg" alt="" width={455} height={455} />
              <Obj i={1} float={7} className="rd-visual__box">
                <span className="rd-visual__box-band" />
                <Image src="/images/redesign/kit-box.png" width={318} height={212} priority />
              </Obj>
              <Obj i={2} rotate={5} float={9} from={{ y: -30, x: -24 }} className="rd-visual__photo">
                <Image src="/images/redesign/child-playing.jpg" width={206} height={141} priority />
              </Obj>
              <Obj as="span" i={3} rotate={12} loop={{ y: [0, -10, 0], rotate: [12, 18, 12] }} className="rd-visual__cube">K</Obj>
              <Obj as="img" i={4} loop={{ y: [0, -9, 0], rotate: [0, 20, 0] }} dur={6} className="rd-visual__ring" src="/images/redesign/toy-ring.svg" alt="" width={76} height={76} />
              <Obj as="span" i={5} rotate={-3} float={5} from={{ y: 24, x: -30 }} className="rd-visual__board" />
              <Obj i={6} rotate={6} float={8} from={{ y: 40, x: 40 }} className="rd-visual__phone">
                <ParentAppPreview />
              </Obj>
              <Obj as="span" i={8} float={4} className="rd-visual__chip">Scroll to walk with me!</Obj>
              <Obj as="img" i={7} loop={{ rotate: [-2.5, 2.5, -2.5] }} dur={4.5} style={{ transformOrigin: "50% 100%" }} data-sparkle="" className="rd-visual__mascot" src="/images/redesign/hero-boy.webp" alt="" width={103} height={214} />
            </div>
            )}
          </M.div>
        </div>
      </section>

      <section className="rd-reasons" aria-label="Three simple reasons to explore">
        <Stagger as="ul" className="rd-reasons__grid">
          {reasons.map((r) => (
            <StaggerItem as="li" key={r.title}>
              <span className="rd-reasons__icon" style={{ background: r.tint }} aria-hidden="true" data-sparkle="">
                {r.icon}
              </span>
              <h2>{r.title}</h2>
              <p>{r.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <div className="rd-reasons__guide rd-tab-only" aria-hidden="true">
          <Image src="/images/hero/boy.png" alt="" width={527} height={1093} loading="lazy" />
          <span>Scroll to walk with me!</span>
        </div>
      </section>
    </>
  );
}
