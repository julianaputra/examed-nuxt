import { defineRule, configure } from 'vee-validate'
import { required } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'
import id from '@vee-validate/i18n/dist/locale/id.json'
// Define the rule globally

export default defineNuxtPlugin(() => {
  configure({
    generateMessage: localize({
      en,
      id
    }),
    validateOnBlur: false
  })

  defineRule('required', required)
})
