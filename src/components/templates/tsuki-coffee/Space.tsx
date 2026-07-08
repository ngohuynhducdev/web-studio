import Image from 'next/image';
import styles from './TsukiCoffee.module.css';
import type { GallerySection } from '@/types';
import Reveal, { RevealStagger, RevealItem } from '@/components/ui/motion/Reveal';

export default function Space({ s }: { s: GallerySection }) {
  if (!s.items || s.items.length === 0) return null;

  return (
    <section id="space" className="relative overflow-hidden bg-[var(--tc-bg)] py-28 md:py-36">
      <div className="mx-auto max-w-container px-5 md:px-10">

        {/* Head */}
        <Reveal className="mb-16 flex flex-col items-start gap-5 md:mb-20 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="flex max-w-[640px] flex-col gap-5">
            {s.eyebrow && <span className={styles.eyebrow}>{s.eyebrow}</span>}
            <h2 className={styles.h2}>
              {s.headingMain}
              {s.headingItalic && <> <em>{s.headingItalic}</em></>}
            </h2>
          </div>
          {s.note && (
            <p className="m-0 max-w-[26ch] text-[11px] font-medium tracking-[0.28em] uppercase text-[var(--tc-muted)]">
              {s.note}
            </p>
          )}
        </Reveal>

        {/* Asymmetric grid */}
        <RevealStagger className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {s.items.map((it) => (
            <RevealItem key={it._key} className={`grid ${it.wide ? 'md:col-span-2' : ''}`}>
              <figure className={`${styles.spaceCell} relative ${it.wide ? 'md:aspect-[16/10]' : 'aspect-[4/5]'} overflow-hidden rounded-[2px] border border-[var(--tc-line)] bg-[var(--tc-surface)]`}>
                {it.imageUrl ? (
                  <Image
                    src={it.imageUrl}
                    alt={it.label}
                    fill
                    sizes={it.wide ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'}
                    className={`${styles.spaceImg} object-cover`}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[var(--tc-walnut-deep)]">
                    <span className="text-[60px] text-[var(--tc-gold-soft)]">{it.emoji ?? '☕'}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--tc-bg)]/70 via-transparent to-transparent" />
                <figcaption className="absolute bottom-5 left-5 right-5 flex items-center gap-2">
                  <span className="inline-block h-[6px] w-[6px] rounded-full bg-[var(--tc-gold)]" aria-hidden="true" />
                  <span className="text-[11px] font-medium tracking-[0.24em] uppercase text-[var(--tc-cream)]">
                    {it.label}
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
