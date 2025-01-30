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
    '@nuxtjs/i18n',
    '@nuxt/content',
  ],

  content: {
    preview: {
      api: 'https://api.nuxt.studio',
    },
  },

  i18n: {
    locales: [
      { code: 'de', name: 'Deutsch', language: 'de' },
      { code: 'en', name: 'English', language: 'en' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'user_agent_locale_preference',
      redirectOn: 'root',
    },
    strategy: 'prefix',
    defaultLocale: 'de',
    baseUrl: '/',
    vueI18n: '~/i18n.config.ts',
  },
})
