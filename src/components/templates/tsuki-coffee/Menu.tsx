import styles from './TsukiCoffee.module.css';
import type { ServicesSection } from '@/types';
import Reveal from '@/components/ui/motion/Reveal';

export default function Menu({ s }: { s: ServicesSection }) {
  if (!s.services || s.services.length === 0) return null;

  return (
    <section id="menu" className="relative overflow-hidden bg-[var(--tc-bg-soft)] py-28 md:py-36">
      <div className="mx-auto max-w-container px-5 md:px-10">

        {/* Head */}
        <Reveal className="mb-16 grid grid-cols-1 gap-8 md:mb-20 md:grid-cols-[1fr_1.2fr] md:items-end md:gap-16">
          <div className="flex flex-col gap-5">
            {s.eyebrow && <span className={styles.eyebrow}>{s.eyebrow}</span>}
            <h2 className={styles.h2}>
              {s.headingMain}
              {s.headingItalic && <> <em>{s.headingItalic}</em></>}
            </h2>
          </div>
          {s.subtitle && <p className={styles.lede}>{s.subtitle}</p>}
        </Reveal>

        {/* Menu list — editorial */}
        <Reveal>
          <ul className="m-0 list-none border-t border-[var(--tc-line)] p-0">
            {s.services.map((sv) => (
              <li
                key={sv._key}
                className={`${styles.menuRow} grid grid-cols-[1fr_auto] gap-x-6 gap-y-2 border-b border-[var(--tc-line)] py-7 md:grid-cols-[1.2fr_2fr_auto] md:gap-x-12 md:py-9`}
              >
                {/* Left — name + size */}
                <div className="flex flex-col gap-1">
                  <h3 className={`${styles.menuName} ${styles.serif} m-0 text-[24px] font-light leading-tight text-[var(--tc-cream)] md:text-[28px]`}>
                    {sv.name}
                  </h3>
                  {sv.size && (
                    <span className="text-[11px] tracking-[0.2em] uppercase text-[var(--tc-muted)]">{sv.size}</span>
                  )}
                </div>

                {/* Desc */}
                {sv.desc && (
                  <p className="col-span-2 m-0 text-[13px] leading-[1.7] text-[var(--tc-cream-soft)] md:col-span-1 md:max-w-[44ch]">
                    {sv.desc}
                  </p>
                )}

                {/* Price */}
                <div className="col-start-2 row-start-1 flex items-center md:col-start-3">
                  {sv.price && (
                    <span className={`${styles.serif} text-[22px] text-[var(--tc-gold)] md:text-[26px]`}>
                      {sv.price}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
