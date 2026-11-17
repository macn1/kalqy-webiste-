import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
/**
 * Full-bleed looping background for the hero (desktop/tablet-landscape only, via CSS).
 * The poster is always painted; the video is only fetched when the visitor has not asked for less motion
 * or less data, and fades in once it can play. It is decorative: muted, aria-hidden, no controls.
 */
export function HeroVideo() {
  const ref = useRef(null);
  const [allowed, setAllowed] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 900px)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const saveData = navigator.connection?.saveData;
    const update = () => setAllowed(wide.matches && !calm.matches && !saveData);
    update();
    wide.addEventListener("change", update);
    calm.addEventListener("change", update);
    return () => {
      wide.removeEventListener("change", update);
      calm.removeEventListener("change", update);
    };
  }, []);
  // YouTube paints its own player chrome (play / previous / next) until playback starts, so the iframe
  // stays hidden until the player reports it is playing.
  useEffect(() => {
    if (!allowed || !site.heroVideoYoutubeId) return;
    const onMessage = (e) => {
      if (e.origin !== "https://www.youtube-nocookie.com" || typeof e.data !== "string") return;
      try {
        const data = JSON.parse(e.data);
        if (data.event === "onStateChange" && data.info === 1) setReady(true);
        else if (data.event === "infoDelivery" && data.info?.playerState === 1) setReady(true);
      } catch {
        /* not a player message */
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [allowed]);
  return (
    <div className="hero-video" aria-hidden="true">
      {allowed && site.heroVideoYoutubeId && (
        <iframe
          className={ready ? "is-ready" : undefined}
          src={`https://www.youtube-nocookie.com/embed/${site.heroVideoYoutubeId}?autoplay=1&mute=1&loop=1&playlist=${site.heroVideoYoutubeId}&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1&iv_load_policy=3&fs=0&cc_load_policy=0&enablejsapi=1`}
          title="Background video"
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={-1}
          loading="eager"
          onLoad={(e) => e.currentTarget.contentWindow?.postMessage(JSON.stringify({ event: "listening", id: 1 }), "*")}
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
