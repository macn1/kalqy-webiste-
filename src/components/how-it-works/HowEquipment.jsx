import { m as M } from "framer-motion";
import { Slide, Words } from "@/components/motion/playful";
import { Reveal } from "@/components/motion/primitives";
import { HowBg, light } from "./HowBg";

const list = { hidden: {}, show: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } } };
const row = {
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, damping: 16 } },
};

export function HowEquipment() {
  return (
    <section className="hw-sec hw-equip" aria-labelledby="hw-equip-title">
      <HowBg
        wave="equip-wave.svg"
        lights={[light("light-equip-1.svg", 960, -260, 700, 0.2571), light("light-equip-2.svg", -200, 26, 560, 0.3036)]}
      />
      <div className="hw-split hw-split--center">
        <div className="hw-col">
          <Reveal as="p" className="hw-eyebrow">
            BEFORE YOU BEGIN
          </Reveal>
          <Words as="h2" id="hw-equip-title" className="hw-h2">
            Make room for the right setup.
          </Words>
          <Reveal as="p" className="hw-lead hw-lead--18" delay={0.15}>
            A computer and a little space are all you need. Our instructions show you how to plan the room.
          </Reveal>
        </div>
        <Slide from="right" className="hw-card-wrap" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
          <M.div className="hw-card" variants={list} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
            <M.div variants={row}>
              <h3>
                <M.span className="hw-card__icon" aria-hidden="true" whileHover={{ rotate: [0, -14, 14, 0], scale: 1.2 }}>
                  🏠
                </M.span>
                Space to move
              </h3>
              <p>A clear space in front of the screen is all children need.</p>
            </M.div>
            <M.div variants={row}>
              <h3>
                <M.span className="hw-card__icon" aria-hidden="true" whileHover={{ rotate: [0, -14, 14, 0], scale: 1.2 }}>
                  💻
                </M.span>
                Windows + Mac
              </h3>
              <p>Available for Windows (Microsoft Store) and Mac.</p>
            </M.div>
          </M.div>
        </Slide>
      </div>
    </section>
  );
}
