import Image from 'next/image';
import type { FounderSection } from '@/types';
import styles from './ThaiSpa.module.css';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1616326431919-be810ad5dacd?w=900&q=85&fit=crop&auto=format';

function SocialIcon({ platform }: { platform: string }) {
  switch (platform) {
    case 'facebook':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    default:
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.6 1.3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.72 15z" />
        </svg>
      );
  }
}

interface Props { data?: FounderSection }

export default function Founder({ data }: Props = {}) {
  const eyebrow     = data?.eyebrow ?? 'Chuyên Viên Trị Liệu';
  const name        = data?.name ?? '';
  const image       = data?.imageUrl ?? DEFAULT_IMAGE;
  const credentials = data?.credentials ?? [];
  const socials     = data?.socials ?? [];

  return (
    <section className="bg-[var(--ts-ivory)] py-24" id="therapist">
      <div className="max-w-container-narrow mx-auto px-[26px]">
        <div className="bg-[var(--ts-ivory-soft)] rounded-[36px] p-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="relative aspect-[0.85/1] rounded-[28px] overflow-hidden shadow-[var(--ts-shadow-1)]">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover object-[center_30%]"
              sizes="(min-width: 1024px) 480px, 90vw"
            />
          </div>
          <div className="px-4 pb-8 pt-0">
            <div className={styles.eyebrow}>{eyebrow}</div>
            <h2 className="font-['Playfair_Display',serif] font-medium text-[clamp(34px,3.2vw,50px)] leading-none tracking-[-0.01em] text-[var(--ts-espresso)] mt-2 mb-6">{name}</h2>
            <ul className="list-none p-0 m-0 mb-6 flex flex-col gap-[10px]">
              {credentials.map((c, i) => (
                <li key={i} className="flex gap-[10px] text-[14px] leading-[1.5] text-[var(--ts-bark)]">
                  <span className="text-[var(--ts-espresso)] shrink-0">•</span>
                  {c}
                </li>
              ))}
            </ul>
            {socials.length > 0 && (
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s._key}
                    href={s.url || '#'}
                    className="w-9 h-9 rounded-full border border-[var(--ts-border-strong)] bg-transparent text-[var(--ts-espresso)] cursor-pointer grid place-items-center transition-[background,color] duration-150 hover:bg-[var(--ts-espresso)] hover:text-[var(--ts-ivory)] no-underline"
                    aria-label={s.platform}
                    target={s.url && s.url !== '#' ? '_blank' : undefined}
                    rel={s.url && s.url !== '#' ? 'noopener noreferrer' : undefined}
                  >
                    <SocialIcon platform={s.platform} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
