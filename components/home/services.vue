<template>
  <section class="other-service">
    <div class="container">
      <h2 class="other-services__title">{{ pageData.title }}</h2>
      <div class="row">
        <div
          v-for="(service, serviceIndex) in pageData.services"
          :key="serviceIndex"
          class="col-12 col-lg-4"
        >
          <nuxt-link to="#" class="other-services__card service-card">
            <div class="service-card__image-container">
              <img
                :src="service.icon"
                :alt="`${service.title} icon`"
                class="ratio-item"
              />
            </div>
            <div class="service-card__body">
              <div class="service-card__text-container">
                <h3 class="service-card__title">
                  {{ service.title }}
                </h3>
                <p>Lihat Detail</p>
              </div>
              <div class="service-card__icon-container">
                <Icon name="basil:caret-right-solid" width="32" height="32" />
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const pageData = ref({
  title: 'Layanan Lainnya',
  services: [
    {
      title: 'Bagan Induk',
      icon: '/images/home-other-service__bagan.svg'
    },
    {
      title: 'Perawatan & Praktek Penting',
      icon: '/images/home-other-service__layanan.svg'
    },
    {
      title: 'Manajemen Kedokteran Keluarga',
      icon: '/images/home-other-service__manajemen.svg'
    }
  ]
})
</script>

<style lang="scss" scoped>
.other-services {
  @include vwUnit(padding-top, 50);
  @include vwUnit(padding-bottom, 50);

  &__title {
    @include typo(heading-1);
    @include vwUnit(margin-bottom, 30);
  }
}

.service-card {
  display: block;
  @include vwUnit(margin-bottom, 30);
  @include vwUnit(padding, 30, 15);
  color: #122032;
  text-decoration: none;
  border: 1px solid #e9e9e9;
  border-radius: 14px;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.07);

  @include fullState {
    color: colorMod(#122032, +20%);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);

    .service-card__icon-container {
      @include transform(translateX(8px));
    }
  }

  @include imageRatio(80, 80, true);

  &__image-container {
    @include vwUnit(margin-bottom, 30);
  }

  &__body {
    display: flex;
  }

  &__text-container {
    flex: 1 0;
  }

  &__title {
    @include typo(card-title-1);
  }

  &__icon-container {
    transition: all 0.3s ease;
  }
}
</style>
