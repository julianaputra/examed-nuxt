interface Menu {
  id: number
  slug: string
  title: string
  icon: string
}

interface TrueFalseAnswer {
  true: number
  false: number
}

interface Question {
  id: number
  title: string
  question: {
    title: string
    type: string
    content: string | string[]
  }
  isResult: boolean
  isStep: boolean
  answer: {
    type: string
    target: TrueFalseAnswer | null | number
  }
  href: null | string
}

interface Breadcrumb {
  title: string
  to: string | null
}

interface Deskripsi {
  type: string
  content: string
}

interface Manajemen {
  id: number
  parentId: number
  title: string
  type: string
  content: null | string
}

export type { Menu, Question, Breadcrumb, Deskripsi, Manajemen }
