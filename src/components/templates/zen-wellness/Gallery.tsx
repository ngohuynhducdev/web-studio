'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import styles from './ZenWellness.module.css';
import type { GallerySection } from '@/types';

export default function Gallery({ s }: { s: GallerySection }) {
  const [ref, inView] = useInView<HTMLElement>();
  if (!s.items || s.items.length === 0) return null;

  return (
    <section ref={ref} id="space" className={`bg-[var(--zw-bg)] py-20 md:py-28 ${inView ? styles.inView : ''}`}>
      <div className="mx-auto max-w-container px-5 md:px-10">
        {/* Head */}
        <div className={`${styles.reveal} mb-12 md:mb-16 flex flex-col items-start gap-5`}>
          {s.eyebrow && <span className={styles.chip}>{s.eyebrow}</span>}
          <h2 className={`${styles.h2} m-0 text-[var(--zw-ink)]`}>
            {s.headingMain} {s.headingItalic && <span className={styles.marker}>{s.headingItalic}</span>}
          </h2>
        </div>

        {/* Rounded grid with floating tag chips */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {s.items.map((item, i) => (
            <figure
              key={item._key}
              style={{ '--zw-delay': `${i * 80}ms` } as React.CSSProperties}
              className={`${styles.reveal} group relative m-0 overflow-hidden rounded-3xl bg-[var(--zw-tint)] ${
                item.wide ? 'md:col-span-2 md:aspect-[16/10] aspect-[16/11]' : 'aspect-[4/5]'
              }`}
            >
              {item.imageUrl && (
                <Image
                  src={item.imageUrl}
                  alt={item.label}
                  fill
                  sizes={item.wide ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              )}
              {/* Floating tag chip */}
              <figcaption className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/88 backdrop-blur-sm px-3.5 py-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--zw-accent)]" aria-hidden="true" />
                <span className="text-[0.72rem] font-semibold text-[var(--zw-ink)]">
                  {item.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
