<template>
    <section class="about">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-xl-7 order-xl-1">
                    <div class="about__info-container">
                        <h2 class="about__title">{{ pageData.title }}</h2>
                        <div
                            v-for="(item, itemIndex) in pageData.list"
                            :key="itemIndex"
                            class="about__list-item"
                            :class="
                                itemIndex == pageData.list.length - 1
                                    ? 'border-0 mb-0 pb-0 '
                                    : ''
                            "
                        >
                            <div class="about__list-icon-container">
                                <img
                                    :src="item.icon"
                                    :alt="`${item.title} Icon`"
                                    class="ratio-item"
                                />
                            </div>
                            <div class="about__list-info">
                                <h3 class="about__list-title">
                                    {{ item.title }}
                                </h3>
                                <p class="about__list-desc">{{ item.desc }}</p>
                            </div>
                        </div>
                        <UiButton class="about__button-about" to="/tentang-kami"
                            >Tentang Kami</UiButton
                        >
                    </div>
                </div>
                <div class="col-12 col-xl-5 text-center">
                    <div class="about__image-container">
                        <img
                            :src="pageData.image"
                            :alt="`${pageData.title} image`"
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
    title: 'pilihan terbaik untuk memenuhi kebutuhan perawatan medis Anda',
    image: '/images/home-about__banner.png',
    list: [
        {
            title: 'Panduan Medis Terpercaya',
            desc: 'Buku saku kami berisi panduan medis yang terpercaya dan terkini, sehingga Anda dapat memberikan perawatan yang berkualitas tinggi kepada pasien.',
            icon: '/images/home-about__panduan.svg'
        },
        {
            title: 'Kemudahan Akses 24/7',
            desc: 'Kami menyediakan akses tanpa batas ke panduan medis kami, sehingga Anda dapat mengambil keputusan medis kapan saja, di mana saja.',
            icon: '/images/home-about__mudah.svg'
        },
        {
            title: 'Komprehensif & Mudah Dipahami',
            desc: 'Informasi medis yang kami sertakan mudah dipahami, sehingga dokter dan perawat dapat dengan cepat merujuk ke panduan kami dalam praktik sehari-hari.',
            icon: '/images/home-about__komprehensif.svg'
        }
    ]
})
</script>

<style lang="scss" scoped>
.about {
    @include vwUnit(padding-top, 103);
    @include vwUnit(padding-bottom, 140);

    @include imageRatio(670, 859, true);
    @media screen and (max-width: 1199px) {
        @include vwUnit(padding-top, 50);
        @include vwUnit(padding-bottom, 50);
    }

    &__info-container {
        padding: unit(100, 1920) unit(80, 1920);

        @media screen and (max-width: 1199px) {
            padding: 0;
        }
        // @include vwUnit(padding-top, 100, 60);
        // @include vwUnit(padding-right, 88, 30);
        // @include vwUnit(padding-bottom, 100, 60);
        // @include vwUnit(padding-left, 88, 30);
    }

    &__title {
        @include vwUnit(margin-bottom, 60, 35);
        @include typo(heading-1);
        text-transform: capitalize;
    }

    &__list-item {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        @include vwUnit(padding-bottom, 40, 20);
        @include vwUnit(margin-bottom, 40, 20);

        @media screen and (max-width: 480px) {
            flex-wrap: wrap;
        }
    }

    @include imageRatio(60, 60, true, $className: 'list-icon');

    &__list-icon-container {
        @include vwMobile(margin-bottom, 15);
    }

    &__list-info {
        @include vwDesktop(padding-left, 20);

        @media screen and (max-width: 767px) {
            padding-left: vwSize(20, 767);
        }

        @media screen and (max-width: 480px) {
            padding-left: 0;
        }
    }

    &__list-title {
        @include typo(title-1);
    }

    &__list-desc {
        margin: 0;
    }
    &__image-container {
        @include vwUnit(margin-top, 0);
        @media screen and (max-width: 1199px) {
            @include vwUnit(margin-top, 50);
        }
        @media screen and (max-width: 767px) {
            @include vwUnit(margin-top, 40);
        }
        @media screen and (max-width: 576px) {
            @include vwUnit(margin-top, 30);
        }
    }
    &__button-about {
        @include vwUnit(width, 267, 180);
        @include vwUnit(margin-top, 60, 30);
    }
}
</style>
