import styles from './LuaNail.module.css';
import type { AboutSection } from '@/types';

export default function About({ s }: { s: AboutSection }) {
  return (
    <section id="about" className="relative overflow-hidden bg-[var(--ln-ink)] py-20 text-[var(--ln-bg)] md:py-28">
      <div className="mx-auto grid max-w-container grid-cols-1 gap-12 px-5 md:px-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">

        {/* LEFT — copy */}
        <div className="flex flex-col gap-7">
          {s.eyebrow && (
            <span className={`${styles.eyebrow} bg-[var(--ln-pink)] text-[var(--ln-bg)]`}>
              {s.eyebrow}
            </span>
          )}

          <h2 className={`${styles.h2} text-[var(--ln-bg)]`}>
            {s.headingMain}
            {s.headingItalic && <> <em className="bg-[var(--ln-yellow)] text-[var(--ln-ink)]">{s.headingItalic}</em></>}
          </h2>

          {s.paragraphs && s.paragraphs.length > 0 && (
            <div className="flex flex-col gap-4 text-[var(--ln-bg)]/85">
              {s.paragraphs.map((p, i) => (
                <p key={i} className="m-0 text-[16px] leading-[1.7]">{p}</p>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT — sticker quote card */}
        {s.quote && (
          <aside
            className="relative rotate-[2deg] self-start border-[4px] border-[var(--ln-yellow)] bg-[var(--ln-pink)] p-8 md:p-10"
            style={{ boxShadow: '8px 8px 0 var(--ln-yellow)' }}
          >
            <span
              aria-hidden="true"
              className={`${styles.script} absolute -top-7 -right-4 rotate-12 bg-[var(--ln-yellow)] px-3 py-1 text-[20px] font-bold text-[var(--ln-ink)] border-[2px] border-[var(--ln-ink)]`}
            >
              real talk
            </span>

            <p className={`${styles.serif} m-0 text-[26px] font-extrabold uppercase leading-[1.1] text-[var(--ln-bg)] md:text-[32px]`}>
              &ldquo;{s.quote}&rdquo;
            </p>
            {s.quoteAuthor && (
              <footer className="mt-5 text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--ln-yellow)]">
                — {s.quoteAuthor}
              </footer>
            )}
          </aside>
        )}
      </div>
    </section>
  );
}
