import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { allTemplatesQuery } from "@/lib/queries";
import type { Template } from "@/types";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://tiemwebnho.com";

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
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const templateRoutes: MetadataRoute.Sitemap = templates.map((t) => ({
    url: `${BASE_URL}/templates/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...templateRoutes];
}
