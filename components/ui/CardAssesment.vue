<template>
  <div class="card">
    <div
      role="button"
      class="heading--secondary card__title"
      @click="$emit('back')"
    >
      <div class="card__back-icon">
        <Icon name="basil:arrow-left-solid" width="32" height="32"></Icon>
      </div>
      <slot name="title"></slot>
    </div>

    <hr class="card__hr" />
    <div class="row justify-content-center">
      <div class="col-lg-10 col-xxl-8">
        <h3 v-if="$slots.subtitle" :class="className">
          <slot name="subtitle"></slot>
        </h3>
        <div v-if="$slots.content" class="card__body">
          <slot name="content"></slot>
        </div>
        <hr v-if="$slots.footer" class="card__hr--bottom" />
        <div v-if="$slots.footer" class="row">
          <div class="col-lg-4">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  titleBig: {
    type: Boolean,
    default: false
  }
})

defineEmits(['back'])

const className = computed(() => {
  return props.titleBig === true ? 'card__subtitle--big' : 'card__subtitle'
})
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  padding: 40px 60px 80px 60px;
  border: 1px solid #e9e9e9;
  border-radius: 14px;

  &__hr {
    margin: 34px 0 60px 0;
    color: rgba(19, 24, 44, 0.5);

    &--bottom {
      @extend .card__hr;
      margin: 24px 0;
    }
  }

  &__title {
    text-decoration: none;
    display: inline-block;
  }

  &__subtitle {
    font-size: 24px;
    font-weight: 400;
    color: #122032;
    line-height: 1.4;
    margin-bottom: 24px;

    &--big {
      @extend .card__subtitle;
      color: #c75c91;
      font-size: 32px;
      font-weight: 500;
      margin-bottom: 32px;
    }
  }

  &__back-icon {
    display: inline-block;
    margin-right: 8px;
  }

  :deep(*) &__body {
    ul,
    ol {
      padding-left: 28px;

      li {
        color: rgba(18, 32, 50, 0.8);
        font-size: 18px;
        font-weight: 400;
      }
    }

    p {
      color: rgba(18, 32, 50, 0.8);
      font-size: 18px;
      font-weight: 400;
    }

    a {
      color: #303178;
    }
  }

  :deep(*) &__buttons {
    display: flex;
    gap: 12px;
  }
}
</style>
