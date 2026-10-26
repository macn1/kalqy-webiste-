"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

type Connection = { saveData?: boolean };

/**
 * Full-bleed looping background for the hero (desktop/tablet-landscape only, via CSS).
 * The poster is always painted; the video is only fetched when the visitor has not asked for less motion
 * or less data, and fades in once it can play. It is decorative: muted, aria-hidden, no controls.
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [allowed, setAllowed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 900px)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const saveData = (navigator as Navigator & { connection?: Connection }).connection?.saveData;
    const update = () => setAllowed(wide.matches && !calm.matches && !saveData);
    update();
    wide.addEventListener("change", update);
    calm.addEventListener("change", update);
    return () => {
      wide.removeEventListener("change", update);
      calm.removeEventListener("change", update);
    };
  }, []);

  return (
    <div className="hero-video" aria-hidden="true">
      {allowed && site.heroVideoYoutubeId && (
        <iframe
          className={ready ? "is-ready" : undefined}
          src={`https://www.youtube-nocookie.com/embed/${site.heroVideoYoutubeId}?autoplay=1&mute=1&loop=1&playlist=${site.heroVideoYoutubeId}&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1&iv_load_policy=3&fs=0&cc_load_policy=0`}
          title="Background video"
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={-1}
          loading="eager"
          onLoad={() => setReady(true)}
        />
      )}
      {allowed && !site.heroVideoYoutubeId && (
        <video
          ref={ref}
          className={ready ? "is-ready" : undefined}
          src="/video/kalqy-hero.webm"
          poster="/video/kalqy-hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          tabIndex={-1}
          onCanPlay={() => setReady(true)}
        />
      )}
    </div>
  );
}
