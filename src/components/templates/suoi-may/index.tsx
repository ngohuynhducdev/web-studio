"use client";

import { Cormorant_Garamond, Manrope } from "next/font/google";
import styles from "./SuoiMay.module.css";
import type {
  PageSection,
  HeroSection,
  ServicesSection,
  MenuSection,
  GallerySection,
  ReviewsSection,
  BookingSection,
  BannerCarouselSection,
} from "@/types";
import { DEFAULT_SECTIONS } from "@/data/templates/suoi-may";
import { pickType, shown } from "@/lib/sections";
import BannerCarousel from "@/components/templates/BannerCarousel";
import Header from "./Header";
import Hero from "./Hero";
import Intro from "./Intro";
import Springs from "./Springs";
import Menu from "./Menu";
import Gallery from "./Gallery";
import Reviews from "./Reviews";
import Booking from "./Booking";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";

export { DEFAULT_SECTIONS };

// Template-scoped fonts — next/font hashes family names, so CSS literal
// strings never resolve; fonts must be loaded here and exposed as variables.
const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  variable: "--sm-font-display",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["300", "400", "500"],
});

const manrope = Manrope({
  subsets: ["latin", "vietnamese"],
  variable: "--sm-font-body",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export interface SuoiMayProps {
  businessName?: string;
  brandColor?: string;
  sections?: PageSection[];
}

export default function SuoiMayTemplate({
  businessName = "Suối Mây",
  brandColor,
  sections,
}: SuoiMayProps = {}) {
  const active = sections && sections.length > 0 ? sections : DEFAULT_SECTIONS;

  const carousel = pickType<BannerCarouselSection>(
    active,
    "bannerCarouselSection",
  );
  const hero = pickType<HeroSection>(active, "heroSection");
  const services = pickType<ServicesSection>(active, "servicesSection");
  const menu = pickType<MenuSection>(active, "menuSection");
  const gallery = pickType<GallerySection>(active, "gallerySection");
  const reviews = pickType<ReviewsSection>(active, "reviewsSection");
  const booking = pickType<BookingSection>(active, "bookingSection");

  const themeStyle = brandColor
    ? ({ "--sm-accent": brandColor } as React.CSSProperties)
    : undefined;

  return (
    <div
      className={`${styles.page} ${cormorant.variable} ${manrope.variable}`}
      style={themeStyle}
    >
      <Header businessName={businessName} s={booking} />
      {shown(carousel) && (
        <BannerCarousel
          slides={carousel.slides ?? []}
          brandColor={brandColor}
        />
      )}
      {shown(hero) && <Hero s={hero} businessName={businessName} />}
      <Intro businessName={businessName} />
      {shown(services) && <Springs s={services} />}
      {shown(menu) && <Menu s={menu} />}
      {shown(gallery) && <Gallery s={gallery} />}
      {shown(reviews) && <Reviews s={reviews} />}
      {shown(booking) && <Booking s={booking} businessName={businessName} />}
      <Footer businessName={businessName} s={booking} />
      <FloatingActions zaloUrl={booking?.zaloUrl} />
    </div>
  );
}
