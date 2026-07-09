import type { MetadataRoute } from "next";
import { IS_PRODUCTION } from "@/lib/env";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://webstudio.com";

export default function robots(): MetadataRoute.Robots {
  // Block all crawling on staging / preview / local so they never get indexed.
  if (!IS_PRODUCTION) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/", "/studio/", "/preview/"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
