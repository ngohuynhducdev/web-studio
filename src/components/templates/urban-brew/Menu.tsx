import styles from './UrbanBrew.module.css';
import type { ServicesSection } from '@/types';

export default function Menu({ s }: { s: ServicesSection }) {
  return (
    <section className="bg-[var(--cf-bg)] py-[72px] md:py-[100px]" id="menu">
      <div className="mx-auto max-w-container px-5 md:px-10">
        {/* Section header */}
        <div className="mb-14 flex flex-col gap-[14px]">
          {s.eyebrow && <p className={styles.eyebrow}>{s.eyebrow}</p>}
          <h2 className={styles.h2}>{s.headingMain} {s.headingItalic && <em>{s.headingItalic}</em>}</h2>
          {s.subtitle && <p className="m-0 max-w-[500px] text-[16px] leading-[1.65] text-[var(--cf-muted)]">{s.subtitle}</p>}
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
          {(s.services ?? []).map((drink, i) => (
            <article
              key={drink._key ?? i}
              className={`${styles.menuCard} relative flex flex-col gap-3 overflow-hidden rounded-[22px] border border-[var(--cf-border)] bg-[var(--cf-surface)] p-[30px] transition-all duration-250 hover:-translate-y-[6px] hover:border-[var(--cf-border-accent)] hover:shadow-[0_24px_56px_rgba(0,0,0,0.4)]`}
            >
              {drink.tag && (
                <span
                  className={`absolute top-5 right-5 rounded-full px-[10px] py-1 text-[10px] font-extrabold tracking-[0.1em] uppercase ${drink.featured ? 'bg-[var(--cf-accent)] text-[var(--cf-bg)]' : 'border border-[var(--cf-border)] bg-[var(--cf-elevated)] text-[var(--cf-muted)]'}`}
                >
                  {drink.tag}
                </span>
              )}
              {/* Emoji icon — class name must match CSS module compound selector */}
              <div className={`${styles.menuEmojiWrap} flex h-[60px] w-[60px] items-center justify-center rounded-[16px] bg-[var(--cf-elevated)] transition-all duration-250`}>
                <span className="text-[28px] leading-none">{drink.emoji ?? '☕'}</span>
              </div>
              <h3 className="m-0 mt-1 text-[20px] font-extrabold tracking-[-0.02em] text-[var(--cf-text)]">{drink.name}</h3>
              {drink.desc && <p className="m-0 flex-1 text-[14px] leading-[1.65] text-[var(--cf-muted)]">{drink.desc}</p>}
              <div className="mt-auto flex items-center justify-between border-t border-[var(--cf-border)] pt-[14px]">
                {drink.size  && <span className="text-[12px] font-semibold tracking-[0.04em] text-[var(--cf-muted)]">{drink.size}</span>}
                {drink.price && <span className="text-[16px] font-black tracking-[-0.02em] text-[var(--cf-accent)]">{drink.price}</span>}
              </div>
              <a
                href="#location"
                className={`${styles.menuOrder} mt-1 block text-center text-[13px] font-bold tracking-[0.04em] text-[var(--cf-muted)] no-underline transition-colors duration-200`}
              >
                Gọi ngay →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
