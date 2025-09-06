import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const til = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/til',
  }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = { til };
