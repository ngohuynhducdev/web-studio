import styles from './UrbanBrew.module.css';

const MARQUEE_ITEMS = [
  'SPECIALTY COFFEE', 'FRESH DAILY', 'SINGLE ORIGIN',
  'HANDCRAFTED', 'BREW YOUR WAY', 'GOOD VIBES ONLY',
];

export default function Marquee() {
  return (
    <div className="relative z-[2] overflow-hidden bg-[var(--cf-accent)] py-[15px]" aria-hidden="true">
      <div className={styles.marqueeTrack}>
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap px-7 text-[12px] font-black tracking-[0.14em] uppercase text-[var(--cf-bg)]"
          >
            {item}
            <span className="ml-7 text-[rgba(15,14,13,0.35)]"> ·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
