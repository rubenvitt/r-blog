import type { AstroIntegration } from 'astro';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

export default function pagefindIntegration(): AstroIntegration {
  return {
    name: 'pagefind',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const outDir = fileURLToPath(dir);
        execFileSync('pagefind', ['--site', outDir], {
          stdio: 'inherit',
        });
      },
    },
  };
}
