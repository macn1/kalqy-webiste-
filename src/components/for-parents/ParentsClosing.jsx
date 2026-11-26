import Link from "@/components/common/Link";
import { Slide, Tap, Words } from "@/components/motion/playful";
import { Reveal } from "@/components/motion/primitives";
import { HowBg, light } from "@/components/how-it-works/HowBg";
import { PARENTS_IMG } from "./parentsData";

export function ParentsClosing() {
  return (
    <section className="hw-sec hw-close fp-close" aria-labelledby="fp-close-title">
      <HowBg
        base={PARENTS_IMG}
        wave="close-wave.svg"
        lights={[light("../how/light-close-1.svg", 960, -260, 700, 0.2571), light("../how/light-close-2.svg", -200, -103, 560, 0.3036)]}
      />
      <div className="hw-split hw-split--close">
        <div className="hw-col hw-col--16">
          <Words as="h2" id="fp-close-title" className="hw-h2 hw-h2--48">
            Let’s make the next step clear.
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
