import styles from './UrbanBrew.module.css';
import type { AboutSection } from '@/types';

const ABOUT_VALUES = [
  { icon: '☕', label: 'Single origin' },
  { icon: '🌱', label: 'Farm to cup' },
  { icon: '🔥', label: 'Rang thủ công' },
  { icon: '⚡', label: 'Made to order' },
];

export default function About({ s }: { s: AboutSection }) {
  return (
    <section className="bg-[var(--cf-light-bg)] py-[72px] md:py-[120px]" id="about">
      <div className="mx-auto grid max-w-container grid-cols-1 items-start gap-12 px-5 md:grid-cols-[1fr_1.15fr] md:gap-20 md:px-10">

        {/* Left: blockquote */}
        {s.quote && (
          <div className="flex gap-7 pt-3">
            <div className="w-[3px] flex-shrink-0 self-stretch rounded-sm bg-[var(--cf-accent)] min-h-[160px]" aria-hidden="true" />
            <blockquote className="m-0 flex flex-col gap-4">
              <span className={styles.aboutQuoteMark} aria-hidden="true">&ldquo;</span>
              <p className={styles.aboutQuote}>{s.quote}</p>
              {s.quoteAuthor && (
                <footer className="block text-[13px] font-semibold tracking-[0.05em] text-[var(--cf-light-muted)]">
                  — {s.quoteAuthor}
                </footer>
              )}
            </blockquote>
          </div>
        )}

        {/* Right: content */}
        <div className="flex flex-col gap-5">
          {s.eyebrow && (
            <p className="m-0 text-[11px] font-bold tracking-[0.14em] uppercase text-[#8b7035]">{s.eyebrow}</p>
          )}
          <h2 className={styles.aboutH2}>{s.headingMain} {s.headingItalic && <em>{s.headingItalic}</em>}</h2>
          {(s.paragraphs ?? []).map((p, i) => (
            <p key={i} className="m-0 text-[16px] leading-[1.75] text-[var(--cf-light-muted)]">{p}</p>
          ))}

          {/* Values grid */}
          <div className="mt-2 grid grid-cols-1 gap-[10px] sm:grid-cols-2">
            {ABOUT_VALUES.map((v, i) => (
              <div
                key={i}
                className="flex items-center gap-[10px] rounded-[12px] border border-[rgba(15,14,13,0.08)] bg-[rgba(15,14,13,0.05)] px-4 py-3 transition-colors duration-200 hover:border-[rgba(245,200,66,0.2)] hover:bg-[rgba(245,200,66,0.08)]"
              >
                <span className="flex-shrink-0 text-[18px]">{v.icon}</span>
                <span className="text-[13px] font-bold text-[var(--cf-light-text)]">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
