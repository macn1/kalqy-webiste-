import { LinkButton } from "@/components/common/LinkButton";
import { site } from "@/data/site";
import { pageMeta } from "@/utils/metadata";

export const metadata = pageMeta(
  "Privacy",
  "A plain-language summary of how Kalqy handles personal data, including webcam and movement data, with a link to the full policy.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <section className="section page-hero">
      <div className="container prose">
        <div className="notice-draft" role="note">
          <strong>Draft summary, pending legal review.</strong> This page summarises Kalqy&apos;s published privacy policy. The full
          policy on kalqy.in is the authoritative text until the policy owner approves this page.
        </div>
        <h1>Privacy</h1>
        <p className="lead">
          Kalqy is for children aged {site.ageRange}, so we take care to explain clearly what information is involved.
        </p>

        <h2>What Kalqy says it collects</h2>
        <ul>
          <li>Personal details such as name, contact details, email, mobile number, age and gender.</li>
          <li>Account credentials (passwords) and, where strictly required, government-issued identifiers.</li>
          <li>Technical information such as IP address, device type, internet provider and operating system.</li>
          <li>Gameplay progress, scores and session data, stored on the device and possibly synced to Kalqy&apos;s servers.</li>
          <li>Approximate location, where you enable it.</li>
        </ul>

        <h2>Webcam and movement data</h2>
        <p>
          Movement games use the webcam to track hand, pose and body movement in real time. The policy says video is processed
          mainly on the device to produce movement coordinates, and that webcam data is not used for facial recognition or
          identification.
        </p>

        <h2>Sharing</h2>
        <p>
          Kalqy says it shares information with trusted service providers, including Google Firebase for authentication, cloud
          storage, analytics and crash reporting, and with authorities where required by law. It states it does not sell personal
          information, including webcam-derived data. Some providers may store data outside India.
        </p>

        <h2>Your rights and contact</h2>
        <p>
          Subject to applicable law, you can ask to access, correct, update or erase your data and withdraw consent. Kalqy says it
          processes valid deletion requests within 180 days. Contact{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}.
        </p>
        <p>
          <strong>{site.legalName}</strong>
          <br />
          {site.address}
        </p>

        <div className="btn-row">
          <LinkButton href={site.officialLegal.privacy} variant="primary" icon="external">
            Read the full privacy policy
          </LinkButton>
          <LinkButton href={site.officialLegal.cookies} variant="secondary">
            Cookie policy
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
