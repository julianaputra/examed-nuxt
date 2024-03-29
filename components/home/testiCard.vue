<template>
  <div class="testi-card">
    <div class="testi-card__star-container">
      <Icon
        v-for="i in 5"
        :key="i"
        :name="showStar(i)"
        width="24"
        height="24"
        class="testi-card__star"
      />
    </div>
    <p class="testi-card__desc">
      {{ $props.message }}
    </p>
    <div class="testi-card__info-container">
      <div class="testi-card__image-container">
        <img :src="props.picture" :alt="props.name" class="ratio-item" />
      </div>
      <div class="testi-card__text-container">
        <p class="testi-card__name">{{ props.name }}</p>
        <p class="testi-card__info">{{ props.info }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  star: {
    type: Number,
    default: 0
  },
  message: {
    type: String,
    default: 'Description'
  },
  picture: {
    type: String,
    default: 'https://i.pravatar.com/300?img=5'
  },
  name: {
    type: String,
    default: 'Jhon or Jane Doe'
  },
  info: {
    type: String,
    default: 'Hospital Name'
  }
})

function showStar($number: Number) {
  if ($number <= props.star) {
    return 'basil:star-solid'
  } else {
    return 'basil:star-outline'
  }
}
</script>

<style lang="scss" scoped>
.testi-card {
  @include vwUnit(padding, 30, 15);
  background-color: #ffffff;
  border-radius: 10px;

  &__star-container {
    @include vwUnit(margin-bottom, 20);
    color: #fbaf1b;
  }

  &__star {
    @include vwUnit(margin-right, 5);
  }

  &__info-container {
    display: flex;
    align-items: center;
    @include vwUnit(margin-top, 50, 25);

    @media (max-width: 320px) {
      flex-wrap: wrap;
    }
  }

  @include imageRatio(60, 60, true);

  &__image-container {
    border-radius: 100px;
    overflow: hidden;

    @media (max-width: 320px) {
      margin-bottom: unit(15, 320);
    }
  }

  &__text-container {
    @include vwUnit(margin-left, 10);
  }

  &__name {
    margin: 0;
  }

  &__info {
    margin: 0;
    color: rgba(18, 32, 50, 0.6);
    @include typo(body-s);
  }
}
</style>
