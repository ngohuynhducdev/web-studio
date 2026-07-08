/* global React, Icon */
const founderStyles = {
  wrap: { background: 'var(--ivory)', padding: '96px 0' },
  inner: { maxWidth: 1100, margin: '0 auto', padding: '24px', background: 'var(--ivory-soft)', borderRadius: 36, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32, alignItems: 'center' },
  imgFrame: { borderRadius: 28, overflow: 'hidden', aspectRatio: '0.85 / 1', boxShadow: 'var(--shadow-1)' },
  img: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' },
  body: { padding: '24px 16px 32px' },
  eyebrow: { fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bark)', fontWeight: 500, marginBottom: 12 },
  name: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 52, lineHeight: 1, letterSpacing: '-0.01em', color: 'var(--espresso)', margin: '0 0 28px' },
  list: { listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 },
  li: { fontSize: 14, lineHeight: 1.5, color: 'var(--bark)', display: 'flex', gap: 10 },
  bullet: { color: 'var(--espresso)', flex: '0 0 auto' },
  social: { display: 'flex', gap: 14, marginTop: 28, color: 'var(--espresso)' },
  socialIcon: { width: 36, height: 36, borderRadius: 999, background: 'transparent', border: '1px solid var(--border-strong)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--espresso)', cursor: 'pointer' },
};

function Founder() {
  return (
    <section style={founderStyles.wrap} id="therapist">
      <div style={founderStyles.inner}>
        <div style={founderStyles.imgFrame}>
          <img style={founderStyles.img} src="../../assets/moodboard/tablet-sophia-brown.webp" alt="Sophia Brown" />
        </div>
        <div style={founderStyles.body}>
          <div style={founderStyles.eyebrow}>Studio Founder</div>
          <h2 style={founderStyles.name}>Sophia Brown</h2>
          <ul style={founderStyles.list}>
            <li style={founderStyles.li}><span style={founderStyles.bullet}>•</span>Internationally certified Thai massage practitioner</li>
            <li style={founderStyles.li}><span style={founderStyles.bullet}>•</span>Holds a medical degree with 15 years of hospital experience</li>
            <li style={founderStyles.li}><span style={founderStyles.bullet}>•</span>Internationally certified Access Bars practitioner</li>
            <li style={founderStyles.li}><span style={founderStyles.bullet}>•</span>Over 5 years of expertise in professional body relaxation</li>
            <li style={founderStyles.li}><span style={founderStyles.bullet}>•</span>Welcomes clients of any gender, age, and physical condition</li>
            <li style={founderStyles.li}><span style={founderStyles.bullet}>•</span>Gently activates the body's natural self-healing processes for every organ and system</li>
          </ul>
          <div style={founderStyles.social}>
            <span style={founderStyles.socialIcon}><Icon name="facebook" size={16} /></span>
            <span style={founderStyles.socialIcon}><Icon name="instagram" size={16} /></span>
            <span style={founderStyles.socialIcon}><Icon name="phone" size={16} /></span>
            <span style={founderStyles.socialIcon}><Icon name="mail" size={16} /></span>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Founder = Founder;
