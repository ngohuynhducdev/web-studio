'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { CalloutSection } from '@/types';
import { ArrowIcon } from './icons';
import styles from './ThaiSpa.module.css';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1577117633143-a2437fb9bdda?w=900&q=85&fit=crop&auto=format';

interface Props { data?: CalloutSection }

export default function Offer({ data }: Props = {}) {
  const headingMain   = data?.headingMain   ?? 'Ưu Đãi 10% Cho';
  const headingItalic = data?.headingItalic ?? 'Lần Đầu Trải Nghiệm';
  const body          = data?.body          ?? 'Điền thông tin và chúng tôi sẽ liên hệ bạn trong vòng 30 phút.';
  const ctaLabel      = data?.ctaLabel      ?? 'Nhận Ưu Đãi Ngay';
  const successMsg    = data?.successMessage ?? 'Cảm ơn bạn — chúng tôi sẽ liên hệ sớm.';
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
                <input type="text" name="name" placeholder="Họ và tên*" required className={styles.offerInput} />
                <input type="tel" name="phone" placeholder="Số điện thoại*" required className={styles.offerInput} />
                <div>
                  <button type="submit" className={styles.btn} disabled={status === 'submitting'}>
                    <span className={styles.btnDot}><ArrowIcon /></span>
                    {status === 'submitting' ? 'Đang gửi...' : ctaLabel}
                  </button>
                </div>
                {status === 'error' && (
                  <p className="text-[14px] text-[var(--ts-bark)] m-0" role="alert">
                    Gửi chưa được. Vui lòng nhắn Zalo để được hỗ trợ nhanh nhất.
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
