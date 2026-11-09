import { getCollection } from 'astro:content';
import { ABOUT_PAGE, HOME_PAGE } from './site';

export interface LinkCardMetadata {
  title: string;
  description: string;
  image?: ImageMetadata;
}

const staticPageMetadata = new Map<string, LinkCardMetadata>([
  [
    HOME_PAGE.path,
    {
      title: HOME_PAGE.title,
      description: HOME_PAGE.description,
    },
  ],
  [
    ABOUT_PAGE.path,
    {
      title: ABOUT_PAGE.title,
      description: ABOUT_PAGE.description,
    },
  ],
]);

// Deutsche Posts unter /blog/<id>, Übersetzungen unter /<sprache>/blog/<slug> (id = <sprache>/<slug>).
const blogMetadataPromise = Promise.all([
  getCollection('blog', ({ data }) => !data.draft),
  getCollection('translations', ({ data }) => !data.draft),
]).then(([posts, translations]) => {
  const blogMetadata = new Map<string, LinkCardMetadata>();

  for (const post of [...posts, ...translations]) {
    const metadata: LinkCardMetadata = {
      title: post.data.title,
      description: post.data.description,
      image: post.data.image,
    };
    const base = post.collection === 'blog' ? '/blog' : `/${post.id.split('/')[0]}/blog`;
    const slug = post.collection === 'blog' ? post.id : post.id.slice(post.id.indexOf('/') + 1);

    blogMetadata.set(normalizeInternalPath(`${base}/${slug}`), metadata);

    for (const alias of post.data.aliases) {
      blogMetadata.set(normalizeInternalPath(`${base}/${alias}`), metadata);
    }
  }

  return blogMetadata;
});

export function normalizeInternalPath(pathname: string) {
  let normalizedPath = pathname || '/';

  if (!normalizedPath.startsWith('/')) {
    normalizedPath = `/${normalizedPath}`;
  }

  if (normalizedPath === '/index.html') {
    return '/';
  }

  if (normalizedPath.endsWith('.html')) {
    normalizedPath = normalizedPath.slice(0, -'.html'.length);
  }

  if (normalizedPath.length > 1 && normalizedPath.endsWith('/')) {
    normalizedPath = normalizedPath.slice(0, -1);
  }

  return normalizedPath || '/';
}

export async function getInternalLinkCardMetadata(pathname: string) {
  const normalizedPath = normalizeInternalPath(pathname);

  if (staticPageMetadata.has(normalizedPath)) {
    return staticPageMetadata.get(normalizedPath) ?? null;
  }

  const blogMetadata = await blogMetadataPromise;
  return blogMetadata.get(normalizedPath) ?? null;
}
