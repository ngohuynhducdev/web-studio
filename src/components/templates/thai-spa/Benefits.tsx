import Image from 'next/image';
import type { FeaturesSection } from '@/types';
import styles from './ThaiSpa.module.css';

const VISUALS = [
  { img: 'https://images.unsplash.com/photo-1709755491926-f7aa83748967?w=900&q=85&fit=crop&auto=format', pos: 'center 40%' },
  { img: 'https://images.unsplash.com/photo-1611073615848-d6ff6215931f?w=900&q=85&fit=crop&auto=format', pos: '40% 60%' },
  { img: 'https://images.unsplash.com/photo-1570174006382-148305ce4972?w=900&q=85&fit=crop&auto=format', pos: '70% center' },
  { img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=85&fit=crop&auto=format',   pos: '55% 45%' },
  { img: 'https://images.unsplash.com/photo-1616325629936-99a9013c29c6?w=900&q=85&fit=crop&auto=format', pos: 'center 30%' },
];

interface Props { data?: FeaturesSection }

export default function Benefits({ data }: Props = {}) {
  const heading = data?.headingMain ?? 'Massage Thái Giúp Bạn Nếu Bạn:';
  const items   = data?.items ?? [];

  return (
    <section className="bg-[var(--ts-sand)] py-24">
      <div className="max-w-container mx-auto px-[26px]">
        <h2 className={styles.sectionTitle}>{heading}</h2>
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
          {items.map((b, i) => {
            const visual = VISUALS[i % VISUALS.length];
            return (
              <article key={b._key} className="bg-[var(--ts-ivory)] rounded-[24px] overflow-hidden shadow-[var(--ts-shadow-1)] flex flex-col">
                <div className="relative aspect-square">
                  <Image
                    src={b.imageUrl ?? visual.img}
                    alt=""
                    fill
                    className="object-cover"
                    style={{ objectPosition: visual.pos }}
                    sizes="(min-width: 1024px) 240px, 50vw"
                  />
                </div>
                <div className="p-[12px_14px_16px]">
                  <h3 className="font-['Playfair_Display',serif] font-medium text-[15px] leading-[1.2] text-[var(--ts-espresso)] m-0 mb-[6px]">{b.title}</h3>
                  <p className="text-[12px] leading-[1.45] text-[var(--ts-bark)] m-0">{b.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
