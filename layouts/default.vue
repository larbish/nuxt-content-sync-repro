<script setup lang="ts">
const { data: header } = await useAsyncData(
  'navigation-header',
  () => queryCollectionNavigation('pages')
    .where('navigation', '=', '"header"'),
);

const { data: footer } = await useAsyncData(
  'navigation-footer',
  () => queryCollectionNavigation('pages')
    .where('navigation', '=', '"footer"'),
);
</script>

<template>
    <pre>{{ header }}</pre>

    <NuxtPage />

    <pre>{{ footer }}</pre>
</template>
