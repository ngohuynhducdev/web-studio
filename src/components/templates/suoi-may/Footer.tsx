import Link from 'next/link';
import { NAV_LINKS, BOOKING_LINK, SOCIAL_LINKS } from './navLinks';
import { PhoneIcon, MapPinIcon, ClockIcon, ChatIcon } from './icons';
import type { BookingSection } from '@/types';

const FOOTER_LINKS = [...NAV_LINKS, BOOKING_LINK];

export default function Footer({ businessName, s }: { businessName: string; s?: BookingSection }) {
  const isExternal = !!s?.zaloUrl && !s.zaloUrl.startsWith('#');

  return (
    <footer className="bg-[var(--sm-bg0)] text-[var(--sm-light)] border-t border-[rgba(244,237,226,0.1)]">
      <div className="max-w-[78rem] mx-auto px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
        {/* Brand */}
        <div className="md:col-span-5">
          <a href="#" className="font-[family-name:var(--sm-serif)] font-normal text-[1.5rem] tracking-[0.12em] uppercase text-[var(--sm-light)] no-underline">
            {businessName}
          </a>
          <p className="text-[0.88rem] leading-[1.8] text-[var(--sm-light)]/55 mt-4 max-w-[24rem]">
            Một chốn tĩnh giữa lòng phố, nơi nghi thức chăm sóc cổ truyền gặp không gian
            hiện đại. Thư giãn, hồi phục, tìm lại cân bằng cho chính mình.
          </p>
          <div className="flex gap-3 mt-6">
            {SOCIAL_LINKS.map((soc) => (
              <a
                key={soc.label}
                href={soc.href}
                aria-label={soc.label}
                className="flex items-center justify-center w-11 h-11 rounded-full border border-[rgba(244,237,226,0.22)] text-[var(--sm-light)]/70 transition-colors duration-200 hover:border-[var(--sm-accent)] hover:text-[var(--sm-accent)]"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d={soc.path} /></svg>
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <nav className="md:col-span-3" aria-label="Khám phá">
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[var(--sm-light)]/60 mb-5">Khám phá</p>
          <ul className="flex flex-col gap-3 list-none p-0">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-[0.875rem] text-[var(--sm-light)]/70 no-underline transition-colors duration-200 hover:text-[var(--sm-light)]">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="md:col-span-4">
          <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[var(--sm-light)]/60 mb-5">Liên hệ</p>
          <ul className="flex flex-col gap-3.5 list-none p-0">
            {s?.address && (
              <li>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[0.875rem] leading-[1.6] text-[var(--sm-light)]/70 no-underline transition-colors duration-200 hover:text-[var(--sm-light)]"
                >
                  <span className="mt-0.5 text-[var(--sm-accent)] shrink-0"><MapPinIcon /></span>{s.address}
                </a>
              </li>
            )}
            {s?.phone && (
              <li>
                <a href={`tel:${s.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-[0.875rem] text-[var(--sm-light)]/70 no-underline transition-colors duration-200 hover:text-[var(--sm-light)]">
                  <span className="text-[var(--sm-accent)] shrink-0"><PhoneIcon /></span>{s.phone}
                </a>
              </li>
            )}
            {(s?.hours?.length ?? 0) > 0 && (
              <li className="flex items-start gap-3 text-[0.875rem] text-[var(--sm-light)]/70">
                <span className="mt-0.5 text-[var(--sm-accent)] shrink-0"><ClockIcon /></span>
                <div className="flex flex-col gap-1">
                  {s!.hours!.map((h) => (
                    <div key={h._key} className="flex flex-wrap gap-x-2">
                      <span className="text-[var(--sm-light)]/50">{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </li>
            )}
          </ul>
          {s?.zaloUrl && (
            <a
              href={s.zaloUrl}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2.5 mt-6 text-[0.82rem] font-semibold tracking-[0.04em] text-[var(--sm-light)] bg-[var(--sm-accent)] rounded-full no-underline px-6 py-3 transition-[filter] duration-200 hover:brightness-105 active:translate-y-px"
            >
              <ChatIcon /> Nhắn Zalo giữ chỗ
            </a>
          )}
        </div>
      </div>

      <div className="border-t border-[rgba(244,237,226,0.1)]">
        <div className="max-w-[78rem] mx-auto px-6 md:px-10 py-6 text-center text-[0.74rem] text-[var(--sm-light)]/60">
          © {new Date().getFullYear()} {businessName} Spa & Wellness · Website by{' '}
          <Link href="/" className="text-[var(--sm-light)]/70 underline">web studio</Link>
        </div>
      </div>
    </footer>
  );
}
