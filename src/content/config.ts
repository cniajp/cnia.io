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

const pek2024JobBoards = defineCollection({
  schema: z.object({
    name: z.string(),
    rank: z.string(),
    image: z.string(),
    href: z.string().url(),
  }),
});

const pek2025JobBoards = defineCollection({
  schema: z.object({
    name: z.string(),
    rank: z.string(),
    image: z.string(),
    href: z.string().url(),
  }),
});

export const collections = {
  post: post,
  'pek2024-blog': pek2024Blog,
  'pek2024-job-boards': pek2024JobBoards,
  'pek2025-job-boards': pek2025JobBoards,
};
