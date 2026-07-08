'use client';

import { Space_Grotesk, Archivo } from 'next/font/google';
import styles from './ZenWellness.module.css';
import type { PageSection, HeroSection, FeaturesSection, ServicesSection, PricingSection, TeamSection, GallerySection, AboutSection, ReviewsSection, BookingSection } from '@/types';
import { DEFAULT_SECTIONS } from '@/data/templates/zen-wellness';
import { pick, shown } from '@/lib/sections';
import Header from './Header';
import Hero from './Hero';
import WellnessJourney from './WellnessJourney';
import Services from './Services';
import MemberProgram from './MemberProgram';
import Team from './Team';
import Gallery from './Gallery';
import Reviews from './Reviews';
import Booking from './Booking';
import Footer from './Footer';

export { DEFAULT_SECTIONS };

// Template-scoped fonts — all-sans grotesque system, no serif anywhere.
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'vietnamese'],
  variable: '--zw-font-display',
  display: 'swap',
  weight: ['400', '500', '700'],
});

const archivo = Archivo({
  subsets: ['latin', 'vietnamese'],
  variable: '--zw-font-body',
  display: 'swap',
  weight: ['400', '500', '600'],
});

// Use _key lookup (pick) — multiple featuresSection (trust + journey).
export interface ZenWellnessProps {
  businessName?: string;
  brandColor?: string;
  sections?: PageSection[];
}

export default function ZenWellnessTemplate({ businessName, brandColor, sections }: ZenWellnessProps = {}) {
  const active = sections && sections.length > 0 ? sections : DEFAULT_SECTIONS;

  const hero     = pick<HeroSection>(active,     'default-hero');
  const trust    = pick<FeaturesSection>(active, 'default-trust');     // merged into Hero
  const journey  = pick<FeaturesSection>(active, 'default-journey');
  const services = pick<ServicesSection>(active, 'default-services');
  const member   = pick<PricingSection>(active,  'default-member');
  const team     = pick<TeamSection>(active,     'default-team');
  const about    = pick<AboutSection>(active,    'default-about');     // merged into Team
  const gallery  = pick<GallerySection>(active,  'default-gallery');
  const reviews  = pick<ReviewsSection>(active,  'default-reviews');
  const booking  = pick<BookingSection>(active,  'default-booking');

  const displayName = businessName ?? 'Zen Wellness';
  const themeStyle = brandColor ? { '--zw-accent': brandColor, '--zw-accent-deep': brandColor } as React.CSSProperties : undefined;

  return (
    <div className={`${styles.page} ${spaceGrotesk.variable} ${archivo.variable}`} style={themeStyle}>
      <Header displayName={displayName} />
      {shown(hero)     && <Hero     s={hero} trust={trust} />}
      {shown(journey)  && <WellnessJourney s={journey} />}
      {shown(services) && <Services s={services} />}
      {shown(member)   && <MemberProgram s={member} />}
      {shown(team)     && <Team     s={team} about={about} />}
      {shown(gallery)  && <Gallery  s={gallery} />}
      {shown(reviews)  && <Reviews  s={reviews} />}
      {shown(booking)  && <Booking  s={booking} />}
      <Footer displayName={displayName} />
    </div>
  );
}
