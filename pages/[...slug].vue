<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale, setLocale } = useI18n()

const { data: page } = await useAsyncData(route.path, async () => {
  const collection = ('pages_' + locale.value) as keyof Collections
  return await queryCollection(collection).path(route.path).first() as Collections['pages_de'] | Collections['pages_en']
}, {
  watch: [locale],
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Seite nicht gefunden', fatal: true });
}

useSeoMeta(page.value.seo);
</script>

<template>
  <button v-if="locale === 'de'" @click="setLocale('en')">Switch to EN</button>

  <button v-if="locale === 'en'" @click="setLocale('de')">Switch to DE</button>

  <div v-if="page">
    <ContentRenderer :value="page" />
  </div>
</template>
