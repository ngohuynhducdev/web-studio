import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import { client } from "@/sanity/lib/client";
import { contactPageQuery, siteFooterQuery } from "@/lib/queries";
import { DEFAULT_CONTACT } from "@/data/contact";
import { DEFAULT_FOOTER } from "@/data/layout";
import type { ContactCms, SiteFooterCms } from "@/types/cms";
import Reveal from "@/components/ui/motion/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact & Order",
  description:
    "Order a website for your business — nail, spa, cafe, gym. Free consultation, reply within 1–2 hours.",
};

function ZaloIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.04 2 11c0 2.4 1.08 4.58 2.83 6.18L4 22l4.93-1.4c.97.26 2.02.4 3.07.4 5.52 0 10-4.04 10-9s-4.48-10-10-10z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.42 2 2 0 0 1 3.57 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ template?: string }>
}) {
  const { template: defaultTemplate } = await searchParams;
  const [cms, footer] = await Promise.all([
    client.fetch<ContactCms>(contactPageQuery, {}, { next: { revalidate: 60 } }),
    client.fetch<SiteFooterCms>(siteFooterQuery, {}, { next: { revalidate: 60 } }),
  ]);

  const heroTitle     = cms?.heroTitle     ?? DEFAULT_CONTACT.heroTitle;
  const heroSub       = cms?.heroSub       ?? DEFAULT_CONTACT.heroSub;
  const formCardTitle = cms?.formCardTitle ?? DEFAULT_CONTACT.formCardTitle;
  const formCardDesc  = cms?.formCardDesc  ?? DEFAULT_CONTACT.formCardDesc;
  const zaloCardLabel = cms?.zaloCardLabel ?? DEFAULT_CONTACT.zaloCardLabel;
  const zaloCardNote  = cms?.zaloCardNote  ?? DEFAULT_CONTACT.zaloCardNote;
  const promisesTitle = cms?.promisesTitle ?? DEFAULT_CONTACT.promisesTitle;
  const promises      = cms?.promises?.length ? cms.promises : DEFAULT_CONTACT.promises;

  // Contact info reused from siteFooter — single source of truth
  const phone   = footer?.phone   ?? DEFAULT_FOOTER.phone;
  const email   = footer?.email   ?? DEFAULT_FOOTER.email;
  const zaloUrl = footer?.zaloUrl ?? DEFAULT_FOOTER.zaloUrl;
  const hours   = footer?.hours   ?? DEFAULT_FOOTER.hours;

  return (
    <main>
      {/* ── Hero ── */}
      <section className={styles.contactHero}>
        <div className="container-site">
          <Reveal immediate>
            <h1 className={styles.contactHeroTitle}>
              {heroTitle}<span className="dot-terracotta">.</span>
            </h1>
            <p className={styles.contactHeroSub}>{heroSub}</p>
          </Reveal>
        </div>
      </section>

      {/* ── Content ── */}
      <section className={styles.contactBody}>
        <div className={`container-site ${styles.contactGrid}`}>

          {/* Left — form */}
          <Reveal>
            <div className={styles.contactCard}>
              <h2 className={styles.contactCardTitle}>{formCardTitle}</h2>
              <p className={styles.contactCardDesc}>{formCardDesc}</p>
              <ContactForm defaultTemplate={defaultTemplate} zaloUrl={zaloUrl} />
            </div>
          </Reveal>

          {/* Right — sidebar */}
          <aside className={styles.contactSidebar}>

            {/* Zalo CTA */}
            <Reveal delay={0.08} className={styles.contactZaloCard}>
              <p className={styles.contactZaloLabel}>{zaloCardLabel}</p>
              <a
                href={zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactZaloBtn}
              >
                <ZaloIcon />
                Message us on Zalo
              </a>
              <p className={styles.contactZaloNote}>{zaloCardNote}</p>
            </Reveal>

            {/* Contact info */}
            <Reveal delay={0.16} className={styles.contactInfoCard}>
              <h3 className={styles.contactInfoTitle}>Contact information</h3>
              <ul className={styles.contactInfoList}>
                <li>
                  <span className={styles.contactInfoIcon}><PhoneIcon /></span>
                  <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
                </li>
                <li>
                  <span className={styles.contactInfoIcon}><MailIcon /></span>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
                <li>
                  <span className={styles.contactInfoIcon}><ClockIcon /></span>
                  <span>{hours}</span>
                </li>
              </ul>
            </Reveal>

            {/* Promises */}
            <Reveal delay={0.24} className={styles.contactPromiseCard}>
              <h3 className={styles.contactPromiseTitle}>{promisesTitle}</h3>
              <ul className={styles.contactPromiseList}>
                {promises.map((p) => (
                  <li key={p}>
                    <span className={styles.contactPromiseCheck}><CheckIcon /></span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>

          </aside>
        </div>
      </section>
    </main>
  );
}
