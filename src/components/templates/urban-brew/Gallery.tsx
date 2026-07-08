import styles from './UrbanBrew.module.css';
import type { GallerySection } from '@/types';

export default function Gallery({ s }: { s: GallerySection }) {
  return (
    <section className="bg-[var(--cf-bg)] py-[72px] md:py-[100px]">
      <div className="mx-auto max-w-container px-5 md:px-10">
        {/* Section header */}
        <div className="mb-14 flex flex-col gap-[14px]">
          {s.eyebrow && <p className={styles.eyebrow}>{s.eyebrow}</p>}
          <h2 className={styles.h2}>{s.headingMain} {s.headingItalic && <em>{s.headingItalic}</em>}</h2>
        </div>

        {/* Gallery grid — 1 col mobile → 3 col desktop */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:[grid-template-rows:240px_240px]">
          {(s.items ?? []).map((item) => (
            <div
              key={item._key}
              className={`${styles.galleryCell} relative flex h-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-[18px] border border-[var(--cf-border)] bg-gradient-to-br from-[var(--cf-surface)] to-[var(--cf-elevated)] transition-transform duration-300 hover:scale-[1.02] hover:z-[1] md:h-auto ${item.wide ? 'md:col-span-2' : ''}`}
            >
              {item.emoji && (
                <span className={`${styles.galleryEmoji} relative z-[1] select-none text-[72px] leading-none transition-transform duration-350`}>
                  {item.emoji}
                </span>
              )}
              <div className={styles.galleryOverlay}>
                <span className="text-[13px] font-bold tracking-[0.04em] lowercase text-[var(--cf-text)]">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
