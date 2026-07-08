import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog servido a partir de arquivos .md em src/content/noticias.
const noticias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/noticias' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Amauri Damião'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { noticias };
