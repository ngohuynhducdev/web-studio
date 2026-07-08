/* global React */
const footerStyles = {
  wrap: { position: 'relative', minHeight: 320, padding: '64px 0 32px', overflow: 'hidden', isolation: 'isolate' },
  bg: { position: 'absolute', inset: 0, zIndex: -1, backgroundImage: "url('../../assets/moodboard/about-project.webp')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.4) saturate(0.85)' },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '0 28px', color: 'var(--ivory)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32, alignItems: 'start' },
  col: { display: 'flex', flexDirection: 'column', gap: 8 },
  lbl: { fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,248,241,0.55)' },
  val: { fontSize: 14, color: 'rgba(255,248,241,0.95)' },
  center: { textAlign: 'center' },
  wm: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 30, letterSpacing: '0.22em' },
  tag: { fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 18, marginTop: 4, color: 'rgba(255,248,241,0.85)' },
  links: { display: 'grid', gap: 6, justifyContent: 'end', textAlign: 'right' },
  a: { color: 'rgba(255,248,241,0.85)', textDecoration: 'none', fontSize: 14 },
};

function Footer() {
  return (
    <footer style={footerStyles.wrap} id="contact">
      <div style={footerStyles.bg}></div>
      <div style={footerStyles.inner}>
        <div style={footerStyles.col}>
          <div style={footerStyles.lbl}>Location</div>
          <div style={footerStyles.val}>1228 Lotus Street<br />Harmony City, CA 92210</div>
          <div style={{ ...footerStyles.lbl, marginTop: 16 }}>Contact</div>
          <div style={footerStyles.val}>+1 (415) 555-7890</div>
          <div style={footerStyles.val}>hello@soulstudio.co</div>
        </div>
        <div style={footerStyles.center}>
          <div style={footerStyles.wm}>SOUL&nbsp;&nbsp;STUDIO</div>
          <div style={footerStyles.tag}>Thai Massage</div>
        </div>
        <div style={footerStyles.links}>
          {['Home','Experience','Services','About','Benefits','Therapist','Reviews','Pricing','Offer','Contact'].map(s => (
            <a key={s} href={`#${s.toLowerCase()}`} style={footerStyles.a}>{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
