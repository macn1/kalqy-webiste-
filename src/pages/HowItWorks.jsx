import { useEffect } from "react";
import { HowIntro } from "@/components/how-it-works/HowIntro";
import { HowSteps } from "@/components/how-it-works/HowSteps";
import { HowEquipment } from "@/components/how-it-works/HowEquipment";
import { HowDemo } from "@/components/how-it-works/HowDemo";
import { HowFaq } from "@/components/how-it-works/HowFaq";
import { HowClosing } from "@/components/how-it-works/HowClosing";
import { pageMeta } from "@/utils/metadata";

export const metadata = pageMeta(
  "How Kalqy works",
  "Getting started with Kalqy: download for Windows or Mac, step back from the screen, choose an experience and move to play.",
  "/how-it-works",
);

export default function HowItWorksPage() {
  // Same hook the home page uses: it switches the shared header and footer to their tablet / mobile layouts.
  useEffect(() => {
    document.body.classList.add("home-tablet");
    return () => document.body.classList.remove("home-tablet");
  }, []);
  return (
    <div className="hw">
      <HowIntro />
      <HowSteps />
      <HowEquipment />
      <HowDemo />
      <HowFaq />
      <HowClosing />
    </div>
  );
}
