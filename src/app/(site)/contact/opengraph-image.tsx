import { ImageResponse } from "next/og";
import { ogElement, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Contact & order — Web Studio";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return new ImageResponse(
    ogElement({
      eyebrow: "ORDER NOW · FREE CONSULTATION",
      heading: "a beautiful site\nin 5 days",
      sub: "Send a request — we reply within 1–2 hours",
      watermark: "L",
    }),
    { ...OG_SIZE }
  );
}
