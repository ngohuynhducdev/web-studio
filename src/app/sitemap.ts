import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { allTemplatesQuery } from "@/lib/queries";
import { TEMPLATE_MANIFEST } from "@/lib/templates";
import type { Template } from "@/types";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://webstudio.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const templates = await client.fetch<Template[]>(
    allTemplatesQuery,
    {},
    { next: { revalidate: 3600 } }
  );

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/templates`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Sanity plus the manifest, the same union generateStaticParams builds in
  // templates/[slug]. Querying Sanity alone left a coded template that has no
  // document yet browsable but missing from the sitemap.
  const slugs = Array.from(
    new Set([...templates.map((t) => t.slug), ...TEMPLATE_MANIFEST.map((t) => t.slug)])
  );

  const templateRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${BASE_URL}/templates/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...templateRoutes];
}
