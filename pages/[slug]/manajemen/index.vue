<template>
  <section class="section">
    <div class="container">
      <UiBreadcrumbs :breadcrumbs="breadcrumbItem"></UiBreadcrumbs>
      <h1 class="title section__title">Manajemen</h1>
      <Transition mode="out-in">
        <UiCardAssesment
          :key="getActiveParent?.id"
          @back="back(getActiveParent?.parentId)"
        >
          <template #title>{{ getActiveParent?.title }}</template>
          <template #content>
            <div v-for="(c, cIndex) in getActiveChildren" :key="cIndex">
              <div v-if="c.type === 'text'" v-html="c.content"></div>

              <UiSelectionButton
                v-if="c.type === 'link'"
                @click="selectChildren(c.id)"
                >{{ c.title }}</UiSelectionButton
              >

              <UiAccordion
                v-if="c.type === 'collapse'"
                title="accordionParent"
                :item="c"
              ></UiAccordion>
            </div>
          </template>
        </UiCardAssesment>
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const manajemenData = ref([]) as any
import type { Manajemen } from '~/types/index'

onMounted(() => {
  nextTick(async () => {
    const url = `/data/modules/${route.params.slug}/manajemen.json`
    const { data } = await useFetch(url)

    const res = data.value as any

    manajemenData.value = res.data
  })
})

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

const activeParent = ref(route.query.item)

const getActiveParent = computed(() => {
  const result = manajemenData.value.find((item: Manajemen) => {
    return item.id === Number(activeParent.value)
  })

  return result
})

const getActiveChildren = computed(() => {
  const result = manajemenData.value.filter((item: Manajemen) => {
    return item.parentId === Number(activeParent.value)
  })

  return result
})

const selectChildren = (target: any) => {
  activeParent.value = target
}

const back = (target: any) => {
  if (target == null) {
    router.push(`/${route.params.slug}`)
  } else {
    activeParent.value = target
  }
}
</script>
