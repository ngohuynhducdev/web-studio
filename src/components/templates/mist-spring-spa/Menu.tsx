'use client';

import { useInView } from '@/hooks/useInView';
import styles from './MistSpringSpa.module.css';
import type { MenuSection } from '@/types';

export default function Menu({ s }: { s: MenuSection }) {
  const [ref, inView] = useInView<HTMLElement>();
  const v = inView ? styles.inView : '';

  return (
    <section ref={ref} id="menu" className={`${styles.menu} py-20 md:py-[7.5rem] bg-[var(--sm-bg2)] border-t border-[var(--sm-line)] ${v}`}>
      <div className={styles.sectionInner}>
        <div className={`${styles.secHead} pb-12 md:pb-16`}>
          <h2 className={styles.secH2}>
            {s.headingMain} {s.headingItalic && <em>{s.headingItalic}</em>}
          </h2>
          {s.subtitle && <p className={styles.secSub}>{s.subtitle}</p>}
        </div>

        <div className={styles.mnGrid}>
          {(s.categories ?? []).map((cat) => (
            <div key={cat._key} className={styles.mnCat}>
              <h3 className={styles.mnCatTitle}>{cat.title}</h3>
              <ul className="list-none m-0 p-0">
                {(cat.items ?? []).map((it) => (
                  <li key={it._key} className={styles.mnRow}>
                    <span className={styles.mnName}>
                      {it.name}
                      {it.duration && <span className={styles.mnDur}> · {it.duration}</span>}
                    </span>
                    <span className={styles.mnLeader} aria-hidden="true" />
                    <span className={styles.mnPrice}>{it.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {s.note && <p className={styles.mnNote}>{s.note}</p>}
      </div>
    </section>
  );
}
