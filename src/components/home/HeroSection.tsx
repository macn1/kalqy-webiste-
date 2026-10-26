import Image from "next/image";
import { LinkButton } from "@/components/common/LinkButton";
import { HeroVideo } from "@/components/home/HeroVideo";
import { site } from "@/data/site";

export function HeroSection() {
  return (
    <section className="hero hero--video" aria-labelledby="hero-title">
      <HeroVideo />
      {/* Decorative layers: drift slowly on scroll, never carry content */}
      <div className="hero__bg" aria-hidden="true">
        <span className="blob blob--mint" data-parallax="0.12" />
        <span className="blob blob--yellow" data-parallax="-0.08" />
        <span className="dots" />
      </div>

      <div className="container">
        <div className="hero__grid">
          <div className="hero__copy">
            <span className="eyebrow">Movement-based learning</span>
            <h1 id="hero-title">
              Big moves. <em>Curious</em> minds.
            </h1>
            <p className="lead">
              Kalqy turns your webcam into a playground. Children jump, reach and point to play learning games, so screen time
              becomes active time.
            </p>
            <div className="btn-row">
              <LinkButton href="/games" variant="primary">
                Explore games
              </LinkButton>
              <LinkButton href="#demo" variant="secondary" icon="play">
                Watch the demo
              </LinkButton>
            </div>
            <ul className="hero__facts" aria-label="Quick facts">
              <li>Ages {site.ageRange}</li>
              <li>Webcam movement games</li>
              <li>Windows &amp; Mac</li>
            </ul>
          </div>
          <div className="hero__visual">
            <div className="hero__stage" aria-hidden="true" />
            <span className="chip chip--jump" aria-hidden="true">Jump!</span>
            <span className="chip chip--reach" aria-hidden="true">Reach!</span>
            <span className="chip chip--point" aria-hidden="true">Point!</span>
            <span className="spark spark--a" aria-hidden="true">✦</span>
            <span className="spark spark--b" aria-hidden="true">✦</span>
            <div className="float">
              <Image
                src="/images/brand/hero.webp"
                alt="A cheerful child points at a TV showing a forest of friendly animal characters, with science, maths, ABC and geography icons."
                width={1100}
                height={791}
                priority
                sizes="(min-width: 900px) 540px, 92vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
