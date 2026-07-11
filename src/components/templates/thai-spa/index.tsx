import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import type { TemplateProps } from '@/lib/templateRegistry';
import type {
  HeroSection, AboutSection, FeaturesSection, StepsSection,
  FounderSection, ReviewsSection, PricingSection, CalloutSection, BookingSection,
  BannerCarouselSection,
} from '@/types';
import BannerCarousel from '@/components/templates/BannerCarousel';
import { DEFAULT_SECTIONS } from '@/data/templates/thai-spa';
import { pick, shown } from '@/lib/sections';
import styles from './ThaiSpa.module.css';
import Header from './Header';
import Hero from './Hero';
import LovingTouch from './LovingTouch';
import Benefits from './Benefits';
import Welcome from './Welcome';
import HarmonyIntro from './HarmonyIntro';
import AfterMassage from './AfterMassage';
import Founder from './Founder';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import Offer from './Offer';
import Footer from './Footer';

const playfair = Playfair_Display({
  subsets: ['latin', 'vietnamese'],
  variable: '--ts-font-display',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
});

const sourceSans = Source_Sans_3({
  subsets: ['latin', 'vietnamese'],
  variable: '--ts-font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

// Order & layout are fixed in code. CMS only edits content + toggles visibility (enabled).
// Sections are picked by `_key` (not by type lookup, since there are 2 aboutSection blocks).
export default function ThaiSpaTemplate({ sections, brandColor, businessName = 'LOTUS THAI' }: TemplateProps = {}) {
  const data = sections?.length ? sections : DEFAULT_SECTIONS;

  const carousel    = pick<BannerCarouselSection>(data, 'carousel');
  const hero        = pick<HeroSection>(data, 'hero');
  const lovingTouch = pick<AboutSection>(data, 'loving-touch');
  const benefits    = pick<FeaturesSection>(data, 'benefits');
  const welcome     = pick<StepsSection>(data, 'welcome-ritual');
  const harmony     = pick<AboutSection>(data, 'harmony');
  const afterMassage = pick<StepsSection>(data, 'after-massage');
  const founder     = pick<FounderSection>(data, 'founder');
  const reviews     = pick<ReviewsSection>(data, 'reviews');
  const pricing     = pick<PricingSection>(data, 'pricing');
  const offer       = pick<CalloutSection>(data, 'offer');
  const booking     = pick<BookingSection>(data, 'booking');

  const themeStyle = brandColor
    ? ({ '--ts-wine': brandColor, '--ts-wine-hover': brandColor } as React.CSSProperties)
    : undefined;

  return (
    <div
      className={`${styles.page} ${playfair.variable} ${sourceSans.variable}`}
      style={themeStyle}
    >
      <Header businessName={businessName} />
      {shown(carousel)     && <BannerCarousel slides={carousel!.slides ?? []} brandColor={brandColor} />}
      {shown(hero)         && <Hero         data={hero} />}
      {shown(lovingTouch)  && <LovingTouch  data={lovingTouch} />}
      {shown(benefits)     && <Benefits     data={benefits} />}
      {shown(welcome)      && <Welcome      data={welcome!} />}
      {shown(harmony)      && <HarmonyIntro data={harmony} />}
      {shown(afterMassage) && <AfterMassage data={afterMassage} />}
      {shown(founder)      && <Founder      data={founder} />}
      {shown(reviews)      && <Testimonials data={reviews} />}
      {shown(pricing)      && <Pricing      data={pricing} />}
      {shown(offer)        && <Offer        data={offer} />}
      <Footer data={booking} businessName={businessName} />
    </div>
  );
}
