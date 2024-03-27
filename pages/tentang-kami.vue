<template>
  <main class="about">
    <div class="container">
      <UiBreadcrumbs :breadcrumbs="breadcrumbs"></UiBreadcrumbs>
    </div>
    <AboutDesc />
    <HomeAbout />
  </main>
</template>

<script setup lang="ts">
import { nextTick } from 'process'
import type { Breadcrumb } from '../types/index'

definePageMeta({
  title: 'Tentang Kami',
  description: 'This is aboutpage description'
})

onMounted(() => {
  //   nextTick(async () => {
  breadcrumbs.value = [
    {
      title: 'Home',
      to: '/'
    },
    {
      title: 'Tentang Kami',
      to: ''
    }
  ]
  //   })
})

const breadcrumbs: Ref<Breadcrumb[]> = ref([])
</script>

<style lang="scss" scoped>
.about {
  @include vwUnit(padding-top, 50, 30);
  @include vwUnit(padding-bottom, 50, 30);
  background: rgba(246, 247, 254, 1);
}
</style>
