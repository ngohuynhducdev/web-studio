import styles from './BachThao.module.css';
import { LeafIcon, ShieldIcon, HandsIcon, SparkleIcon } from './icons';

// Velura trust strip — code-only (identity, not CMS-driven).
const ITEMS = [
  { icon: ShieldIcon, label: 'Private Space' },
  { icon: LeafIcon,   label: 'Natural Herbs' },
  { icon: HandsIcon,  label: 'Skilled Therapists' },
  { icon: SparkleIcon, label: 'Unhurried Experience' },
];

export default function TrustBar() {
  return (
    <section aria-label="Our Promise" className="bg-[var(--bt-bg)]">
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
