'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import styles from './ShizenSpa.module.css';
import type { TeamSection } from '@/types';

export default function Team({ s }: { s: TeamSection }) {
  const [ref, inView] = useInView<HTMLElement>();
  const v = inView ? styles.inView : '';

  return (
    <section ref={ref} className={`${styles.team} ${v}`} id="team">
      <div className={styles.sectionInner}>
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>{s.eyebrow}</p>
          <h2 className={styles.h2}>{s.headingMain}<br />{s.headingItalic && <em>{s.headingItalic}</em>}</h2>
        </div>
        <div className={styles.teamGrid}>
          {(s.members ?? []).map((m) => (
            <article key={m._key} className={styles.teamCard}>
              <div className={styles.teamMedia}>
                {m.imageUrl
                  ? <Image src={m.imageUrl} alt={m.name} fill sizes="(max-width: 767px) 100vw, 33vw" className={styles.teamAvatarImg} />
                  : <span className={styles.teamMonogram} aria-hidden="true">{m.name.charAt(0)}</span>
                }
                <div className={styles.teamExpTag}>{m.exp} kinh nghiệm</div>
              </div>
              <div className={styles.teamBody}>
                <h3 className={styles.teamName}>{m.name}</h3>
                <p className={styles.teamRole}>{m.role}</p>
                <div className={styles.teamSpecialty}>{m.specialty}</div>
                <div className={styles.teamCert}><span className={styles.teamCertDot} aria-hidden="true">✦</span>{m.cert}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
