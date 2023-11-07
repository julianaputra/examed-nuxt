<template>
  <div class="border">
    <!-- <nuxt-img :src="article.image || ''" fit="cover" height="100"></nuxt-img> -->
    <div class="p-2">
      <nuxt-link
        :to="`/article/${article.id}`"
        class="h5 text-decoration-none text-primary"
        >{{ article.title }}</nuxt-link
      >
      <p class="card-text">Created: {{ article.createdAt }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  article: {
    type: Object,
    default: () => {}
  }
})

const { article } = props

// const config = useRuntimeConfig()

// const storyImage = computed(() => config.public.apiUrl)
</script>
