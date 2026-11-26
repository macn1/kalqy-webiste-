import { Words } from "@/components/motion/playful";
import { Reveal } from "@/components/motion/primitives";
import { HowBg, light } from "@/components/how-it-works/HowBg";
import { PARENTS_IMG } from "./parentsData";

export function ParentsMovement() {
  return (
    <section className="hw-sec fp-movement" aria-labelledby="fp-move-title">
      <HowBg base={PARENTS_IMG} wave="movement-wave.svg" lights={[light("../how/light-steps.svg", 900, -260, 620, 0.2742)]} />
      <div className="hw-col fp-narrow">
        <Words as="h2" id="fp-move-title" className="hw-h2">
          Movement becomes part of play.
        </Words>
        <Reveal as="p" className="hw-lead hw-lead--20" delay={0.15}>
          Kalqy follows children’s movement, so they play by jumping, reaching and dancing instead of tapping. The library covers reading, music, science and more.
        </Reveal>
      </div>
    </section>
  );
}
