import type { APIContext } from 'astro';
import { TRANSLATED_LOCALES, type Locale } from '../../lib/i18n';
import { localeFeed } from '../../lib/rss';

// Keine Feeds für die Spaß-Fassung.
export const getStaticPaths = () =>
  TRANSLATED_LOCALES.filter((l) => l !== 'pott').map((lang) => ({ params: { lang } }));

export const GET = (context: APIContext) => localeFeed(context, context.params.lang as Locale);
