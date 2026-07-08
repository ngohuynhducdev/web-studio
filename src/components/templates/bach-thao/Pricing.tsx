'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import styles from './BachThao.module.css';
import type { PricingSection, ServicesSection } from '@/types';

// Arched feature photo (verified spa massage) — reference shows candles + foot massage.
const PRICING_IMAGE =
  'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=900&q=85&fit=crop&auto=format';

// Code-only category map (identity, not CMS) — keyed by default _key.
const ALL = 'Tất cả';
const CAT_BY_KEY: Record<string, string> = {
  sv1: 'Ngâm chân',
  sv2: 'Massage',
  sv3: 'Lăn đá',
  sv4: 'Ấm bụng',
  sv5: 'Combo',
  pk1: 'Combo',
  pk2: 'Combo',
  pk3: 'Combo',
};
// Round thumbnails for packages (which carry no CMS image).
const THUMB_BY_KEY: Record<string, string> = {
  pk1: 'https://images.unsplash.com/photo-1546852199-2d8e8c4aaada?w=200&q=80&fit=crop&auto=format',
  pk2: 'https://images.unsplash.com/photo-1559185590-879c66a55254?w=200&q=80&fit=crop&auto=format',
  pk3: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=200&q=80&fit=crop&auto=format',
};
const TAB_ORDER = [ALL, 'Combo', 'Ngâm chân', 'Massage', 'Lăn đá', 'Ấm bụng'];

type MenuItem = {
  key: string;
  name: string;
  desc?: string;
  price?: string;
  thumb?: string;
  featured: boolean;
  category: string;
};

type Props = {
  s: PricingSection;
  serviceItems?: ServicesSection['services'];
};

export default function Pricing({ s, serviceItems }: Props) {
  const [sectionRef, inView] = useInView<HTMLElement>();

  const items = useMemo<MenuItem[]>(() => {
    const fromPackages: MenuItem[] = (s.packages ?? []).map((p) => ({
      key: p._key,
      name: p.name,
      // Reference shows the treatment breakdown as the description line.
      desc: p.includes && p.includes.length > 0 ? p.includes.join(' + ') : p.desc,
      price: p.price,
      thumb: THUMB_BY_KEY[p._key],
      featured: p.featured === true,
      category: CAT_BY_KEY[p._key] ?? 'Combo',
    }));
    const fromServices: MenuItem[] = (serviceItems ?? []).map((sv) => ({
      key: sv._key,
      name: sv.name,
      desc: sv.desc,
      price: sv.price,
      thumb: sv.imageUrl,
      featured: sv.tag === 'Phổ biến' || sv.tag === 'Bestseller',
      category: CAT_BY_KEY[sv._key] ?? 'Khác',
    }));
    return [...fromPackages, ...fromServices];
  }, [s.packages, serviceItems]);

  const tabs = useMemo(() => {
    const present = new Set(items.map((it) => it.category));
    const ordered = TAB_ORDER.filter((t) => t === ALL || present.has(t));
    const extra = [...present].filter((c) => !TAB_ORDER.includes(c));
    return [...ordered, ...extra];
  }, [items]);

  // Default to the bundles tab (matches reference's active "Bundles" view).
  const [active, setActive] = useState(() =>
    items.some((it) => it.category === 'Combo') ? 'Combo' : ALL,
  );
  const visible = active === ALL ? items : items.filter((it) => it.category === active);

  if (items.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className={`bg-[var(--bt-bg)] py-24 md:py-32 ${inView ? styles.inView : ''}`}
    >
      <div className="mx-auto max-w-container px-5 md:px-10">

        {/* Head — centered */}
        <div className={`${styles.revealElem} ${styles.rd1} mx-auto mb-9 flex max-w-[620px] flex-col items-center text-center md:mb-10`}>
          <h2 className={`${styles.h2} ${styles.h2Plain}`}>
            {s.headingMain}
            {s.headingItalic && <> <em>{s.headingItalic}</em></>}
          </h2>
        </div>

        {/* Category tabs */}
        <div className={`${styles.revealElem} ${styles.rd2} ${styles.priceTabs}`} role="tablist" aria-label="Danh mục bảng giá">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={active === t}
              onClick={() => setActive(t)}
              className={`${styles.priceTab} ${active === t ? styles.priceTabActive : ''}`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-14 lg:gap-16">

          {/* LEFT — price menu */}
          <div className={`${styles.revealElem} ${styles.rd3}`}>
            {visible.map((it) => (
              <div
                key={it.key}
                className={`${styles.priceItem} ${it.featured ? styles.priceItemFeatured : ''}`}
              >
                {it.thumb && (
                  <span className={styles.priceThumb}>
                    <Image src={it.thumb} alt={it.name} fill sizes="56px" className="object-cover" />
                  </span>
                )}
                <div className="min-w-0 flex-1">
                  {it.featured && <span className={styles.priceBadge}>Phổ biến nhất</span>}
                  <div className={styles.priceLeader}>
                    <h3 className={styles.priceName}>{it.name}</h3>
                    <span className={styles.priceDots} aria-hidden="true" />
                    <span className={styles.priceVal}>{it.price}</span>
                  </div>
                  {it.desc && <p className={styles.priceDesc}>{it.desc}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — arched photo */}
          <div className={`${styles.revealElem} ${styles.rd3} ${styles.archedPhoto} relative mx-auto aspect-[3/4] w-full max-w-[430px]`}>
            <Image
              src={PRICING_IMAGE}
              alt="Không gian trị liệu Bách Thảo"
              fill
              sizes="(min-width: 1024px) 430px, 100vw"
              className={`${styles.archedPhotoImg} object-cover`}
            />
          </div>
        </div>

        {/* Footer — centered CTA + note */}
        <div className={`${styles.revealElem} ${styles.rd4} mt-12 flex flex-col items-center gap-4 text-center md:mt-14`}>
          <a href="#booking" className={styles.btnOutlineRectDark}>Đặt lịch ngay</a>
          <p className="m-0 text-[12.5px] text-[var(--bt-ink-mid)]">
            Tất cả gói đều dùng thảo mộc tươi, hái trong ngày.
          </p>
        </div>
      </div>
    </section>
  );
}
