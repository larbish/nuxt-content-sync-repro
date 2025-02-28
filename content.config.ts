import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        navigation: z.union([
          z.boolean(), // set to allow default of false, should never really be true
          z.enum([
            'header',
            'footer',
          ]),
        ]).default(false),
      }),
    }),
  },
});
