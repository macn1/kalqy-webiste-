"use client";

import { useState } from "react";
import { Icon } from "./Icon";

type Props = { youtubeId: string; title: string };

/**
 * Click-to-load YouTube embed. Nothing from YouTube loads until the visitor presses play (privacy + speed),
 * it never autoplays on page load, and a plain link is always available if the embed fails.
 */
export function VideoEmbed({ youtubeId, title }: Props) {
  const [playing, setPlaying] = useState(false);
  const [thumbFailed, setThumbFailed] = useState(false);
  const watchUrl = `https://www.youtube.com/watch?v=${youtubeId}`;

  return (
    <div>
      <div className="video-frame">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button type="button" className="video-poster" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
            {!thumbFailed && (
              // eslint-disable-next-line @next/next/no-img-element -- remote YouTube thumbnail, decorative
              <img
                className="video-poster__bg"
                src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
                alt=""
                loading="lazy"
                onError={() => setThumbFailed(true)}
              />
            )}
            <span className="video-poster__play">
              <Icon name="play" size={34} />
            </span>
            <span className="video-poster__label">{title}</span>
          </button>
        )}
      </div>
      <p className="figure-caption">
        Video from Kalqy&apos;s YouTube channel. Trouble playing it?{" "}
        <a href={watchUrl} target="_blank" rel="noopener noreferrer">
          Watch on YouTube<span className="visually-hidden"> (opens in a new tab)</span>
        </a>
        .
      </p>
    </div>
  );
}
