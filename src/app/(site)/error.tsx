"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./error.module.css";

export default function SiteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[site-error]", error);
  }, [error]);

  return (
    <main className={`${styles.page} grain`}>
      <div className={`container-site ${styles.inner}`}>
        <span className="eyebrow">có gì đó không ổn</span>

        <h1 className={styles.heading}>
          trang này đang<br />
          <em className={styles.headingItal}>gặp trục trặc</em> một chút.
        </h1>

        <p className={styles.sub}>
          Lỗi tạm thời thôi — thường thử lại là được.<br />
          Nếu vẫn không vào được, quay về trang chủ giúp tụi mình nhé.
        </p>

        <div className={styles.actions}>
          <button type="button" onClick={reset} className="btn btn-primary btn-lg">
            thử lại
          </button>
          <Link href="/" className="btn btn-outline btn-lg">
            về trang chủ
          </Link>
        </div>
      </div>
    </main>
  );
}
