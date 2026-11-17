import Image from "@/components/common/Image";
import Link from "@/components/common/Link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/data/hero";
const INTERVAL = 6000;
export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = heroSlides.length;
  useEffect(() => {
    if (count < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL);
    return () => clearInterval(t);
  }, [count, paused]);
  const pad = (n) => String(n).padStart(2, "0");
  return (
    <section
      className="kh"
      aria-roledescription="carousel"
      aria-label="Featured"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="kh__track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {heroSlides.map((s, i) => (
          <div
            key={s.id}
            className="kh__slide"
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={i !== index}
          >
            <div className="container kh__grid">
              <div className="kh__copy">
                <span className="kh__badge">{s.badge}</span>
                <h1 className="kh__title">
                  <span>{s.titleDark}</span>
                  <span className="kh__title-blue">{s.titleBlue}</span>
                </h1>
                <p className="kh__text">{s.text}</p>
                <div className="kh__price">
                  <span className="kh__early">Early Bird</span>
                  <s>{s.oldPrice}</s>
                  <strong>{s.price}</strong>
                </div>
                <p className="kh__note">{s.priceNote}</p>
                <div className="kh__btns">
                  <Link href={s.primaryCta.href} className="kh__btn kh__btn--solid" tabIndex={i === index ? 0 : -1}>
                    {s.primaryCta.label}
                  </Link>
                  <Link href={s.secondaryCta.href} className="kh__btn kh__btn--line" tabIndex={i === index ? 0 : -1}>
                    {s.secondaryCta.label}
                  </Link>
                </div>
              </div>

              <div className="kh__visual" aria-hidden="true">
                <span className="kh__yellow-tab" />
                <div className="kh__photo">
                  <Image
                    src={s.images.topLeft}
                    alt=""
                    width={1672}
                    height={941}
                    sizes="(min-width: 1040px) 260px, 40vw"
                    priority={i === 0}
                  />
                </div>

                <div className="kh__tablet">
                  <div className="kh__tablet-screen">
                    <span className="kh__tablet-brand">KALQY</span>
                    <span className="kh__tablet-sub">PLAY KIT</span>
                  </div>
                </div>

                <div className="kh__phone">
                  <div className="kh__phone-top">
                    <div>
                      <small>Today&apos;s Mood</small>
                      <b>Joyful, age 4</b>
                    </div>
                    <i className="kh__phone-dot" />
                  </div>
                  <div className="kh__phone-score">
                    <small>Movement Score</small>
                    <b>
                      86 <span>/100</span>
                    </b>
                    <small>Above average</small>
                  </div>
                  <div className="kh__phone-rows">
                    <small>Games played</small>
                    {[
                      ["Giant Quest", 72],
                      ["Music Jungle", 52],
                      ["Balance Bay", 88],
                    ].map(([n, v]) => (
                      <p key={n}>
                        <span>{n}</span>
                        <em>{v}</em>
                      </p>
                    ))}
                  </div>
                  <div className="kh__phone-toast">Pushing into balance</div>
                </div>

                <span className="kh__scroll">Scroll to walk with me!</span>
                <Image
                  className="kh__boy"
                  src={s.images.boy}
                  alt=""
                  width={527}
                  height={1094}
                  sizes="(min-width: 1040px) 130px, 22vw"
                />

                <span className="kh__k">K</span>
                <span className="kh__ring" />
                <span className="kh__pill" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container kh__pager">
        <div className="kh__dots" role="tablist" aria-label="Choose slide">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1}`}
              className={`kh__dot${i === index ? " is-active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <span className="kh__count">
          {pad(index + 1)} / {pad(count)}
        </span>
      </div>
    </section>
  );
}
