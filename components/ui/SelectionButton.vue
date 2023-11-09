<template>
  <Nuxt-link class="selection-button" :to="props.data.to">
    <span class="selection-button__text"> {{ props.data.title }} </span>
    <div class="selection-button__arrow">
      <Icon name="basil:arrow-right-outline" width="32" height="32" />
    </div>
  </Nuxt-link>
</template>
<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="scss" scoped>
.selection-button {
  display: flex;
  align-items: center;
  text-decoration: none;
  border-bottom: 1px solid rgba(19, 24, 44, 0.1);
  padding: 12px 0;
  margin-bottom: 12px;
  transition: 0.3s;

  &:hover {
    border-color: #303178;
    .selection-button__text {
      color: #303178;
    }

    .selection-button__arrow {
      background-color: #303178;
      color: #fff;
    }
  }

  &__text {
    flex-basis: 100%;
    font-size: 18px;
    font-weight: 400;
    color: #122032;
    transition: 0.3s;
  }

  &__arrow {
    border: 1px solid #303178;
    border-radius: 50%;
    padding: 11px;
    color: #303178;
    transition: 0.3s;
  }
}
</style>
