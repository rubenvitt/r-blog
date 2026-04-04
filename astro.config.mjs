// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import pagefind from './src/integrations/pagefind.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://rubeen.dev',
  redirects: {
    '/evals-in-die-ci-wann-ai-features-aufhoren-prompts-zu-sein': {
      status: 301,
      destination: '/blog/ai-evals-ci-pipeline',
    },
    '/ai-fullstack-engineering-beginnt-dort-wo-prompt-engineering-endet': {
      status: 301,
      destination: '/blog/ai-systems-architecture',
    },
  },
  integrations: [mdx(), sitemap(), pagefind()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
