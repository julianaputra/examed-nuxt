<template>
  <div>
    <LayoutsHeader />
    <slot />
    <LayoutsFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

/** Please use this composable to define your site's SEO meta tags as a flat object instead useHead**/
useSeoMeta({
  description: `${route.meta.description}`,
  ogTitle: `${route.meta.title}`,
  ogDescription: `${route.meta.description}`,
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image'
})
</script>
