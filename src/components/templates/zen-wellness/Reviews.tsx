'use client';

import { useInView } from '@/hooks/useInView';
import styles from './ZenWellness.module.css';
import type { ReviewsSection } from '@/types';
import { StarIcon } from './icons';

export default function Reviews({ s }: { s: ReviewsSection }) {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section ref={ref} className={`py-20 md:py-28 bg-white ${inView ? styles.inView : ''}`} id="reviews">
      <div className="max-w-container mx-auto px-5 md:px-10">
        {/* Head */}
        <div className={`${styles.reveal} mb-12 md:mb-16 flex flex-col items-start gap-5`}>
          {s.eyebrow && <span className={styles.chip}>{s.eyebrow}</span>}
          <h2 className={`${styles.h2} m-0 text-[var(--zw-ink)]`}>
            {s.headingMain} {s.headingItalic && <span className={styles.marker}>{s.headingItalic}</span>}
          </h2>
        </div>

        {/* App-store style review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {(s.reviews ?? []).map((r, i) => {
            const stars = r.rating ?? 5;
            return (
              <article
                key={r._key}
                style={{ '--zw-delay': `${i * 90}ms` } as React.CSSProperties}
                className={`${styles.reveal} ${styles.cardHover} bg-[var(--zw-bg)] border border-[var(--zw-line)] rounded-3xl p-7 flex flex-col gap-4`}
              >
                {/* Stars */}
                <div className="flex gap-1 text-[var(--zw-accent)]">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <StarIcon key={j} filled={j < stars} />
                  ))}
                </div>

                <p className="m-0 flex-1 text-[0.9rem] leading-[1.75] text-[var(--zw-ink)]/85">
                  &ldquo;{r.text}&rdquo;
                </p>

                {/* Footer — squircle avatar + service tag */}
                <div className="flex items-center justify-between gap-3 pt-4 border-t border-[var(--zw-line)] flex-wrap">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[var(--zw-accent)] text-white text-[0.72rem] font-bold flex items-center justify-center shrink-0">
                      {r.handle ?? r.name.split(' ').map((w) => w[0]).join('')}
                    </div>
                    <span className="text-[0.85rem] font-semibold text-[var(--zw-ink)]">{r.name}</span>
                  </div>
                  {r.service && (
                    <span className="text-[0.68rem] font-semibold text-[var(--zw-accent)] bg-[var(--zw-tint)] rounded-full px-2.5 py-1 whitespace-nowrap">
                      {r.service}
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
