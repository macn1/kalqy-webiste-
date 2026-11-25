import { useEffect, useState } from "react";
import { AnimatePresence, m as M } from "framer-motion";
import Link from "@/components/common/Link";
import { Pop, Tap, Words } from "@/components/motion/playful";
import { spring } from "@/components/motion/primitives";
import { HowBg, IMG, light } from "./HowBg";

const copy = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const line = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: spring } };

export function HowIntro() {
  // The character says hello a moment after the page opens, and again whenever it is hovered or tapped.
  const [hi, setHi] = useState(false);
  useEffect(() => {
    const on = setTimeout(() => setHi(true), 1800);
    const off = setTimeout(() => setHi(false), 4800);
    return () => {
      clearTimeout(on);
      clearTimeout(off);
    };
  }, []);

  return (
    <section className="hw-sec hw-intro" aria-labelledby="hw-title">
      <HowBg
        wave="intro-wave.svg"
        clip={false}
        lights={[
          light("intro-light-1.svg", 792, -274.8, 860, 0.1977),
          light("intro-light-2.svg", 892.8, 91.6, 640, 0.2656),
          light("intro-light-3.svg", -220, 183.2, 560, 0.2857),
        ]}
      />
      <M.div className="hw-intro__copy" variants={copy} initial="hidden" animate="show">
        <M.p className="hw-eyebrow" variants={line}>
          HOW IT WORKS
        </M.p>
        <Words as="h1" id="hw-title" className="hw-h1" delay={0.15}>
          Getting started with Kalqy.
        </Words>
        <M.p className="hw-lead hw-lead--20" variants={line}>
          A computer, room to move and a new way to learn. Kalqy turns children’s movement into on-screen play.
        </M.p>
        <M.div className="hw-actions" variants={line}>
          <Tap>
            <Link href="/contact" className="rd-btn rd-btn--primary hw-btn">
              Book a Demo <span aria-hidden="true">↗</span>
            </Link>
          </Tap>
          <Tap>
            <Link href="/games" className="rd-btn rd-btn--outline hw-btn hw-btn--line">
              Explore Experiences
            </Link>
          </Tap>
        </M.div>
      </M.div>

      <Pop as="span" className="hw-intro__blob" aria-hidden="true" scale0={0.3} from={{ y: 0 }} idle={{ scale: [1, 1.05, 1] }} dur={6} delay={0.2} />
      <Pop
        as="img"
        className="hw-intro__kid"
        src={`${IMG}/intro-character.webp`}
        alt=""
        width={527}
        height={1094}
        from={{ y: 60, x: 40 }}
        delay={0.35}
        float={9}
        dur={4.6}
        wiggle
        onHoverStart={() => setHi(true)}
        onHoverEnd={() => setHi(false)}
        onTap={() => setHi((v) => !v)}
      />
      <AnimatePresence>
        {hi && (
          <M.span
            className="pw-bubble hw-intro__bubble"
            initial={{ opacity: 0, scale: 0.5, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 14 } }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.18 } }}
            style={{ transformOrigin: "100% 100%" }}
          >
            Ready to play? 👋
          </M.span>
        )}
      </AnimatePresence>
    </section>
  );
}
