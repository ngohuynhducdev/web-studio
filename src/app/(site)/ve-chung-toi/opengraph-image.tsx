import { ImageResponse } from "next/og";
import { ogElement, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Về chúng mình — Tiệm Web Nhỏ";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return new ImageResponse(
    ogElement({
      eyebrow: "VỀ CHÚNG MÌNH · TIỆM WEB NHỎ",
      heading: "tiệm nhỏ —\nkhông phải agency",
      sub: "Làm web đẹp cho doanh nghiệp nhỏ ở Sài Gòn",
      watermark: "V",
    }),
    { ...OG_SIZE }
  );
}
