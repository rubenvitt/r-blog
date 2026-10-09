import { getCollection, type CollectionEntry } from 'astro:content';

export type Talk = CollectionEntry<'talks'>;

export const KIND_LABEL: Record<Talk['data']['kind'], string> = {
  vortrag: 'Vortrag',
  workshop: 'Workshop',
};

/** Alle Talks, neueste zuerst. */
export async function getTalks(): Promise<Talk[]> {
  const talks = await getCollection('talks');
  return talks.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/**
 * Teilt in kommende und vergangene Termine. Die Seite ist statisch, die Grenze gilt also
 * zum Zeitpunkt des Builds; ein Termin rutscht beim nächsten Deploy nach „Vergangen“.
 */
export function splitByDate(talks: Talk[], now = new Date()) {
  const today = new Date(now.toISOString().slice(0, 10));
  return {
    upcoming: talks.filter((t) => t.data.date >= today).reverse(),
    past: talks.filter((t) => t.data.date < today),
  };
}
