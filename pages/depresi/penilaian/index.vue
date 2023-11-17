<template>
  <main>
    <section class="section">
      <div class="container">
        <UiBreadcrumbs :breadcrumbs="breadcrumbItem"></UiBreadcrumbs>
        <h1 class="title section__title">{{ penilaian.title }}</h1>
        <Transition mode="out-in">
          <UiCardAssesment
            :key="activeQuestion?.id"
            :title-big="activeQuestion?.isResult"
          >
            <template #title>{{ activeQuestion?.title }}</template>
            <template v-if="activeQuestion?.questions.title" #subtitle>
              {{ activeQuestion?.questions.title }}
            </template>
            <template v-if="activeQuestion?.questions.content" #content>
              <div v-if="activeQuestion?.questions.type === 'checkbox'">
                <UiCheckbox
                  v-for="(q, qIndex) in activeQuestion.questions.content"
                  :key="qIndex"
                  >{{ q }}</UiCheckbox
                >
              </div>
              <div
                v-if="activeQuestion?.questions.type === 'text'"
                v-html="activeQuestion.questions.content"
              ></div>
            </template>
            <template #footer>
              <div v-if="activeQuestion?.answer" class="card__buttons">
                <UiButton variant="outline">Tidak</UiButton>
                <UiButton @click="nextQuestion">Ya</UiButton>
              </div>
              <div v-else class="card__buttons">
                <UiButton
                  v-if="activeQuestion?.to"
                  :to="activeQuestion.to"
                  @click="nextQuestion"
                  >Lanjutkan</UiButton
                >
                <UiButton v-else @click="nextQuestion">Lanjutkan</UiButton>
              </div>
            </template>
          </UiCardAssesment>
        </Transition>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import dataJson from '@/dummy/penilaian.json'

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
  }
])

const penilaian = ref(dataJson.data)

const questionId = ref(1)

const activeQuestion = computed(() => {
  // return penilaian.value.questions
  const result = penilaian.value.questions.find((pn) => {
    return pn.id === questionId.value
  })
  return result
})

const nextQuestion = () => {
  questionId.value++
}
</script>
