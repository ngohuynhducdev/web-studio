import Link from 'next/link';
import { NAV_LINKS } from './navLinks';

export default function Footer({ displayName }: { displayName: string }) {
  return (
    <footer className="bg-[#2a1220] pt-9 pb-[100px]">
      <div className="max-w-container mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 flex-wrap text-center md:text-left">
        <a
          href="#"
          className="font-[family-name:var(--font-pacifico)] text-[18px] text-[#ffd6e8] no-underline leading-none transition-colors duration-200 hover:text-white"
        >
          {displayName} <span className="text-[var(--sc-accent)]">♥</span>
        </a>
        <p className="text-[13px] text-[rgba(255,214,232,0.5)] m-0">
          © {new Date().getFullYear()} {displayName} · Website by <Link href="/" className="text-[rgba(255,214,232,0.7)] no-underline transition-colors duration-200 hover:text-[#ffd6e8]">tiệm web nhỏ</Link>
        </p>
        <nav className="flex gap-6" aria-label="Footer links">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] font-semibold text-[rgba(255,214,232,0.6)] no-underline transition-colors duration-200 hover:text-[#ffd6e8]">{l.label}</a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
