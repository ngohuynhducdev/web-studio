'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';

export default function Offer() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to your backend / Resend / Formspree
    setSubmitted(true);
  }

  return (
    <section id="offer" className="bg-ivory pb-24">
      <div className="max-w-[1100px] mx-auto px-7 grid items-center gap-14
                      [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
        <div>
          <h2 className="font-display font-medium text-espresso text-balance
                         text-[clamp(28px,2.8vw,40px)] leading-[1.1] tracking-display">
            Enjoy 10% Off Your First Massage
          </h2>
          <p className="mt-4 text-[14px] text-bark">
            Fill out the form and I&apos;ll contact you
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-8 max-w-[420px] grid gap-3">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                className="h-[52px] rounded-full bg-ivory-soft border border-transparent
                           px-5 text-[15px] text-espresso placeholder:text-clay
                           outline-none focus:border-espresso transition-colors duration-base ease-out"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                className="h-[52px] rounded-full bg-ivory-soft border border-transparent
                           px-5 text-[15px] text-espresso placeholder:text-clay
                           outline-none focus:border-espresso transition-colors duration-base ease-out"
              />
              <div className="mt-2">
                <Button type="submit">Book Your Massage</Button>
              </div>
            </form>
          ) : (
            <div className="mt-4 font-display text-[22px] text-espresso">
              Thank you — Sophia will be in touch soon.
            </div>
          )}
        </div>

        <div className="aspect-square relative overflow-hidden rounded-[50%_50%_24px_24px/60%_60%_24px_24px]">
          <Image
            src="/images/moodboard/phone-offer-form.webp"
            alt=""
            fill
            className="object-cover object-[center_40%]"
            sizes="(min-width: 1024px) 480px, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
