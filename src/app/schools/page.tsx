import Image from "next/image";
import { Icon, type IconName } from "@/components/common/Icon";
import { LinkButton } from "@/components/common/LinkButton";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { site } from "@/data/site";
import { pageMeta } from "@/utils/metadata";

export const metadata = pageMeta(
  "Kalqy for schools and educators",
  "Bring movement-based learning to classrooms, preschools and early learning centers. See how Kalqy works for schools and request a demo.",
  "/schools",
);

const workflow: { icon: IconName; title: string; text: string }[] = [
  { icon: "book", title: "Select games", text: "Choose games to match learning goals (Kalqy references NEP 2020) and individual student needs." },
  { icon: "chart", title: "See live analytics", text: "View performance visualizations while students move and learn." },
  { icon: "move", title: "Tune the difficulty", text: "Adjust difficulty levels to keep students engaged with their goals." },
  { icon: "mail", title: "Export and share", text: "Export documentation of goals and progress to share with parents and administrators." },
  { icon: "chart", title: "Access from any device", text: "Open student data from any device through a web browser." },
];

export default function SchoolsPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container split">
          <div className="stack" data-reveal>
            <span className="eyebrow">For schools &amp; educators</span>
            <h1>Create joyful learning spaces with movement-first play</h1>
            <p className="lead">
              Kalqy is for classrooms, nurseries, preschools and early learning centers that want interactive lessons and a fun way
              to introduce AI-based activities to young children.
            </p>
            <div className="btn-row">
              <LinkButton href="#demo-request" variant="primary">
                Request a school demo
              </LinkButton>
              <LinkButton href={site.whatsapp} variant="secondary">
                Chat on WhatsApp
              </LinkButton>
            </div>
          </div>
          <figure style={{ margin: 0 }}>
            <div className="media-frame plate-tilt">
              <Image
                src="/images/brand/classroom.webp"
                alt="Illustration of children raising their hands toward a classroom display showing Kalqy, with a webcam on top and a teacher watching."
                width={1200}
                height={896}
                priority
                sizes="(min-width: 900px) 540px, 92vw"
              />
            </div>
            <figcaption className="figure-caption">Illustrative image, not a photograph of a partner school.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--white section--sheet" aria-labelledby="uses-title">
        <div className="container">
          <SectionHeading id="uses-title" eyebrow="Where it fits" title="Made for group play" intro="Kalqy's own description of where it works well." />
          <div className="grid grid--3" data-stagger>
            {[
              { i: "move" as IconName, t: "Active learning", d: "Children move, play and learn at the same time." },
              { i: "camera" as IconName, t: "Vision-based games", d: "A webcam follows movement, so each activity responds to the child." },
              { i: "group" as IconName, t: "Group friendly", d: "Suited to classrooms, assemblies and play corners." },
            ].map((c) => (
              <div className="card" key={c.t}>
                <div className="card__icon card__icon--mint">
                  <Icon name={c.i} />
                </div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="workflow-title">
        <div className="container">
          <SectionHeading id="workflow-title" eyebrow="Workflow" title="How a school uses Kalqy" intro="A webcam is the only hardware Kalqy says is needed." />
          <ol className="steps" data-stagger>
            {workflow.map((w) => (
              <li className="step" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--mint section--sheet" aria-labelledby="resp-title">
        <div className="container split">
          <div className="stack" data-reveal>
            <h2 id="resp-title">Good to know before you start</h2>
            <p className="lead">From Kalqy&apos;s published terms:</p>
            <ul className="check-list">
              <li>Schools supervise student use and obtain any parental consents required by law.</li>
              <li>Educators make sure the space is safe and students are able to take part in movement.</li>
              <li>Kalqy supplements teaching; it does not replace an educator&apos;s professional judgment.</li>
              <li>Pricing and subscription terms are agreed directly between Kalqy and the school.</li>
            </ul>
            <LinkButton href="/terms" variant="dark">
              Read the terms summary
            </LinkButton>
          </div>
          <div className="card" id="demo-request">
            <h2 style={{ fontSize: "1.6rem" }}>Request a demo</h2>
            <ContactForm variant="school" />
          </div>
        </div>
      </section>
    </>
  );
}
