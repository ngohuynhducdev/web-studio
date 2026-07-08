/* global React, Icon */
const mFounderStyles = {
  wrap: { background: 'var(--ivory)', padding: '56px 22px' },
  inner: { background: 'var(--ivory-soft)', borderRadius: 28, padding: 18, boxShadow: 'var(--shadow-1)' },
  imgFrame: { borderRadius: 22, overflow: 'hidden', aspectRatio: '0.92 / 1' },
  img: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%' },
  eyebrow: { fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bark)', fontWeight: 500, marginTop: 22 },
  name: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 36, lineHeight: 1, letterSpacing: '-0.01em', color: 'var(--espresso)', margin: '6px 0 18px' },
  list: { listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 },
  li: { fontSize: 13, lineHeight: 1.5, color: 'var(--bark)', display: 'flex', gap: 8 },
  bullet: { color: 'var(--espresso)', flex: '0 0 auto' },
  social: { display: 'flex', gap: 10, marginTop: 20, color: 'var(--espresso)' },
  socialIcon: { width: 32, height: 32, borderRadius: 999, border: '1px solid var(--border-strong)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--espresso)' },
};

function MobileFounder() {
  return (
    <section style={mFounderStyles.wrap} id="therapist">
      <div style={mFounderStyles.inner}>
        <div style={mFounderStyles.imgFrame}>
          <img style={mFounderStyles.img} src="../../assets/moodboard/tablet-sophia-brown.webp" alt="Sophia Brown" />
        </div>
        <div style={mFounderStyles.eyebrow}>Studio Founder</div>
        <h2 style={mFounderStyles.name}>Sophia Brown</h2>
        <ul style={mFounderStyles.list}>
          <li style={mFounderStyles.li}><span style={mFounderStyles.bullet}>•</span>Internationally certified Thai massage practitioner</li>
          <li style={mFounderStyles.li}><span style={mFounderStyles.bullet}>•</span>Holds a medical degree with 15 years of hospital experience</li>
          <li style={mFounderStyles.li}><span style={mFounderStyles.bullet}>•</span>Over 5 years of expertise in professional body relaxation</li>
          <li style={mFounderStyles.li}><span style={mFounderStyles.bullet}>•</span>Gently activates the body's natural self-healing processes</li>
        </ul>
        <div style={mFounderStyles.social}>
          <span style={mFounderStyles.socialIcon}><Icon name="facebook" size={14} /></span>
          <span style={mFounderStyles.socialIcon}><Icon name="instagram" size={14} /></span>
          <span style={mFounderStyles.socialIcon}><Icon name="phone" size={14} /></span>
          <span style={mFounderStyles.socialIcon}><Icon name="mail" size={14} /></span>
        </div>
      </div>
    </section>
  );
}
window.MobileFounder = MobileFounder;
