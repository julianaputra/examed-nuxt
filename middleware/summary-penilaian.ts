import { storeToRefs } from 'pinia'
import { usePenilaianStore } from '~/stores/penilaian'

export default defineNuxtRouteMiddleware(() => {
    const { userAnswers } = storeToRefs(usePenilaianStore())

    if (!userAnswers.value.length) {
        return navigateTo('/')
    }
})
