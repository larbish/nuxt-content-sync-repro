<script setup lang="ts">
const { locale } = storeToRefs(useLocaleStore());
const route = useRoute();

const { data } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('pages_de')
    .path(route.path)
    .first();
}, {
  watch: [locale],
});

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Seite nicht gefunden', fatal: true });
}

useSeoMeta(data.value.seo);
</script>

<template>
  <div>
    <ContentRenderer v-if="data" :value="data" />
  </div>
</template>
