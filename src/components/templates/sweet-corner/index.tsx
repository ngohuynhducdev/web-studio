'use client';

import { Pacifico, Nunito } from 'next/font/google';
import styles from './SweetCorner.module.css';
import type { PageSection, HeroSection, AboutSection, ServicesSection, CalloutSection, StepsSection, GallerySection, ReviewsSection, FeaturesSection, BookingSection, BannerCarouselSection } from '@/types';
import BannerCarousel from '@/components/templates/BannerCarousel';
import { DEFAULT_SECTIONS } from '@/data/templates/sweet-corner';
import { pickType, shown } from '@/lib/sections';
import Header    from './Header';
import Hero      from './Hero';
import About     from './About';
import Menu      from './Menu';
import CustomCake from './CustomCake';
import Steps     from './Steps';
import Gallery   from './Gallery';
import Reviews   from './Reviews';
import Policy    from './Policy';
import CTA       from './CTA';
import Footer    from './Footer';

export { DEFAULT_SECTIONS };

const pacifico = Pacifico({ subsets: ['latin', 'vietnamese'], variable: '--font-pacifico', display: 'swap', weight: '400' });
const nunito   = Nunito({ subsets: ['latin', 'vietnamese'], variable: '--font-nunito', display: 'swap', weight: ['400', '500', '600', '700', '800'] });

export interface SweetCornerProps {
  businessName?: string;
  brandColor?: string;
  sections?: PageSection[];
}

export default function SweetCornerTemplate({ businessName, brandColor, sections }: SweetCornerProps = {}) {
  const active = sections && sections.length > 0 ? sections : DEFAULT_SECTIONS;
  const carousel = pickType<BannerCarouselSection>(active, 'bannerCarouselSection');
  const hero     = pickType<HeroSection>(active, 'heroSection');
  const about    = pickType<AboutSection>(active, 'aboutSection');
  const services = pickType<ServicesSection>(active, 'servicesSection');
  const callout  = pickType<CalloutSection>(active, 'calloutSection');
  const stepsS   = pickType<StepsSection>(active, 'stepsSection');
  const gallery  = pickType<GallerySection>(active, 'gallerySection');
  const reviews  = pickType<ReviewsSection>(active, 'reviewsSection');
  const features = pickType<FeaturesSection>(active, 'featuresSection');
  const booking  = pickType<BookingSection>(active, 'bookingSection');

  const displayName = businessName ?? 'Tiệm Bánh Bông';
  const themeStyle = brandColor ? { '--sc-accent': brandColor } as React.CSSProperties : undefined;

  return (
    <div className={`${pacifico.variable} ${nunito.variable} ${styles.page}`} style={themeStyle}>
      <Header displayName={displayName} />
      {shown(carousel) && <BannerCarousel slides={carousel.slides ?? []} brandColor={brandColor} />}
      {shown(hero)     && <Hero      s={hero} />}
      {shown(about)    && <About     s={about} />}
      {shown(services) && <Menu      s={services} />}
      {shown(callout)  && <CustomCake s={callout} />}
      {shown(stepsS)   && <Steps     s={stepsS} />}
      {shown(gallery)  && <Gallery   s={gallery} />}
      {shown(reviews)  && <Reviews   s={reviews} />}
      {shown(features) && <Policy    s={features} />}
      {shown(booking)  && <CTA       s={booking} />}
      <Footer displayName={displayName} />
    </div>
  );
}
