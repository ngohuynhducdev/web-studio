import { ImageResponse } from "next/og";
import { ogElement, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Liên hệ & đặt mẫu — Web Studio";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return new ImageResponse(
    ogElement({
      eyebrow: "ĐẶT MẪU · TƯ VẤN MIỄN PHÍ",
      heading: "có web đẹp\ntrong 5 ngày",
      sub: "Gửi yêu cầu — mình trả lời trong 1–2 giờ",
      watermark: "L",
    }),
    { ...OG_SIZE }
  );
}
