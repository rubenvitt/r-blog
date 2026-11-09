import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { EDITORIAL_RESPONSIBILITY } from './site';
import { localePath, useTranslations, type Locale } from './i18n';
import { getPosts, postSlug } from './posts';

// Der Transparenzhinweis muss auch dort ankommen, wo der Beitrag ohne unser Layout
// gelesen wird — also im Feed.
export async function localeFeed(context: APIContext, locale: Locale) {
  const t = useTranslations(locale);
  const translated = locale === 'de' ? '' : ` ${t('ai.translatedText')}`;
  const note = (ai: string) =>
    ai === 'none'
      ? translated.trim()
      : `${t(ai === 'assisted' ? 'ai.assisted' : 'ai.generated')}: ${t(ai === 'assisted' ? 'ai.assistedText' : 'ai.generatedText')}${translated} ${t('ai.responsibility')}: ${EDITORIAL_RESPONSIBILITY}.`;

  return rss({
    title: 'rubeen.dev',
    description: t('rss.description'),
    site: context.site!,
    customData: `<language>${locale}</language>`,
    items: (await getPosts(locale))
      .filter((p) => !p.data.draft)
      .map((post) => {
        const n = note(post.data.ai);
        return {
          title: post.data.title,
          pubDate: post.data.date,
          description: n ? `${post.data.description}\n\n${n}` : post.data.description,
          link: `${localePath(locale, `/blog/${postSlug(post)}`)}/`,
        };
      }),
  });
}
