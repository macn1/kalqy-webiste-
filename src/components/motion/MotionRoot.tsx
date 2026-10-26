"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * One tiny controller for all scroll motion, so pages stay server components and only need data attributes:
 *  - [data-reveal] / [data-stagger]  get `.is-in` when they scroll into view (CSS does the animating)
 *  - [data-parallax="0.12"]          drifts vertically with scroll (decorative layers only)
 * Everything is skipped under prefers-reduced-motion; content is never hidden without JS (see experience.css).
 */
export function MotionRoot() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      root.classList.remove("motion");
      return;
    }
    root.classList.add("motion");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
    );
    document.querySelectorAll("[data-reveal], [data-stagger]").forEach((el) => {
      if (!el.classList.contains("is-in")) io.observe(el);
    });

    // Parallax: only elements near the viewport are updated, once per frame.
    const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      for (const el of layers) {
        const r = el.parentElement?.getBoundingClientRect() ?? el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) continue;
        const speed = parseFloat(el.dataset.parallax ?? "0.1");
        el.style.setProperty("--py", `${((r.top + r.height / 2 - vh / 2) * speed * -1).toFixed(1)}px`);
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    if (layers.length) {
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    }

    const onMq = () => mq.matches && root.classList.remove("motion");
    mq.addEventListener("change", onMq);

    return () => {
      io.disconnect();
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mq.removeEventListener("change", onMq);
    };
  }, [pathname]);

  return null;
}
