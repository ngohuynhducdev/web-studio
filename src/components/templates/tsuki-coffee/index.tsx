import { Cormorant_Garamond, Inter, Noto_Serif_JP } from 'next/font/google';
import type { TemplateProps } from '@/lib/templateRegistry';
import type {
  HeroSection, ServicesSection, AboutSection,
  GallerySection, BookingSection,
} from '@/types';
import { DEFAULT_SECTIONS } from '@/data/templates/tsuki-coffee';
import { pick, shown } from '@/lib/sections';
import styles from './TsukiCoffee.module.css';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Signature from './Signature';
import Space from './Space';
import Menu from './Menu';
import Booking from './Booking';
import Footer from './Footer';

export { DEFAULT_SECTIONS };

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'vietnamese'],
  variable: '--tc-font-display',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['300', '400', '500'],
});

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--tc-font-body',
  display: 'swap',
  weight: ['400', '500', '600'],
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  variable: '--tc-font-jp',
  display: 'swap',
  weight: ['300', '400'],
});

// Use _key lookup because two sections share _type='servicesSection'
// (signature drinks + full menu).
export default function TsukiCoffeeTemplate({
  sections,
  brandColor,
  businessName = 'Tsuki Coffee',
}: TemplateProps = {}) {
  const active = sections && sections.length > 0 ? sections : DEFAULT_SECTIONS;

  const hero      = pick<HeroSection>(active,     'hero');
  const about     = pick<AboutSection>(active,    'about');
  const signature = pick<ServicesSection>(active, 'signature');
  const space     = pick<GallerySection>(active,  'space');
  const menu      = pick<ServicesSection>(active, 'menu');
  const booking   = pick<BookingSection>(active,  'booking');

  const themeStyle = brandColor
    ? ({ '--tc-gold': brandColor, '--tc-gold-deep': brandColor } as React.CSSProperties)
    : undefined;

  return (
    <div
      className={`${styles.page} ${cormorant.variable} ${inter.variable} ${notoSerifJP.variable}`}
      style={themeStyle}
    >
      <Header displayName={businessName} />
      {shown(hero)      && <Hero      s={hero} businessName={businessName} />}
      {shown(about)     && <About     s={about} />}
      {shown(signature) && <Signature s={signature} />}
      {shown(space)     && <Space     s={space} />}
      {shown(menu)      && <Menu      s={menu} />}
      {shown(booking)   && <Booking   s={booking} />}
      <Footer displayName={businessName} zaloUrl={booking?.zaloUrl} />
    </div>
  );
}
