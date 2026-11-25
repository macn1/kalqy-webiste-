import { useId, useState } from "react";
import { m as M } from "framer-motion";
import { Words } from "@/components/motion/playful";
import { HowBg, light } from "./HowBg";

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
    q: "How much space do we need?",
    a: "All it takes is a computer and room to move: children stand a few steps back from the screen. Our team will help you get set up.",
  },
  {
    q: "How do I install Kalqy on a Mac?",
    a: "Download the Mac build and move KalqyGames to your Applications folder. If macOS blocks the first launch, open System Settings → Privacy & Security and click Open Anyway, then allow camera access when Kalqy asks.",
  },
];

const list = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const row = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 17 } },
};

export function HowFaq() {
  const [open, setOpen] = useState(0);
  const base = useId();
  return (
    <section className="hw-sec hw-faq" aria-labelledby="hw-faq-title">
      <HowBg wave="faq-wave.svg" lights={[light("light-faq.svg", -200, -260, 620, 0.2742)]} />
      <Words as="h2" id="hw-faq-title" className="hw-h2">
        A few things to know.
      </Words>
      <M.div className="hw-faq__list" variants={list} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <M.div className={`hw-faq__item${isOpen ? " is-open" : ""}`} key={f.q} variants={row}>
              {/* the top rule draws itself in from the left */}
              <M.span
                className="hw-faq__rule"
                aria-hidden="true"
                variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.8, ease: [0.22, 0.8, 0.2, 1] } } }}
              />
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${base}-${i}`}
                  id={`${base}-b${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <M.span whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                    {f.q}
                  </M.span>
                  <M.i
                    className={isOpen ? "is-open" : undefined}
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.08 : 1 }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 320, damping: 16 }}
                  >
                    {isOpen ? "−" : "+"}
                  </M.i>
                </button>
              </h3>
              <M.div
                id={`${base}-${i}`}
                role="region"
                aria-labelledby={`${base}-b${i}`}
                aria-hidden={!isOpen}
                initial={false}
                animate={
                  isOpen
                    ? { height: "auto", opacity: 1, visibility: "visible" }
                    : { height: 0, opacity: 0, transitionEnd: { visibility: "hidden" } }
                }
                transition={{ duration: 0.34, ease: [0.22, 0.8, 0.2, 1] }}
                style={{ overflow: "hidden" }}
              >
                <M.p animate={{ y: isOpen ? 0 : -10 }} transition={{ duration: 0.34, ease: [0.22, 0.8, 0.2, 1] }}>
                  {f.a}
                </M.p>
              </M.div>
            </M.div>
          );
        })}
      </M.div>
    </section>
  );
}
