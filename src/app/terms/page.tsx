import { LinkButton } from "@/components/common/LinkButton";
import { site } from "@/data/site";
import { pageMeta } from "@/utils/metadata";

export const metadata = pageMeta(
  "Terms",
  "A summary of the key points in Kalqy's Terms of Service, with a link to the full terms.",
  "/terms",
);

export default function TermsPage() {
  return (
    <section className="section page-hero">
      <div className="container prose">
        <div className="notice-draft" role="note">
          <strong>Draft summary, pending legal review.</strong> This page summarises Kalqy&apos;s published Terms of Service. The full
          terms on kalqy.in are the authoritative text until the legal owner approves this page.
        </div>
        <h1>Terms</h1>
        <h2>Educational purpose</h2>
        <p>Kalqy provides gesture-based, motion-enabled learning games. It is designed to supplement teaching and does not replace the professional judgment of qualified educators.</p>
        <h2>Who can use it</h2>
        <p>Access is for schools, authorised staff, students under appropriate supervision, and parents where the school has approved it.</p>
        <h2>School responsibilities</h2>
        <p>Schools maintain accurate data, obtain necessary permissions and parental consents, and supervise student use.</p>
        <h2>Motion features</h2>
        <p>Educators are responsible for a safe learning environment and for making sure students are physically able to take part.</p>
        <h2>AI-generated content</h2>
        <p>AI outputs are not guaranteed to be accurate, and educators should review them before using them in class.</p>
        <h2>Ownership, payment and law</h2>
        <p>
          Kalqy keeps ownership of its software, games and AI systems; schools keep their own materials and educational records.
          Subscription and payment terms are set in each school&apos;s agreement with Kalqy. The terms are governed by the laws of
          India, with disputes subject to the courts of Alappuzha, Kerala.
        </p>
        <p>
          Questions: <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <LinkButton href={site.officialLegal.terms} variant="primary" icon="external">
          Read the full terms
        </LinkButton>
      </div>
    </section>
  );
}
