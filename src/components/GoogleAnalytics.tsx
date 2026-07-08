"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export const ANALYTICS_CONSENT_KEY = "twn_analytics_consent";

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", { page_path: pathname });
  }, [pathname]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
        });
        gtag('js', new Date());
        gtag('config', '${gaId}', { send_page_view: false });
        try {
          var _c = localStorage.getItem('${ANALYTICS_CONSENT_KEY}');
          if (_c === 'granted') gtag('consent', 'update', { analytics_storage: 'granted' });
        } catch(e) {}
      `}</Script>
    </>
  );
}
