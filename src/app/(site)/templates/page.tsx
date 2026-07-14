import type { Metadata } from "next";
import TemplatesPageCatalog from "@/components/sections/TemplatesPageCatalog";
import CTASection from "@/components/sections/CTASection";
import { client } from "@/sanity/lib/client";
import { allTemplatesQuery, templatesPageQuery } from "@/lib/queries";
import { DEFAULT_TEMPLATES_PAGE } from "@/data/templates-page";
import type { Template } from "@/types";
import type { TemplatesPageCms } from "@/types/cms";
import Reveal from "@/components/ui/motion/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Website Templates",
  description:
    "Ready-made website templates for nail salons, spas, cafes, gyms, barbershops. Pick a template — we handle the rest.",
};

export default async function TemplatesPage() {
  const [templates, cms] = await Promise.all([
    client.fetch<Template[]>(allTemplatesQuery, {}, { next: { revalidate: 60 } }),
    client.fetch<TemplatesPageCms>(templatesPageQuery, {}, { next: { revalidate: 60 } }),
  ]);

  const heroHeadingLine1 = cms?.heroHeadingLine1 ?? DEFAULT_TEMPLATES_PAGE.heroHeadingLine1;
  const heroHeadingItal  = cms?.heroHeadingItal  ?? DEFAULT_TEMPLATES_PAGE.heroHeadingItal;
  const heroHeadingLine3 = cms?.heroHeadingLine3 ?? DEFAULT_TEMPLATES_PAGE.heroHeadingLine3;
  const heroDesc         = cms?.heroDesc         ?? DEFAULT_TEMPLATES_PAGE.heroDesc;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://webstudio.com";
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Website Templates", item: `${siteUrl}/templates` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {/* Dark editorial hero */}
      <section className={styles.templatesHero}>
        <div className="container-site">
          <Reveal immediate>
            <h1 className={styles.templatesHeroHeading}>
              {heroHeadingLine1}{" "}<br />
              <em>{heroHeadingItal}</em>{" "}<br />
              {heroHeadingLine3}
            </h1>
            <p className={styles.templatesHeroDesc}>{heroDesc}</p>
          </Reveal>
        </div>
      </section>

      {/* Filterable grid */}
      <TemplatesPageCatalog initialTemplates={templates} />

      {/* CTA — self-fetching, no props needed */}
      <CTASection />
    </>
  );
}
