import styles from './SweetCorner.module.css';
import type { HeroSection } from '@/types';
import { HeartIcon } from './icons';

export default function Hero({ s }: { s: HeroSection }) {
  return (
    <>
      <section className="min-h-dvh bg-[#fff5f8] flex items-center pt-[120px] pb-[60px] md:pb-[80px] relative overflow-hidden">
        {/* Blobs */}
        <div
          className={`absolute w-[600px] h-[600px] rounded-[60%_40%_55%_45%/50%_60%_40%_55%] bg-[radial-gradient(circle,rgba(255,182,212,0.45)_0%,transparent_70%)] top-[-100px] right-[-80px] pointer-events-none ${styles.heroBlob1}`}
          aria-hidden="true"
        />
        <div
          className={`absolute w-[400px] h-[400px] rounded-[45%_55%_60%_40%/60%_40%_55%_45%] bg-[radial-gradient(circle,rgba(255,214,232,0.5)_0%,transparent_68%)] bottom-[50px] left-[-100px] pointer-events-none ${styles.heroBlob2}`}
          aria-hidden="true"
        />
        <div
          className={`absolute w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle,rgba(252,228,238,0.6)_0%,transparent_70%)] top-[60%] right-[32%] pointer-events-none ${styles.heroBlob3}`}
          aria-hidden="true"
        />

        <div className="max-w-container mx-auto px-5 md:px-10 w-full grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-[60px] items-center relative z-[1] text-center lg:text-left">
          {/* Left */}
          <div className="flex flex-col gap-7">
            <div className="inline-flex items-center gap-2 bg-[rgba(232,96,140,0.08)] text-[var(--sc-accent)] border border-[rgba(232,96,140,0.2)] text-[13px] font-bold px-[14px] py-[6px] rounded-full w-fit self-center lg:self-start">
              <HeartIcon />{s.eyebrow ?? 'Bánh tươi làm mỗi ngày tại TP.HCM'}
            </div>
            <h1 className="font-[family-name:var(--font-pacifico)] font-normal text-[clamp(30px,5vw,54px)] leading-[1.3] text-[#2a1220] m-0">
              {s.headingMain}{' '}
              {s.headingItalic && <span className="text-[var(--sc-accent)]">{s.headingItalic}</span>}{' '}
              <span className="text-[#c94d79]">mỗi ngày!</span>
            </h1>
            {s.subtitle && <p className="text-[17px] leading-[1.7] text-[#7d4560] m-0 max-w-[500px] mx-auto lg:mx-0">{s.subtitle}</p>}
            <div className="flex gap-[14px] flex-wrap justify-center lg:justify-start">
              <a href="#order" className={styles.btnPrimary}>{s.ctaPrimary ?? '💬 Đặt bánh qua Zalo'}</a>
              <a href="#menu"  className={styles.btnOutline}>{s.ctaSecondary ?? 'Xem menu →'}</a>
            </div>
            {s.stats && s.stats.length > 0 && (
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 px-[26px] py-5 bg-white border border-[rgba(232,96,140,0.12)] rounded-[20px] shadow-[0_4px_20px_rgba(232,96,140,0.08)] w-fit mx-auto lg:mx-0">
                {s.stats.map((stat, i) => (
                  <span key={stat._key} style={{ display: 'contents' }}>
                    {i > 0 && <div className="hidden md:block w-px h-9 bg-[rgba(232,96,140,0.15)] shrink-0" aria-hidden="true" />}
                    <div className="flex flex-col items-center gap-[3px]">
                      <span className="font-[family-name:var(--font-pacifico)] text-[22px] text-[var(--sc-accent)] leading-none">{stat.num}</span>
                      <span className="text-[11px] font-semibold text-[#b08090] text-center leading-[1.3]">{stat.label}</span>
                    </div>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Right visual — hidden on mobile */}
          <div className="hidden lg:flex justify-center items-center" aria-hidden="true">
            <div className="relative w-[400px] h-[400px]">
              <div className="w-full h-full rounded-full bg-[linear-gradient(135deg,#ffe4ee_0%,#ffbfd8_45%,#ffd6e8_100%)] flex items-center justify-center shadow-[0_0_0_14px_rgba(255,214,232,0.4),0_0_0_30px_rgba(255,214,232,0.15),0_30px_80px_rgba(232,96,140,0.2)]">
                <span className="text-[130px] leading-none drop-shadow-[0_8px_24px_rgba(0,0,0,0.12)]">🎂</span>
              </div>
              <div className={`absolute leading-none pointer-events-none select-none top-[4%] left-[4%] text-[30px] ${styles.floatHeart1}`}>💗</div>
              <div className={`absolute leading-none pointer-events-none select-none bottom-[8%] right-[-2%] text-[24px] ${styles.floatHeart2}`}>💕</div>
              <div className={`absolute leading-none pointer-events-none select-none top-[18%] right-[-6%] text-[26px] ${styles.floatStar1}`}>✨</div>
              <div className={`absolute leading-none pointer-events-none select-none bottom-[20%] left-[-6%] text-[24px] ${styles.floatStar2}`}>🌸</div>
              <div className={`absolute leading-none pointer-events-none select-none top-[-6%] right-[14%] text-[34px] ${styles.floatCupcake}`}>🧁</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      {s.features && s.features.length > 0 && (
        <div className="bg-[var(--sc-accent)] py-[14px] overflow-hidden" aria-label="Điểm nổi bật">
          <div className="max-w-container mx-auto px-5 md:px-10 flex items-center justify-center md:justify-between gap-4 md:gap-6 flex-wrap">
            {s.features.map((f, i) => (
              <div key={i} className={`flex items-center gap-2 ${styles.trustItem}`}>
                <span className="text-[13px] font-bold text-white tracking-[0.01em] whitespace-nowrap">{f}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
