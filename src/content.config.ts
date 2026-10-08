import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      aliases: z.array(z.string()).default([]),
      image: image().optional(),
      draft: z.boolean().default(false),
      // Transparenzhinweis nach Art. 50 Abs. 4 KI-VO.
      // 'generated' = Text/Bilder von einem Modell erzeugt (Default, weil das hier der Normalfall ist)
      // 'assisted'  = selbst geschrieben, KI nur fuer Lektorat/Recherche
      // 'none'      = ohne generative KI entstanden
      ai: z.enum(['generated', 'assisted', 'none']).default('generated'),
      podcast: z
        .object({
          audioFile: z.string(),
          transcript: z.string().optional(),
          duration: z.string().optional(),
        })
        .optional(),
    }),
});

// Projekte: eine Datei pro Repository. Prozess und Kriterien: docs/projekte.md
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Ein Satz, erscheint in der Übersicht und als Meta-Description.
      tagline: z.string(),
      area: z.enum(['bevoelkerungsschutz', 'ai-engineering', 'werkzeuge', 'alltag']),
      kind: z.enum(['web', 'desktop', 'ios', 'bibliothek', 'server', 'demo', 'cli']),
      status: z.enum(['aktiv', 'alpha', 'beta', 'stabil', 'pausiert', 'archiviert']),
      // owner/name auf GitHub, daraus entstehen Link und Abgleich in der Routine.
      repo: z.string().regex(/^[\w.-]+\/[\w.-]+$/),
      website: z.string().url().optional(),
      app: z.string().url().optional(),
      stack: z.array(z.string()).default([]),
      // Echter Screenshot der Anwendung, liegt in src/content/projects/_images/<slug>/.
      screenshot: image().optional(),
      screenshotAlt: z.string().optional(),
      // Welche Ecke des Screenshots Karten und Vorschaubilder zeigen.
      screenshotFocus: z.enum(['links', 'rechts']).default('links'),
      /** Bild ist eine gestaltete Darstellung (z. B. KI-generiert), kein echter Screenshot. */
      screenshotIllustration: z.boolean().default(false),
      license: z.string().optional(),
      // Slugs von Blogposts, die das Projekt behandeln.
      posts: z.array(z.string()).default([]),
      // Beiträge an anderer Stelle, z. B. im INNOQ-Blog.
      externalPosts: z
        .array(
          z.object({
            title: z.string(),
            url: z.string().url(),
            publisher: z.string(),
            date: z.coerce.date(),
          }),
        )
        .default([]),
      featured: z.boolean().default(false),
      // Letzter Push laut GitHub, wird von der Projekte-Routine nachgezogen.
      lastActivity: z.coerce.date(),
      draft: z.boolean().default(false),
      ai: z.enum(['generated', 'assisted', 'none']).default('generated'),
    }),
});

export const collections = { blog, projects };
