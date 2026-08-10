#!/usr/bin/env node
// Rendert die Rastergroessen der Bildmarke aus public/bimi.svg.
// Die SVG-Datei ist die Quelle der Wahrheit — hier entstehen nur die Fallbacks
// fuer Clients, die kein SVG-Favicon koennen.
//
//   pnpm icons

import { execFile } from 'node:child_process';
import { readFile, unlink, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { promisify } from 'node:util';
import sharp from 'sharp';

const run = promisify(execFile);

const ROOT = process.cwd();
const PUBLIC = join(ROOT, 'public');
const SOURCE = join(PUBLIC, 'bimi.svg');

const PNGS = [
  ['favicon-16.png', 16],
  ['favicon-32.png', 32],
  ['favicon-192.png', 192],
  ['apple-touch-icon.png', 180],
];

// Den Vektor einmal gross rasterisieren und daraus runterskalieren — das gibt
// bei 16 px saubere Kanten, ohne pro Groesse neu zu rendern.
const MASTER = 1024;
const svg = await readFile(SOURCE);
const master = await sharp(svg, { density: (96 * MASTER) / 512 })
  .resize(MASTER, MASTER)
  .png()
  .toBuffer();

const render = (size) => sharp(master).resize(size, size).png({ compressionLevel: 9 }).toBuffer();

for (const [name, size] of PNGS) {
  const buffer = await render(size);
  await writeFile(join(PUBLIC, name), buffer);
  console.log(`${name.padEnd(24)} ${size}px  ${(buffer.length / 1024).toFixed(1)} kB`);
}

// favicon.ico braucht mehrere Ebenen — sharp kann kein ICO, ImageMagick schon.
const icoLayers = [16, 32, 48];
const temps = [];
try {
  for (const size of icoLayers) {
    const path = join(PUBLIC, `.ico-${size}.png`);
    await writeFile(path, await render(size));
    temps.push(path);
  }
  await run('magick', [...temps, join(PUBLIC, 'favicon.ico')]);
  console.log(`favicon.ico              ${icoLayers.join('/')}px`);
} catch (error) {
  console.warn(`favicon.ico uebersprungen (${error.message.split('\n')[0]})`);
  console.warn('ImageMagick noetig: brew install imagemagick');
} finally {
  await Promise.all(temps.map((path) => unlink(path).catch(() => {})));
}
