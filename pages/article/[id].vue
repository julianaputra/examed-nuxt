<template>
  <main class="default-container">
    <div class="container">
      <div v-if="articleLoading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="row">
        <div class="col-12">
          <h1>{{ article.title }}</h1>
          <p>{{ article.content }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useStoreArticle } from '~/stores/article'

const { getArticle } = useStoreArticle()
const { article, articleLoading } = storeToRefs(useStoreArticle())

const route = useRoute()
await getArticle(route.params.id)

definePageMeta({
  title: 'Article',
  description: `This is article description`
})
</script>
