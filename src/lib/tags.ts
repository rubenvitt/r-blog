import { LOCALES, type Locale } from './i18n';
import { getPosts, type Post } from './posts';

/** Tag → Anzahl Posts in einer Sprache, häufigste zuerst. */
export async function getTagCounts(locale: Locale): Promise<[string, number][]> {
  const counts = new Map<string, number>();
  for (const post of await getPosts(locale)) {
    for (const tag of post.data.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}

/** Pfade für /tags/[tag] einer Sprache, inkl. der Sprachen, in denen es den Tag auch gibt. */
export async function getTagPaths(locale: Locale) {
  const tagsByLocale = new Map<Locale, Set<string>>();
  for (const l of LOCALES)
    tagsByLocale.set(l, new Set((await getTagCounts(l)).map(([tag]) => tag)));
  const posts = await getPosts(locale);
  return [...tagsByLocale.get(locale)!].map((tag) => ({
    tag,
    posts: posts.filter((post: Post) => post.data.tags.includes(tag)),
    locales: LOCALES.filter((l) => tagsByLocale.get(l)!.has(tag)),
  }));
}
