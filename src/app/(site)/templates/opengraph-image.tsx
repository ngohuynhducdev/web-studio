import { ImageResponse } from "next/og";
import { ogElement, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Mẫu website — Web Studio";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return new ImageResponse(
    ogElement({
      eyebrow: "5+ MẪU WEBSITE · NAIL · SPA · CÀ PHÊ · GYM",
      heading: "chọn mẫu —\nbắt đầu ngay",
      sub: "Mẫu website chuyên nghiệp, customize theo tiệm của bạn",
      watermark: "M",
    }),
    { ...OG_SIZE }
  );
}
