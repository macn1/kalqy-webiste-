import { useEffect } from "react";
import { WelcomeBenefits } from "@/components/home/WelcomeBenefits";
import { LearningKitOffer } from "@/components/home/LearningKitOffer";
import { ParentAppSlideshow } from "@/components/home/ParentAppSlideshow";
import { HowItWorksSteps } from "@/components/home/HowItWorksSteps";
import { ExperienceLibrary } from "@/components/home/ExperienceLibrary";
import { SeeItInAction } from "@/components/home/SeeItInAction";
import { PurposeReading, KalqyDifference } from "@/components/home/PurposeDifference";
import { ParentsSection, EducatorsSection, GallerySection } from "@/components/home/AudienceGallery";
import { ProductInfo, FaqSection, TrustSection } from "@/components/home/InfoFaqTrust";
import { ReviewsSection, ClosingInvitation } from "@/components/home/ReviewsClosing";
import { pageMeta } from "@/utils/metadata";
import { useLiveSections } from "@/components/motion/primitives";
import { SparkleLayer } from "@/components/motion/SparkleLayer";
export const metadata = pageMeta(
  "Movement-based learning games for young children",
  "Kalqy turns your webcam into a playground. Children jump, reach and point to play learning games for ages 3 to 5. Available for Windows and Mac.",
  "/",
);
export default function HomePage() {
  // Decorative loops (floating characters, glows) only run while their section is on screen.
  useLiveSections("main section, footer.rd-footer");
  useEffect(() => {
    document.body.classList.add("home-tablet");
    return () => document.body.classList.remove("home-tablet");
  }, []);

  return (
    <>
      <SparkleLayer />
      <WelcomeBenefits />
      <LearningKitOffer />
      <ParentAppSlideshow />
      <HowItWorksSteps />
      <ExperienceLibrary />
      <SeeItInAction />
      <PurposeReading />
      <KalqyDifference />
      <ParentsSection />
      <EducatorsSection />
      <GallerySection />
      <ProductInfo />
      <FaqSection />
      <TrustSection />
      <ReviewsSection />
      <ClosingInvitation />
    </>
  );
}
