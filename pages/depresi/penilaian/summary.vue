<template>
  <main>
    <section class="section">
      <div class="container">
        <UiBreadcrumbs :breadcrumbs="breadcrumbItem"></UiBreadcrumbs>
        <h1 class="title section__title">Summary</h1>
        <h2>Modul Depresi</h2>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const breadcrumbItem = ref([
  {
    title: 'Home',
    to: '/'
  },
  {
    title: 'Depresi',
    to: '/depresi'
  },
  {
    title: 'Penilaian',
    to: '/depresi/penilaian'
  },
  {
    title: 'Summary',
    to: '/depresi/penilaian/summary'
  }
])
</script>

<style lang="scss" scoped></style>
