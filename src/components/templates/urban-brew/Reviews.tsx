import styles from './UrbanBrew.module.css';
import type { ReviewsSection } from '@/types';
import { StarIcon } from './icons';

export default function Reviews({ s }: { s: ReviewsSection }) {
  return (
    <section className="bg-[var(--cf-light-bg)] py-[72px] md:py-[100px]">
      <div className="mx-auto max-w-container px-5 md:px-10">
        {/* Section header (light variant) */}
        <div className="mb-14 flex flex-col items-start gap-[14px]">
          {s.eyebrow && <p className="m-0 text-[11px] font-bold tracking-[0.14em] uppercase text-[#8b7035]">{s.eyebrow}</p>}
          <h2 className="m-0 text-[clamp(32px,4vw,52px)] font-black tracking-[-0.03em] leading-[1.05] text-[var(--cf-light-text)]">
            {s.headingMain}{' '}
            {s.headingItalic && (
              <em className={styles.reviewsLightEm}>
                {s.headingItalic}
              </em>
            )}
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {(s.reviews ?? []).map((r) => {
            const stars = r.rating ?? 5;
            return (
              <article
                key={r._key}
                className="flex flex-col gap-4 rounded-[20px] border border-[rgba(15,14,13,0.08)] bg-white px-6 py-7 transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,14,13,0.08)]"
              >
                {/* Stars */}
                <div className="flex gap-[3px]">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className={j < stars ? 'text-[#f5c842] leading-none' : 'text-[#ccc] leading-none'}>
                      <StarIcon filled={j < stars} />
                    </span>
                  ))}
                </div>

                <p className="m-0 flex-1 text-[15px] leading-[1.7] text-[#2d2920]">&ldquo;{r.text}&rdquo;</p>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-[rgba(15,14,13,0.07)] pt-[14px]">
                  <div className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f5c842] to-[#ff6240] text-[12px] font-extrabold text-[#0f0e0d]">
                    {r.handle ?? r.name.slice(0, 2)}
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <span className="text-[14px] font-bold text-[#1a1917]">{r.name}</span>
                    {r.handle && (
                      <span className="text-[12px] font-medium text-[#8b7035]">
                        {r.handle.startsWith('@') ? r.handle : `@${r.handle}`}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
