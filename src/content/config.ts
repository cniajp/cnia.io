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
    description: z.string(),
    image: z.string().optional(),

    canonical: z.string().url().optional(),

    publishDate: z.date().or(z.string()),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z
      .object({
        name: z.string(),
        icon: z.string().optional(),
      })
      .optional(),
    draft: z.boolean().optional(),
  }),
});

const pfemSession = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    youtubeEmbedUrl: z.string().url(),
    docswell: z
      .object({
        url: z.string().url(),
      })
      .optional(),
    speakerdeck: z
      .object({
        url: z.string().url(),
        title: z.string(),
      })
      .optional(),
    event: z.object({
      name: z.string(),
      date: z.string(),
    }),
    link: z
      .object({
        title: z.string(),
        url: z.string().url(),
      })
      .optional(),
    speakerInfo: z.object({
      name: z.string(),
      company: z.string().optional(),
    }),
    category: z.string(),
    tags: z.array(z.string()),
    relatedSessions: z.array(
      z.object({
        slug: z.string(),
      })
    ),
    draft: z.boolean(),
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
    rank: z.string(),
    name: z.string(),
    href: z.string().url(),
  }),
});

const pek2025Blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),

    canonical: z.string().url().optional(),

    publishDate: z.date().or(z.string()),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z
      .object({
        name: z.string(),
        icon: z.string().optional(),
      })
      .optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  'pek2024-blog': pek2024Blog,
  'pek2024-job-boards': pek2024JobBoads,
  'pek2025-blog': pek2025Blog,
  'pfem-session': pfemSession,
  post: post,
  pek2024Blog: pek2024Blog,
  pek2024JobBoads: pek2024JobBoads,
};
