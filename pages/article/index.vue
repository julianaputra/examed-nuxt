<template>
  <main class="default-container">
    <div class="container">
      <div v-if="articlesLoading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="row">
        <div
          v-for="article in articles.data"
          :key="article.id"
          class="col-xl-3"
        >
          <Card :article="article" class="mb-3" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useStoreArticle } from '~/stores/article'

const { getArticles } = useStoreArticle()
const { articles, articlesLoading } = storeToRefs(useStoreArticle())

await getArticles()

definePageMeta({
  title: 'Article List',
  description: 'This is article list page'
})
</script>
