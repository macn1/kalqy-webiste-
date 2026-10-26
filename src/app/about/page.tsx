import { LinkButton } from "@/components/common/LinkButton";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { standardsReferenced, team } from "@/data/site";
import { pageMeta } from "@/utils/metadata";

export const metadata = pageMeta(
  "About Kalqy",
  "Kalqy is a movement-based learning platform for young children, built so learning happens through play, imagination and the whole body.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <SectionHeading
            as="h1"
            eyebrow="About Kalqy"
            title="Learning that moves"
            intro="Kalqy is an AI-powered interactive learning platform for young children. Instead of tapping and swiping, children learn through movement, imagination and real-world interaction."
          />
        </div>
      </section>

      <section className="section section--white section--sheet" aria-labelledby="approach-title">
        <div className="container split">
          <div className="stack" data-reveal>
            <h2 id="approach-title">The idea</h2>
            <p>
              Using computer vision and body tracking, children become part of the story. They jump, reach, balance, point and clap
              to solve challenges with their whole body.
            </p>
            <p>Kalqy aims to turn screen time into active learning time, with learning woven naturally into gameplay.</p>
          </div>
          <div className="card" data-reveal="right">
            <h3>Design principles</h3>
            <ul className="check-list" style={{ marginBottom: 0 }}>
              <li>Movement first, instead of tap and swipe</li>
              <li>A webcam is the only hardware needed</li>
              <li>Friendly characters that celebrate every achievement</li>
              <li>Games for groups as well as individual play</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="team-title">
        <div className="container">
          <SectionHeading id="team-title" eyebrow="The team" title="The people behind Kalqy" intro="As listed on Kalqy's website." />
          <div className="grid grid--3" data-stagger>
            {team.map((m) => (
              <article className="card team-card" key={m.name}>
                <h3>{m.name}</h3>
                <p className="role">{m.role}</p>
                <p>{m.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mint section--sheet" aria-labelledby="refs-title">
        <div className="container split">
          <div className="stack" data-reveal>
            <h2 id="refs-title">Research &amp; standards Kalqy refers to</h2>
            <p>
              Kalqy&apos;s website points to the following frameworks. Referencing them does not mean they have certified or endorsed
              the product.
            </p>
          </div>
          <ul className="check-list">
            {standardsReferenced.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container center">
          <h2>Want to see it for yourself?</h2>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <LinkButton href="/games" variant="primary">
              Explore games
            </LinkButton>
            <LinkButton href="/contact" variant="secondary">
              Contact us
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
