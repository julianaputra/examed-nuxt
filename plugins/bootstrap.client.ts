import * as bootstrap from 'bootstrap'

export default defineNuxtPlugin(() => {
  /** Modal Instance */

  const instanceModal = (id: string) =>
    bootstrap.Modal.getOrCreateInstance(`#${id}`)

  interface Modal {
    show: Function
    hide: Function
    dispose: Function
    toggle: Function
  }

  const modal: Modal = {
    show(id: string) {
      instanceModal(id).show()
    },
    hide(id: string) {
      instanceModal(id).hide()
    },
    dispose(id: string) {
      instanceModal(id).dispose()
    },
    toggle(id: string) {
      instanceModal(id).toggle()
    }
  }

  /** End of Modal Instance */

  return {
    provide: {
      bootstrap,
      bModal: modal
    }
  }
})
