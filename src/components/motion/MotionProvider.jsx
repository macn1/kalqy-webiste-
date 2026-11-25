import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

/**
 * App-wide Framer Motion setup.
 *  - LazyMotion + domAnimation keeps the initial bundle small (components use the lightweight `m` elements).
 *  - reducedMotion="user" drops transform/layout animation for visitors who ask for less motion.
 *  - One shared spring so every entrance feels like part of the same system.
 */
export function MotionProvider({ children }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user" transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.9 }}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
