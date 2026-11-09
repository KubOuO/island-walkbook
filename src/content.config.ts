import { defineCollection, z } from 'astro:content';

const walks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    city: z.string(),
    district: z.string(),
    durationMinutes: z.number().int().positive(),
    distanceKm: z.number().positive(),
    pace: z.enum(['慢慢走', '剛剛好', '走深一點']),
    bestTime: z.string(),
    tags: z.array(z.string()).min(1),
    cover: z.string(),
    coverAlt: z.string(),
    summary: z.string(),
    transit: z.string(),
    stops: z.array(
      z.object({
        time: z.string(),
        name: z.string(),
        note: z.string(),
        lookFor: z.string(),
      }),
    ).min(2),
    sources: z.array(
      z.object({
        label: z.string(),
        url: z.string().url(),
      }),
    ).min(1),
  }),
});

export const collections = { walks };
