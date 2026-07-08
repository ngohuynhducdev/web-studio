import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { STUDIO_ZALO_URL } from "@/data/layout";
import styles from "./TemplateComingSoon.module.css";

interface TemplateComingSoonProps {
  slug: string;
  title: string;
  industry: string;
  description: string;
  price: number;
  thumbnailUrl?: string;
}

const industryLabel: Record<string, string> = {
  nail: "Nail salon",
  spa: "Spa / Massage",
  cafe: "Cà phê",
  gym: "Gym / Fitness",
  barber: "Barber",
  bakery: "Tiệm bánh",
  studio: "Studio",
  other: "Khác",
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("vi-VN").format(price) + "đ";
}

export default function TemplateComingSoon({
  slug,
  title,
  industry,
  description,
  price,
  thumbnailUrl,
}: TemplateComingSoonProps) {
  const zaloMsg = encodeURIComponent(
    `Chào bạn, mình muốn đặt trước mẫu "${title}" — khi nào mẫu này xong vậy?`
  );

  return (
    <>
    <Navbar />
    <main className={styles.tcsPage}>
      <div className={`container-site ${styles.tcsInner}`}>

        {/* Back link */}
        <Link href="/templates" className={styles.tcsBack}>
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Tất cả mẫu
        </Link>

        <div className={styles.tcsGrid}>

          {/* Left — thumbnail */}
          <div className={styles.tcsPreview}>
            {thumbnailUrl ? (
              <div className={styles.tcsThumbnailWrap}>
                <Image
                  src={thumbnailUrl}
                  alt={`Mẫu ${title}`}
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className={styles.tcsThumbnailImg}
                  priority
                />
                <div className={styles.tcsOverlay}>
                  <span className={styles.tcsOverlayLabel}>preview sắp có</span>
                </div>
              </div>
            ) : (
              <div className={styles.tcsThumbnailEmpty}>
                <span className={styles.tcsThumbnailEmptyText}>{title[0]}</span>
              </div>
            )}
          </div>

          {/* Right — info */}
          <div className={styles.tcsInfo}>
            <div className={styles.tcsBadges}>
              <span className={styles.tcsBadgeIndustry}>{industryLabel[industry] ?? industry}</span>
              <span className={styles.tcsBadgeSoon}>Đang hoàn thiện</span>
            </div>

            <h1 className={styles.tcsTitle}>{title}</h1>
            <p className={styles.tcsDesc}>{description}</p>

            <div className={styles.tcsPriceRow}>
              <span className={styles.tcsPrice}>{formatPrice(price)}</span>
              <span className={styles.tcsPriceUnit}>/tháng</span>
            </div>

            {/* Notice */}
            <div className={styles.tcsNotice}>
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={styles.tcsNoticeIcon} aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p>
                Mẫu này đang được hoàn thiện. Bạn vẫn có thể <strong>đặt trước</strong> —
                mình sẽ báo ngay khi preview live và ưu tiên làm cho bạn trước.
              </p>
            </div>

            <div className={styles.tcsActions}>
              <Link
                href={`/lien-he?template=${slug}`}
                className="btn btn-primary btn-lg"
              >
                Đặt trước mẫu này
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <a
                href={`${STUDIO_ZALO_URL}?text=${zaloMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
              >
                💬 Hỏi qua Zalo
              </a>
            </div>

            <p className={styles.tcsReassure}>
              Tư vấn miễn phí · Trả lời trong 1–2 giờ
            </p>
          </div>

        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
