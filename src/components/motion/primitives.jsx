import { useEffect, useRef, useState } from "react";
import { animate, m, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";

/** Shared spring so every entrance reads as one system. */
export const spring = { type: "spring", stiffness: 120, damping: 20, mass: 0.9 };

const VIEW = { once: true, amount: 0.2, margin: "0px 0px -8% 0px" };

const hidden = (y = 24) => ({ opacity: 0, y });
const shown = { opacity: 1, y: 0, transition: spring };

/**
 * Framer Motion leaves an inline `transform: none` behind after an entrance. That would beat any CSS hover/active
 * transform the element has, so clear it once the entrance is done.
 */
function useSettled() {
  const ref = useRef(null);
  const onAnimationComplete = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return { ref, onAnimationComplete };
}

/** Fades and lifts an element into place once, the first time it scrolls into view. */
export function Reveal({ as = "div", y = 24, delay = 0, children, ...rest }) {
  const Tag = m[as];
  const reduce = useReducedMotion();
  const settled = useSettled();
  return (
    <Tag
      {...settled}
      initial={reduce ? false : hidden(y)}
      whileInView={{ ...shown, transition: { ...spring, delay } }}
      viewport={VIEW}
      {...rest}
    >
      {children}
    </Tag>
  );
}

const parent = (gap, delay) => ({ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } });
const child = (y) => ({ hidden: hidden(y), show: shown });

/** Reveals its <StaggerItem> children one after another when the group scrolls into view. */
export function Stagger({ as = "div", gap = 0.09, delay = 0, children, ...rest }) {
  const Tag = m[as];
  const reduce = useReducedMotion();
  return (
    <Tag
      variants={parent(gap, delay)}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={VIEW}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ as = "div", y = 20, children, ...rest }) {
  const Tag = m[as];
  const settled = useSettled();
  return (
    <Tag {...settled} variants={child(y)} {...rest}>
      {children}
    </Tag>
  );
}

/** A bar that grows from the left when it scrolls into view (progress bars, underline accents). */
export function GrowBar({ as = "i", style, delay = 0, ...rest }) {
  const Tag = m[as];
  const reduce = useReducedMotion();
  return (
    <Tag
      style={{ ...style, transformOrigin: "left center" }}
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1, transition: { duration: 0.9, ease: [0.22, 0.8, 0.2, 1], delay } }}
      viewport={{ once: true, amount: 0.9 }}
      {...rest}
    />
  );
}

/** Counts a number up from zero when it scrolls into view. Shows the final value without motion. */
export function CountUp({ to, from = 0, duration = 1.1 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!inView || reduce || !ref.current) return;
    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toLocaleString("en-US");
      },
    });
    return () => controls.stop();
  }, [inView, reduce, from, to, duration]);
  return <span ref={ref}>{to.toLocaleString("en-US")}</span>;
}

/** "24,500", "12 days", "78%": counts the leading number and keeps the rest of the text as it is. */
export function CountText({ value }) {
  const match = /^(\d[\d,]*)(.*)$/.exec(String(value));
  if (!match) return value;
  return (
    <>
      <CountUp to={parseInt(match[1].replace(/,/g, ""), 10)} />
      {match[2]}
    </>
  );
}

function useDesktopMotion() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1101px) and (hover: hover)");
    const update = () => setOn(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return on;
}

/** Slow vertical drift with scroll for decorative layers. Desktop only, never under reduced motion. */
export function Parallax({ as = "div", speed = 0.08, children, ...rest }) {
  const Tag = m[as];
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const desktop = useDesktopMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -120, speed * 120]);
  return (
    <Tag ref={ref} style={desktop && !reduce ? { y } : undefined} {...rest}>
      {children}
    </Tag>
  );
}

/**
 * Adds `is-live` to every matching element while it is on (or near) the screen, so decorative CSS loops
 * (see motion.css) only run when they can be seen. One observer for the whole page.
 */
export function useLiveSections(selector) {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("is-live", e.isIntersecting)),
      { rootMargin: "120px 0px" },
    );
    document.querySelectorAll(selector).forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}

/** Kept for single elements. */
export function useLive(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => el.classList.toggle("is-live", entry.isIntersecting), {
      rootMargin: "120px 0px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
}
