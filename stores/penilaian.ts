import { defineStore } from 'pinia'
import type { Question } from '~/types/index'

export const usePenilaianStore = defineStore({
  id: 'question',
  state: () => ({
    questions: [] as Question[],
    userAnswers: [] as Question[],
    activeQuestionId: null as number | null
  }),
  getters: {
    activeQuestion: (state) => {
      return state.questions.find((q) => q.id === state.activeQuestionId)
    },
    activeUserAnswer: (state) => {
      return state.userAnswers.find((q) => q.id === state.activeQuestionId)
    },
    previousUserAnswer: (state) => {
      if (!state.activeQuestionId) {
        return null
      }

      const currentIndex = state.userAnswers
        .map((e) => e.id)
        .indexOf(state.activeQuestionId)

      if (currentIndex < 1) {
        return null
      }

      return state.userAnswers[currentIndex - 1]
    }
  },
  actions: {
    setQuestions(payload: Question[]) {
      this.questions = payload as Question[]
    },
    setUserAnswer(answer: Question) {
      this.userAnswers.push(answer)
    },
    deleteCurrentAnswer() {
      this.userAnswers.pop()
    },
    setActiveQuestionId(id: number) {
      this.activeQuestionId = id
    },
    resetQuestions() {
      this.questions = []
    },
    resetUserAnswers() {
      this.userAnswers = []
    }
  }
})
