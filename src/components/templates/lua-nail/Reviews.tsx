import styles from './LuaNail.module.css';
import type { ReviewsSection } from '@/types';
import { StarIcon } from './icons';

const ROTATIONS = ['-rotate-2', 'rotate-1', '-rotate-1'];

export default function Reviews({ s }: { s: ReviewsSection }) {
  if (!s.reviews || s.reviews.length === 0) return null;

  return (
    <section id="reviews" className="relative bg-[var(--ln-pink-soft)] py-20 md:py-28">
      <div className="mx-auto max-w-container px-5 md:px-10">
        {/* Head */}
        <div className="mb-14 flex flex-col items-start gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-5">
            {s.eyebrow && <span className={styles.eyebrow}>{s.eyebrow}</span>}
            <h2 className={styles.h2}>
              {s.headingMain}
              {s.headingItalic && <> <em>{s.headingItalic}</em></>}
            </h2>
          </div>

          {/* Big rating badge */}
          <div className="flex items-center gap-4 rotate-[-3deg] border-[3px] border-[var(--ln-ink)] bg-[var(--ln-yellow)] px-5 py-3 shadow-[4px_4px_0_var(--ln-ink)]">
            <span className={`${styles.serif} text-[44px] font-extrabold leading-none text-[var(--ln-pink)]`}>4.9</span>
            <div className="flex flex-col gap-[2px]">
              <span className="flex gap-[2px] text-[var(--ln-ink)]"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--ln-ink)]">200+ google</span>
            </div>
          </div>
        </div>

        {/* Speech bubble cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-8">
          {s.reviews.map((r, i) => {
            const rotCls = ROTATIONS[i % ROTATIONS.length];
            return (
              <article
                key={r._key}
                className={`${styles.stickerCard} relative flex flex-col gap-4 ${rotCls}`}
              >
                {/* Stars */}
                <div className="flex gap-[3px] text-[var(--ln-pink)]">
                  {Array.from({ length: r.rating ?? 5 }).map((_, k) => <StarIcon key={k} />)}
                </div>

                {/* Body — handwritten feel */}
                <p className={`${styles.script} m-0 text-[22px] leading-[1.35] text-[var(--ln-ink)]`}>
                  &ldquo;{r.text}&rdquo;
                </p>

                {/* Author */}
                <footer className="mt-auto flex items-center gap-3 border-t-[2.5px] border-dashed border-[var(--ln-ink)] pt-4">
                  <div className={`${styles.serif} flex h-12 w-12 items-center justify-center border-[2.5px] border-[var(--ln-ink)] bg-[var(--ln-yellow)] text-[18px] font-extrabold text-[var(--ln-ink)]`}>
                    {r.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <span className="text-[14px] font-bold text-[var(--ln-ink)]">{r.name}</span>
                    {r.service && (
                      <span className="text-[11px] uppercase tracking-[0.08em] text-[var(--ln-pink)]">{r.service}</span>
                    )}
                  </div>
                </footer>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
