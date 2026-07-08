import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import ZaloBubble from "@/components/ui/ZaloBubble";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div id="main-content" tabIndex={-1} className="outline-none">
        {children}
      </div>
      <Footer />
      <ZaloBubble />
      <BackToTop />
    </>
  );
}
