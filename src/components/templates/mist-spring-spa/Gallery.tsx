'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import styles from './MistSpringSpa.module.css';
import type { GallerySection } from '@/types';

export default function Gallery({ s }: { s: GallerySection }) {
  const [ref, inView] = useInView<HTMLElement>();
  const v = inView ? styles.inView : '';

  return (
    <section ref={ref} id="gallery" className={`${styles.gallery} py-20 md:py-[7.5rem] bg-[var(--sm-bg)] ${v}`}>
      <div className={styles.sectionInner}>
        <div className={`${styles.secHead} pb-12 md:pb-16`}>
          <h2 className={styles.secH2}>
            {s.headingMain} {s.headingItalic && <em>{s.headingItalic}</em>}
          </h2>
          {s.note && <p className={styles.secSub}>{s.note}</p>}
        </div>

        <div className={styles.galGrid}>
          {(s.items ?? []).map((it) => (
            <figure key={it._key} className={`${styles.galCell} ${it.wide ? styles.galWide : ''}`}>
              {it.imageUrl && (
                <Image
                  src={it.imageUrl}
                  alt={it.label}
                  fill
                  sizes={it.wide ? "(max-width: 767px) 100vw, 66vw" : "(max-width: 767px) 50vw, 33vw"}
                  className="object-cover"
                />
              )}
              {it.label && <figcaption className={styles.galCap}>{it.label}</figcaption>}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
