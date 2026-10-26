import Link from "next/link";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ClassroomSection } from "@/components/home/ClassroomSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { GamesShowcase } from "@/components/home/GamesShowcase";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { LearningBenefits } from "@/components/home/LearningBenefits";
import { ParentsEducatorsSection } from "@/components/home/ParentsEducatorsSection";
import { ProductDemoSection } from "@/components/home/ProductDemoSection";
import { TrustSection } from "@/components/home/TrustSection";
import { faqs } from "@/data/faq";
import { pageMeta } from "@/utils/metadata";

export const metadata = pageMeta(
  "Movement-based learning games for young children",
  "Kalqy turns your webcam into a playground. Children jump, reach and point to play learning games for ages 3 to 5. Available for Windows and Mac.",
  "/",
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductDemoSection />
      <GamesShowcase />
      <LearningBenefits />
      <HowItWorks />
      <ParentsEducatorsSection />
      <ClassroomSection />
      <TrustSection />
      <section className="section section--sheet" aria-labelledby="faq-title">
        <div className="container">
          <SectionHeading id="faq-title" eyebrow="Questions" title="Quick answers" />
          <FAQAccordion items={faqs.slice(0, 4)} />
          <p style={{ marginTop: 24 }} data-reveal>
            <Link href="/faq">See all questions</Link>
          </p>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
