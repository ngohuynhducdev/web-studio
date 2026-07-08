'use client';

import { Fraunces, Be_Vietnam_Pro } from 'next/font/google';
import styles from './ShizenSpa.module.css';
import type { PageSection, HeroSection, ServicesSection, PricingSection, TeamSection, GallerySection, ReviewsSection, BookingSection, BannerCarouselSection } from '@/types';
import { DEFAULT_SECTIONS } from '@/data/templates/shizen-spa';
import { pickType, shown } from '@/lib/sections';
import BannerCarousel from '@/components/templates/BannerCarousel';
import Header from './Header';
import Hero from './Hero';
import Benefits from './Benefits';
import FloatingActions from './FloatingActions';
import Services from './Services';
import Pricing from './Pricing';
import Team from './Team';
import Gallery from './Gallery';
import Process from './Process';
import Reviews from './Reviews';
import OfferStrip from './OfferStrip';
import Booking from './Booking';
import Footer from './Footer';

export { DEFAULT_SECTIONS };

// Template-scoped fonts — next/font hashes family names, so CSS literal
// strings like "Fraunces" never resolve; fonts must be loaded here and
// referenced via the exposed variables.
const fraunces = Fraunces({
  subsets: ['latin', 'vietnamese'],
  variable: '--sz-font-display',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['300', '400'],
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  variable: '--sz-font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

export interface ShizenSpaProps {
  businessName?: string;
  brandColor?: string;
  sections?: PageSection[];
}

export default function ShizenSpaTemplate({ businessName = 'SHIZEN', brandColor, sections }: ShizenSpaProps = {}) {
  const active = sections && sections.length > 0 ? sections : DEFAULT_SECTIONS;

  const carousel = pickType<BannerCarouselSection>(active, 'bannerCarouselSection');
  const hero     = pickType<HeroSection>(active, 'heroSection');
  const services = pickType<ServicesSection>(active, 'servicesSection');
  const pricing  = pickType<PricingSection>(active, 'pricingSection');
  const team     = pickType<TeamSection>(active, 'teamSection');
  const gallery  = pickType<GallerySection>(active, 'gallerySection');
  const reviews  = pickType<ReviewsSection>(active, 'reviewsSection');
  const booking  = pickType<BookingSection>(active, 'bookingSection');

  const themeStyle = brandColor
    ? { '--sz-earth': brandColor } as React.CSSProperties
    : undefined;

  return (
    <div className={`${styles.page} ${fraunces.variable} ${beVietnam.variable}`} style={themeStyle}>
      <Header businessName={businessName} />
      {shown(carousel) && <BannerCarousel slides={carousel.slides ?? []} brandColor={brandColor} />}
      {shown(hero)     && <Hero      s={hero} businessName={businessName} />}
      <Benefits />
      {shown(services) && <Services  s={services} />}
      {shown(pricing)  && <Pricing   s={pricing} />}
      {shown(team)     && <Team      s={team} />}
      {shown(gallery)  && <Gallery   s={gallery} />}
      {shown(reviews)  && <Reviews   s={reviews} />}
      <Process />
      <OfferStrip />
      {shown(booking)  && <Booking   s={booking} />}
      <Footer businessName={businessName} />
      <FloatingActions zaloUrl={booking?.zaloUrl} />
    </div>
  );
}
