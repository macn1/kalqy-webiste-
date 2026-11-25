import { useRef } from "react";
import { m as M, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import { IMG } from "./ExploreBg";

/**
 * One experience card. It flies in as it scrolls into view, tilts toward the pointer (mouse only), and slides to
 * its new place when the filter changes (`layout`). The grid wraps the list in AnimatePresence so cards leave smoothly.
 */
export function ExploreCard({ game, index = 0 }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-7, 7]), { stiffness: 200, damping: 18 });
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 18 });

  const onMove = (e) => {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <M.article
      ref={ref}
      layout
      className="ex-card"
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      initial={{ opacity: 0, y: 48, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 110, damping: 16, delay: (index % 3) * 0.09 } }}
      viewport={{ once: true, amount: 0.15 }}
      exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.2 } }}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 18 } }}
      transition={{ layout: { type: "spring", stiffness: 220, damping: 26 } }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <div className={`ex-card__art${game.photo ? " ex-card__art--photo" : ""}`} style={game.tint ? { backgroundImage: game.tint } : undefined}>
        <Image
          src={`${IMG}/${game.image}`}
          alt={game.photo ? `${game.name} gameplay illustration` : `${game.name} character`}
          width={game.photo ? 1672 : 1024}
          height={game.photo ? 941 : 1024}
          loading="lazy"
        />
      </div>
      <div className="ex-card__info">
        <p className="hw-eyebrow">{game.label}</p>
        <h3>{game.name}</h3>
        {game.text && <p className={`ex-card__text${game.small ? " ex-card__text--sm" : ""}`}>{game.text}</p>}
        <Link href={`/games/${game.slug}`} className="ex-card__btn">
          Explore experience<span className="ex-card__arrow" aria-hidden="true">→</span>
          <span className="visually-hidden">: {game.name}</span>
        </Link>
      </div>
    </M.article>
  );
}
