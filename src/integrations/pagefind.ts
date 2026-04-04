import type { AstroIntegration } from 'astro';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

export default function pagefindIntegration(): AstroIntegration {
  return {
    name: 'pagefind',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const outDir = fileURLToPath(dir);
        const pagefind = await import('pagefind');
        const { index } = await pagefind.createIndex();
        if (!index) throw new Error('Pagefind: failed to create index');
        const { page_count } = await index.addDirectory({ path: outDir });
        console.log(`Pagefind: indexed ${page_count} pages`);
        await index.writeFiles({ outputPath: join(outDir, 'pagefind') });
        await pagefind.close();
      },
    },
  };
}
