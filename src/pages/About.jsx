import { useEffect } from "react";
import {
  AboutApproach,
  AboutClosing,
  AboutCompany,
  AboutIntro,
  AboutPrinciples,
  AboutTeam,
} from "@/components/about/AboutSections";
import { pageMeta } from "@/utils/metadata";

export const metadata = pageMeta(
  "About Kalqy",
  "Kalqy is a movement-based learning platform for young children, built so learning happens through play, imagination and the whole body.",
  "/about",
);

export default function AboutPage() {
  // Same hook the home page uses: it switches the shared header and footer to their tablet / mobile layouts.
  useEffect(() => {
    document.body.classList.add("home-tablet");
    return () => document.body.classList.remove("home-tablet");
  }, []);
  return (
    <div className="hw ab">
      <AboutIntro />
      <AboutApproach />
      <AboutPrinciples />
      <AboutTeam />
      <AboutCompany />
      <AboutClosing />
    </div>
  );
}
