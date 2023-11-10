<template>
  <div class="card">
    <nuxt-link to="/depresi" class="heading--secondary card__title">
      <div class="card__back-icon">
        <Icon name="basil:arrow-left-solid" width="32" height="32"></Icon>
      </div>
      <slot name="title"></slot>
    </nuxt-link>

    <hr class="card__hr" />
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <h3 class="card__subtitle" v-if="$slots.subtitle">
          <slot name="subtitle"></slot>
        </h3>
        <slot name="content"></slot>
        <hr class="card__hr--bottom" />
        <div class="card__buttons">
          <UiButton variant="outline">Outline</UiButton>
          <UiButton>Solid</UiButton>
        </div>
      </div>
    </div>
  </div>
</template>

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
  }

  &__subtitle {
    font-size: 24px;
    font-weight: 400;
    color: #122032;
    line-height: 1.4;
    margin-bottom: 24px;
  }

  &__back-icon {
    display: inline-block;
    margin-right: 8px;
  }

  &__buttons {
    display: flex;
    gap: 12px;
  }
}
</style>
