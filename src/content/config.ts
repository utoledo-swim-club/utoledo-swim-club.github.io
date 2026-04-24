import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    week: z.number().optional(),
    author: z.string().default('Joshua'),
    cover: z.string().optional(),
  }),
});

export const collections = { journal };
