import { Icon, type IconName } from "@/components/common/Icon";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { site } from "@/data/site";
import { pageMeta } from "@/utils/metadata";

export const metadata = pageMeta(
  "Contact Kalqy",
  "Contact Kalqy by email, phone or WhatsApp, or send a message. For school demos, use the schools page.",
  "/contact",
);

export default function ContactPage() {
  const rows: { icon: IconName; label: string; node: React.ReactNode }[] = [
    { icon: "mail", label: "Email", node: <a href={`mailto:${site.email}`}>{site.email}</a> },
    { icon: "phone", label: "Phone", node: <a href={site.phoneHref}>{site.phone}</a> },
    {
      icon: "group",
      label: "WhatsApp",
      node: (
        <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
          Chat on WhatsApp<span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      ),
    },
    { icon: "pin", label: "Registered office", node: <address>{site.address}</address> },
  ];

  return (
    <section className="section page-hero">
      <div className="container">
        <SectionHeading as="h1" eyebrow="Contact" title="Say hello" intro="Questions about Kalqy, downloads or schools? We'd love to hear from you." />
        <div className="split" style={{ alignItems: "start" }}>
          <ul className="contact-list">
            {rows.map((r) => (
              <li key={r.label} style={{ display: "flex", gap: 14 }}>
                <span className="card__icon card__icon--mint" style={{ flex: "none", marginBottom: 0 }}>
                  <Icon name={r.icon} />
                </span>
                <div>
                  <strong>{r.label}</strong>
                  {r.node}
                </div>
              </li>
            ))}
          </ul>
          <div className="card" data-reveal="right">
            <h2 style={{ fontSize: "1.6rem" }}>Send a message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
