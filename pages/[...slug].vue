<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath();

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
  <NuxtLink v-if="locale === 'en'" :to="switchLocalePath('de')">DE</NuxtLink>
  <NuxtLink v-if="locale === 'de'" :to="switchLocalePath('en')">EN</NuxtLink>

  <div v-if="page">
    <ContentRenderer :value="page" />
  </div>
</template>
