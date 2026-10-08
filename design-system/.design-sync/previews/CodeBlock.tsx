import { CodeBlock } from '@rubeen/lagebild';

export const MitDateiname = () => (
  <CodeBlock filename="tools/transfer.ts" lang="ts">
    <span className="c">// Gleicher Key, gleiche Wirkung: einmal.</span>
    {'\n'}
    <span className="k">export const</span>
    {' transfer = defineTool({\n  name: '}
    <span className="s">'transfer_funds'</span>
    {',\n  idempotencyKey: (req) => req.id,\n  requires: ['}
    <span className="s">'auth:verified'</span>
    {'],\n});'}
  </CodeBlock>
);

export const Shell = () => <CodeBlock lang="sh">{'pnpm build\npnpm preview'}</CodeBlock>;
