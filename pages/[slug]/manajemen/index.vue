<template>
  <section class="section">
    <div class="container">
      <UiBreadcrumbs :breadcrumbs="breadcrumbs"></UiBreadcrumbs>
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
                v-else-if="c.type === 'link'"
                @click="selectChildren(c.id)"
                >{{ c.title }}</UiSelectionButton
              >

              <UiSelectionButton
                v-else-if="c.type === 'heading-only'"
                :has-icon="false"
                >{{ c.title }}</UiSelectionButton
              >

              <UiAccordion
                v-else-if="c.type === 'collapse'"
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
import type { Manajemen, Breadcrumb } from '~/types/index'
const route = useRoute()
const router = useRouter()
const manajemenData = ref([]) as any

onMounted(() => {
  nextTick(async () => {
    const urlParent = `/data/modules/${route.params.slug}/index.json`
    const url = `/data/modules/${route.params.slug}/manajemen.json`
    const [parentData, data] = await Promise.all([
      useFetch(urlParent),
      useFetch(url)
    ])

    const resParent = parentData.data.value as any
    const res = data.data.value as any

    manajemenData.value = res.data

    breadcrumbs.value = [
      {
        title: 'Home',
        to: '/'
      },
      {
        title: `${resParent.data.title}`,
        to: `/${route.params.slug}`
      },
      {
        title: 'Manajemen',
        to: ''
      }
    ]
  })
})

const breadcrumbs: Ref<Breadcrumb[]> = ref([])

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
  router.push(`/${route.params.slug}/manajemen?item=${target}`)
}

const back = (target: any) => {
  if (target == null) {
    router.push(`/${route.params.slug}?menu=manajemen`)
  } else {
    activeParent.value = target
    router.push(`/${route.params.slug}/manajemen?item=${target}`)
  }
}
</script>
