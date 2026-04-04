import type { AstroIntegration } from 'astro';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

export default function pagefindIntegration(): AstroIntegration {
  return {
    name: 'pagefind',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const outDir = fileURLToPath(dir);
        execSync(`npx pagefind --site "${outDir}"`, {
          stdio: 'inherit',
          cwd: join(dirname(fileURLToPath(import.meta.url)), '..', '..'),
        });
      },
    },
  };
}
