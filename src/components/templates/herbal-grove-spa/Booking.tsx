'use client';

import { useInView } from '@/hooks/useInView';
import styles from './HerbalGroveSpa.module.css';
import type { BookingSection } from '@/types';
import { ClockIcon, ZaloIcon, PhoneIcon, ArrowRightIcon, BotanicalSprigIcon } from './icons';

const EMAIL = 'bachthao.spa@gmail.com';

const PERKS = [
  'Reserve your seat ahead — skip the wait',
  'We reply on Zalo within minutes',
  "We'll help you pick the right treatment for you",
];

export default function Booking({ s }: { s: BookingSection }) {
  const [sectionRef, inView] = useInView<HTMLElement>();

  const mapsUrl = s.address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.address)}`
    : undefined;

  return (
    <section
      ref={sectionRef}
      id="booking"
      className={`bg-[var(--bt-bg)] py-20 md:py-24 ${inView ? styles.inView : ''}`}
    >
      <div className="mx-auto max-w-container px-5 md:px-10">
        <div className={`${styles.revealElem} ${styles.rd1} grid grid-cols-1 overflow-hidden md:grid-cols-[1.18fr_0.82fr]`}>

          {/* LEFT — Zalo booking panel */}
          <div className="flex flex-col justify-center bg-[var(--bt-bg-alt)] px-6 py-12 md:px-12 md:py-16">
            <h2 className={`${styles.h2} ${styles.h2Plain}`}>
              {s.headingMain}
              {s.headingItalic && <> <em>{s.headingItalic}</em></>}
            </h2>
            {s.subtitle && (
              <p className="m-0 mt-5 max-w-[46ch] text-[16px] leading-[1.8] text-[var(--bt-ink-soft)]">
                {s.subtitle}
              </p>
            )}

            <ul className="m-0 mt-7 flex list-none flex-col gap-3 p-0">
              {PERKS.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[14px] leading-[1.5] text-[var(--bt-ink-soft)]">
                  <span className="mt-[3px] flex-shrink-0 text-[10px] text-[var(--bt-amber)]" aria-hidden="true">✦</span>
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              {s.zaloUrl && (
                <a href={s.zaloUrl} target="_blank" rel="noopener noreferrer" className={styles.btnSolidDark}>
                  <ZaloIcon />
                  Book via Zalo
                  <ArrowRightIcon />
                </a>
              )}
              {s.phone && (
                <a href={`tel:${s.phone.replace(/\s/g, '')}`} className="flex items-center gap-2.5 text-[14px] font-medium text-[var(--bt-ink)] no-underline transition-colors hover:text-[var(--bt-amber)]">
                  <PhoneIcon />
                  {s.phone}
                </a>
              )}
            </div>
          </div>

          {/* RIGHT — contact panel */}
          <aside className="relative overflow-hidden bg-[var(--bt-dark)] px-6 py-12 md:px-10 md:py-16">
            <BotanicalSprigIcon aria-hidden="true" className="pointer-events-none absolute right-[-20px] top-1/4 h-64 w-40 text-[var(--bt-amber-light)] opacity-[0.10]" />

            <div className="relative flex flex-col items-center gap-5 text-center">
              <ClockIcon />
              <h3 className={`${styles.serif} m-0 text-[28px] text-[var(--bt-light)]`}>Contact</h3>

              <div className="text-[14px] leading-[1.7] text-[var(--bt-light)]/80">
                <div className="mb-1 text-[15px] font-semibold text-[var(--bt-light)]">Herbal Grove Spa</div>
                {s.address}
              </div>

              {s.hours && s.hours.length > 0 && (
                <div className="w-full max-w-[250px] border-y border-[var(--bt-border-dark)] py-4 text-[14px] text-[var(--bt-light)]/80">
                  {s.hours.map((h) => (
                    <div key={h._key} className="flex items-baseline justify-between gap-3 py-0.5">
                      <span>{h.day}</span>
                      <span className="text-[var(--bt-light)]">{h.time}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-col items-center gap-2">
                {s.phone && (
                  <a href={`tel:${s.phone.replace(/\s/g, '')}`} className="text-[15px] font-medium text-[var(--bt-light)] underline decoration-[rgba(245,239,228,0.4)] underline-offset-4 transition-colors hover:text-[var(--bt-amber-light)]">
                    {s.phone}
                  </a>
                )}
                <a href={`mailto:${EMAIL}`} className="text-[14px] text-[var(--bt-light)]/80 underline decoration-[rgba(245,239,228,0.3)] underline-offset-4 transition-colors hover:text-[var(--bt-amber-light)]">
                  {EMAIL}
                </a>
              </div>

              {mapsUrl && (
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={`${styles.btnOutlineRectLight} mt-1`}>
                  View on Google Maps
                </a>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
