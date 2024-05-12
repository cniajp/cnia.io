import { z, defineCollection } from 'astro:content';

const post = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),

    canonical: z.string().url().optional(),

    publishDate: z.date().or(z.string()).optional(),
    draft: z.boolean().optional(),

    excerpt: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
  }),
});

const pek2024Blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),

    canonical: z.string().url().optional(),

    publishDate: z.date().or(z.string()),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.object({
      name: z.string(),
      icon: z.string().optional(),
    }).optional(),
    draft: z.boolean().optional(),
  }),
});

const pek2024JobBoads = defineCollection({
  schema: z.object({
    image: z.string(),
  }),
});

export const collections = {
  post: post,
  pek2024Blog: pek2024Blog,
  pek2024JobBoads: pek2024JobBoads,
};
