<script setup lang="ts">
const { locale } = storeToRefs(useLocaleStore());
await navigateTo(locale.value);
</script>

<template>
  Loading, though no user should really ever see this because of SSR.
</template>
