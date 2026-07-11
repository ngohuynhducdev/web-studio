import { ImageResponse } from "next/og";
import { ogElement, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "About us — Web Studio";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return new ImageResponse(
    ogElement({
      eyebrow: "ABOUT US · WEB STUDIO",
      heading: "small studio —\nnot an agency",
      sub: "Beautiful websites for small businesses in Saigon",
      watermark: "V",
    }),
    { ...OG_SIZE }
  );
}
