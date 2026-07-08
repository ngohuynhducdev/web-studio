'use client';

import styles from './UrbanBrew.module.css';
import type { PageSection, HeroSection, ServicesSection, AboutSection, GallerySection, ReviewsSection, BookingSection } from '@/types';
import { DEFAULT_SECTIONS } from '@/data/templates/urban-brew';
import { pickType, shown } from '@/lib/sections';
import Header   from './Header';
import Hero     from './Hero';
import Marquee  from './Marquee';
import Menu     from './Menu';
import About    from './About';
import Gallery  from './Gallery';
import Events   from './Events';
import Reviews  from './Reviews';
import Location from './Location';
import Footer   from './Footer';

export { DEFAULT_SECTIONS };

export interface UrbanBrewProps {
  businessName?: string;
  brandColor?: string;
  sections?: PageSection[];
}

export default function UrbanBrewTemplate({ businessName, brandColor, sections }: UrbanBrewProps = {}) {
  const active = sections && sections.length > 0 ? sections : DEFAULT_SECTIONS;
  const hero     = pickType<HeroSection>(active, 'heroSection');
  const services = pickType<ServicesSection>(active, 'servicesSection');
  const about    = pickType<AboutSection>(active, 'aboutSection');
  const gallery  = pickType<GallerySection>(active, 'gallerySection');
  const reviews  = pickType<ReviewsSection>(active, 'reviewsSection');
  const booking  = pickType<BookingSection>(active, 'bookingSection');

  const displayName = businessName ?? 'URBAN·BREW';
  const themeStyle = brandColor ? { '--cf-accent': brandColor } as React.CSSProperties : undefined;

  return (
    <div className={styles.page} style={themeStyle}>
      <Header displayName={displayName} />
      {shown(hero)     && <Hero     s={hero} />}
      <Marquee />
      {shown(services) && <Menu     s={services} />}
      {shown(about)    && <About    s={about} />}
      {shown(gallery)  && <Gallery  s={gallery} />}
      <Events />
      {shown(reviews)  && <Reviews  s={reviews} />}
      {shown(booking)  && <Location s={booking} displayName={displayName} />}
      <Footer displayName={displayName} />
    </div>
  );
}
