import { Icon } from "@/components/common/Icon";
import { LinkButton } from "@/components/common/LinkButton";
import { SectionHeading } from "@/components/layout/SectionHeading";

/** Parents and educators get separate cards and separate CTAs, per the brief. */
export function ParentsEducatorsSection() {
  return (
    <section className="section section--white section--sheet" aria-labelledby="audience-title">
      <div className="container">
        <SectionHeading
          id="audience-title"
          eyebrow="For grown-ups"
          title="Made for families and classrooms"
          intro="Whether you are at home or in a classroom, Kalqy is about getting children moving while they learn."
          center
        />
        <div className="grid grid--2" data-stagger>
          <article className="card" style={{ background: "var(--warm-cream)" }}>
            <div className="card__icon card__icon--coral">
              <Icon name="home" />
            </div>
            <h3>For parents</h3>
            <p>Turn screen time into active time. Download Kalqy, let your child choose a game and join in the movement.</p>
            <ul className="check-list">
              <li>Download for Windows or Mac</li>
              <li>Movement-based games instead of tap-and-swipe</li>
              <li>Kalqy describes progress insights for parents, such as strengths and areas to practise</li>
            </ul>
            <LinkButton href="/product#parents" variant="primary">
              See the parent guide
            </LinkButton>
          </article>
          <article className="card" style={{ background: "var(--warm-cream)" }}>
            <div className="card__icon card__icon--blue">
              <Icon name="school" />
            </div>
            <h3>For educators</h3>
            <p>Bring interactive, movement-first lessons to a classroom, preschool or early learning centre.</p>
            <ul className="check-list">
              <li>Works for groups: classrooms, assemblies and play corners</li>
              <li>Choose games by learning goal and adjust difficulty</li>
              <li>Review progress and export it to share with parents and admins</li>
            </ul>
            <LinkButton href="/schools" variant="blue">
              Explore for schools
            </LinkButton>
          </article>
        </div>
      </div>
    </section>
  );
}
