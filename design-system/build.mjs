import { build } from 'esbuild';
import { copyFileSync, mkdirSync } from 'node:fs';

mkdirSync('dist', { recursive: true });
await build({
  entryPoints: ['src/index.ts'],
  outfile: 'dist/index.js',
  bundle: true,
  format: 'esm',
  jsx: 'automatic',
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  target: 'es2020',
});
copyFileSync('src/styles.css', 'dist/styles.css');
