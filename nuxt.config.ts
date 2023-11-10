// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/scss/main.scss'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/config" as *;'
        }
      }
    }
  },
  modules: [
    '@nuxtjs/eslint-module',
    'nuxt-icon',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@vee-validate/nuxt'
  ],
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage'
    }
  },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: [
      {
        code: 'id',
        iso: 'ID',
        name: 'Bahasa Indonesia',
        image: '/images/lang/indonesia.svg'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        image: '/images/lang/english.svg'
      }
    ],
    vueI18n: './i18n.config.ts'
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL
    }
  }
})
