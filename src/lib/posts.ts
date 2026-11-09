import { getCollection, type CollectionEntry } from 'astro:content';
import { DEFAULT_LOCALE, type Locale } from './i18n';

export type Post = CollectionEntry<'blog'> | CollectionEntry<'translations'>;

const visible = ({ data }: Post) => import.meta.env.DEV || !data.draft;

/** Slug ohne Sprachordner: translations/en/foo → foo. */
export function postSlug(post: Post): string {
  return post.collection === 'blog' ? post.id : post.id.slice(post.id.indexOf('/') + 1);
}

/** Posts einer Sprache, neueste zuerst. */
export async function getPosts(locale: Locale): Promise<Post[]> {
  const posts: Post[] =
    locale === DEFAULT_LOCALE
      ? await getCollection('blog', visible)
      : await getCollection('translations', (p) => p.id.startsWith(`${locale}/`) && visible(p));
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Slug → Sprachen, in denen der Post existiert. */
export async function getPostLocales(): Promise<Map<string, Locale[]>> {
  const map = new Map<string, Locale[]>();
  for (const p of await getCollection('blog', visible)) map.set(p.id, [DEFAULT_LOCALE]);
  for (const p of await getCollection('translations', visible)) {
    const locale = p.id.split('/')[0] as Locale;
    map.get(postSlug(p))?.push(locale);
  }
  return map;
}
