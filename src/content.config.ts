import { defineCollection, z } from 'astro:content';

const noticias = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    author: z.string(),
    image: z.string(),
    imageAlt: z.string(),
  }),
});

export const collections = { noticias };
