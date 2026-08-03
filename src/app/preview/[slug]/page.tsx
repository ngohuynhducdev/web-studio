import { notFound } from "next/navigation";
import { headers } from "next/headers";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { siteBySlugQuery } from "@/lib/queries";
import type { PageSection } from "@/types";
import { TEMPLATE_COMPONENTS } from "@/lib/templateRegistry";
import { STUDIO_ZALO_URL, DEFAULT_FOOTER } from "@/data/layout";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

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
      <div className={styles.stateScreen}>
        <div className={styles.stateCard}>
          <span className={styles.stateIcon} aria-hidden="true">
            <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </span>
          <h1 className={styles.stateBusinessName}>{order.businessName}</h1>
          <p className={styles.stateBody}>This site is temporarily inactive.</p>
          <div className={styles.stateActions}>
            <a href={STUDIO_ZALO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Message us on Zalo to renew
            </a>
          </div>
          <p className={styles.stateNote}>or call {DEFAULT_FOOTER.phone}</p>
        </div>
      </div>
    );
  }

  if (!TemplateComponent) {
    return (
      <div className={styles.stateScreen}>
        <div className={styles.stateCard}>
          <span className={styles.stateIcon} aria-hidden="true">
            <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </span>
          <h1 className={styles.stateBusinessName}>{order.businessName}</h1>
          <p className={styles.stateBody}>This order hasn&apos;t been assigned a template yet.</p>
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
            <svg className={styles.previewBannerIcon} width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span>This is a preview — not the live site yet</span>
            <span className={styles.previewBannerChip}>{order.businessName}</span>
          </div>
        </>
      )}

      {/* No analytics snippet here: the root layout already mounts
          <GoogleAnalytics> on every route, this one included. The copy that
          used to live here loaded gtag a second time and called gtag('config')
          without `send_page_view: false` or the consent defaults, so the
          moment NEXT_PUBLIC_GA_ID is set it would re-enable the automatic
          pageview the root setup deliberately turns off — on the client's own
          delivered domain, where the cookie banner's answer is the one thing
          that has to be respected. */}

      {/* The banner covers the first 40px, so the template's own header moves
          down while it is shown. The class scopes that to this subtree. */}
      <div data-template-scope className={isLiveDomain ? undefined : styles.bannerOffset}>
        <TemplateComponent
          businessName={order.businessName}
          brandColor={order.brandColor}
          sections={order.sections}
        />
      </div>
    </>
  );
}
