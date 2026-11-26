import { m as M } from "framer-motion";
import Link from "@/components/common/Link";
import Image from "@/components/common/Image";
import { Slide, Tap, Words } from "@/components/motion/playful";
import { spring } from "@/components/motion/primitives";
import { HowBg, light } from "@/components/how-it-works/HowBg";
import { PARENTS_IMG } from "./parentsData";

const copy = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const line = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: spring } };

export function ParentsIntro() {
  return (
    <section className="hw-sec fp-intro" aria-labelledby="fp-title">
      <HowBg
        base={PARENTS_IMG}
        wave="intro-wave.svg"
        clip={false}
        lights={[
          light("../how/intro-light-1.svg", 792, -274.8, 860, 0.1977),
          light("../how/intro-light-2.svg", 892.8, 91.6, 640, 0.2656),
          light("../how/intro-light-3.svg", -220, 183.2, 560, 0.2857),
        ]}
      />
      <div className="hw-split hw-split--center">
        <M.div className="hw-col" variants={copy} initial="hidden" animate="show">
          <M.p className="hw-eyebrow" variants={line}>
            FOR PARENTS
          </M.p>
          <Words as="h1" id="fp-title" className="hw-h1" delay={0.15}>
            Curiosity in motion. Clarity for you.
          </Words>
          <M.p className="hw-lead hw-lead--20" variants={line}>
            See what Kalqy is, how children take part and how we keep play active, safe and fun.
          </M.p>
          <M.div className="hw-actions" variants={line}>
            <Tap>
              <Link href="/contact" className="rd-btn rd-btn--primary hw-btn">
                Talk to Kalqy <span aria-hidden="true">↗</span>
              </Link>
            </Tap>
            <Tap>
              <Link href="/how-it-works" className="rd-btn rd-btn--outline hw-btn hw-btn--line">
                See How It Works
              </Link>
            </Tap>
          </M.div>
        </M.div>
        <Slide from="right" className="fp-media" delay={0.2}>
          <div className="hw-media__poster">
            <Image src={`${PARENTS_IMG}/poster.webp`} alt="A child playing Kalqy, moving instead of tapping." width={1232} height={603} />
          </div>
          <p className="fp-media__caption">A child playing Kalqy, moving instead of tapping.</p>
        </Slide>
      </div>
    </section>
  );
}
