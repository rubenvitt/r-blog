import { Tag } from '@rubeen/lagebild';

export const Standard = () => (
  <div className="rv-row">
    <Tag href="/tags/ai">ai</Tag>
    <Tag href="/tags/observability">observability</Tag>
    <Tag href="/tags/katastrophenschutz">katastrophenschutz</Tag>
  </div>
);

export const AktivMitAnzahl = () => (
  <div className="rv-row">
    <Tag href="/tags/security" active count={7}>security</Tag>
    <Tag href="/tags/compliance" count={3}>compliance</Tag>
    <Tag href="/tags/meta" count={4}>meta</Tag>
  </div>
);
