import { getCollection } from 'astro:content';
import { ABOUT_PAGE, HOME_PAGE } from './site';

export interface LinkCardMetadata {
  title: string;
  description: string;
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

const blogMetadataPromise = getCollection('blog', ({ data }) => !data.draft).then((posts) => {
  const blogMetadata = new Map<string, LinkCardMetadata>();

  for (const post of posts) {
    const metadata = {
      title: post.data.title,
      description: post.data.description,
    };

    blogMetadata.set(normalizeInternalPath(`/blog/${post.id}`), metadata);

    for (const alias of post.data.aliases) {
      blogMetadata.set(normalizeInternalPath(`/blog/${alias}`), metadata);
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
