import { Syne, Space_Grotesk, Caveat } from 'next/font/google';
import type { TemplateProps } from '@/lib/templateRegistry';
import type {
  HeroSection, ServicesSection, AboutSection,
  GallerySection, PricingSection, ReviewsSection, BookingSection,
} from '@/types';
import { DEFAULT_SECTIONS } from '@/data/templates/lua-nail';
import { pickType, shown } from '@/lib/sections';
import styles from './LuaNail.module.css';
import Header from './Header';
import Hero from './Hero';
import Marquee from './Marquee';
import Services from './Services';
import About from './About';
import Gallery from './Gallery';
import Pricing from './Pricing';
import Reviews from './Reviews';
import Booking from './Booking';
import Footer from './Footer';

export { DEFAULT_SECTIONS };

const syne = Syne({
  subsets: ['latin'],
  variable: '--ln-font-display',
  display: 'swap',
  weight: ['600', '700', '800'],
});
const space = Space_Grotesk({
  subsets: ['latin', 'vietnamese'],
  variable: '--ln-font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});
const caveat = Caveat({
  subsets: ['latin'],
  variable: '--ln-font-script',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export default function LuaNailTemplate({
  sections,
  brandColor,
  businessName = 'Lụa Nail',
}: TemplateProps = {}) {
  const active = sections && sections.length > 0 ? sections : DEFAULT_SECTIONS;

  const hero     = pickType<HeroSection>(active, 'heroSection');
  const services = pickType<ServicesSection>(active, 'servicesSection');
  const about    = pickType<AboutSection>(active, 'aboutSection');
  const gallery  = pickType<GallerySection>(active, 'gallerySection');
  const pricing  = pickType<PricingSection>(active, 'pricingSection');
  const reviews  = pickType<ReviewsSection>(active, 'reviewsSection');
  const booking  = pickType<BookingSection>(active, 'bookingSection');

  const themeStyle = brandColor
    ? ({ '--ln-pink': brandColor } as React.CSSProperties)
    : undefined;

  return (
    <div
      className={`${styles.page} ${syne.variable} ${space.variable} ${caveat.variable}`}
      style={themeStyle}
    >
      <Header displayName={businessName} />
      {shown(hero)     && <Hero     s={hero} businessName={businessName} />}
      <Marquee />
      {shown(services) && <Services s={services} />}
      {shown(about)    && <About    s={about} />}
      {shown(gallery)  && <Gallery  s={gallery} />}
      {shown(pricing)  && <Pricing  s={pricing} />}
      {shown(reviews)  && <Reviews  s={reviews} />}
      {shown(booking)  && <Booking  s={booking} />}
      <Footer displayName={businessName} zaloUrl={booking?.zaloUrl} />
    </div>
  );
}
