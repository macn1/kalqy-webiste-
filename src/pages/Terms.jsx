import { useEffect } from "react";
import { PrivacyHero } from "@/components/privacy/PrivacyHero";
import { PrivacyBody } from "@/components/privacy/PrivacyBody";
import { termsExtras, termsSections, termsUpdated } from "@/components/privacy/termsData";
import { pageMeta } from "@/utils/metadata";

export const metadata = pageMeta(
  "Terms",
  "The key points in Kalqy's terms: school-managed access, supervised use, content, commercial arrangements and governing terms.",
  "/terms",
);

export default function TermsPage() {
  // body.home-tablet switches the shared header and footer to their tablet / mobile layouts; body.tm-page swaps the footer lion for the larger one.
  useEffect(() => {
    document.body.classList.add("home-tablet", "tm-page");
    return () => document.body.classList.remove("home-tablet", "tm-page");
  }, []);
  return (
    <div className="pv">
      <PrivacyHero title="Terms" date={termsUpdated} />
      <PrivacyBody sections={termsSections} extras={termsExtras} />
    </div>
  );
}
