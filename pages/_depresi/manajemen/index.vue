<template>
  <main>
    <section class="section">
      <div class="container">
        <UiBreadcrumbs :breadcrumbs="breadcrumbItem"></UiBreadcrumbs>
        <h1 class="title section__title">Manajemen</h1>
        <Transition mode="out-in">
          <UiCardAssesment>
            <template #title>Manajemen Protokol 1 (Depresi)</template>
            <template #content>
              <UiSelectionButton
                v-for="(mj, mjIndex) in manajemenData"
                :key="mjIndex"
                :to="mj.to"
                >{{ mj.title }}</UiSelectionButton
              >
            </template>
          </UiCardAssesment>
        </Transition>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import manajemenJson from '@/dummy/manajemen.json'

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
    title: 'Manajemen',
    to: ''
  }
])

const manajemenData = ref(manajemenJson.data)
</script>

<style scoped lang="scss"></style>
