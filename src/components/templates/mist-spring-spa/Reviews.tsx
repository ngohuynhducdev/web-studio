'use client';

import { useInView } from '@/hooks/useInView';
import styles from './MistSpringSpa.module.css';
import type { ReviewsSection } from '@/types';

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="var(--sm-accent)" aria-hidden="true">
          <path d="M8 1.5l1.8 3.9 4.2.5-3.1 2.9.8 4.2L8 11.4 4.3 13.4l.8-4.2L2 6.3l4.2-.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews({ s }: { s: ReviewsSection }) {
  const [ref, inView] = useInView<HTMLElement>();
  const v = inView ? styles.inView : '';

  return (
    <section ref={ref} className={`${styles.reviews} py-20 md:py-[7.5rem] bg-[var(--sm-bg)] border-t border-[var(--sm-line)] ${v}`} id="reviews">
      <div className={styles.sectionInner}>
        <div className={`${styles.secHead} pb-12 md:pb-16`}>
          <h2 className={styles.secH2}>
            {s.headingMain}{s.headingItalic && <> <em>{s.headingItalic}</em></>}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {(s.reviews ?? []).slice(0, 3).map((r) => (
            <article
              key={r._key}
              className={`${styles.reviewCard} flex flex-col gap-6 bg-[var(--sm-bg2)] rounded-xl p-8 md:p-9 shadow-[0_1px_2px_rgba(46,42,36,0.04),0_18px_40px_-30px_rgba(46,42,36,0.45)]`}
            >
              <Stars />
              <p className="font-[family-name:var(--sm-serif)] font-light italic text-[1.05rem] leading-[1.7] text-[var(--sm-ivory)]/90 flex-1">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3.5 pt-5 border-t border-[var(--sm-line)]">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--sm-accent-14)] text-[var(--sm-accent)] font-[family-name:var(--sm-serif)] text-[1.1rem] shrink-0">
                  {r.name.trim().charAt(0)}
                </span>
                <div>
                  <div className="text-[0.875rem] font-semibold text-[var(--sm-ivory)]/90">{r.name}</div>
                  <div className="text-[0.72rem] tracking-[0.06em] uppercase text-[var(--sm-accent-dark)] mt-0.5">{r.service}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
