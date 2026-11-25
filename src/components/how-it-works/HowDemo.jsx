import { useRef, useState } from "react";
import { m as M, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "@/components/common/Image";
import { Slide, Words } from "@/components/motion/playful";
import { Reveal } from "@/components/motion/primitives";
import { site } from "@/data/site";
import { HowBg, IMG, light } from "./HowBg";

/** Poster that drifts slightly as you scroll; pressing play loads the YouTube video in place (nothing loads before that). */
function DemoPoster() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const [playing, setPlaying] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const { youtubeId, title } = site.demoVideo;

  return (
    <M.div
      ref={ref}
      className="hw-media__poster"
      initial={{ opacity: 0, scale: 0.9, rotate: -1.5 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 90, damping: 16 } }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {playing ? (
        <iframe
          className="hw-media__frame"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <>
          <M.span className="hw-media__img" style={reduce ? undefined : { y, scale: 1.12 }}>
            <Image src={`${IMG}/demo-poster.webp`} alt="Kalqy in action: a child playing a balloon game by moving" width={1803} height={882} loading="lazy" />
          </M.span>
          <button type="button" className="hw-media__btn" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
            <M.span
              className="hw-media__ring"
              aria-hidden="true"
              animate={{ scale: [1, 1.9], opacity: [0.55, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
            <M.span
              className="hw-media__play"
              aria-hidden="true"
              whileHover={{ scale: 1.14 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 14 }}
            >
              ▶
            </M.span>
          </button>
        </>
      )}
    </M.div>
  );
}

export function HowDemo() {
  return (
    <section className="hw-sec hw-demo" aria-labelledby="hw-demo-title">
      <HowBg wave="demo-wave.svg" lights={[light("light-demo.svg", 900, -260, 620, 0.2742)]} />
      <div className="hw-split hw-split--center">
        <div className="hw-media">
          <DemoPoster />
          <Reveal as="p" className="hw-media__caption" delay={0.3}>
            Watch Kalqy in action.
          </Reveal>
        </div>
        <Slide from="right" className="hw-col">
          <Reveal as="p" className="hw-eyebrow">
            IN YOUR LEARNING SETTING
          </Reveal>
          <Words as="h2" id="hw-demo-title" className="hw-h2" delay={0.1}>
            Explore it with an adult present.
          </Words>
          <Reveal as="p" className="hw-lead hw-lead--18" delay={0.25}>
            Kalqy sessions are guided by teachers and authorised staff, with parents joining where the school approves. Every child
            plays with a trusted adult close by.
          </Reveal>
        </Slide>
      </div>
    </section>
  );
}
