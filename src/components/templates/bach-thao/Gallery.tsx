'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import styles from './BachThao.module.css';
import type { GallerySection } from '@/types';

type Item = NonNullable<GallerySection['items']>[number];

function GalleryFigure({ it, sizes, className }: { it: Item; sizes: string; className: string }) {
  return (
    <figure
      className={`${styles.galleryCell} ${styles.galleryItem} relative overflow-hidden rounded-[12px] bg-[var(--bt-bg-alt)] ${className}`}
    >
      {it.imageUrl ? (
        <Image src={it.imageUrl} alt={it.label} fill sizes={sizes} className={`${styles.galleryImg} object-cover`} />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-[44px] leading-none">{it.emoji ?? '🌿'}</span>
        </div>
      )}
      {it.label && (
        <figcaption className="absolute bottom-3 left-3 rounded-full bg-[rgba(20,32,27,0.74)] px-4 py-[7px] backdrop-blur-sm">
          <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--bt-light)]">
            {it.label}
          </span>
        </figcaption>
      )}
    </figure>
  );
}

// Studio space gallery — large feature photo + a filmstrip of the rest,
// with a plain serif heading and caption pills.
export default function Gallery({ s }: { s: GallerySection }) {
  const [sectionRef, inView] = useInView<HTMLElement>();

  if (!s.items || s.items.length === 0) return null;

  const [feature, ...strip] = s.items;

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className={`bg-[var(--bt-bg)] py-24 md:py-32 ${inView ? styles.inViewGallery : ''}`}
    >
      <div className="mx-auto max-w-container px-5 md:px-10">

        {/* Head — centered */}
        <div className="mx-auto mb-12 flex max-w-[600px] flex-col items-center text-center md:mb-14">
          <h2 className={`${styles.h2} ${styles.h2Plain}`}>
            {s.headingMain}
            {s.headingItalic && <> <em>{s.headingItalic}</em></>}
          </h2>
          {s.note && <p className={`${styles.lede} mt-4 text-center`}>{s.note}</p>}
        </div>

        {/* Feature photo */}
        <GalleryFigure
          it={feature}
          sizes="(min-width: 768px) 1200px, 100vw"
          className="aspect-[4/5] w-full sm:aspect-[16/8] md:aspect-[16/7]"
        />

        {/* Filmstrip — the rest */}
        {strip.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mt-5 md:grid-cols-5 md:gap-5">
            {strip.map((it) => (
              <GalleryFigure
                key={it._key}
                it={it}
                sizes="(min-width: 768px) 20vw, 50vw"
                className="aspect-[4/5]"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
