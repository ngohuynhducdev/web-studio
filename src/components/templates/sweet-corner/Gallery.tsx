import styles from './SweetCorner.module.css';
import type { GallerySection } from '@/types';

export default function Gallery({ s }: { s: GallerySection }) {
  return (
    <section className="py-[72px] md:py-[100px] bg-white" id="gallery">
      <div className="max-w-container mx-auto px-5 md:px-10">
        {/* Section head */}
        <div className="text-center max-w-[600px] mx-auto mb-14 flex flex-col gap-[14px]">
          {s.eyebrow && <p className={styles.eyebrow}>{s.eyebrow}</p>}
          <h2 className={styles.h2}>{s.headingMain} {s.headingItalic && <em>{s.headingItalic}</em>}</h2>
          <p className="text-[16px] leading-[1.65] text-[#7d4560] m-0">100% ảnh thật từ shop — không chỉnh sửa, không filter. Bánh nhận được đẹp y như ảnh nhé!</p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {(s.items ?? []).map((item) => (
            <div key={item._key} className={`rounded-[20px] overflow-hidden bg-[#fff5f8] border border-[rgba(232,96,140,0.1)] cursor-pointer ${styles.galleryItem}`}>
              {/* Image area */}
              <div className="aspect-[4/3] bg-[linear-gradient(135deg,#ffe4ee_0%,#ffd6e8_50%,#ffbfd8_100%)] flex items-center justify-center relative overflow-hidden">
                {item.emoji && <span className={`text-[72px] leading-none ${styles.galleryEmoji}`}>{item.emoji}</span>}
                <div className={`absolute inset-0 bg-[rgba(232,96,140,0.5)] flex items-center justify-center ${styles.galleryOverlay}`}>
                  <span className="text-[32px]">🔍</span>
                </div>
              </div>
              {/* Info */}
              <div className="px-[18px] py-[14px] flex flex-col gap-1">
                <p className="text-[14px] font-bold text-[#2a1220] m-0">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-12 flex-wrap text-center">
          <p className="text-[15px] text-[#7d4560] m-0">Xem thêm <strong className="text-[var(--sc-accent)]">200+ hình ảnh</strong> thực tế trên fanpage của tụi mình!</p>
          <a href="#" className={styles.btnOutline}>📷 Xem fanpage →</a>
        </div>
      </div>
    </section>
  );
}
