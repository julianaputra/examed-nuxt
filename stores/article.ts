import { defineStore } from 'pinia'

export const useStoreArticle = defineStore({
  id: 'article',
  state: () => ({
    articles: {
      data: [
        {
          id: '1',
          title: 'Title',
          content: 'Content'
        }
      ],
      meta: {}
    },
    articlesLoading: false,
    articlesStatusCode: null,
    article: {
      id: 1,
      title: 'Title',
      content: 'Content'
    },
    articleLoading: false,
    articleStatusCode: null
  }),
  actions: {
    async getArticles() {
      this.articlesLoading = true
      try {
        const config = useRuntimeConfig()

        const { data }: any = await useFetch(
          config.public.apiUrl + 'api/stories'
        )
        if (data.value) {
          this.articles = data.value
        }
        this.articlesLoading = false
      } catch (e) {
        this.articlesLoading = false
      }
    },
    async getArticle(params: any) {
      this.articleLoading = true
      try {
        const config = useRuntimeConfig()
        const { data }: any = await useFetch(
          config.public.apiUrl + 'api/story/' + params.id
        )
        if (data.value) {
          this.article = data.value
        }
        this.articleLoading = false
      } catch (e) {
        this.articleLoading = false
      }
    }
  }
})
