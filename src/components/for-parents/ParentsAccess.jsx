import { m as M } from "framer-motion";
import { Slide, Words } from "@/components/motion/playful";
import { Reveal } from "@/components/motion/primitives";
import { HowBg, light } from "@/components/how-it-works/HowBg";
import { PARENTS_IMG, setupSteps } from "./parentsData";

const list = { hidden: {}, show: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } } };
const row = {
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, damping: 16 } },
};

export function ParentsAccess() {
  return (
    <section id="parents" className="hw-sec fp-access" aria-labelledby="fp-access-title">
      <HowBg base={PARENTS_IMG} wave="access-wave.svg" lights={[light("../how/light-faq.svg", -200, -260, 620, 0.2742)]} />
      <div className="hw-split">
        <div className="hw-col">
          <Words as="h2" id="fp-access-title" className="hw-h2 hw-h2--36">
            Understand how access works.
          </Words>
          <Reveal as="p" className="hw-lead hw-lead--18" delay={0.15}>
            Kalqy is used in schools and preschools, with authorised staff guiding every session. Families can join in where their school offers access.
          </Reveal>
        </div>
        <Slide from="right">
          <M.ol className="fp-card" variants={list} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            {setupSteps.map((s) => (
              <M.li key={s.n} variants={row}>
                <span className="hw-step__n" aria-hidden="true">
                  {s.n}
                </span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </M.li>
            ))}
          </M.ol>
        </Slide>
      </div>
    </section>
  );
}
