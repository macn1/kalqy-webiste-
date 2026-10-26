import { LinkButton } from "@/components/common/LinkButton";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { pageMeta } from "@/utils/metadata";

export const metadata = pageMeta(
  "Testimonials",
  "Feedback from families and educators who use Kalqy. We only publish approved, genuine testimonials.",
  "/testimonials",
);

export default function TestimonialsPage() {
  const approved = testimonials.filter((t) => t.approved);
  return (
    <section className="section page-hero">
      <div className="container">
        <SectionHeading
          as="h1"
          eyebrow="Testimonials"
          title="What families and educators say"
          intro="We only publish genuine feedback that the person has approved."
        />
        {approved.length > 0 ? (
          <div className="grid grid--2" data-stagger>
            {approved.map((t) => (
              <figure className="card" key={t.quote} style={{ margin: 0 }}>
                <blockquote style={{ margin: 0, fontSize: "1.15rem" }}>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption style={{ marginTop: 16, fontWeight: 700 }}>
                  {t.name}, {t.role}
                  {t.organization ? `, ${t.organization}` : ""}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="pending stack" style={{ maxWidth: 760 }}>
            <h2 style={{ fontSize: "1.6rem" }}>No testimonials published yet</h2>
            <p>
              We haven&apos;t added any approved quotes, ratings or reviews, and we won&apos;t invent them. In the meantime, the best
              way to judge Kalqy is to try it.
            </p>
            <div className="btn-row">
              <LinkButton href="/product#download" variant="primary" icon="download">
                Try Kalqy
              </LinkButton>
              <LinkButton href="/schools" variant="secondary">
                Request a school demo
              </LinkButton>
              <LinkButton href="/contact" variant="secondary">
                Share your feedback
              </LinkButton>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
