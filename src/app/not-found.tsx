import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ZaloBubble from "@/components/ui/ZaloBubble";
import BackToTop from "@/components/ui/BackToTop";
import styles from "./not-found.module.css";

export const metadata = {
  title: "404 — Page not found",
};

function ArrowIcon() {
  return (
    <svg className="btn-arrow" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default async function NotFound() {
  return (
    <>
      <Navbar />
      <main className={`${styles.page} grain`}>
        <div className={`container-site ${styles.inner}`}>
          <span className="eyebrow">lost your way</span>

          <div className={styles.num} aria-hidden="true">404</div>

          <h1 className={styles.heading}>
            this page doesn&rsquo;t<br />
            <em className={styles.headingItal}>exist</em> anymore.
          </h1>

          <p className={styles.sub}>
            The link might be broken, or the page has moved.<br />
            Try heading back home or browse our templates.
          </p>

          <div className={styles.actions}>
            <Link href="/" className="btn btn-primary btn-lg">
              back home
              <ArrowIcon />
            </Link>
            <Link href="/templates" className="btn btn-outline btn-lg">
              view templates
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <ZaloBubble />
      <BackToTop />
    </>
  );
}
