import { Prose } from '@rubeen/lagebild';

export const Artikeltext = () => (
  <div style={{ paddingLeft: 28 }}>
    <Prose>
      <h2>Gleicher Key, gleiche Wirkung</h2>
      <p>
        Timeouts passieren. Der Agent setzt neu an. Ohne Idempotenz wird aus einer Überweisung <mark>zwei Überweisungen</mark>. Mehr dazu im{' '}
        <a href="/blog/tools-sind-keine-prompts">Artikel über Tool-Sicherheit</a>.
      </p>
      <blockquote>Wissen sammeln war nie das Problem. Es im richtigen Moment zu aktivieren, das ist es.</blockquote>
      <h3>Drei Regeln</h3>
      <ul>
        <li>Idempotenz für jede schreibende Aktion</li>
        <li>Auth vor dem Tool-Call</li>
        <li>
          Audit danach, z. B. mit <code className="rv-inline-code">trace_id</code>
        </li>
      </ul>
    </Prose>
  </div>
);
