"use client";

import { useState, useEffect } from "react";
import { ANALYTICS_CONSENT_KEY } from "@/components/GoogleAnalytics";
import styles from "./CookieBanner.module.css";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let show = false;
    try {
      show = !localStorage.getItem(ANALYTICS_CONSENT_KEY);
    } catch {
      // private browsing or quota exceeded — don't show banner
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(show);
  }, []);

  function accept() {
    try { localStorage.setItem(ANALYTICS_CONSENT_KEY, "granted"); } catch { /* noop */ }
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", { analytics_storage: "granted" });
    }
    setVisible(false);
  }

  function deny() {
    try { localStorage.setItem(ANALYTICS_CONSENT_KEY, "denied"); } catch { /* noop */ }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={styles.banner} role="region" aria-label="Đồng ý sử dụng cookie">
      <p className={styles.text}>
        Trang này dùng cookie phân tích để cải thiện trải nghiệm. Bạn có đồng ý không?
      </p>
      <div className={styles.actions}>
        <button onClick={deny} className={styles.btnDeny}>Từ chối</button>
        <button onClick={accept} className={styles.btnAccept}>Đồng ý</button>
      </div>
    </div>
  );
}
