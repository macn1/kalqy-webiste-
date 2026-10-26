import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { faqs } from "@/data/faq";
import { pageMeta } from "@/utils/metadata";

export const metadata = pageMeta(
  "Frequently asked questions",
  "Answers about Kalqy: ages, devices, how the movement games work, schools, privacy and support.",
  "/faq",
);

export default function FaqPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <SectionHeading as="h1" eyebrow="FAQ" title="Frequently asked questions" intro="Can't find what you need? Contact us and we'll help." />
          <FAQAccordion items={faqs} />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
