import Link from "next/link";
import { TEMPLATE_MANIFEST } from "@/lib/templates";
import { STUDIO_ZALO_URL } from "@/data/layout";
import styles from "./TemplatePreviewBar.module.css";

interface TemplatePreviewBarProps {
  slug: string;
  componentKey: string;
  title: string;
}

function ZaloIcon() {
  return (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.04 2 11c0 2.4 1.08 4.58 2.83 6.18L4 22l4.93-1.4c.97.26 2.02.4 3.07.4 5.52 0 10-4.04 10-9s-4.48-10-10-10z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function TemplatePreviewBar({ componentKey, title }: TemplatePreviewBarProps) {
  const manifest = TEMPLATE_MANIFEST;
  const idx = manifest.findIndex((t) => t.slug === componentKey);
  const prev = idx > 0 ? manifest[idx - 1] : null;
  const next = idx < manifest.length - 1 ? manifest[idx + 1] : null;

  const zaloMsg = encodeURIComponent(
    `Mình muốn đặt mẫu "${title}" cho tiệm. Bạn tư vấn giúp mình với nhé!`
  );

  return (
    <div className={styles.previewBar} role="complementary" aria-label="Đặt mẫu này">
      <div className={styles.previewBarLeft}>
        {/* Prev / Next template nav */}
        <div className={styles.previewBarNav}>
          {prev ? (
            <Link href={`/templates/${prev.slug}`} className={styles.previewBarNavBtn} title={prev.label}>
              <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              <span className={styles.previewBarNavLabel}>{prev.label}</span>
            </Link>
          ) : <span className={styles.previewBarNavBtn} style={{ opacity: 0.2, pointerEvents: "none" }}>
            <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </span>}
          {next ? (
            <Link href={`/templates/${next.slug}`} className={styles.previewBarNavBtn} title={next.label}>
              <span className={styles.previewBarNavLabel}>{next.label}</span>
              <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          ) : <span className={styles.previewBarNavBtn} style={{ opacity: 0.2, pointerEvents: "none" }}>
            <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </span>}
        </div>

        <span className={styles.previewBarSep} aria-hidden="true" />
        <span className={styles.previewBarEyebrow}>Đang xem mẫu</span>
        <span className={styles.previewBarSep} aria-hidden="true" />
        <span className={styles.previewBarTitle}>{title}</span>
      </div>

      <div className={styles.previewBarActions}>
        <a
          href={`${STUDIO_ZALO_URL}?text=${zaloMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.previewBarZalo}
        >
          <ZaloIcon />
          Nhắn Zalo
        </a>
        <Link href={`/lien-he?template=${componentKey}`} className={styles.previewBarCta}>
          Đặt mẫu này
          <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}
