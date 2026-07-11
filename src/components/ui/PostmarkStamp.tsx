// Circular postmark / rubber-stamp mark — warm-tactile craft motif.
// Ring text wraps a serif center (e.g. "5 / days"). Decorative.
export default function PostmarkStamp({
  ring,
  top,
  bottom,
  className,
}: {
  ring: string;
  top: string;
  bottom: string;
  className?: string;
}) {
  return (
    <span className={`postmark ${className ?? ""}`} aria-hidden="true">
      <svg viewBox="0 0 100 100" role="presentation">
        <defs>
          <path id="postmark-arc" d="M50 50 m-37 0 a37 37 0 1 1 74 0 a37 37 0 1 1 -74 0" />
        </defs>
        <circle cx="50" cy="50" r="46.5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeDasharray="1.5 3" opacity="0.65" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.45" />
        <text className="postmark-ring">
          <textPath href="#postmark-arc" startOffset="0">{ring}</textPath>
        </text>
      </svg>
      <span className="postmark-mark">
        <span className="postmark-top">{top}</span>
        <span className="postmark-bottom">{bottom}</span>
      </span>
    </span>
  );
}
