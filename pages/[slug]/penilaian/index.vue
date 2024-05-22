<template>
    <main>
        <section class="section">
            <div class="container">
                <UiBreadcrumbs :breadcrumbs="breadcrumbs"></UiBreadcrumbs>
                <h1 class="title section__title">Penilaian</h1>

                <Transition mode="out-in">
                    <UiCardAssesment
                        :key="activeQuestion?.id"
                        :title-big="activeQuestion?.isResult"
                        :breadcrumbs="breadcrumbs"
                        @back="back"
                    >
                        <template #title>{{ activeQuestion?.title }}</template>
                        <template
                            v-if="activeQuestion?.question.title"
                            #subtitle
                        >
                            {{ activeQuestion?.question.title }}
                        </template>
                        <template
                            v-if="activeQuestion?.question.content"
                            #content
                        >
                            <div
                                v-if="
                                    activeQuestion?.question.type === 'checkbox'
                                "
                            >
                                <UiCheckbox
                                    v-model="checked"
                                    :value="q"
                                    v-for="(q, qIndex) in activeQuestion
                                        .question.content"
                                    :key="qIndex"
                                    >{{ q }}</UiCheckbox
                                >
                            </div>

                            <div
                                v-if="activeQuestion?.question.type === 'text'"
                                v-html="activeQuestion.question.content"
                            ></div>
                        </template>
                        <template #footer>
                            <span
                                v-if="
                                    !validationCheck &&
                                    activeQuestion?.question.type === 'checkbox'
                                "
                                class="error-message text-red"
                                >Centang Minimal 1</span
                            >
                            <div
                                v-if="activeQuestion?.answer.target === null"
                                class="card__buttons"
                            >
                                <UiButton @click="finish">Lanjutkan</UiButton>
                            </div>
                            <div
                                v-else-if="activeQuestion?.answer.target?.true"
                                class="card__buttons"
                            >
                                <UiButton
                                    variant="outline"
                                    @click="
                                        setNextQuestion(
                                            activeQuestion?.answer.target?.false
                                        )
                                    "
                                    >Tidak</UiButton
                                >
                                <UiButton
                                    @click="
                                        setNextQuestion(
                                            activeQuestion?.answer.target?.true
                                        )
                                    "
                                    >Ya</UiButton
                                >
                            </div>
                            <div
                                v-else-if="activeQuestion?.answer.target"
                                class="card__buttons"
                            >
                                <UiButton
                                    @click="
                                        setNextQuestion(
                                            activeQuestion?.answer.target
                                        )
                                    "
                                    >Lanjutkan</UiButton
                                >
                            </div>
                        </template>
                    </UiCardAssesment>
                </Transition>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { log } from 'console'
import { storeToRefs } from 'pinia'
import { usePenilaianStore } from '~/stores/penilaian'
import type { Question, Breadcrumb } from '~/types/index'

const {
    setActiveQuestionId,
    setUserAnswer,
    setQuestions,
    resetQuestions,
    deleteCurrentAnswer
} = usePenilaianStore()
const { questions, activeQuestion, previousUserAnswer } = storeToRefs(
    usePenilaianStore()
)
// checked option
const checked = ref([])
const errorMessage = ref(true)

const route = useRoute()
const router = useRouter()

onMounted(() => {
    nextTick(async () => {
        resetQuestions()

        const urlParent = `/data/modules/${route.params.slug}/index.json`
        const url = `/data/modules/${route.params.slug}/penilaian.json`
        const [parentData, data] = await Promise.all([
            useFetch(urlParent),
            useFetch(url)
        ])

        const resParent = parentData.data.value as any
        const res = data.data.value as any

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
                to: ''
            }
        ]

        setQuestions(res.data)

        if (route.query.question) {
            setActiveQuestionId(Number(route.query.question))
        } else {
            setActiveQuestionId(Number(questions.value[0].id))
        }

        setUserAnswer(activeQuestion.value as Question)
    })
})

const breadcrumbs: Ref<Breadcrumb[]> = ref([])

// const validationCheck = () => {
//     if (
//         activeQuestion.value.question.type === 'checkbox' &&
//         checked.value.length
//     ) {
//         return true
//     } else {
//         return false
//     }
// }

const validationCheck = computed(() => {
    if (activeQuestion.value) {
        if (
            activeQuestion.value.question.type === 'checkbox' &&
            checked.value.length
        ) {
            return true
        } else {
            return false
        }
    }
})

const setNextQuestion = (id: number) => {
    if (activeQuestion.value.question.type === 'checkbox') {
        if (checked.value.length) {
            setActiveQuestionId(id)
            setUserAnswer(activeQuestion.value as Question)
            checked.value = []
        } else {
            return
        }
    } else {
        setActiveQuestionId(id)
        setUserAnswer(activeQuestion.value as Question)
        checked.value = []
    }
}

const back = () => {
    if (previousUserAnswer.value) {
        setActiveQuestionId(previousUserAnswer.value.id)
        deleteCurrentAnswer()
    } else {
        deleteCurrentAnswer()
        router.push(`/${route.params.slug}?menu=penilaian`)
    }
}

const finish = () => {
    router.push(`/${route.params.slug}/penilaian/summary`)
}
</script>

<style scoped lang="scss">
.error-message {
    display: inline-block;
    @include vwUnit(margin-bottom, 15);
}
</style>
