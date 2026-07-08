import Image from 'next/image';
import Button from '@/components/Button';

export default function Hero() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="max-w-container mx-auto px-7 grid items-center gap-12 md:gap-14
                      [grid-template-columns:repeat(auto-fit,minmax(360px,1fr))]">
        <div>
          <h1 className="font-display font-medium text-espresso
                         text-[clamp(40px,4.6vw,64px)] leading-[1.05] tracking-display">
            Immerse <em className="italic font-medium">Yourself</em> In The Atmosphere Of Thai Relaxation And Harmony
          </h1>
          <p className="mt-7 max-w-[440px] text-bark text-[16px] leading-[1.55]">
            SOUL STUDIO Thai Massage offers you unique treatments and a true journey into the world of Thai culture and healing.
          </p>
          <div className="mt-9">
            <Button>Begin a New Chapter</Button>
          </div>
        </div>

        <div className="aspect-[1.1/1] rounded-[32px] overflow-hidden shadow-2 bg-espresso relative">
          <Image
            src="/images/moodboard/hero-laptop-meditation.webp"
            alt="A practitioner meditating in a candlelit Thai-inspired interior"
            fill
            className="object-cover object-[60%_center]"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
