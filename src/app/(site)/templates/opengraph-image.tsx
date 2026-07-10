import { ImageResponse } from "next/og";
import { ogElement, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Website templates — Web Studio";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return new ImageResponse(
    ogElement({
      eyebrow: "5+ TEMPLATES · NAIL · SPA · CAFE · GYM",
      heading: "pick a template —\nstart today",
      sub: "Professional website templates, customized for your business",
      watermark: "M",
    }),
    { ...OG_SIZE }
  );
}
