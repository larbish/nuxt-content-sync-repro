<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, async () => {
  return await queryCollection('pages')
    .path(route.path)
    .first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
}

useSeoMeta(page.value.seo);
</script>

<template>
  <div v-if="page">
    <ContentRenderer :value="page" />
  </div>
</template>
