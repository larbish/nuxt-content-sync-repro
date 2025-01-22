// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  routeRules: {
    '/en': { prerender: true },
    '/de': { prerender: true },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },

  modules: [
    '@pinia/nuxt',
    '@nuxt/content',
  ],

  content: {
    studio: {
      enabled: true,
    },

    preview: {
      api: 'https://api.nuxt.studio',
    },
  },
})
