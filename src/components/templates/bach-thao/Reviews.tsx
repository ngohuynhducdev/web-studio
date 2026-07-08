'use client';

import { useInView } from '@/hooks/useInView';
import styles from './BachThao.module.css';
import type { ReviewsSection } from '@/types';
import { StarIcon, BotanicalSprigIcon, ChevronLeftIcon, ChevronRightIcon } from './icons';

export default function Reviews({ s }: { s: ReviewsSection }) {
  const [sectionRef, inView] = useInView<HTMLElement>();

  if (!s.reviews || s.reviews.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className={`relative overflow-hidden bg-[var(--bt-bg)] py-24 md:py-32 ${inView ? styles.inView : ''}`}
    >
      {/* Botanical line-art in the margins */}
      <BotanicalSprigIcon aria-hidden="true" className="pointer-events-none absolute left-[-14px] top-1/2 hidden h-52 w-32 -rotate-12 text-[var(--bt-amber)] opacity-[0.12] lg:block" />
      <BotanicalSprigIcon aria-hidden="true" className="pointer-events-none absolute right-[-14px] top-1/4 hidden h-52 w-32 rotate-[200deg] text-[var(--bt-amber)] opacity-[0.12] lg:block" />

      <div className="relative mx-auto max-w-container px-5 md:px-10">

        {/* Head — centered */}
        <div className={`${styles.revealElem} ${styles.rd1} mx-auto mb-12 flex max-w-[560px] flex-col items-center text-center md:mb-16`}>
          <h2 className={`${styles.h2} ${styles.h2Plain}`}>
            {s.headingMain}
            {s.headingItalic && <> <em>{s.headingItalic}</em></>}
          </h2>
        </div>

        {/* Cards + decorative arrows */}
        <div className="relative">
          <button type="button" aria-hidden="true" tabIndex={-1} className={`${styles.reviewArrow} left-[-8px] hidden lg:flex`}>
            <ChevronLeftIcon />
          </button>
          <button type="button" aria-hidden="true" tabIndex={-1} className={`${styles.reviewArrow} right-[-8px] hidden lg:flex`}>
            <ChevronRightIcon />
          </button>

          <div className={`${styles.revealElem} ${styles.rd2} grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7`}>
            {s.reviews.map((r) => (
              <article
                key={r._key}
                className="flex flex-col gap-5 rounded-[4px] bg-[var(--bt-light)] p-7 shadow-[0_22px_50px_-32px_rgba(43,58,51,0.4)] md:p-8"
              >
                <div className="flex gap-[3px] text-[var(--bt-amber)]">
                  {Array.from({ length: r.rating ?? 5 }).map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="m-0 flex-1 text-[14.5px] leading-[1.75] text-[var(--bt-ink-soft)]">
                  {r.text}
                </p>
                <footer className="mt-2 flex items-center gap-4">
                  <span className={`${styles.serif} flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--bt-amber-pale)] text-[19px] text-[var(--bt-ink)]`}>
                    {r.name.charAt(0).toUpperCase()}
                  </span>
                  <span className="flex flex-col gap-[2px]">
                    <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bt-ink)]">{r.name}</span>
                    {r.service && (
                      <span className="text-[12px] text-[var(--bt-ink-mid)]">{r.service}</span>
                    )}
                  </span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
