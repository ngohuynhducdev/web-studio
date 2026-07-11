'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
// swiper/css/navigation not imported — using custom arrow buttons instead
import styles from './BannerCarousel.module.css';
import type { BannerCarouselSection } from '@/types';

type Slide = NonNullable<BannerCarouselSection['slides']>[number];

interface Props {
  slides: Slide[];
  brandColor?: string;
}

function ChevronLeft() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export default function BannerCarousel({ slides, brandColor }: Props) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  if (!slides.length) return null;

  const multi = slides.length > 1;

  return (
    <section className={styles.carousel} aria-label="Promo banner">
      <Swiper
        modules={[Autoplay, Pagination]}
        onSwiper={setSwiper}
        loop={multi}
        grabCursor
        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        className={styles.swiper}
      >
        {slides.map((slide) => {
          const bgStyle: React.CSSProperties = slide.imageUrl
            ? { backgroundImage: `url(${slide.imageUrl})` }
            : slide.bgColor
            ? { background: slide.bgColor }
            : {};

          return (
            <SwiperSlide key={slide._key}>
              <div className={styles.slide} style={bgStyle}>
                {slide.imageUrl && <div className={styles.overlay} aria-hidden="true" />}
                <div className={styles.content}>
                  <h2 className={styles.heading}>{slide.heading}</h2>
                  {slide.subtext && <p className={styles.subtext}>{slide.subtext}</p>}
                  {slide.ctaLabel && (
                    <a
                      href={slide.ctaUrl ?? '#booking'}
                      className={styles.cta}
                      style={brandColor ? { background: brandColor } : undefined}
                    >
                      {slide.ctaLabel}
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {multi && (
        <>
          <button
            className={`${styles.arrow} ${styles.arrowPrev}`}
            onClick={() => swiper?.slidePrev()}
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>
          <button
            className={`${styles.arrow} ${styles.arrowNext}`}
            onClick={() => swiper?.slideNext()}
            aria-label="Next slide"
          >
            <ChevronRight />
          </button>
        </>
      )}
    </section>
  );
}
