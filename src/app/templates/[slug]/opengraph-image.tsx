import { ImageResponse } from "next/og";
import { ogElement, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { TEMPLATE_MANIFEST } from "@/lib/templates";

export const runtime = "edge";
export const alt = "Template preview — Web Studio";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = TEMPLATE_MANIFEST.find((t) => t.slug === slug);

  return new ImageResponse(
    ogElement(
      entry
        ? {
            eyebrow: `TEMPLATE · ${entry.tagline.toUpperCase()}`,
            heading: entry.label.toLowerCase(),
            sub: "Live demo — customized for your business in 5 days",
            watermark: entry.label[0],
          }
        : {
            eyebrow: "TEMPLATE · WEB STUDIO",
            heading: "coming soon",
            sub: "A new template is on its way",
            watermark: "W",
          }
    ),
    { ...OG_SIZE }
  );
}
