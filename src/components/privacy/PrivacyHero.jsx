import { m as M } from "framer-motion";
import { Pop, Words } from "@/components/motion/playful";
import { spring } from "@/components/motion/primitives";
import { PRIVACY_IMG, lastUpdated } from "./privacyData";

export function PrivacyHero({ title = "Privacy", date = lastUpdated }) {
  return (
    <section className="pv-hero" aria-labelledby="pv-title">
      <div className="pv-hero__copy">
        <Words as="h1" id="pv-title" className="pv-h1" delay={0.1}>
          {title}
        </Words>
        <M.p className="pv-hero__date" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0, transition: { ...spring, delay: 0.3 } }}>
          {date}
        </M.p>
      </div>
      <Pop as="span" className="pv-hero__disc" aria-hidden="true" scale0={0.3} from={{ y: 0 }} delay={0.2} />
      <Pop
        as="img"
        className="pv-hero__kid"
        src={`${PRIVACY_IMG}/turtle.webp`}
        alt=""
        width={455}
        height={700}
        from={{ y: 40 }}
        delay={0.35}
        float={7}
        dur={5}
      />
    </section>
  );
}
