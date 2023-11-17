<template>
  <main>
    <section class="section">
      <div class="container">
        <UiBreadcrumbs :breadcrumbs="breadcrumbItem"></UiBreadcrumbs>
        <h1 class="title section__title">Manajemen</h1>
        <Transition mode="out-in">
          <UiCardAssesment>
            <template #title>{{ getSelectedManajemen?.title }}</template>
            <template #content>
              <UiAccordion
                title="accordionParent"
                :item="getSelectedManajemen?.list"
              ></UiAccordion>
            </template>
          </UiCardAssesment>
        </Transition>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import manajemenJson from '@/dummy/manajemen.json'
const route = useRoute()

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
const manajemenId = ref(route.params.id)

const getSelectedManajemen = computed(() => {
  const result = manajemenData.value.find((item) => {
    return item.id === Number(manajemenId.value)
  })

  return result
})
</script>
