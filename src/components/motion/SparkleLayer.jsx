import { useEffect } from "react";

const COLORS = ["#fbba05", "#ff017b", "#00bdb6", "#5146e5", "#77ddb3"];

/**
 * A small burst of stars where a character or icon marked with `data-sparkle` is clicked or tapped.
 * Event delegation + the Web Animations API: no per-element wrappers, no React re-renders, transform/opacity only.
 */
export function SparkleLayer() {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onClick = (e) => {
      if (mq.matches) return;
      const target = e.target instanceof Element ? e.target.closest("[data-sparkle]") : null;
      if (!target) return;
      const x = e.clientX || target.getBoundingClientRect().left + target.offsetWidth / 2;
      const y = e.clientY || target.getBoundingClientRect().top + target.offsetHeight / 2;
      const count = window.innerWidth < 721 ? 6 : 8;
      for (let i = 0; i < count; i++) {
        const star = document.createElement("span");
        star.textContent = "✦";
        star.setAttribute("aria-hidden", "true");
        Object.assign(star.style, {
          position: "fixed",
          left: `${x}px`,
          top: `${y}px`,
          zIndex: 9999,
          pointerEvents: "none",
          fontSize: `${12 + Math.random() * 10}px`,
          lineHeight: 1,
          color: COLORS[i % COLORS.length],
          willChange: "transform, opacity",
        });
        document.body.appendChild(star);
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.6;
        const dist = 38 + Math.random() * 34;
        star
          .animate(
            [
              { transform: "translate(-50%, -50%) scale(0.4)", opacity: 1 },
              {
                transform: `translate(calc(-50% + ${Math.cos(angle) * dist}px), calc(-50% + ${Math.sin(angle) * dist - 12}px)) scale(1) rotate(${(Math.random() - 0.5) * 120}deg)`,
                opacity: 0,
              },
            ],
            { duration: 650 + Math.random() * 200, easing: "cubic-bezier(0.2, 0.8, 0.3, 1)" },
          )
          .finished.then(() => star.remove())
          .catch(() => star.remove());
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
