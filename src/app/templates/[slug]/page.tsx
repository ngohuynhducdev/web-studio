import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { templateBySlugQuery, allTemplatesQuery } from "@/lib/queries";
import type { Template } from "@/types";
import { TEMPLATE_COMPONENTS } from "@/lib/templateRegistry";
import { TEMPLATE_MANIFEST } from "@/lib/templates";
import TemplateComingSoon from "@/components/preview/TemplateComingSoon";
import TemplatePreviewBar from "@/components/preview/TemplatePreviewBar";

// Manifest entry lookup — every coded template should be browsable at
// /templates/:slug even before a Sanity document is created. The Sanity doc
// only becomes required when the template needs to appear in the public
// catalog (industry filter, price, thumbnail).
function manifestEntry(slug: string) {
  return TEMPLATE_MANIFEST.find((t) => t.slug === slug);
}

export async function generateStaticParams() {
  const templates = await client.fetch<Template[]>(
    allTemplatesQuery,
    {},
    { next: { revalidate: 3600 } }
  );
  const fromSanity = templates.map((t) => t.slug);
  // Include manifest slugs that may not yet have a Sanity doc.
  const fromManifest = TEMPLATE_MANIFEST.map((t) => t.slug);
  const all = Array.from(new Set([...fromSanity, ...fromManifest]));
  return all.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const template = await client.fetch<Template | null>(
    templateBySlugQuery,
    { slug },
    { next: { revalidate: 60 } }
  );
  if (!template) {
    const entry = manifestEntry(slug);
    if (!entry) return {};
    return { title: entry.label };
  }
  const isLive = !!(template?.componentKey && template.componentKey in TEMPLATE_COMPONENTS);
  const title = isLive
    ? template.title
    : `${template.title} (coming soon)`;
  // No openGraph.images here — the co-located opengraph-image.tsx renders the
  // branded card, and metadata-set images would override the file convention.
  return {
    title,
    description: template.description,
    openGraph: {
      title,
      description: template.description ?? undefined,
    },
  };
}

export default async function TemplateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = await client.fetch<Template | null>(
    templateBySlugQuery,
    { slug },
    { next: { revalidate: 60 } }
  );

  // No Sanity document yet — fall back to coded template if the slug is in
  // the manifest. Component will render from DEFAULT_SECTIONS automatically.
  if (!template) {
    const entry = manifestEntry(slug);
    if (!entry) notFound();
    const Component = TEMPLATE_COMPONENTS[entry.slug];
    if (!Component) notFound();
    return (
      <>
        <TemplatePreviewBar slug={slug} componentKey={entry.slug} title={entry.label} />
        <Component businessName={entry.label} />
      </>
    );
  }

  const Component = template.componentKey ? TEMPLATE_COMPONENTS[template.componentKey] : undefined;
  if (Component) {
    return (
      <>
        <TemplatePreviewBar slug={slug} componentKey={template.componentKey!} title={template.title} />
        <Component sections={template.sections} businessName={template.title} />
      </>
    );
  }

  return (
    <TemplateComingSoon
      slug={slug}
      title={template.title}
      industry={template.industry}
      price={template.price}
      description={template.description}
      thumbnailUrl={template.thumbnailUrl}
    />
  );
}
