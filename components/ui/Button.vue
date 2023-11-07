<template>
  <nuxt-link
    v-if="to"
    :to="to"
    :target="target"
    :class="classObject"
    :disabled="isDisabled"
  >
    <slot></slot>
  </nuxt-link>
  <a
    v-else-if="href"
    :href="href"
    :target="target"
    :class="classObject"
    :disabled="isDisabled"
  >
    <slot></slot>
  </a>
  <button
    v-else-if="type === 'submit'"
    type="submit"
    :class="classObject"
    :disabled="isDisabled"
  >
    <slot></slot>
  </button>
  <button
    v-else
    type="button"
    :class="classObject"
    :disabled="isDisabled"
    @click.prevent="emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  isDisabled: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: null
  },
  to: {
    type: String,
    default: null
  },
  href: {
    type: String,
    default: null
  },
  target: {
    type: String,
    default: null
  }
})

const { isDisabled, size, variant, to, href, target } = props

const classObject = computed(() =>
  ['btn', size ? `btn-${size}` : '', `btn-${variant}`]
    .filter((value) => value)
    .join(' ')
)

const emit = defineEmits(['click'])
</script>
