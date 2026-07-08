import styles from './SweetCorner.module.css';
import type { ReviewsSection } from '@/types';
import { StarIcon } from './icons';

export default function Reviews({ s }: { s: ReviewsSection }) {
  return (
    <section className="py-[72px] md:py-[100px] bg-[#fff5f8]" id="reviews">
      <div className="max-w-container mx-auto px-5 md:px-10">
        {/* Section head */}
        <div className="text-center max-w-[600px] mx-auto mb-14 flex flex-col gap-[14px]">
          {s.eyebrow && <p className={styles.eyebrow}>{s.eyebrow}</p>}
          <h2 className={styles.h2}>{s.headingMain} {s.headingItalic && <em>{s.headingItalic}</em>}</h2>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {(s.reviews ?? []).map((r) => {
            const stars = r.rating ?? 5;
            return (
              <article
                key={r._key}
                className="bg-white border border-[rgba(232,96,140,0.1)] rounded-[24px] px-6 py-7 flex flex-col gap-4 transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(232,96,140,0.1)]"
              >
                <div className="flex gap-[3px]">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className={j < stars ? 'text-[var(--sc-accent)] leading-none' : 'text-[#f5afc8] leading-none'}>
                      <StarIcon filled={j < stars} />
                    </span>
                  ))}
                </div>
                <p className="text-[15px] leading-[1.65] text-[#5d3048] m-0 flex-1">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-[14px] border-t border-[rgba(232,96,140,0.1)]">
                  <div className="w-10 h-10 rounded-full bg-[linear-gradient(135deg,#ffb3d0,var(--sc-accent))] text-white text-[13px] font-extrabold flex items-center justify-center shrink-0">
                    {r.handle ?? r.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-[#2a1220]">{r.name}</div>
                    {r.service && <div className="text-[12px] text-[#b08090]">{r.service}</div>}
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
