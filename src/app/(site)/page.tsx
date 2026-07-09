import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { homepageQuery } from "@/lib/queries";

export const metadata: Metadata = {
  title: {
    absolute: "Web Studio — Website đẹp cho tiệm nhỏ Việt Nam",
  },
  description:
    "Thiết kế website chuyên nghiệp cho tiệm nail, spa, cà phê, gym. Chọn mẫu có sẵn, nhận web trong 5 ngày, từ 299k/tháng.",
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
        eyebrow={cms?.tplEyebrow}
        heading={cms?.tplHeading}
        headingItal={cms?.tplHeadingItal}
      />
      <Testimonials
        eyebrow={cms?.testiEyebrow}
        heading={cms?.testiHeading}
        items={cms?.testiItems}
      />
      <PricingSection cms={cms} />
      <CTASection />
    </>
  );
}
