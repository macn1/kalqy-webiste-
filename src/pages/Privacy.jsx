import { useEffect } from "react";
import { PrivacyHero } from "@/components/privacy/PrivacyHero";
import { PrivacyBody } from "@/components/privacy/PrivacyBody";
import { pageMeta } from "@/utils/metadata";

export const metadata = pageMeta(
  "Privacy",
  "How Kalqy handles personal data, including webcam and movement data. Read the full current policy and contact the team with questions.",
  "/privacy",
);

export default function PrivacyPage() {
  // body.home-tablet switches the shared header and footer to their tablet / mobile layouts; body.fp-page gives the footer its wave band and fish mascot.
  useEffect(() => {
    document.body.classList.add("home-tablet", "fp-page");
    return () => document.body.classList.remove("home-tablet", "fp-page");
  }, []);
  return (
    <div className="pv">
      <PrivacyHero />
      <PrivacyBody />
    </div>
  );
}
