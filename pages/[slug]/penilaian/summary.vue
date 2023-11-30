<template>
  <main>
    <section class="section">
      <div class="container">
        <UiBreadcrumbs :breadcrumbs="breadcrumbs"></UiBreadcrumbs>
        <h1 class="title section__title section__title--no-margin">Summary</h1>
        <h2 class="subtitle section__subtitle">Modul {{ title }}</h2>
        <div class="card">
          <div class="card__header">
            <nav class="card__nav">
              <button
                v-for="summary in summaries"
                :key="summary.id"
                class="card__nav-button"
                :class="{
                  active: activeSummary === summary.id
                }"
                @click="changeActiveSummary(summary.id)"
              >
                {{ summary.title }}
              </button>
            </nav>
          </div>
          <Transition mode="out-in">
            <div class="card__body">
              <div class="row justify-content-center">
                <div class="col-lg-10 col-xxl-8">
                  <h2 class="heading--secondary">
                    {{ getActiveSummary?.subtitle }}
                  </h2>
                  <hr class="card__hr--bottom" />
                  <div v-if="activeSummary === 1">
                    <UiSelectionButton
                      v-for="sumList in resultSummary"
                      :key="sumList.id"
                      :to="sumList?.href"
                      >{{ sumList.question.title }}</UiSelectionButton
                    >
                  </div>
                  <div v-else-if="activeSummary === 2">
                    <UiSelectionButton
                      v-for="sumList in questionSummary"
                      :key="sumList.id"
                      >{{ sumList.question.title }}</UiSelectionButton
                    >
                  </div>

                  <div class="card__button-wrapper">
                    <UiButton :to="`/${route.params.slug}?menu=penilaian`"
                      >Kembali ke Menu Utama</UiButton
                    >
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePenilaianStore } from '~/stores/penilaian'
import type { Breadcrumb } from '~/types/index'

definePageMeta({
  middleware: ['summary-penilaian']
})

const route = useRoute()

onMounted(() => {
  nextTick(async () => {
    const urlParent = `/data/modules/${route.params.slug}/index.json`
    const parentData = await useFetch(urlParent)

    const resParent = parentData.data.value as any

    title.value = resParent.data.title

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
        title: 'Penilaian',
        to: `/${route.params.slug}/penilaian`
      },
      {
        title: 'Summary',
        to: ''
      }
    ]
  })
})

const { resetUserAnswers } = usePenilaianStore()
const { userAnswers } = storeToRefs(usePenilaianStore())

const title: Ref<string> = ref('')
const breadcrumbs: Ref<Breadcrumb[]> = ref([])

const activeSummary = ref(1)

const questionSummary = computed(() => {
  return userAnswers.value.filter((q) => {
    return q.isResult === false && q.answer?.type === 'true-false'
  })
})

const resultSummary = computed(() => {
  return userAnswers.value.filter((q) => q.isResult)
})

const summaries = ref([
  {
    id: 1,
    title: 'Summary Hasil',
    subtitle: 'Hasil Penilanan'
  },
  {
    id: 2,
    title: 'Summary Pertanyaan',
    subtitle: 'List Pertanyaan'
  }
])

const getActiveSummary = computed(() => {
  const result = summaries.value.find((summ) => {
    return summ.id === activeSummary.value
  })

  return result
})

const changeActiveSummary = (id: number) => {
  activeSummary.value = id
}

onUnmounted(() => {
  resetUserAnswers()
})
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  border: 1px solid #e9e9e9;
  border-radius: 14px;

  &__hr {
    margin: 34px 0 60px 0;
    color: rgba(19, 24, 44, 0.5);

    &--bottom {
      @extend .card__hr;
      margin: 24px 0;
    }
  }

  &__header {
    border-bottom: 1px solid #e9e9e9;
  }

  &__nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  &__nav-button {
    position: relative;
    color: #757575;
    font-size: 24px;
    font-weight: 400;
    background-color: transparent;
    border: 0;
    padding: 24px 12px;
    transition: color 0.3s ease;

    &::before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 2px;
      background-color: #303178;
      opacity: 0;
      transition: 0.3s;
    }

    &:hover,
    &.active {
      color: #303178;

      &::before {
        opacity: 1;
      }
    }
  }

  &__body {
    padding: 50px 40px 60px 40px;
  }

  &__button-wrapper {
    margin-top: 48px;
  }
}
</style>
