'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import styles from './ShizenSpa.module.css';
import type { GallerySection } from '@/types';

export default function Gallery({ s }: { s: GallerySection }) {
  const [ref, inView] = useInView<HTMLElement>();
  const v = inView ? styles.inView : '';

  return (
    <section ref={ref} className={`${styles.gallery} py-20 md:py-[6.875rem] bg-[var(--sz-off)] border-t border-[var(--sz-border)] ${v}`} id="gallery">
      <div className={styles.sectionInner}>
        {/* Section head — animation target via compound selector */}
        <div className={`${styles.gallerySectionHead} pb-12 md:pb-16 flex flex-col items-start gap-8 md:flex-row md:justify-between md:items-end`}>
          <div>
            <p className={styles.eyebrow}>{s.eyebrow}</p>
            <h2 className={styles.h2}>
              {s.headingMain}<br />
              {s.headingItalic && <em>{s.headingItalic}</em>}
            </h2>
          </div>
          {s.note && (
            <p className="text-[0.85rem] leading-[1.72] text-[var(--sz-muted)] max-w-full text-left md:max-w-[18.75rem] md:text-right md:pb-2">
              {s.note}
            </p>
          )}
        </div>

        {/* Magazine-spread grid — real photos with editorial captions below */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-12">
          {(s.items ?? []).map((item, i) => (
            <figure
              key={item._key}
              className={`${styles.galleryCell} group m-0 ${item.wide ? 'col-span-2' : ''}`}
            >
              <div className={`${styles.galleryMedia} relative overflow-hidden bg-[var(--sz-cream)] ${item.wide ? 'aspect-[8/5]' : 'aspect-[4/5]'}`}>
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.label}
                    fill
                    sizes={item.wide ? '(max-width: 767px) 100vw, 38rem' : '(max-width: 767px) 50vw, 18rem'}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-[3rem] opacity-60" aria-hidden="true">
                    {item.emoji}
                  </span>
                )}
              </div>
              <figcaption className={styles.galleryCaption}>
                <span className={styles.galleryIndex} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.galleryLabel}>{item.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
