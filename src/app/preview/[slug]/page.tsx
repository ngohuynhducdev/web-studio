import { notFound } from "next/navigation";
import { headers } from "next/headers";
import Script from "next/script";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { siteBySlugQuery } from "@/lib/queries";
import type { PageSection } from "@/types";
import { TEMPLATE_COMPONENTS } from "@/lib/templateRegistry";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

interface PreviewOrder {
  _id: string;
  businessName: string;
  brandColor?: string;
  isActive?: boolean;
  renewalDate?: string;
  seoTitle?: string;
  seoDescription?: string;
  componentKey?: string;
  sections?: PageSection[];
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const order: PreviewOrder | null = await client.fetch(siteBySlugQuery, { slug });
  if (!order) return {};
  return {
    title: order.seoTitle || order.businessName,
    description: order.seoDescription,
  };
}

export default async function PreviewPage({ params }: Props) {
  const { slug } = await params;
  const order: PreviewOrder | null = await client.fetch(siteBySlugQuery, { slug });

  if (!order) notFound();

  // Set by proxy.ts when the request arrives via the client's own domain —
  // the delivered site must not show the preview banner.
  const isLiveDomain = (await headers()).get("x-live-domain") === "1";

  const TemplateComponent = order.componentKey ? TEMPLATE_COMPONENTS[order.componentKey] : undefined;

  const todayStart = new Date();
  todayStart.setUTCHours(0, 0, 0, 0);
  const isExpired =
    order.renewalDate != null &&
    new Date(order.renewalDate).getTime() < todayStart.getTime();
  if (order.isActive === false || isExpired) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-8 bg-gray-50">
        <div>
          <p className="text-5xl mb-4">🔒</p>
          <p className="text-xl font-semibold text-gray-800 mb-2">{order.businessName}</p>
          <p className="text-gray-500">This site is temporarily inactive.</p>
          <p className="text-sm text-gray-400 mt-2">Please contact us to renew.</p>
        </div>
      </div>
    );
  }

  if (!TemplateComponent) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-8">
        <div>
          <p className="text-2xl font-bold mb-2">Template not ready yet</p>
          <p className="text-gray-500">This order hasn&apos;t been assigned a template yet.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {!isLiveDomain && (
        <>
          {/* Preview banner — fixed, z-index above all template elements */}
          <div className={styles.previewBanner}>
            <span>🔍</span>
            <span>This is a preview — not the live site yet</span>
            <span className={styles.previewBannerChip}>{order.businessName}</span>
          </div>

          {/* Push template's fixed header below the preview banner */}
          <style>{`header { top: 40px !important; }`}</style>
        </>
      )}

      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}</Script>
        </>
      )}
      <TemplateComponent
        businessName={order.businessName}
        brandColor={order.brandColor}
        sections={order.sections}
      />
    </>
  );
}
