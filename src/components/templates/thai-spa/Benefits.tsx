import Image from 'next/image';
import type { FeaturesSection } from '@/types';
import styles from './ThaiSpa.module.css';

// Entries 3 and 4 replaced photos this grid shared with LovingTouch and the
// Footer — the same image twice on one page, once as a full-bleed band and
// once as a thumbnail. Every image in this template is used exactly once.
//
// Entry 1 replaced a shot dominated by a large green painting, the one thing
// on the page unrelated to the ivory, sand and wine palette. Its carved
// lattice screens also rhyme with the LovingTouch band.
const VISUALS = [
  { img: 'https://images.unsplash.com/photo-1605972082877-46c5f53df51d?w=900&q=85&fit=crop&auto=format', pos: 'center' },
  { img: 'https://images.unsplash.com/photo-1611073615848-d6ff6215931f?w=900&q=85&fit=crop&auto=format', pos: '40% 60%' },
  { img: 'https://images.unsplash.com/photo-1775133262667-316bd4d9e5b5?w=900&q=85&fit=crop&auto=format', pos: 'center' },
  { img: 'https://images.unsplash.com/photo-1608571424634-58ae03e6edcf?w=900&q=85&fit=crop&auto=format', pos: 'center 45%' },
  { img: 'https://images.unsplash.com/photo-1616325629936-99a9013c29c6?w=900&q=85&fit=crop&auto=format', pos: 'center 30%' },
];

interface Props { data?: FeaturesSection }

export default function Benefits({ data }: Props = {}) {
  const heading = data?.headingMain ?? 'Thai Massage Helps If You:';
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
