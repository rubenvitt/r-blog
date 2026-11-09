// Rewrites relative imports, image paths and internal post links in translated posts
// (src/content/translations/<lang>/*.mdx), which translators copy verbatim from the
// German original. Idempotent: run it after adding or updating translations.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('../src/content/translations/', import.meta.url).pathname;

export function localize(source, lang) {
  let inFence = false;
  return source
    .split('\n')
    .map((line) => {
      if (/^\s*(```|~~~)/.test(line)) {
        inFence = !inFence;
        return line;
      }
      if (inFence) return line;
      return line
        .replace(/(['"])\.\.\/\.\.\/components\//g, '$1../../../components/')
        .replace(/(['"\s])\.\/_images\//g, '$1../../blog/_images/')
        .replace(/((?:url|href)=["'{`]|\]\()\/blog\//g, `$1/${lang}/blog/`);
    })
    .join('\n');
}

// Optional: limit to the languages given as arguments.
const only = process.argv.slice(2);
for (const lang of readdirSync(root).filter((l) => !only.length || only.includes(l))) {
  for (const file of readdirSync(join(root, lang)).filter((f) => f.endsWith('.mdx'))) {
    const path = join(root, lang, file);
    const before = readFileSync(path, 'utf8');
    const after = localize(before, lang);
    if (after !== before) writeFileSync(path, after);
  }
}
