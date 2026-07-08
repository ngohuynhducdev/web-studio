/* global React */
const mFooterStyles = {
  wrap: { position: 'relative', padding: '48px 22px 40px', overflow: 'hidden', isolation: 'isolate' },
  bg: { position: 'absolute', inset: 0, zIndex: -1, backgroundImage: "url('../../assets/moodboard/about-project.webp')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.4) saturate(0.85)' },
  center: { textAlign: 'center', color: 'var(--ivory)' },
  wm: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 26, letterSpacing: '0.22em' },
  tag: { fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 15, marginTop: 4, color: 'rgba(255,248,241,0.85)' },
  cols: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 32 },
  lbl: { fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,248,241,0.55)', marginBottom: 6 },
  val: { fontSize: 13, color: 'rgba(255,248,241,0.95)', lineHeight: 1.5 },
  linkRow: { display: 'flex', flexWrap: 'wrap', gap: '8px 16px', marginTop: 28, justifyContent: 'center' },
  a: { color: 'rgba(255,248,241,0.85)', textDecoration: 'none', fontSize: 12 },
};

function MobileFooter() {
  return (
    <footer style={mFooterStyles.wrap} id="contact">
      <div style={mFooterStyles.bg}></div>
      <div style={mFooterStyles.center}>
        <div style={mFooterStyles.wm}>SOUL&nbsp;&nbsp;STUDIO</div>
        <div style={mFooterStyles.tag}>Thai Massage</div>
      </div>
      <div style={mFooterStyles.cols}>
        <div>
          <div style={mFooterStyles.lbl}>Location</div>
          <div style={mFooterStyles.val}>1228 Lotus Street<br />Harmony City, CA</div>
        </div>
        <div>
          <div style={mFooterStyles.lbl}>Contact</div>
          <div style={mFooterStyles.val}>+1 (415) 555-7890<br />hello@soulstudio.co</div>
        </div>
      </div>
      <div style={mFooterStyles.linkRow}>
        {['Home','Services','About','Therapist','Pricing','Offer','Contact'].map(s => (
          <a key={s} href={'#' + s.toLowerCase()} style={mFooterStyles.a}>{s}</a>
        ))}
      </div>
    </footer>
  );
}
window.MobileFooter = MobileFooter;
