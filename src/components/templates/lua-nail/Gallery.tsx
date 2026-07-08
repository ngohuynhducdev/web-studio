import Image from 'next/image';
import styles from './LuaNail.module.css';
import type { GallerySection } from '@/types';

const ROTATIONS = ['polaroidA', 'polaroidB', 'polaroidC', 'polaroidD'];

export default function Gallery({ s }: { s: GallerySection }) {
  if (!s.items || s.items.length === 0) return null;

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[var(--ln-yellow)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-container px-5 md:px-10">
        {/* Section head */}
        <div className="mb-14 flex flex-col items-start gap-5 md:mb-16">
          {s.eyebrow && (
            <span className={`${styles.eyebrow} bg-[var(--ln-bg)] text-[var(--ln-ink)]`}>
              {s.eyebrow}
            </span>
          )}
          <h2 className={styles.h2}>
            {s.headingMain}
            {s.headingItalic && <> <em>{s.headingItalic}</em></>}
          </h2>
          {s.note && (
            <p className={`${styles.script} m-0 text-[24px] text-[var(--ln-ink)] md:text-[28px]`}>
              {s.note} ✦
            </p>
          )}
        </div>

        {/* Polaroid grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-10">
          {s.items.map((it, i) => {
            const rotCls = styles[ROTATIONS[i % ROTATIONS.length]];
            return (
              <figure key={it._key} className={`${styles.polaroid} ${rotCls} relative`}>
                <div className="relative aspect-square overflow-hidden bg-[var(--ln-pink-soft)]">
                  {it.imageUrl ? (
                    <Image
                      src={it.imageUrl}
                      alt={it.label}
                      fill
                      sizes="(min-width: 768px) 33vw, 50vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="text-[80px] leading-none">{it.emoji ?? '💅'}</span>
                    </div>
                  )}
                </div>
                <figcaption className={`${styles.script} mt-3 text-center text-[20px] leading-tight text-[var(--ln-ink)]`}>
                  {it.label}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
