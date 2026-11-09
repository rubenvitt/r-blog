import type { APIContext } from 'astro';
import { localeFeed } from '../lib/rss';

export const GET = (context: APIContext) => localeFeed(context, 'de');
