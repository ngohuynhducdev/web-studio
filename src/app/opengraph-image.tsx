import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Web Studio — Web đẹp cho doanh nghiệp nhỏ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#2D2419",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative watermark */}
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "60px",
            fontSize: "340px",
            fontFamily: "serif",
            fontWeight: 300,
            color: "#D97757",
            opacity: 0.07,
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          T
        </div>

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "2px",
              background: "#D97757",
            }}
          />
          <span
            style={{
              fontFamily: "sans-serif",
              fontSize: "13px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#D97757",
            }}
          >
            NAIL · SPA · CÀ PHÊ · GYM
          </span>
        </div>

        {/* Brand name */}
        <div
          style={{
            fontFamily: "serif",
            fontSize: "86px",
            fontWeight: 300,
            color: "#FAF6F0",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            marginBottom: "20px",
            display: "flex",
          }}
        >
          web studio
          <span style={{ color: "#D97757" }}>.</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: "22px",
            color: "#FAF6F0",
            opacity: 0.5,
          }}
        >
          web đẹp cho doanh nghiệp nhỏ — chọn mẫu, có web trong 5 ngày
        </div>
      </div>
    ),
    { ...size }
  );
}
