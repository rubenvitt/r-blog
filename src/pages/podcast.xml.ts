import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { statSync } from 'node:fs';
import { join } from 'node:path';

export async function GET(context: APIContext) {
  const site = context.site!.toString().replace(/\/$/, '');

  const posts = (
    await getCollection('blog', ({ data }) => !data.draft && !!data.podcast)
  ).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    xmlns: {
      itunes: 'http://www.itunes.com/dtds/podcast-1.0.dtd',
    },
    title: 'rubeen.dev Podcast',
    description:
      'AI Systems Engineering, Evals, Observability und Tool-Sicherheit — als Podcast-Dialog zu jedem Blogpost.',
    site: site,
    customData: [
      '<language>de</language>',
      '<itunes:author>Ruben</itunes:author>',
      `<itunes:image href="${site}/logo.png"/>`,
      '<itunes:category text="Technology"/>',
      '<itunes:explicit>false</itunes:explicit>',
    ].join('\n'),
    items: posts.map((post) => {
      const podcast = post.data.podcast!;
      const audioUrl = `${site}${podcast.audioFile}`;
      const publicPath = join(process.cwd(), 'public', podcast.audioFile);
      let fileSize = 0;
      try {
        fileSize = statSync(publicPath).size;
      } catch {
        // file not found during dev — fallback to 0
      }

      const itemCustomData = [
        podcast.duration
          ? `<itunes:duration>${podcast.duration}</itunes:duration>`
          : '',
        `<itunes:image href="${site}/logo.png"/>`,
      ]
        .filter(Boolean)
        .join('\n');

      return {
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        link: `/blog/${post.id}/`,
        enclosure: {
          url: audioUrl,
          length: fileSize,
          type: 'audio/mpeg',
        },
        customData: itemCustomData,
      };
    }),
  });
}
