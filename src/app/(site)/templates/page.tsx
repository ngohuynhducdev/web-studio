import type { Metadata } from "next";
import TemplatesPageCatalog from "@/components/sections/TemplatesPageCatalog";
import CTASection from "@/components/sections/CTASection";
import { client } from "@/sanity/lib/client";
import { allTemplatesQuery, templatesPageQuery } from "@/lib/queries";
import { DEFAULT_TEMPLATES_PAGE } from "@/data/templates-page";
import { FALLBACK_TEMPLATES } from "@/data/homepage";
import { INDUSTRY_OPTIONS, type Template } from "@/types";
import type { TemplatesPageCms } from "@/types/cms";
import Reveal from "@/components/ui/motion/Reveal";
import styles from "./page.module.css";

/** "spa" · "spa and nail" · "spa, nail and cafe" */
function joinLabels(labels: string[]) {
  if (labels.length <= 1) return labels[0] ?? "";
  return `${labels.slice(0, -1).join(", ")} and ${labels[labels.length - 1]}`;
}

async function getTemplates() {
  const fetched = await client.fetch<Template[]>(allTemplatesQuery, {}, { next: { revalidate: 60 } });
  // Same fallback as the homepage grid. Without it an empty or unreachable
  // dataset left this page blank while the homepage still showed a catalog.
  return fetched.length > 0 ? fetched : FALLBACK_TEMPLATES;
}

// Derived from the catalog rather than written out, so the description cannot
// promise industries we have no template for. It previously advertised nail,
// cafe, gym and barbershop templates on a page listing only spa ones — and
// contradicted this page's own OG image, which already said "spa & wellness".
export async function generateMetadata(): Promise<Metadata> {
  const templates = await getTemplates();
  const industries = joinLabels(
    INDUSTRY_OPTIONS.filter((o) => templates.some((t) => t.industry === o.value)).map((o) =>
      o.title.toLowerCase()
    )
  );
  return {
    title: "Website Templates",
    description: industries
      ? `Ready-made website templates for ${industries} businesses. Pick a template — we handle the rest.`
      : "Ready-made website templates for small businesses. Pick a template — we handle the rest.",
  };
}

export default async function TemplatesPage() {
  const [templates, cms] = await Promise.all([
    getTemplates(),
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
