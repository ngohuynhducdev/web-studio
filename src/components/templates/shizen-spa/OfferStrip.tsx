import styles from './ShizenSpa.module.css';

const OFFER_TEXT = 'Khách mới — giảm 15% liệu trình đầu tiên';

export default function OfferStrip() {
  return (
    <div className="bg-[var(--sz-earth)] py-8 md:py-10 overflow-hidden">
      {/* Scrolling marquee — decorative; real text lives in the sr-only paragraph */}
      <p className="sr-only">Ưu đãi có hạn: {OFFER_TEXT}.</p>
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[0, 1].map((half) => (
            <div key={half} className={styles.marqueeGroup}>
              {Array.from({ length: 4 }).map((_, i) => (
                <span
                  key={i}
                  className={`font-[family-name:var(--sz-serif)] font-light italic text-[2.2rem] md:text-[3.6rem] text-white/90 tracking-[-0.015em] whitespace-nowrap leading-none ${i % 2 === 1 ? styles.marqueeOutline : ''}`}
                >
                  {OFFER_TEXT}
                  <span className="not-italic text-white/45 mx-10 text-[0.55em] align-middle">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[75rem] mx-auto px-6 md:px-10 mt-7 flex justify-center">
        <a
          href="#booking"
          className="inline-flex items-center gap-[0.625rem] text-[0.85rem] font-semibold tracking-[0.06em] text-[var(--sz-earth)] bg-white/92 no-underline px-7 py-[0.875rem] whitespace-nowrap transition-[background,gap] duration-[220ms] hover:bg-white hover:gap-[0.875rem] active:translate-y-px"
        >
          Đặt lịch ngay
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
