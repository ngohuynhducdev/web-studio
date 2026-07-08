import styles from './LuaNail.module.css';
import type { ServicesSection } from '@/types';
import { ArrowRightIcon } from './icons';

export default function Services({ s }: { s: ServicesSection }) {
  if (!s.services || s.services.length === 0) return null;

  return (
    <section id="services" className="relative bg-[var(--ln-bg)] py-20 md:py-28">
      <div className="mx-auto max-w-container px-5 md:px-10">
        {/* Section head */}
        <div className="mb-12 flex flex-col items-start gap-5 md:mb-16">
          {s.eyebrow && <span className={styles.eyebrow}>{s.eyebrow}</span>}
          <h2 className={styles.h2}>
            {s.headingMain}
            {s.headingItalic && <> <em>{s.headingItalic}</em></>}
          </h2>
          {s.subtitle && (
            <p className="m-0 max-w-[60ch] text-[16px] leading-[1.6] text-[var(--ln-ink)]">
              {s.subtitle}
            </p>
          )}
        </div>

        {/* Sticker card grid */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {s.services.map((sv, i) => {
            const variants = ['', 'cardYellow', '', 'cardPink', 'cardCyan'];
            const variant = variants[i % variants.length];
            const variantCls = variant ? styles[variant] : '';
            const isDark = variant === 'cardPink';

            return (
              <article
                key={sv._key}
                className={`${styles.stickerCard} ${variantCls} relative flex flex-col gap-5`}
              >
                {/* Tag */}
                {sv.tag && (
                  <span
                    className="absolute -top-4 left-6 rotate-[-3deg] border-[2.5px] border-[var(--ln-ink)] bg-[var(--ln-yellow)] px-3 py-[5px] text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--ln-ink)] shadow-[3px_3px_0_var(--ln-ink)]"
                  >
                    {sv.tag}
                  </span>
                )}

                <header className="flex items-start justify-between gap-4">
                  <h3 className={`${styles.serif} m-0 text-[28px] font-extrabold uppercase leading-none md:text-[32px] ${isDark ? 'text-[var(--ln-bg)]' : 'text-[var(--ln-ink)]'}`}>
                    {sv.name}
                  </h3>
                  {sv.price && (
                    <span className={`${styles.serif} flex-shrink-0 text-[24px] font-extrabold md:text-[28px] ${isDark ? 'text-[var(--ln-yellow)]' : 'text-[var(--ln-pink)]'}`}>
                      {sv.price}
                    </span>
                  )}
                </header>

                {sv.duration && (
                  <span className={`inline-block w-fit border-[2px] border-current px-2 py-[2px] text-[11px] font-bold uppercase tracking-[0.1em] ${isDark ? 'text-[var(--ln-bg)]' : 'text-[var(--ln-ink)]'}`}>
                    ⏱ {sv.duration}
                  </span>
                )}

                {sv.desc && (
                  <p className={`m-0 text-[14px] leading-[1.6] ${isDark ? 'text-[var(--ln-bg)]' : 'text-[var(--ln-ink)]'}`}>
                    {sv.desc}
                  </p>
                )}

                <a
                  href="#booking"
                  className={`mt-auto inline-flex w-fit items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] no-underline ${isDark ? 'text-[var(--ln-yellow)]' : 'text-[var(--ln-pink)]'}`}
                >
                  Đặt ngay <ArrowRightIcon />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
