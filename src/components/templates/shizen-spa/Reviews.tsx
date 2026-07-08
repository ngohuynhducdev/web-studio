'use client';

import { useInView } from '@/hooks/useInView';
import styles from './ShizenSpa.module.css';
import type { ReviewsSection } from '@/types';

export default function Reviews({ s }: { s: ReviewsSection }) {
  const [ref, inView] = useInView<HTMLElement>();
  const v = inView ? styles.inView : '';

  return (
    <section ref={ref} className={`${styles.reviews} py-20 md:py-[6.875rem] bg-[var(--sz-cream)] ${v}`}>
      <div className={styles.sectionInner}>
        {/* Section head */}
        <div className={`${styles.sectionHead} pb-[3.75rem]`}>
          <p className={styles.eyebrow}>{s.eyebrow}</p>
          <h2 className={styles.h2}>
            {s.headingMain}{s.headingItalic && <> <em>{s.headingItalic}</em></>}
          </h2>
        </div>

        {/* Asymmetric grid — featured quote left (2 rows tall), two stacked right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-[var(--sz-border)] border border-[var(--sz-border)]">
          {(s.reviews ?? []).map((r, i) => {
            const featured = i === 0;
            return (
              <article
                key={r._key}
                className={`${styles.reviewCard} bg-[var(--sz-off)] flex flex-col gap-7 relative overflow-hidden hover:bg-[#fffdf8] ${featured ? 'p-12 md:p-16 md:col-span-7 md:row-span-2' : 'p-10 md:p-11 md:col-span-5'}`}
              >
                <p className={`font-[family-name:var(--sz-serif)] font-light italic leading-[1.78] text-[var(--sz-ink)]/85 relative z-[1] ${featured ? 'text-[1.1rem] md:text-[1.65rem] md:leading-[1.6]' : 'text-[0.98rem]'}`}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex justify-between items-end gap-3 pt-5 mt-auto border-t border-[var(--sz-border)] relative z-[1]">
                  <div>
                    <div className="text-[0.875rem] font-semibold text-[var(--sz-ink)]/80">{r.name}</div>
                    <div className="text-[0.75rem] text-[var(--sz-muted)] mt-0.5">{r.location}</div>
                  </div>
                  <span className="text-[0.7rem] tracking-[0.08em] text-[var(--sz-earth)] bg-[rgba(138,111,87,0.08)] border border-[rgba(138,111,87,0.18)] px-[0.625rem] py-1 whitespace-nowrap">
                    {r.service}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
