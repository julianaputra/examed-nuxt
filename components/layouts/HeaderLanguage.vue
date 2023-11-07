<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-display="static"
    >
      <nuxt-img
        :src="localeProperties.image"
        format="webp"
        sizes="lg:50px"
        loading="lazy"
      />
    </a>
    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
      <li>
        <a
          v-for="locale in availableLocales"
          :key="locale.code"
          href="#"
          role="button"
          class="dropdown-item"
          @click.prevent="changeLanguage(locale.code)"
        >
          <nuxt-img :src="locale.image" format="webp" sizes="lg:50px" />
          {{ locale.label }}{{ locale.name }}</a
        >
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
import { setLocale as setLocaleValidate } from '@vee-validate/i18n'
const { locales, localeProperties, setLocale } = useI18n()

const availableLocales = computed(() => {
  return (locales.value as Array<any>).filter(
    (i) => i.code !== localeProperties.value.code
  )
})

const changeLanguage = (locale: string) => {
  setLocale(locale)
  // some action e.g setLanguage API
  location.reload()
}
setLocaleValidate(localeProperties.value.code)
</script>

<style lang="scss" scoped>
.language {
  &__icon {
    height: 20px;
    width: 20px;
  }
}
</style>
