import { Icon } from '@rubeen/lagebild';

const names = ['info', 'tip', 'warning', 'danger', 'spark', 'arrow', 'search', 'moon', 'audio', 'heart'] as const;

export const Alle = () => (
  <div className="rv-row" style={{ color: 'var(--ink)' }}>
    {names.map((n) => (
      <span key={n} style={{ display: 'inline-grid', justifyItems: 'center', gap: 4, width: 64 }}>
        <Icon name={n} className="rv-icon" />
        <span className="rv-meta">{n}</span>
      </span>
    ))}
  </div>
);
