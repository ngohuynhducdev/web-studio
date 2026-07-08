import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/ui/CookieBanner";
import StagingBanner from "@/components/ui/StagingBanner";
import MotionProvider from "@/components/ui/motion/MotionProvider";
import { IS_PRODUCTION } from "@/lib/env";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["300", "400", "600"],
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://tiemwebnho.com"
  ),
  title: {
    default: "Tiệm Web Nhỏ — Web đẹp cho doanh nghiệp nhỏ",
    template: "%s | Tiệm Web Nhỏ",
  },
  description:
    "Thiết kế landing page cho tiệm nail, spa, café, gym. Chọn mẫu — customize — có web trong 5 ngày. Từ 299k/tháng.",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Tiệm Web Nhỏ",
  },
  twitter: {
    card: "summary_large_image",
  },
  // Belt-and-suspenders alongside robots.ts: keep non-prod deploys unindexed.
  robots: IS_PRODUCTION ? undefined : { index: false, follow: false },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Tiệm Web Nhỏ",
  "url": "https://tiemwebnho.com",
  "description": "Thiết kế website chuyên nghiệp cho tiệm nail, spa, cà phê, gym. Chọn mẫu có sẵn, nhận web trong 5 ngày.",
  "telephone": "+84901234567",
  "email": "hello@tiemwebnho.com",
  "priceRange": "$$",
  "areaServed": { "@type": "Country", "name": "Vietnam" },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "09:00",
    "closes": "18:00",
  },
  "sameAs": [
    "https://facebook.com/tiemwebnho",
    "https://instagram.com/tiemwebnho",
    "https://tiktok.com/@tiemwebnho",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="vi" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>{children}</MotionProvider>
        <StagingBanner />
        {gaId && <GoogleAnalytics gaId={gaId} />}
        {gaId && <CookieBanner />}
      </body>
    </html>
  );
}
