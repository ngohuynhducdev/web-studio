import styles from './BachThao.module.css';
import { LeafIcon, ShieldIcon, HandsIcon, SparkleIcon } from './icons';

// Velura trust strip — code-only (identity, not CMS-driven).
const ITEMS = [
  { icon: ShieldIcon, label: 'Không gian riêng tư' },
  { icon: LeafIcon,   label: 'Thảo mộc tự nhiên' },
  { icon: HandsIcon,  label: 'Kỹ thuật viên tay nghề' },
  { icon: SparkleIcon, label: 'Trải nghiệm thư thái' },
];

export default function TrustBar() {
  return (
    <section aria-label="Cam kết" className="bg-[var(--bt-bg)]">
      <div className="mx-auto max-w-container px-5 md:px-10">
        <div className={styles.trustGrid}>
          {ITEMS.map(({ icon: Icon, label }) => (
            <div key={label} className={styles.trustItem}>
              <Icon className={styles.trustIcon} />
              <span className={styles.trustLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
