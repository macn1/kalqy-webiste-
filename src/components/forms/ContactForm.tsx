"use client";

import { useRef, useState } from "react";
import { site } from "@/data/site";
import { validateContact, type ContactValues, type FieldErrors } from "@/utils/validation";
import { FormField } from "./FormField";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success" }
  | { kind: "error"; message: string }
  | { kind: "mailto" };

type Props = { variant?: "contact" | "school" };

/**
 * Real endpoint only when NEXT_PUBLIC_FORM_ENDPOINT is set. Success is shown only after that endpoint answers 2xx.
 * With no endpoint configured, the form validates and then opens the visitor's email app; it never claims a send.
 */
export function ContactForm({ variant = "contact" }: Props) {
  const school = variant === "school";
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
  const formRef = useRef<HTMLFormElement>(null);
  const submitting = useRef(false); // blocks duplicate submits even before state re-renders
  const [errors, setErrors] = useState<FieldErrors<keyof ContactValues>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting.current) return;
    const data = new FormData(e.currentTarget);
    if (data.get("website")) return; // honeypot: bots fill this hidden field

    const values: ContactValues = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
      organization: String(data.get("organization") ?? ""),
      role: String(data.get("role") ?? ""),
    };
    const found = validateContact(values, { school });
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const subject = school ? `School demo request from ${values.organization}` : `Message from ${values.name}`;

    if (!endpoint) {
      const body = [
        values.message,
        "",
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        school ? `Organization: ${values.organization}` : "",
        school && values.role ? `Role: ${values.role}` : "",
      ]
        .filter((l) => l !== "")
        .join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus({ kind: "mailto" });
      return;
    }

    submitting.current = true;
    setStatus({ kind: "sending" });
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, subject, type: variant }),
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      setStatus({ kind: "success" });
      formRef.current?.reset();
    } catch {
      setStatus({ kind: "error", message: `We couldn't send your message. Please try again, or email ${site.email} directly.` });
    } finally {
      submitting.current = false;
    }
  }

  const sending = status.kind === "sending";

  return (
    <form ref={formRef} className="form" onSubmit={onSubmit} noValidate aria-describedby="form-status">
      <FormField id="name" label="Your name" required autoComplete="name" error={errors.name} />
      <FormField id="email" label="Email address" type="email" required autoComplete="email" error={errors.email} />
      {school && (
        <>
          <FormField id="organization" label="School or organization" required autoComplete="organization" error={errors.organization} />
          <FormField id="role" label="Your role" autoComplete="organization-title" hint="For example: principal, teacher, coordinator." />
        </>
      )}
      <FormField
        id="message"
        label={school ? "Tell us about your classroom" : "Message"}
        multiline
        required
        rows={6}
        error={errors.message}
        hint="Please don't include any personal details about children."
      />
      <div className="honeypot" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <button type="submit" className="btn btn--primary" disabled={sending} aria-disabled={sending}>
          {sending ? "Sending…" : school ? "Request a school demo" : "Send message"}
        </button>
      </div>

      <div id="form-status" role="status" aria-live="polite">
        {status.kind === "success" && (
          <p className="form-status form-status--success">Thank you. Your message has been sent and we&apos;ll reply by email.</p>
        )}
        {status.kind === "error" && (
          <p className="form-status form-status--error" role="alert">
            {status.message}
          </p>
        )}
        {status.kind === "mailto" && (
          <p className="form-status form-status--info">
            Your email app should have opened with your message ready to send. Nothing has been sent from this website yet. If nothing
            opened, write to <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        )}
        {!endpoint && status.kind === "idle" && (
          <p className="hint" style={{ fontSize: ".9rem", color: "var(--color-text-secondary)" }}>
            This form prepares an email to {site.email}; it doesn&apos;t send messages from the website itself.
          </p>
        )}
      </div>
    </form>
  );
}
