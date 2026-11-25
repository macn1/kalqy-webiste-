import Link from "@/components/common/Link";
import { Slide, Sparkles, Tap, Words } from "@/components/motion/playful";
import { Reveal } from "@/components/motion/primitives";
import { ExploreBg, light } from "./ExploreBg";

// brand colours the hero uses: sunshine yellow, pink, green, blue
const confetti = [
  { shape: "star", left: "62%", top: "14%", size: 34, color: "#ffc21c", delay: 0.1, rotate: 12 },
  { shape: "ring", left: "90%", top: "58%", size: 44, color: "#ff2d8a", delay: 0.25 },
  { shape: "pill", left: "47%", top: "70%", size: 70, color: "#4fd11c", delay: 0.4, rotate: -8 },
  { shape: "dot", left: "3%", top: "72%", size: 16, color: "#203eff", delay: 0.5 },
  { shape: "star", left: "30%", top: "8%", size: 22, color: "#ff2d8a", delay: 0.35, rotate: -10 },
];

export function ExploreClosing() {
  return (
    <section className="hw-sec hw-close" aria-labelledby="ex-close-title">
      <ExploreBg
        wave="close-wave.svg"
        lights={[light("light-close-1.svg", 960, -260, 700, 0.2571), light("light-close-2.svg", -200, -103, 560, 0.3036)]}
      />
      <Sparkles items={confetti} />
      <div className="hw-split hw-split--close">
        <div className="hw-col hw-col--16">
          <Words as="h2" id="ex-close-title" className="hw-h2 hw-h2--48">
            Curious about an experience?
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
