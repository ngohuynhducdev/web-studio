import { ImageResponse } from "next/og";
import { ogElement, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Our projects — Web Studio";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return new ImageResponse(
    ogElement({
      eyebrow: "OUR PROJECTS · REAL SITES",
      heading: "see the real thing —\nnot a mockup",
      sub: "Websites we've built for nail, spa, cafe, gym",
      watermark: "D",
    }),
    { ...OG_SIZE }
  );
}
