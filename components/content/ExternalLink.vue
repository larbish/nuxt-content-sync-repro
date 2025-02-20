<script setup lang="ts">
defineProps<{
  to: string;
}>();
</script>

<template>
    <a :href="to" target="_blank"><slot /></a>
</template>
