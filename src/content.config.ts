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

export const collections = { blog };
