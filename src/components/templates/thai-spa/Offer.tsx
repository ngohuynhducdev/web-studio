'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { CalloutSection } from '@/types';
import { ArrowIcon } from './icons';
import styles from './ThaiSpa.module.css';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1577117633143-a2437fb9bdda?w=900&q=85&fit=crop&auto=format';

interface Props { data?: CalloutSection; zaloUrl?: string }

export default function Offer({ data, zaloUrl }: Props = {}) {
  const headingMain   = data?.headingMain   ?? '10% Off Your';
  const headingItalic = data?.headingItalic ?? 'First Visit';
  const body          = data?.body          ?? "Fill in your details and we'll contact you within 30 minutes.";
  const ctaLabel      = data?.ctaLabel      ?? 'Claim Your Offer';
  const successMsg    = data?.successMessage ?? "Thank you — we'll be in touch soon.";
  const image         = data?.imageUrl ?? DEFAULT_IMAGE;
  const showForm      = data?.showLeadForm !== false;
  const web3formsKey  = data?.web3formsKey;

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!web3formsKey) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    try {
      const fd = new FormData(form);
      fd.append('access_key', web3formsKey);
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="bg-[var(--ts-ivory)] py-24" id="offer">
      <div className="max-w-container-narrow mx-auto px-[26px] grid grid-cols-1 md:grid-cols-2 items-center gap-14">
        <div>
          <h2 className={styles.offerTitle}>
            {headingMain}<br /><em>{headingItalic}</em>
          </h2>
          <p className="text-[14px] text-[var(--ts-bark)] m-0 mb-8">{body}</p>
          {showForm && (
            status === 'success' ? (
              <p className={styles.offerSuccess}>{successMsg}</p>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-3 max-w-[420px]">
                {/* Labels are visually hidden rather than absent: a placeholder
                    disappears the moment someone types, so it cannot be the
                    only name a field has. */}
                <label htmlFor="offer-name" className="sr-only">Full name</label>
                <input id="offer-name" type="text" name="name" placeholder="Full name*" required className={styles.offerInput} />
                <label htmlFor="offer-phone" className="sr-only">Phone number</label>
                <input id="offer-phone" type="tel" name="phone" placeholder="Phone number*" required className={styles.offerInput} />
                <div>
                  <button type="submit" className={styles.btn} disabled={status === 'submitting'}>
                    <span className={styles.btnDot}><ArrowIcon /></span>
                    {status === 'submitting' ? 'Sending...' : ctaLabel}
                  </button>
                </div>
                {status === 'error' && (
                  // The message used to name Zalo without linking to it, on a
                  // page that had no Zalo link anywhere — the one moment the
                  // form fails is the worst moment to make someone go looking.
                  <p className="text-[14px] text-[var(--ts-bark)] m-0" role="alert">
                    Something went wrong.{' '}
                    {zaloUrl ? (
                      <a
                        href={zaloUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--ts-wine)] underline underline-offset-2"
                      >
                        Message us on Zalo
                      </a>
                    ) : (
                      'Please call us'
                    )}{' '}
                    for the fastest help.
                  </p>
                )}
              </form>
            )
          )}
        </div>
        <div className={`${styles.offerImage} hidden md:block`}>
          <Image
            src={image}
            alt=""
            fill
            className="object-cover object-[center_40%]"
            sizes="(min-width: 768px) 480px, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
