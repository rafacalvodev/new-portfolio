import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
    readingTime: z.number(),
    featuredImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    features: z.array(z.string()),
    link: z.string(),
    featured: z.boolean(),
    image: z.string().optional(),
  }),
});

export const collections = {
  blog,
  projects,
};
