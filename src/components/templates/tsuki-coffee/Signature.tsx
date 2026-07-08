import Image from 'next/image';
import styles from './TsukiCoffee.module.css';
import type { ServicesSection } from '@/types';
import Reveal, { RevealStagger, RevealItem } from '@/components/ui/motion/Reveal';
import { ArrowRightIcon } from './icons';

// Default photos when CMS doesn't provide imageUrl per item.
const FALLBACK_PHOTOS = [
  'https://images.unsplash.com/photo-1621555470436-d36e9683bae5?w=900&q=85&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1511473382732-48f79725e40b?w=900&q=85&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1648569825515-cdfde9afa5cc?w=900&q=85&fit=crop&auto=format',
];

export default function Signature({ s }: { s: ServicesSection }) {
  if (!s.services || s.services.length === 0) return null;

  return (
    <section id="signature" className="relative overflow-hidden bg-[var(--tc-bg-soft)] py-28 md:py-36">
      <div className="mx-auto max-w-container px-5 md:px-10">

        {/* Head */}
        <Reveal className="mb-16 flex flex-col items-center gap-6 text-center md:mb-20">
          {s.eyebrow && <span className={styles.eyebrow}>{s.eyebrow}</span>}
          <h2 className={styles.h2}>
            {s.headingMain}
            {s.headingItalic && <> <em>{s.headingItalic}</em></>}
          </h2>
          {s.subtitle && (
            <p className={`${styles.lede} text-center`}>{s.subtitle}</p>
          )}
        </Reveal>

        {/* Signature cards */}
        <RevealStagger className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {s.services.slice(0, 3).map((sv, i) => {
            const photo = sv.imageUrl ?? FALLBACK_PHOTOS[i % FALLBACK_PHOTOS.length];
            return (
              <RevealItem key={sv._key} className="grid">
                <article className={`${styles.signatureCard} ${styles.glass} relative flex h-full flex-col overflow-hidden rounded-[4px] border border-[var(--tc-line)]`}>
                  {/* Glow on hover */}
                  <div
                    aria-hidden="true"
                    className={`${styles.signatureGlow} pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,165,116,0.18)_0%,transparent_60%)]`}
                  />

                  {/* Photo */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={photo}
                      alt={sv.name}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--tc-bg-soft)] via-transparent to-transparent" />
                    {sv.tag && (
                      <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-[var(--tc-gold-soft)] bg-[rgba(10,9,8,0.6)] px-3 py-[5px] text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--tc-gold)] backdrop-blur-sm">
                        {sv.tag}
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="relative flex flex-1 flex-col gap-4 p-7 md:p-8">
                    <h3 className={`${styles.serif} m-0 text-[28px] font-light leading-tight text-[var(--tc-cream)]`}>
                      {sv.name}
                    </h3>
                    {sv.desc && (
                      <p className="m-0 text-[13px] leading-[1.7] text-[var(--tc-cream-soft)]">
                        {sv.desc}
                      </p>
                    )}

                    <div className="mt-auto flex items-center justify-between gap-4 border-t border-[var(--tc-line)] pt-5">
                      {sv.price && (
                        <span className={`${styles.serif} text-[24px] text-[var(--tc-gold)]`}>{sv.price}</span>
                      )}
                      <a href="#menu" className="inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.24em] uppercase text-[var(--tc-cream-soft)] no-underline transition-colors hover:text-[var(--tc-gold)]">
                        Khám phá <ArrowRightIcon />
                      </a>
                    </div>
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
