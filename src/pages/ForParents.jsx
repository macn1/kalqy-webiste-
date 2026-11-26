import { useEffect } from "react";
import { ParentsIntro } from "@/components/for-parents/ParentsIntro";
import { ParentsMovement } from "@/components/for-parents/ParentsMovement";
import { ParentsAccess } from "@/components/for-parents/ParentsAccess";
import { ParentsPrivacy } from "@/components/for-parents/ParentsPrivacy";
import { ParentsClosing } from "@/components/for-parents/ParentsClosing";
import { parentFaqs, PARENTS_IMG } from "@/components/for-parents/parentsData";
import { HowFaq } from "@/components/how-it-works/HowFaq";
import { ReviewsSection } from "@/components/home/ReviewsClosing";
import { pageMeta } from "@/utils/metadata";

export const metadata = pageMeta(
  "Kalqy for parents",
  "See what Kalqy is, how children take part and how we keep play active, safe and fun. Access, setup, privacy and answers for parents.",
  "/for-parents",
);

export default function ForParentsPage() {
  // Same hook the home page uses: it switches the shared header and footer to their tablet / mobile layouts.
  useEffect(() => {
    document.body.classList.add("home-tablet", "fp-page");
    return () => document.body.classList.remove("home-tablet", "fp-page");
  }, []);
  return (
    <div className="hw fp">
      <ParentsIntro />
      <ParentsMovement />
      <ParentsAccess />
      <ParentsPrivacy />
      <HowFaq faqs={parentFaqs} title="Your questions are a good start." wave="faq-wave.svg" bgBase={PARENTS_IMG} />
      <ReviewsSection />
      <ParentsClosing />
    </div>
  );
}
