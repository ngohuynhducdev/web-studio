"use client";

import { useEffect } from "react";
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
    <html lang="vi">
      <body className={styles.body}>
        <main className={styles.page}>
          <h1 className={styles.heading}>Có lỗi xảy ra</h1>
          <p className={styles.sub}>
            Trang web đang gặp trục trặc tạm thời. Vui lòng thử lại sau ít phút.
          </p>
          <button type="button" onClick={reset} className={styles.btn}>
            Thử lại
          </button>
        </main>
      </body>
    </html>
  );
}
