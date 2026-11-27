import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, m as M } from "framer-motion";
import { site } from "@/data/site";
import { isEmail } from "@/utils/validation";

const SHOW_AFTER_MS = 5000;
const SEEN_KEY = "kalqy-lead-seen";
const IMG = "/images/hero";
const AGES = ["3 years", "4 years", "5 years", "6 years or older"];

const OPEN_EVENT = "kalqy:lead-open";
/** Opens the lead card from anywhere (kit buttons), even if it was already dismissed this session. */
export const openLeadModal = () => window.dispatchEvent(new Event(OPEN_EVENT));

const readSeen = () => {
  try {
    return sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
};
const markSeen = () => {
  try {
    sessionStorage.setItem(SEEN_KEY, "1");
  } catch {
    /* private mode: the card may reappear on the next page load, which is acceptable */
  }
};

function validate(v) {
  const errors = {};
  if (!v.name.trim()) errors.name = "Please enter your name.";
  if (v.phone.replace(/\D/g, "").length < 10) errors.phone = "Please enter a valid phone number.";
  if (!isEmail(v.email)) errors.email = "Please enter a valid email address.";
  return errors;
}

/**
 * Lead card that opens as a modal five seconds after the first page load of a visit (once per browser session).
 * Submits to VITE_FORM_ENDPOINT when set; otherwise it opens the visitor's email app and never claims a send,
 * the same honest behaviour as ContactForm.
 */
export function LeadModal() {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ kind: "idle" });
  const dialogRef = useRef(null);
  const formRef = useRef(null);
  const submitting = useRef(false);
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT;

  useEffect(() => {
    if (readSeen()) return undefined;
    const t = setTimeout(() => setOpen(true), SHOW_AFTER_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const show = () => {
      setErrors({});
      setStatus({ kind: "idle" });
      setOpen(true);
    };
    window.addEventListener(OPEN_EVENT, show);
    return () => window.removeEventListener(OPEN_EVENT, show);
  }, []);

  const close = useCallback(() => {
    markSeen();
    setOpen(false);
  }, []);

  // While open: lock page scroll, close on Escape, keep Tab inside the card, return focus afterwards.
  useEffect(() => {
    if (!open) return undefined;
    const previous = document.activeElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    formRef.current?.querySelector("input")?.focus({ preventScroll: true });
    const onKey = (e) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const nodes = dialogRef.current?.querySelectorAll("button, input, select, a[href]");
      if (!nodes?.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      if (previous instanceof HTMLElement) previous.focus({ preventScroll: true });
    };
  }, [open, close]);

  async function onSubmit(e) {
    e.preventDefault();
    if (submitting.current) return;
    const data = new FormData(e.currentTarget);
    if (data.get("website")) return; // honeypot
    const values = Object.fromEntries(["name", "phone", "email", "age", "city"].map((k) => [k, String(data.get(k) ?? "")]));
    const found = validate(values);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    const subject = `Special offer request from ${values.name}`;
    if (!endpoint) {
      const body = [
        `Name: ${values.name}`,
        `Phone (WhatsApp): ${values.phone}`,
        `Email: ${values.email}`,
        values.age && `Child's age: ${values.age}`,
        values.city && `City: ${values.city}`,
      ]
        .filter(Boolean)
        .join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      markSeen();
      setStatus({ kind: "mailto" });
      return;
    }
    submitting.current = true;
    setStatus({ kind: "sending" });
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, subject, type: "lead" }),
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      markSeen();
      setStatus({ kind: "success" });
    } catch {
      setStatus({ kind: "error", message: `We couldn't send your details. Please try again, or email ${site.email}.` });
    } finally {
      submitting.current = false;
    }
  }

  const sending = status.kind === "sending";
  const field = (id, label, props = {}) => (
    <div className={`lm-field ${props.wide ? "lm-field--wide" : ""}`}>
      <label htmlFor={`lm-${id}`}>{label}</label>
      <input
        id={`lm-${id}`}
        name={id}
        aria-invalid={errors[id] ? true : undefined}
        aria-describedby={errors[id] ? `lm-${id}-err` : undefined}
        {...props.input}
      />
      {errors[id] && (
        <p className="lm-error" id={`lm-${id}-err`}>
          {errors[id]}
        </p>
      )}
    </div>
  );

  return (
    <AnimatePresence>
      {open && (
        <M.div
          className="lm-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onMouseDown={(e) => e.target === e.currentTarget && close()}
        >
          <M.div
            ref={dialogRef}
            className="lm-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lm-title"
            initial={{ opacity: 0, y: 36, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 220, damping: 22 } }}
            exit={{ opacity: 0, y: 20, scale: 0.97, transition: { duration: 0.18 } }}
          >
            <picture className="lm-media">
              <source media="(min-width: 1101px)" srcSet={`${IMG}/off-desk.webp`} width="840" height="1230" />
              <source media="(min-width: 721px)" srcSet={`${IMG}/off-tab.webp`} width="1240" height="440" />
              <img src={`${IMG}/off-mob.webp`} alt="" width="732" height="240" />
            </picture>

            <div className="lm-body">
              {status.kind === "success" ? (
                <div className="lm-done" role="status">
                  <h2 id="lm-title">Thank you!</h2>
                  <p>We have your details and our team will be in touch about this month’s special offer.</p>
                  <button type="button" className="lm-submit" onClick={close}>
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div className="lm-top">
                    <p className="lm-badge">
                      <span aria-hidden="true">✨</span>
                      <span className="lm-desk">GRAB YOUR SPECIAL OFFER</span>
                      <span className="lm-small">SPECIAL OFFER FOR PARENTS</span>
                    </p>
                    <button type="button" className="lm-close" onClick={close} aria-label="Close">
                      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                        <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                  <h2 id="lm-title" className="lm-title">
                    Let your child learn
                    <br />
                    by moving
                  </h2>
                  <p className="lm-lead">
                    Fun movement games that build early learning skills. Leave your details and our team will call you with this month&apos;s
                    special offer.
                  </p>

                  <form ref={formRef} className="lm-form" onSubmit={onSubmit} noValidate>
                    {field("name", "Parent’s name", { input: { type: "text", placeholder: "Your name", autoComplete: "name" } })}
                    {field("phone", "Phone (WhatsApp)", { input: { type: "tel", placeholder: "+91", autoComplete: "tel", inputMode: "tel" } })}
                    {field("email", "Email address", {
                      wide: true,
                      input: { type: "email", placeholder: "you@example.com", autoComplete: "email" },
                    })}
                    <div className="lm-field lm-field--half">
                      <label htmlFor="lm-age">Child’s age</label>
                      <span className="lm-select">
                        <select id="lm-age" name="age" defaultValue="">
                          <option value="" disabled>
                            Select age
                          </option>
                          {AGES.map((a) => (
                            <option key={a}>{a}</option>
                          ))}
                        </select>
                      </span>
                    </div>
                    {field("city", "City", { input: { type: "text", placeholder: "Your city", autoComplete: "address-level2" } })}
                    <div className="lm-honeypot" aria-hidden="true">
                      <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                    </div>

                    <button type="submit" className="lm-submit" disabled={sending} aria-disabled={sending}>
                      <span>
                        {sending ? (
                          "Sending…"
                        ) : (
                          <>
                            <span className="lm-desk">Explore More</span>
                            <span className="lm-small">Get my special offer</span>
                          </>
                        )}
                      </span>
                      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M3 10h13M11 4l6 6-6 6" fill="none" stroke="#ffb547" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    <div className="lm-foot">
                      <p className="lm-note">
                        <span aria-hidden="true">🔒</span> We only use your details to contact you about Kalqy.
                      </p>
                      <button type="button" className="lm-skip" onClick={close}>
                        No thanks
                      </button>
                    </div>

                    <div role="status" aria-live="polite">
                      {status.kind === "error" && (
                        <p className="lm-error lm-status" role="alert">
                          {status.message}
                        </p>
                      )}
                      {status.kind === "mailto" && (
                        <p className="lm-status">
                          Your email app should have opened with your details ready to send. Nothing has been sent from this website yet. If
                          nothing opened, write to <a href={`mailto:${site.email}`}>{site.email}</a>.
                        </p>
                      )}
                    </div>
                  </form>
                </>
              )}
            </div>
          </M.div>
        </M.div>
      )}
    </AnimatePresence>
  );
}
