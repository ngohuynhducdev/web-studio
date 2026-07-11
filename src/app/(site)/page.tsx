import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { homepageQuery } from "@/lib/queries";

export const metadata: Metadata = {
  title: {
    absolute: "Web Studio — Beautiful websites for small Vietnamese businesses",
  },
  description:
    "Professional website design for nail salons, spas, cafes, gyms. Pick a ready-made template, get your site in 5 days, starting at $19/month.",
};
import HeroSection from "@/components/sections/HeroSection";
import TapeStrip from "@/components/sections/TapeStrip";
import HowItWorks from "@/components/sections/HowItWorks";
import HomeTemplateGrid from "@/components/sections/HomeTemplateGrid";
import Testimonials from "@/components/sections/Testimonials";
import PricingSection from "@/components/sections/PricingSection";
import CTASection from "@/components/sections/CTASection";

export const revalidate = 60;

export default async function HomePage() {
  const cms = await client.fetch(homepageQuery);

  return (
    <>
      <HeroSection cms={cms} />
      <TapeStrip items={cms?.tapeItems} />
      <HowItWorks cms={cms} />
      <HomeTemplateGrid
        showViewAll={true}
        heading={cms?.tplHeading}
        headingItal={cms?.tplHeadingItal}
      />
      <Testimonials
        heading={cms?.testiHeading}
        items={cms?.testiItems}
      />
      <PricingSection cms={cms} />
      <CTASection />
    </>
  );
}
