/* global React, Icon */
const headerStyles = {
  wrap: {
    position: 'sticky', top: 0, zIndex: 50,
    background: 'var(--ivory)',
    borderBottom: '1px solid var(--border)',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '22px 28px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
    flexWrap: 'wrap',
  },
  wm: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 14, letterSpacing: '0.22em', color: 'var(--espresso)' },
  link: { color: 'inherit', textDecoration: 'none', padding: '6px 2px', position: 'relative' },
  hamb: {
    width: 44, height: 44, borderRadius: 999, background: 'var(--espresso)',
    color: 'var(--ivory)', display: 'flex', alignItems: 'center', justifyContent: 'center',
    border: 0, cursor: 'pointer',
  },
};

function Header() {
  const items = ['Experience','Services','About','Therapist','Reviews','Pricing','Contact'];
  return (
    <header className="ss-header" style={headerStyles.wrap}>
      <div style={headerStyles.inner}>
        <div style={headerStyles.wm}>SOUL&nbsp;&nbsp;STUDIO</div>
        <nav className="ss-nav-links" style={{ display: 'flex', gap: 32, fontSize: 13, color: 'var(--bark)' }}>
          {items.map(s => <a key={s} href={`#${s.toLowerCase()}`} style={headerStyles.link}>{s}</a>)}
        </nav>
        <button style={headerStyles.hamb} aria-label="Menu"><Icon name="menu" size={18} /></button>
      </div>
    </header>
  );
}
window.Header = Header;
