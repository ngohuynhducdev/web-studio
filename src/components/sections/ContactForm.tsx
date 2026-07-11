"use client";

import { useState } from "react";
import { STUDIO_ZALO_URL } from "@/data/layout";
import { TEMPLATE_MANIFEST } from "@/lib/templates";
import styles from "./ContactForm.module.css";

type FormState = "idle" | "submitting" | "success" | "error";
type FieldErrors = Partial<Record<"name" | "phone" | "businessName" | "industry", string>>;

const INDUSTRY_OPTIONS = [
  { value: "",        label: "— Select business type —" },
  { value: "nail",    label: "Nail salon" },
  { value: "spa",     label: "Spa / Massage" },
  { value: "cafe",    label: "Cafe / Bubble tea" },
  { value: "gym",     label: "Gym / Yoga / Fitness" },
  { value: "bakery",  label: "Bakery" },
  { value: "barber",  label: "Barber / Hair salon" },
  { value: "studio",  label: "Studio" },
  { value: "other",   label: "Other" },
];

const TEMPLATE_OPTIONS = [
  { value: "", label: "— Select a template —" },
  ...TEMPLATE_MANIFEST.map((t) => ({ value: t.slug, label: `${t.label} (${t.tagline})` })),
  { value: "chua-biet", label: "Not sure yet — need advice" },
];

export default function ContactForm({ defaultTemplate, zaloUrl }: { defaultTemplate?: string; zaloUrl?: string }) {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [previewSlug, setPreviewSlug] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function validatePhone(value: string): string {
    const cleaned = value.replace(/\s+/g, "");
    if (!cleaned) return "Please enter a phone number";
    if (!/^0[0-9]{9}$/.test(cleaned)) return "Invalid number — needs 10 digits, starting with 0";
    return "";
  }

  function clearFieldError(field: keyof FieldErrors) {
    if (fieldErrors[field]) setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const errors: FieldErrors = {};
    if (!data.name?.trim())        errors.name         = "Please enter your name";
    const phoneErr = validatePhone(data.phone ?? "");
    if (phoneErr)                  errors.phone        = phoneErr;
    if (!data.businessName?.trim()) errors.businessName = "Please enter your business name";
    if (!data.industry)            errors.industry     = "Please select a business type";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setState("submitting");

    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName:   data.name,
          phone:        data.phone,
          businessName: data.businessName,
          businessType: data.industry || undefined,
          templateSlug: data.template && data.template !== "chua-biet" ? data.template : undefined,
          message:      data.message || undefined,
        }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Unknown error");

      setPreviewSlug(json.previewSlug ?? "");
      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Send failed, please try again.");
    }
  }

  if (state === "success") {
    return (
      <div className={styles.contactSuccess}>
        <div className={styles.contactSuccessIcon} aria-hidden="true">✓</div>
        <h3 className={styles.contactSuccessTitle}>Sent successfully!</h3>
        <p className={styles.contactSuccessBody}>
          We&apos;ve received your request. We&apos;ll message you on Zalo or call within{" "}
          <strong>1–2 hours</strong> (business hours).
        </p>
        {previewSlug && (
          <p className={styles.contactSuccessNote}>
            Order code: <code>{previewSlug}</code>
          </p>
        )}
        <a href={zaloUrl ?? STUDIO_ZALO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
          💬 Message on Zalo for a faster reply
        </a>
        <button onClick={() => setState("idle")} className={styles.contactResetBtn}>
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={styles.contactForm}>
      <div className={styles.contactFormRow}>
        <div className={styles.contactField}>
          <label htmlFor="name" className={styles.contactLabel}>
            Full name <span className={styles.contactRequired}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            aria-required="true"
            placeholder="Jane Doe"
            className={`${styles.contactInput}${fieldErrors.name ? ` ${styles.contactInputError}` : ""}`}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            onChange={() => clearFieldError("name")}
          />
          {fieldErrors.name && (
            <p id="name-error" className={styles.contactFieldError} role="alert">
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div className={styles.contactField}>
          <label htmlFor="phone" className={styles.contactLabel}>
            Phone / Zalo <span className={styles.contactRequired}>*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            aria-required="true"
            placeholder="0909 123 456"
            className={`${styles.contactInput}${fieldErrors.phone ? ` ${styles.contactInputError}` : ""}`}
            aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
            onChange={() => clearFieldError("phone")}
          />
          {fieldErrors.phone && (
            <p id="phone-error" className={styles.contactFieldError} role="alert">
              {fieldErrors.phone}
            </p>
          )}
        </div>
      </div>

      <div className={styles.contactField}>
        <label htmlFor="businessName" className={styles.contactLabel}>
          Business name <span className={styles.contactRequired}>*</span>
        </label>
        <input
          id="businessName"
          name="businessName"
          type="text"
          required
          aria-required="true"
          placeholder="Hoa Mai Nails, Lotus Spa..."
          className={`${styles.contactInput}${fieldErrors.businessName ? ` ${styles.contactInputError}` : ""}`}
          aria-describedby={fieldErrors.businessName ? "businessName-error" : undefined}
          onChange={() => clearFieldError("businessName")}
        />
        {fieldErrors.businessName && (
          <p id="businessName-error" className={styles.contactFieldError} role="alert">
            {fieldErrors.businessName}
          </p>
        )}
      </div>

      <div className={styles.contactFormRow}>
        <div className={styles.contactField}>
          <label htmlFor="industry" className={styles.contactLabel}>
            Business type <span className={styles.contactRequired}>*</span>
          </label>
          <select
            id="industry"
            name="industry"
            required
            aria-required="true"
            className={`${styles.contactSelect}${fieldErrors.industry ? ` ${styles.contactInputError}` : ""}`}
            aria-describedby={fieldErrors.industry ? "industry-error" : undefined}
            onChange={() => clearFieldError("industry")}
          >
            {INDUSTRY_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          {fieldErrors.industry && (
            <p id="industry-error" className={styles.contactFieldError} role="alert">
              {fieldErrors.industry}
            </p>
          )}
        </div>

        <div className={styles.contactField}>
          <label htmlFor="template" className={styles.contactLabel}>
            Template of interest
          </label>
          <select id="template" name="template" defaultValue={defaultTemplate ?? ""} className={styles.contactSelect}>
            {TEMPLATE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.contactField}>
        <label htmlFor="message" className={styles.contactLabel}>
          Tell us about your business
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Nail salon in District 7, need online booking, about 200 regular customers a month..."
          className={styles.contactTextarea}
        />
      </div>

      {state === "error" && (
        <p className={styles.contactError} role="alert">
          {errorMsg || "Something went wrong. Please try again or message us directly on Zalo."}
        </p>
      )}

      <div className={styles.contactFormFooter}>
        <button
          type="submit"
          disabled={state === "submitting"}
          className={`btn btn-primary btn-lg ${styles.contactSubmit}`}
        >
          {state === "submitting" ? (
            <>
              <span className={styles.contactSpinner} aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              Send request
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </>
          )}
        </button>
        <p className={styles.contactPrivacy}>
          Your information is only used to follow up — never shared externally.
        </p>
      </div>
    </form>
  );
}
