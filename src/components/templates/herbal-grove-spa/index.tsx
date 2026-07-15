import { Cormorant_Garamond, Mulish } from 'next/font/google';
import type { TemplateProps } from '@/lib/templateRegistry';
import type {
  HeroSection, ServicesSection, AboutSection,
  GallerySection, PricingSection, ReviewsSection, BookingSection,
} from '@/types';
import { DEFAULT_SECTIONS } from '@/data/templates/herbal-grove-spa';
import { pickType, shown } from '@/lib/sections';
import styles from './HerbalGroveSpa.module.css';
import Header from './Header';
import Hero from './Hero';
import TrustBar from './TrustBar';
import Services from './Services';
import OfferStrip from './OfferStrip';
import Pricing from './Pricing';
import About from './About';
import Gallery from './Gallery';
import Reviews from './Reviews';
import Booking from './Booking';
import Footer from './Footer';
import FloatingActions from './FloatingActions';

export { DEFAULT_SECTIONS };

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'vietnamese'],
  variable: '--bt-font-display',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600'],
});

const mulish = Mulish({
  subsets: ['latin', 'vietnamese'],
  variable: '--bt-font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

// Velura-style luxury flow: hero → trust → services → offer → pricing →
//   story (dark green) → facilities → testimonials → booking → footer.
//   Herbs / Process / Interstitial sections intentionally not rendered here.
export default function HerbalGroveSpaTemplate({
  sections,
  brandColor,
  businessName = 'Herbal Grove Spa',
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
    ? ({ '--bt-amber': brandColor } as React.CSSProperties)
    : undefined;

  return (
    <div
      className={`${styles.page} ${cormorant.variable} ${mulish.variable}`}
      style={themeStyle}
    >
      {/* No-JS fallback: reveal-on-scroll elements stay visible without the observer */}
      <noscript>
        <style
          dangerouslySetInnerHTML={{
            __html: `.${styles.revealElem},.${styles.galleryItem}{opacity:1!important;transform:none!important}`,
          }}
        />
      </noscript>
      <Header displayName={businessName} />
      <main>
        {shown(hero)     && <Hero     s={hero} businessName={businessName} />}
        <TrustBar />
        {shown(services) && <Services s={services} />}
        <OfferStrip />
        {shown(pricing)  && <Pricing  s={pricing} serviceItems={services?.services} />}
        {shown(about)    && <About    s={about} />}
        {shown(gallery)  && <Gallery  s={gallery} />}
        {shown(reviews)  && <Reviews  s={reviews} />}
        {shown(booking)  && <Booking  s={booking} />}
      </main>
      <Footer displayName={businessName} zaloUrl={booking?.zaloUrl} />
      <FloatingActions zaloUrl={booking?.zaloUrl} />
    </div>
  );
}
