import Image from 'next/image';
import type { AboutSection } from '@/types';
import styles from './ThaiSpa.module.css';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1570174006382-148305ce4972?w=1200&q=85&fit=crop&auto=format';

interface Props { data?: AboutSection }

export default function LovingTouch({ data }: Props = {}) {
  const heading   = data?.headingMain   ?? 'Healing Through';
  const headingEm = data?.headingItalic ?? 'Every Gentle Touch';
  const body      = data?.paragraphs?.[0] ?? '';
  const image     = data?.imageUrl ?? DEFAULT_IMAGE;

  return (
    <section className="bg-[var(--ts-ivory)] pb-24" id="services">
      {/* On mobile: full-bleed (no padding/max-width); on md+: constrained container */}
      <div className="md:max-w-container md:mx-auto md:px-[26px]">
        <div className={styles.lovingTouchWrap}>
          <Image
            src={image}
            alt=""
            fill
            className="object-cover object-[center_55%]"
            sizes="(min-width: 1200px) 1200px, 100vw"
          />
          <div className={styles.lovingTouchScrim} />
          <div className={styles.lovingTouchCard}>
            <h2 className={styles.lovingTouchTitle}>
              {heading}<br /><em>{headingEm}</em>
            </h2>
            <p className={styles.lovingTouchBody}>{body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
