import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;
export type ProjectArea = Project['data']['area'];
export type ProjectStatus = Project['data']['status'];
export type ProjectKind = Project['data']['kind'];

// Reihenfolge der Abschnitte auf /projekte
export const AREAS: { key: ProjectArea; label: string; intro: string }[] = [
  {
    key: 'bevoelkerungsschutz',
    label: 'Bevölkerungsschutz',
    intro:
      'Software für Einsatz, Ausbildung und Ehrenamt – gebaut für Orte, an denen Netz und Zeit knapp sind.',
  },
  {
    key: 'ai-engineering',
    label: 'AI Engineering',
    intro:
      'Demos und Werkzeuge rund um Agenten, Evals und Tool-Contracts. Viele davon gehören zu einem Blogpost.',
  },
  {
    key: 'werkzeuge',
    label: 'Werkzeuge',
    intro: 'Desktop-Apps und kleine Dienste, die meinen eigenen Arbeitsalltag besser machen.',
  },
  {
    key: 'alltag',
    label: 'Alltag',
    intro: 'Apps für Dinge, die nichts mit Arbeit zu tun haben.',
  },
];

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  aktiv: 'aktiv',
  alpha: 'Alpha',
  beta: 'Beta',
  stabil: 'stabil',
  pausiert: 'pausiert',
  archiviert: 'archiviert',
};

export const KIND_LABEL: Record<ProjectKind, string> = {
  web: 'Web-App',
  desktop: 'Desktop-App',
  ios: 'iOS-App',
  bibliothek: 'Bibliothek',
  server: 'Server',
  demo: 'Demo',
  cli: 'CLI',
};

export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection(
    'projects',
    ({ data }) => import.meta.env.DEV || !data.draft,
  );
  return projects.sort((a, b) => b.data.lastActivity.valueOf() - a.data.lastActivity.valueOf());
}

export function repoUrl(repo: string): string {
  return `https://github.com/${repo}`;
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function hostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}
