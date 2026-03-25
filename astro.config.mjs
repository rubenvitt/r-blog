// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rubeen.dev',
  redirects: {
    '/evals-in-die-ci-wann-ai-features-aufhoren-prompts-zu-sein': {
      status: 301,
      destination: '/blog/evals-in-die-ci-wann-ai-features-aufhoren-prompts-zu-sein',
    },
    '/ai-fullstack-engineering-beginnt-dort-wo-prompt-engineering-endet': {
      status: 301,
      destination: '/blog/ai-fullstack-engineering-beginnt-dort-wo-prompt-engineering-endet',
    },
  },
  integrations: [mdx(), sitemap()],
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
