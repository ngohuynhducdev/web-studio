/* global React, Icon */

function PrimaryCta({ children, icon = 'arrowUpRight', light, ghost, onClick, style }) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    padding: '14px 22px 14px 14px',
    borderRadius: 999,
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    fontWeight: 500,
    letterSpacing: '0.04em',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background 260ms cubic-bezier(.22,.61,.36,1), transform 150ms ease',
  };
  const variants = {
    default: { background: 'var(--deep-wine)', color: 'var(--ivory)' },
    ghost:   { background: 'transparent', color: 'var(--fg-1)', border: '1px solid var(--border-strong)', padding: '13px 22px' },
    light:   { background: 'var(--ivory)', color: 'var(--espresso)', border: '1px solid var(--border-strong)' },
  };
  const variant = ghost ? variants.ghost : light ? variants.light : variants.default;
  const dotBg   = ghost ? null : (light ? 'var(--deep-wine)' : 'var(--ivory)');
  const dotFg   = ghost ? null : (light ? 'var(--ivory)' : 'var(--deep-wine)');

  return (
    <button onClick={onClick} style={{ ...base, ...variant, ...style }}>
      {!ghost && (
        <span style={{ width: 28, height: 28, borderRadius: 999, background: dotBg, color: dotFg, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
          <Icon name={icon} size={14} stroke={2} />
        </span>
      )}
      {children}
      {ghost && <Icon name={icon} size={16} stroke={2} />}
    </button>
  );
}

window.PrimaryCta = PrimaryCta;
