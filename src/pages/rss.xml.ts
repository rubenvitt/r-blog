import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { EDITORIAL_RESPONSIBILITY } from '../lib/site';

// Der Transparenzhinweis muss auch dort ankommen, wo der Beitrag ohne unser Layout
// gelesen wird — also im Feed.
const AI_NOTE: Record<string, string> = {
  generated: `Mit KI erstellt: Text und Bilder dieses Artikels wurden mit generativer KI erzeugt. Redaktionelle Verantwortung: ${EDITORIAL_RESPONSIBILITY}.`,
  assisted: `Mit KI-Unterstützung: Dieser Artikel wurde mit generativer KI überarbeitet. Redaktionelle Verantwortung: ${EDITORIAL_RESPONSIBILITY}.`,
};

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: 'rubeen.dev',
    description: 'Ein Blog über Web-Development und Technologie',
    site: context.site!,
    items: posts.map((post) => {
      const note = AI_NOTE[post.data.ai];
      return {
        title: post.data.title,
        pubDate: post.data.date,
        description: note ? `${post.data.description}\n\n${note}` : post.data.description,
        link: `/blog/${post.id}/`,
      };
    }),
  });
}
