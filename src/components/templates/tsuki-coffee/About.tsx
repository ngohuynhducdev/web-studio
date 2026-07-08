import Image from 'next/image';
import styles from './TsukiCoffee.module.css';
import type { AboutSection } from '@/types';
import Reveal from '@/components/ui/motion/Reveal';

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1536183801678-ecc5eaf42bf9?w=1200&q=85&fit=crop&auto=format';

export default function About({ s }: { s: AboutSection }) {
  return (
    <section id="about" className="relative overflow-hidden bg-[var(--tc-bg)] py-28 md:py-36">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className={`${styles.glow}`}
        style={{
          width: '700px', height: '700px',
          background: 'radial-gradient(circle, rgba(212,165,116,0.08) 0%, transparent 70%)',
          top: '20%', left: '-200px',
        }}
      />

      <div className="relative mx-auto grid max-w-container grid-cols-1 gap-16 px-5 md:px-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24">

        {/* LEFT — copy */}
        <Reveal className="flex flex-col gap-8">
          {s.eyebrow && <span className={styles.eyebrow}>{s.eyebrow}</span>}
          <h2 className={styles.h2}>
            {s.headingMain}
            {s.headingItalic && <> <em>{s.headingItalic}</em></>}
          </h2>

          {s.paragraphs && s.paragraphs.length > 0 && (
            <div className="flex flex-col gap-5">
              {s.paragraphs.map((p, i) => (
                <p key={i} className={`${styles.lede} text-[16px] md:text-[17px]`}>{p}</p>
              ))}
            </div>
          )}

          {s.quote && (
            <blockquote className="relative mt-4 border-l border-[var(--tc-gold)] pl-6">
              <p className={`${styles.serif} m-0 text-[22px] italic leading-[1.55] text-[var(--tc-cream)] md:text-[26px]`}>
                &ldquo;{s.quote}&rdquo;
              </p>
              {s.quoteAuthor && (
                <footer className="mt-3 text-[10px] font-medium tracking-[0.28em] uppercase text-[var(--tc-gold)]">
                  — {s.quoteAuthor}
                </footer>
              )}
            </blockquote>
          )}
        </Reveal>

        {/* RIGHT — image with glass border + gold trim */}
        <Reveal delay={0.15} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] border border-[var(--tc-line)]">
            <Image
              src={ABOUT_IMAGE}
              alt="Không gian quán đêm"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--tc-bg)]/40 to-transparent" />
          </div>
          {/* Gold corner accents */}
          <span aria-hidden="true" className="absolute -top-2 -left-2 h-10 w-10 border-t border-l border-[var(--tc-gold)]" />
          <span aria-hidden="true" className="absolute -bottom-2 -right-2 h-10 w-10 border-b border-r border-[var(--tc-gold)]" />
        </Reveal>
      </div>
    </section>
  );
}
