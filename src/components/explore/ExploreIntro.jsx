import { useEffect, useState } from "react";
import { AnimatePresence, m as M } from "framer-motion";
import { Pop, Words } from "@/components/motion/playful";
import { spring } from "@/components/motion/primitives";
import { ExploreBg, IMG, light } from "./ExploreBg";

const copy = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const line = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: spring } };

export function ExploreIntro() {
  // The fish says hello a moment after the page opens, and again whenever it is hovered or tapped.
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
    <section className="hw-sec ex-intro" aria-labelledby="ex-title">
      <ExploreBg
        wave="intro-wave.svg"
        clip={false}
        lights={[
          light("intro-light-1.svg", 792, -217.2, 860, 0.1977),
          light("intro-light-2.svg", 892.8, 72.4, 640, 0.2656),
          light("intro-light-3.svg", -220, 144.8, 560, 0.2857),
        ]}
      />
      <M.div className="ex-intro__copy" variants={copy} initial="hidden" animate="show">
        <M.p className="hw-eyebrow" variants={line}>
          EXPLORE EXPERIENCES
        </M.p>
        <Words as="h1" id="ex-title" className="hw-h1" delay={0.15}>
          Find your next discovery.
        </Words>
        <M.p className="hw-lead hw-lead--20" variants={line}>
          Seven playful experiences across reading, science, music and more. Start with a name, a topic or a little curiosity.
        </M.p>
      </M.div>

      <Pop as="span" className="ex-intro__blob" aria-hidden="true" scale0={0.3} from={{ y: 0 }} idle={{ scale: [1, 1.05, 1] }} dur={6} delay={0.2} />
      <Pop
        as="img"
        className="ex-intro__kid"
        src={`${IMG}/intro-character.webp`}
        alt=""
        width={556}
        height={753}
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
            className="pw-bubble ex-intro__bubble"
            initial={{ opacity: 0, scale: 0.5, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 14 } }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.18 } }}
            style={{ transformOrigin: "100% 100%" }}
          >
            Pick a game! 🎮
          </M.span>
        )}
      </AnimatePresence>
    </section>
  );
}
