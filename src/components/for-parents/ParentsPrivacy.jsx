import Link from "@/components/common/Link";
import { Slide, Tap, Words } from "@/components/motion/playful";
import { Reveal } from "@/components/motion/primitives";
import { HowBg, light } from "@/components/how-it-works/HowBg";
import { PARENTS_IMG } from "./parentsData";

export function ParentsPrivacy() {
  return (
    <section className="hw-sec fp-privacy" aria-labelledby="fp-privacy-title">
      <HowBg
        base={PARENTS_IMG}
        wave="privacy-wave.svg"
        lights={[light("../how/light-equip-1.svg", 960, -260, 700, 0.2571), light("../how/light-equip-2.svg", -200, 6, 560, 0.3036)]}
      />
      <div className="hw-split hw-split--center">
        <Words as="h2" id="fp-privacy-title" className="hw-h2">
          Make an informed choice.
        </Words>
        <Slide from="right" className="hw-col">
          <p className="hw-lead hw-lead--18">Your child’s privacy comes first. Our Privacy page explains exactly what game data is stored and why.</p>
          <Reveal as="p" className="hw-lead" delay={0.1}>
            Use the full current Privacy policy and your school’s guidance to understand data handling.
          </Reveal>
          <div className="hw-actions">
            <Tap>
              <Link href="/privacy" className="rd-btn rd-btn--primary hw-btn">
                Privacy Information <span aria-hidden="true">↗</span>
              </Link>
            </Tap>
            <Tap>
              <Link href="/contact" className="rd-btn rd-btn--outline hw-btn hw-btn--line">
                Contact Kalqy
              </Link>
            </Tap>
          </div>
        </Slide>
      </div>
    </section>
  );
}
