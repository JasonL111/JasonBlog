import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
  }),
});

const investments = defineCollection({
  schema: z.object({
    name: z.string(),
    ratio: z.number().min(0).max(100),
    color: z.string().optional(),
    note: z.string().optional(),
  }),
});

export const collections = { blog, investments };
