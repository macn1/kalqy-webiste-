import { Fragment, useRef, useState } from "react";
import { m, useInView, useReducedMotion } from "framer-motion";

/**
 * Playful motion kit for the inner pages (How it works, Explore). Built on the same Framer Motion setup as the
 * rest of the site (LazyMotion + reducedMotion="user" in MotionProvider), so visitors who ask for less motion
 * get the final state without movement. Every loop here is gated by "is it on screen" so nothing animates unseen.
 */

const VIEW = { once: true, amount: 0.25, margin: "0px 0px -8% 0px" };
const SOFT = { type: "spring", stiffness: 130, damping: 16 };

/** Headline whose words rise out of a mask one after another. Pass the text as a plain string child. */
export function Words({ as = "h2", children, delay = 0, stagger = 0.07, ...rest }) {
  const Tag = m[as];
  const text = String(children);
  return (
    <Tag
      {...rest}
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={VIEW}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {text.split(" ").map((word, i) => (
        <Fragment key={i}>
          {i > 0 && " "}
          <span className="pw" aria-hidden="true">
            <m.span className="pw__in" variants={{ hidden: { y: "115%", rotate: 5 }, show: { y: 0, rotate: 0, transition: SOFT } }}>
              {word}
            </m.span>
          </span>
        </Fragment>
      ))}
    </Tag>
  );
}

/**
 * Pops an element in when it scrolls into view (spring with a little overshoot), then lets it idle.
 *  float:  px of gentle vertical bob      idle: any keyframes object (e.g. { rotate: [-3, 3, -3] }, { scale: [1, 1.06, 1] })
 *  wiggle: a cartoon shake on hover       from:  where it flies in from
 */
export function Pop({ as = "div", delay = 0, float = 0, idle, dur = 5, from = { y: 28 }, scale0 = 0.7, wiggle = false, style, children, ...rest }) {
  const ref = useRef(null);
  const inView = useInView(ref, VIEW);
  const [settled, setSettled] = useState(false);
  const Tag = m[as];
  const loop = idle ?? (float ? { y: [0, -float, 0] } : null);
  const hidden = { opacity: 0, scale: scale0, ...from };
  const shown = { opacity: 1, scale: 1, x: 0, y: 0 };
  let animate = hidden;
  if (inView) {
    animate =
      settled && loop
        ? { ...shown, ...loop, transition: { duration: dur, repeat: Infinity, ease: "easeInOut" } }
        : { ...shown, transition: { type: "spring", stiffness: 150, damping: 13, delay } };
  }
  return (
    <Tag
      {...rest}
      ref={ref}
      style={style}
      initial={hidden}
      animate={animate}
      onAnimationComplete={() => inView && setSettled(true)}
      whileHover={wiggle ? { rotate: [0, -7, 7, -4, 0], transition: { duration: 0.6 } } : rest.whileHover}
    >
      {children}
    </Tag>
  );
}

/** Slides an element in from the left or right when it scrolls into view. */
export function Slide({ as = "div", from = "left", delay = 0, distance = 64, children, ...rest }) {
  const Tag = m[as];
  return (
    <Tag
      initial={{ opacity: 0, x: from === "left" ? -distance : distance }}
      whileInView={{ opacity: 1, x: 0, transition: { ...SOFT, stiffness: 100, damping: 18, delay } }}
      viewport={VIEW}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Wraps a button/link so it bounces up on hover and squishes on press. */
export function Tap({ children, className = "", lift = -3 }) {
  return (
    <m.span
      className={`pw-tap ${className}`}
      whileHover={{ y: lift, scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 420, damping: 16 }}
    >
      {children}
    </m.span>
  );
}

/** A soft background light that drifts slowly, only while it is on screen. */
export function DriftLight({ src, style, i = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "200px" });
  return (
    <m.img
      ref={ref}
      src={src}
      alt=""
      style={style}
      animate={inView ? { x: [0, 28, -18, 0], y: [0, -22, 16, 0], scale: [1, 1.05, 0.97, 1] } : { x: 0, y: 0, scale: 1 }}
      transition={inView ? { duration: 22 + i * 6, repeat: Infinity, ease: "easeInOut" } : { duration: 0.4 }}
    />
  );
}

const SHAPES = ["star", "ring", "pill", "dot"];

/**
 * Little confetti shapes that pop in and float (star / ring / pill / dot, in the brand colours the hero uses).
 * items: [{ shape, left, top, size, color, delay, rotate }]  with left/top as CSS lengths or percentages.
 */
export function Sparkles({ items }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "100px" });
  const reduce = useReducedMotion();
  return (
    <div className="pw-sparkles" ref={ref} aria-hidden="true">
      {items.map((s, i) => (
        <m.span
          key={i}
          className={`pw-shape pw-shape--${SHAPES.includes(s.shape) ? s.shape : "dot"}`}
          style={{ left: s.left, top: s.top, width: s.size, height: s.shape === "pill" ? s.size / 2.6 : s.size, "--c": s.color }}
          initial={{ opacity: 0, scale: 0, rotate: -40 }}
          whileInView={{ opacity: 1, scale: 1, rotate: s.rotate ?? 0, transition: { type: "spring", stiffness: 160, damping: 10, delay: (s.delay ?? 0) + 0.2 } }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <m.i
            animate={inView && !reduce ? { y: [0, -12, 0], rotate: [0, s.shape === "star" ? 24 : 8, 0] } : { y: 0, rotate: 0 }}
            transition={{ duration: 4 + (i % 3) * 1.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          />
        </m.span>
      ))}
    </div>
  );
}
