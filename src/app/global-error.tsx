"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./global-error.module.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[global-error]", error);
  }, [error]);

  // global-error replaces the root layout entirely, so it must render
  // <html>/<body> itself and cannot rely on globals.css or loaded fonts.
  return (
    <html lang="en">
      <body className={styles.body}>
        <main className={styles.page}>
          <h1 className={styles.heading}>Something went wrong</h1>
          <p className={styles.sub}>
            The site is having a temporary hiccup. Please try again in a few minutes.
          </p>
          <div className={styles.actions}>
            <button type="button" onClick={reset} className={styles.btn}>
              Try again
            </button>
            <Link href="/" className={styles.btnOutline}>
              Back home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
