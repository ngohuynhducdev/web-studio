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
        <span className="eyebrow">something&rsquo;s off</span>

        <h1 className={styles.heading}>
          this page is having<br />
          <em className={styles.headingItal}>a little trouble</em> right now.
        </h1>

        <p className={styles.sub}>
          Just a temporary glitch — usually a retry does the trick.<br />
          If it still won&rsquo;t load, head back home for us.
        </p>

        <div className={styles.actions}>
          <button type="button" onClick={reset} className="btn btn-primary btn-lg">
            try again
          </button>
          <Link href="/" className="btn btn-outline btn-lg">
            back home
          </Link>
        </div>
      </div>
    </main>
  );
}
