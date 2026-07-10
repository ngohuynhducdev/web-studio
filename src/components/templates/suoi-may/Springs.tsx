'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import styles from './SuoiMay.module.css';
import type { ServicesSection } from '@/types';
import { ArrowIcon, LeafIcon } from './icons';

// Data thumbnails ship at w=200 — request a bigger crop for the cards.
const cardUrl = (url: string) => url.replace(/([?&])w=\d+/, '$1w=800');

export default function Springs({ s }: { s: ServicesSection }) {
  const [ref, inView] = useInView<HTMLElement>();
  const v = inView ? styles.inView : '';

  return (
    <section ref={ref} className={`${styles.springs} py-20 md:py-[7.5rem] bg-[var(--sm-bg)] ${v}`} id="services">
      <div className={styles.sectionInner}>
        <div className={`${styles.secHead} pb-12 md:pb-16`}>
          <h2 className={styles.secH2}>
            {s.headingMain} {s.headingItalic && <em>{s.headingItalic}</em>}
          </h2>
          {s.subtitle && <p className={styles.secSub}>{s.subtitle}</p>}
        </div>

        {/* Signature treatments — showcase cards (no price) */}
        <div className={styles.trGrid}>
          {(s.services ?? []).map((sv) => (
            <article key={sv._key} className={styles.trCard}>
              <div className={styles.trMedia}>
                {sv.imageUrl && (
                  <Image
                    src={cardUrl(sv.imageUrl)}
                    alt={sv.name}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25rem"
                    className="object-cover"
                  />
                )}
                {sv.price && <span className={styles.trPrice}>{sv.price}</span>}
              </div>
              <div className={styles.trBody}>
                <span className={styles.trIcon} aria-hidden="true"><LeafIcon /></span>
                <h3 className={styles.trName}>{sv.name}</h3>
                <p className={styles.trDesc}>{sv.desc}</p>
                {(sv.includes?.length ?? 0) > 0 && (
                  <div className={styles.trSteps}>
                    <p className={styles.trStepsLabel}>What&apos;s Included</p>
                    <ul className={styles.trStepList}>
                      {sv.includes!.map((step, i) => (
                        <li key={i} className={styles.trStepItem}>{step}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <a href="#booking" className={styles.trLink}>
                  Book This Treatment <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
