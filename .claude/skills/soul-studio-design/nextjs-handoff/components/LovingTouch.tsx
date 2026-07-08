import Image from 'next/image';

export default function LovingTouch() {
  return (
    <section className="bg-ivory pb-24">
      <div className="relative max-w-container mx-auto h-[460px] rounded-[36px] overflow-hidden shadow-2">
        <Image
          src="/images/moodboard/laptop-loving-touch.webp"
          alt=""
          fill
          className="object-cover object-[center_55%]"
          sizes="(min-width: 1024px) 1200px, 100vw"
        />
        {/* Scrim — single dark gradient permitted in the brand */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_40%,rgba(20,8,8,0.55)_70%)]" />

        <div className="absolute right-9 top-1/2 -translate-y-1/2 max-w-[360px]
                        rounded-3xl p-7 bg-[rgba(28,16,12,0.62)] text-ivory">
          <h2 className="font-display font-medium text-[30px] leading-[1.1] m-0">
            Loving Through Touch
          </h2>
          <p className="mt-3 text-[14px] leading-[1.6] text-ivory/85">
            A professional massage therapist with extensive experience is ready to care for your physical and emotional well-being.
          </p>
        </div>
      </div>
    </section>
  );
}
