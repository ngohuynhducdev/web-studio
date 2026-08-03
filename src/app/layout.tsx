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


// Canonical origin — shared by metadataBase and the JSON-LD below so
// structured data never points at a different host than the pages do.
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://webstudio.com"
).replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Web Studio — Beautiful websites for small businesses",
    template: "%s | Web Studio",
  },
  // Names the catalog, not the roadmap: this previously advertised nail salons,
  // cafes and gyms, none of which have a template yet. /templates derives its
  // list from the catalog automatically; site-wide copy is hardcoded, so it has
  // to be widened by hand when a new industry ships (checklist in CLAUDE.md).
  description:
    "Landing pages for spas and massage studios in Vietnam. Pick a template — customize — get your site in 5 days. Starting at $19/month.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Web Studio",
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
  "name": "Web Studio",
  "url": SITE_URL,
  "description": "Professional website design for spas and massage studios in Vietnam. Pick a ready-made template, get your site in 5 days.",
  "telephone": "+84901234567",
  "email": "hello@webstudio.com",
  "priceRange": "$$",
  "areaServed": { "@type": "Country", "name": "Vietnam" },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "09:00",
    "closes": "18:00",
  },
  "sameAs": [
    "https://facebook.com/webstudio",
    "https://instagram.com/webstudio",
    "https://tiktok.com/@webstudio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
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
