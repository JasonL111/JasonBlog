import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const investments = defineCollection({
  schema: z.object({
    holdings: z.array(
      z.object({
        name: z.string(),
        ratio: z.number().min(0).max(100),
        color: z.string().optional(),
        note: z.string().optional(),
      })
    ),
    recentActions: z
      .array(
        z.object({
          date: z.string(),
          action: z.string(),
          detail: z.string().optional(),
        })
      )
      .max(3)
      .default([]),
  }),
});

export const collections = { blog, investments };
