'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from './SuoiMay.module.css';
import type { HeroSection } from '@/types';

interface Props {
  s: HeroSection;
  businessName: string;
}

function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points={dir === 'left' ? '15 18 9 12 15 6' : '9 18 15 12 9 6'} />
    </svg>
  );
}

export default function Hero({ s, businessName }: Props) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const defaultImg = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=2000&q=85&fit=crop&auto=format';

  // Slides come from the CMS (heroSection.slides). Empty → 1 static slide from the hero content.
  const cmsSlides = s.slides ?? [];
  const slides = cmsSlides.length > 0
    ? cmsSlides.map((sl) => ({
        img: sl.imageUrl || defaultImg,
        eyebrow: sl.eyebrow ?? `${businessName} · spa & wellness`,
        main: sl.headingMain ?? '',
        italic: sl.headingItalic,
        sub: sl.subtitle,
      }))
    : [{
        img: defaultImg,
        eyebrow: s.eyebrow ?? `${businessName} · spa & wellness`,
        main: s.headingMain ?? 'Relax,\nrestore,\nbalance.',
        italic: s.headingItalic,
        sub: s.subtitle,
      }];

  const ctaPrimary = s.ctaPrimary ?? 'Book Now';
  const ctaSecondary = s.ctaSecondary ?? 'View Services';

  // Only enable carousel controls with 2+ slides; 1 slide = static hero.
  const multi = slides.length > 1;

  return (
    <section className={styles.heroWrap} aria-label="Introduction">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={multi}
        speed={900}
        grabCursor={multi}
        autoplay={multi ? { delay: 5500, disableOnInteraction: true, pauseOnMouseEnter: true } : false}
        pagination={multi ? { clickable: true } : false}
        onSwiper={setSwiper}
        className={styles.heroSwiper}
      >
        {slides.map((sl, i) => (
          <SwiperSlide key={i}>
            <div className={styles.heroSlide}>
              <Image
                src={sl.img}
                alt={sl.eyebrow || `A relaxing space at ${businessName}`}
                fill
                sizes="100vw"
                className={styles.heroPhoto}
                priority={i === 0}
              />
              <div className={styles.heroScrim} aria-hidden="true" />
              <div className={styles.heroBox}>
                <div className={styles.heroInner}>
                  <div className={styles.heroCopy}>
                    <p className={styles.heroLede}>{sl.eyebrow}</p>
                    <h1 className={styles.heroH1}>
                      {(sl.main ?? '').split('\n').map((line, j) => (
                        <span key={j} className="block" style={{ animationDelay: `${0.35 + j * 0.15}s` }}>{line}</span>
                      ))}
                      {sl.italic && (
                        <em style={{ animationDelay: `${0.35 + (sl.main ?? '').split('\n').length * 0.15}s` }}>
                          {sl.italic}
                        </em>
                      )}
                    </h1>
                    {sl.sub && <p className={styles.heroText}>{sl.sub}</p>}
                    <div className={styles.heroBtns}>
                      <a href="#booking" className={styles.heroPrimary}>
                        {ctaPrimary}
                        <span aria-hidden="true">→</span>
                      </a>
                      <a href="#services" className={styles.heroGhost}>{ctaSecondary}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {multi && (
        <>
          <button className={`${styles.heroArrow} ${styles.heroArrowPrev}`} onClick={() => swiper?.slidePrev()} aria-label="Previous slide">
            <Chevron dir="left" />
          </button>
          <button className={`${styles.heroArrow} ${styles.heroArrowNext}`} onClick={() => swiper?.slideNext()} aria-label="Next slide">
            <Chevron dir="right" />
          </button>
        </>
      )}
    </section>
  );
}
