<template>
    <section class="other-service">
        <div class="container">
            <h2 class="other-services__title">{{ pageData.title }}</h2>
            <div class="row">
                <div
                    v-for="(service, serviceIndex) in pageData.services"
                    :key="serviceIndex"
                    class="col-12 col-lg-4"
                    :class="isInPage(service.slug)"
                >
                    <nuxt-link
                        :to="service.slug"
                        class="other-services__card service-card"
                    >
                        <div class="service-card__image-container">
                            <img
                                :src="service.icon"
                                :alt="`${service.title} icon`"
                                class="ratio-item"
                            />
                            <img
                                :src="service.iconActive"
                                :alt="`${service.title} icon`"
                                class="ratio-item ratio-item--active"
                            />
                        </div>
                        <div class="service-card__body">
                            <div class="service-card__text-container">
                                <h3 class="service-card__title">
                                    {{ service.title }}
                                </h3>
                                <p class="service-card__text">Lihat Detail</p>
                            </div>
                            <div class="service-card__icon-container">
                                <Icon
                                    name="basil:caret-right-solid"
                                    width="32"
                                    height="32"
                                />
                            </div>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const route = useRoute()

function isInPage(slug: String) {
    const checkActive = route.fullPath.includes(slug)
    if (checkActive) {
        return 'd-none'
    }
    // return route.fullPath === slug ? 'd-none' : ''
}

const pageData = ref({
    title: 'Layanan Lainnya',
    services: [
        {
            id: 1,
            title: 'Bagan Induk',
            slug: '/layanan/bagan-induk',
            icon: '/images/home-other-service__bagan.svg',
            iconActive: '/images/home-other-service__bagan-hover.svg'
        },
        {
            id: 2,
            title: 'Perawatan & Praktek Penting',
            slug: '/layanan/perawatan-praktek-penting',
            icon: '/images/home-other-service__layanan.svg',
            iconActive: '/images/home-other-service__layanan-hover.svg'
        },
        {
            id: 3,
            title: 'Manajemen Kedokteran Keluarga',
            slug: '/layanan/manajemen-kedokteran-keluarga',
            icon: '/images/home-other-service__manajemen.svg',
            iconActive: '/images/home-other-service__manajemen-hover.svg'
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
    background-color: #ffffff;
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
        background-color: #e9f0fc;

        .ratio-item--active {
            opacity: 1;
            display: block;
        }

        .service-card__icon-container {
            @include transform(translateX(8px));
        }
    }

    @media (max-width: 991px) {
        display: flex;
        align-items: center;
    }

    @include imageRatio(80, 80, true);

    &__image-container {
        @include vwDesktop(margin-bottom, 30);

        @media (max-width: 991px) {
            margin-bottom: 0;
        }

        @media (max-width: 320px) {
            max-width: unit(60, 320);
        }
    }

    &__body {
        display: flex;
        @include vwMobile(padding-left, 15);

        @media (max-width: 991px) {
            flex: 1 0;
            padding-left: unit(15, 991);
        }
    }

    &__text-container {
        flex: 1 0;
    }

    &__title {
        @include typo(card-title-1);
    }

    &__text {
        margin-bottom: 0;
    }

    &__icon-container {
        transition: all 0.3s ease;
    }
}
.ratio-item {
    &--active {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
}
</style>
