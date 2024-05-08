
<template>
    <section class="home-banner">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-xl-6 col-xxl-7">
                    <div class="home-banner__content">
                        <h1 class="home-banner__title">
                            {{ pageData.title }}
                        </h1>
                        <div class="row">
                            <div
                                v-for="(
                                    feature, featureIndex
                                ) in pageData.features"
                                :key="featureIndex"
                                :class="[
                                    'col-12 col-sm-6 col-md',
                                    specialClass(featureIndex)
                                ]"
                            >
                                <div class="banner-home__feature-container">
                                    <HomeBannerFeature
                                        :title="feature.title"
                                        :icon="feature.icon"
                                        :number="feature.number"
                                        :desc="feature.desc"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-xl-6 col-xxl-5 align-self-end">
                    <div class="home-banner__image-container mx-auto">
                        <img
                            src="/images/banner-image.png"
                            :alt="`${pageData.title} Image`"
                            class="ratio-item"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const pageData = ref({
    title: 'Panduan Skrining dan Tatalaksana Gangguan Mental di Layanan Primer',
    features: [
        {
            title: 'Digunakan',
            number: '14+',
            desc: 'Layanan Kesehatan',
            icon: '/images/home-banner-feature__digunakan.svg'
        },
        {
            title: 'Membantu',
            number: '32+',
            desc: 'Dokter & Perawat',
            icon: '/images/home-banner-feature__membantu.svg'
        },
        {
            title: 'Menghemat',
            number: '90%',
            desc: 'Waktu mengambil keputusan',
            icon: '/images/home-banner-feature__menghemat.svg'
        }
    ]
})

function specialClass(index: number) {
    return index === pageData.value.features.length - 1
        ? 'home-banner__big-feature'
        : ''
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/_config.scss';

.home-banner {
    @include vwUnit(padding-top, 30);
    background: linear-gradient(180deg, #eaf0fd 70.31%, #a4bef1 100%);
    border-bottom-right-radius: 60px;
    border-bottom-left-radius: 60px;
    overflow: hidden;

    &__title {
        @include vwUnit(margin-bottom, 30);
        @include typo(display);
    }

    &__big-feature {
        flex-grow: 1.5;
    }

    @include imageRatio(670, 418, true);

    &__image-container {
        display: block;
    }
}
</style>
