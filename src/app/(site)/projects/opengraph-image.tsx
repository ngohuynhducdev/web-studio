import { ImageResponse } from "next/og";
import { ogElement, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Dự án đã làm — Web Studio";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return new ImageResponse(
    ogElement({
      eyebrow: "DỰ ÁN ĐÃ LÀM · THỰC TẾ",
      heading: "xem thực tế —\nkhông phải mock",
      sub: "Những trang web mình đã làm cho nail, spa, cà phê, gym",
      watermark: "D",
    }),
    { ...OG_SIZE }
  );
}
