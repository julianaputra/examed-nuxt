<template>
  <div class="card">
    <h2 :class="className">
      <slot name="title"></slot>
    </h2>

    <hr v-if="props.border" class="card__hr" />
    <slot name="content"></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  border: {
    type: Boolean,
    default: true
  },
  titleSize: {
    type: String,
    default: 'big'
  }
})

const className = computed(() => {
  return props.titleSize === 'small' ? 'heading--secondary' : 'heading'
})
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  padding: 40px;
  border: 1px solid #e9e9e9;
  border-radius: 14px;

  &__hr {
    margin: 24px 0;
    color: rgba(19, 24, 44, 0.5);
  }
}
</style>
