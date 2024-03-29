<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
useHead({
  title: route.meta.title as string,
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Examed` : 'Examed'
  }
})
</script>
