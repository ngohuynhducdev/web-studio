import styles from './LuaNail.module.css';

const ITEMS = [
  'NAIL · ART · STUDIO',
  '✷',
  'GEL · DIPPING · CHROME',
  '✷',
  'ĐẶT LỊCH QUA ZALO',
  '✷',
  'OPEN 7 DAYS',
  '✷',
];

export default function Marquee() {
  // Render twice so the loop is seamless (animation translates -50%).
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y-[3px] border-[var(--ln-ink)] bg-[var(--ln-pink)] py-3">
      <div className={styles.marqueeTrack}>
        {loop.map((item, i) => (
          <span
            key={i}
            className="mx-6 whitespace-nowrap text-[18px] font-bold uppercase tracking-[0.16em] text-[var(--ln-bg)] md:text-[22px]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
