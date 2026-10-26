import Image from "next/image";
import { LinkButton } from "@/components/common/LinkButton";

export function ClassroomSection() {
  return (
    <section className="section" aria-labelledby="classroom-title">
      <div className="container split split--reverse">
        <div className="stack" data-reveal>
          <span className="eyebrow">In the classroom</span>
          <h2 id="classroom-title">A whole class, on its feet</h2>
          <p className="lead">
            Connect a webcam to a classroom display and children take turns moving to play, while everyone watches and joins in.
          </p>
          <ul className="check-list">
            <li>Teacher picks a game to match the lesson goal</li>
            <li>Children play in front of the webcam</li>
            <li>Progress can be reviewed afterwards from any web browser</li>
          </ul>
          <LinkButton href="/schools" variant="blue">
            Request a school demo
          </LinkButton>
        </div>
        <figure style={{ margin: 0 }} data-reveal="right">
          <div className="media-frame plate-tilt">
            <Image
              src="/images/brand/classroom.webp"
              alt="Illustration of two children raising their hands toward a classroom display showing Kalqy, with a webcam mounted on top and a teacher watching."
              width={1200}
              height={896}
              sizes="(min-width: 900px) 540px, 92vw"
              loading="lazy"
            />
          </div>
          <figcaption className="figure-caption">
            Illustrative image of a Kalqy classroom setup. It is not a photograph of a partner school.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
