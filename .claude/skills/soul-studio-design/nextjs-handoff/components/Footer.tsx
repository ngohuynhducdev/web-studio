import Image from 'next/image';

const LINKS = ['Home', 'Experience', 'Services', 'About', 'Benefits', 'Therapist', 'Reviews', 'Pricing', 'Offer', 'Contact'];

export default function Footer() {
  return (
    <footer id="contact" className="relative isolate min-h-[320px] py-16">
      {/* Background photo with brightness/saturation reduction */}
      <Image
        src="/images/moodboard/about-project.webp"
        alt=""
        fill
        className="object-cover -z-10 brightness-[0.4] saturate-[0.85]"
        sizes="100vw"
      />

      <div className="max-w-container mx-auto px-7 text-ivory grid items-start gap-12
                      [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
        <div className="space-y-2">
          <div className="text-[11px] tracking-[0.18em] uppercase text-ivory/55">Location</div>
          <div className="text-[14px] text-ivory/95">
            1228 Lotus Street<br />Harmony City, CA 92210
          </div>
          <div className="text-[11px] tracking-[0.18em] uppercase text-ivory/55 pt-4">Contact</div>
          <div className="text-[14px] text-ivory/95">+1 (415) 555-7890</div>
          <div className="text-[14px] text-ivory/95">hello@soulstudio.co</div>
        </div>

        <div className="text-center">
          <div className="font-display font-medium text-[30px] tracking-[0.22em]">
            SOUL&nbsp;&nbsp;STUDIO
          </div>
          <div className="font-display italic text-[18px] mt-1 text-ivory/85">
            Thai Massage
          </div>
        </div>

        <nav className="grid gap-1.5 justify-end text-right">
          {LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[14px] text-ivory/85 hover:text-ivory transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
