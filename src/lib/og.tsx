// Shared layout builder for all opengraph-image.tsx files.
// Returns a JSX element — callers pass it to new ImageResponse(...).
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

type OgConfig = {
  eyebrow: string;
  heading: string;    // supports \n for line breaks
  sub: string;
  watermark?: string; // single decorative letter
};

export function ogElement(c: OgConfig) {
  const lines = c.heading.split("\n");

  return (
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
          display: "flex",
        }}
      >
        {c.watermark ?? "T"}
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
        <div style={{ width: "32px", height: "2px", background: "#D97757" }} />
        <span
          style={{
            fontFamily: "sans-serif",
            fontSize: "13px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#D97757",
          }}
        >
          {c.eyebrow}
        </span>
      </div>

      {/* Heading */}
      <div
        style={{
          fontFamily: "serif",
          fontSize: lines.length > 1 ? "76px" : "86px",
          fontWeight: 300,
          color: "#FAF6F0",
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {lines.map((line, i) => (
          <span key={i} style={{ display: "flex" }}>
            {line}
            {i === lines.length - 1 && (
              <span style={{ color: "#D97757" }}>.</span>
            )}
          </span>
        ))}
      </div>

      {/* Sub */}
      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: "22px",
          color: "#FAF6F0",
          opacity: 0.5,
          display: "flex",
        }}
      >
        {c.sub}
      </div>
    </div>
  );
}
