import { ArticleHeader } from '@rubeen/lagebild';

export const MitPodcast = () => (
  <ArticleHeader
    date="2026-03-27"
    readingTime="12 min"
    duration="21:08"
    title="Tools sind keine Prompts: Warum Agent-Aktionen Idempotenz, Auth und Audit benötigen"
    description="Ein Tool-Call kann Geld bewegen und Konten verändern. Warum Idempotenz, Auth und Audit in Agent-Architekturen Pflicht sind."
    tags={['ai', 'software-engineering', 'security']}
  />
);

export const Kurz = () => <ArticleHeader date="2026-03-25" readingTime="4 min" title="Willkommen auf meinem neuen Blog" tags={['astro', 'meta']} />;
