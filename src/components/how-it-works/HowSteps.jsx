import { m as M } from "framer-motion";
import Image from "@/components/common/Image";
import { Words } from "@/components/motion/playful";
import { Reveal } from "@/components/motion/primitives";
import { HowBg, IMG, light } from "./HowBg";

const steps = [
  { n: "01", t: "Download Kalqy", d: "Download Kalqy for Windows from the Microsoft Store, or for Mac. Clear instructions walk you through setup.", img: null },
  { n: "02", t: "Step back and get ready", d: "Children stand a few steps back from the screen, ready to play. Kalqy follows their movement from there.", img: null },
  { n: "03", t: "Choose an experience", d: "Browse the Kalqy library and pick a game for today’s lesson, from reading adventures to music and science.", img: "step-moving.webp", w: 1916, h: 821 },
  { n: "04", t: "Move to interact", d: "Kalqy follows every jump, reach and wave, turning movement into answers on screen. Each game invites a different kind of move.", img: "step-move.webp", w: 1803, h: 882, line: true },
];

const grid = { hidden: {}, show: { transition: { staggerChildren: 0.16 } } };
const item = {
  hidden: { opacity: 0, y: 56, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 105, damping: 17 } },
  hover: { y: -6, transition: { type: "spring", stiffness: 300, damping: 18 } },
};
// the number badge spins in, then does a happy little shake when its card is hovered
const badge = {
  hidden: { scale: 0, rotate: -140 },
  show: { scale: 1, rotate: 0, transition: { type: "spring", stiffness: 220, damping: 12, delay: 0.12 } },
  hover: { scale: 1.14, rotate: [0, -10, 10, -6, 0], transition: { duration: 0.55 } },
};
const text = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 0.8, 0.2, 1], delay: 0.18 } },
};
// the picture is "drawn" top to bottom
const media = {
  hidden: { opacity: 0, clipPath: "inset(0 0 100% 0 round 24px)" },
  show: { opacity: 1, clipPath: "inset(0 0 0% 0 round 24px)", transition: { duration: 0.8, ease: [0.22, 0.8, 0.2, 1], delay: 0.25 } },
};

export function HowSteps() {
  return (
    <section className="hw-sec hw-steps" aria-labelledby="hw-steps-title">
      <HowBg wave="steps-wave.svg" lights={[light("light-steps.svg", 900, -260, 620, 0.2742)]} />
      <div className="hw-head">
        <Reveal as="p" className="hw-eyebrow">
          FROM SETUP TO MOVEMENT
        </Reveal>
        <Words as="h2" id="hw-steps-title" className="hw-h2">
          A simple idea, explained clearly.
        </Words>
        <Reveal as="p" className="hw-lead" delay={0.15}>
          Four easy steps from download to the first jump.
        </Reveal>
      </div>
      <M.ol className="hw-steps__grid" variants={grid} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }}>
        {steps.map((s) => (
          <M.li key={s.n} className="hw-step" variants={item} whileHover="hover">
            <div className="hw-step__text">
              <M.span className="hw-step__n" variants={badge}>
                {s.n}
              </M.span>
              <M.h3 variants={text}>{s.t}</M.h3>
              <M.p variants={text}>{s.d}</M.p>
            </div>
            <M.div className={`hw-step__media${s.line ? " hw-step__media--line" : ""}${s.img ? "" : " hw-step__media--empty"}`} variants={media}>
              {s.img && <Image src={`${IMG}/${s.img}`} alt="" width={s.w} height={s.h} loading="lazy" />}
            </M.div>
          </M.li>
        ))}
      </M.ol>
    </section>
  );
}
