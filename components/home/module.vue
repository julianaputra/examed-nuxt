<template>
    <section class="module">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-9 col-xl-10">
                    <h2 class="module__title">{{ props.moduleTitle }}</h2>
                </div>
                <div class="col-12 col-lg-3 col-xl-2">
                    <HomeSwiperNavigation
                        :prev-class="'moduke-swiper__prev'"
                        :next-class="'moduke-swiper__next'"
                        :pagination-class="'moduke-swiper__pagination'"
                    />
                </div>
            </div>
            <Swiper
                id="module-swiper"
                class="module-swiper"
                :modules="[SwiperNavigation, SwiperPagination]"
                :loop="true"
                :slides-per-view="1"
                :space-between="30"
                :pagination="{
                    el: '.moduke-swiper__pagination'
                }"
                :navigation="{
                    prevEl: '.moduke-swiper__prev',
                    nextEl: '.moduke-swiper__next'
                }"
                :breakpoints="{
                    '767': {
                        loop: false,
                        slidesPerView: 2,
                        slidesPerGroup: 2
                    },
                    '1200': {
                        slidesPerView: 4,
                        slidesPerGroup: 4
                    }
                }"
            >
                <SwiperSlide
                    v-for="(diagnose, diagnoseIndex) in diagnoses"
                    :key="diagnoseIndex" :class="{'d-none':  diagnose.to.substring(1) == props.activeSlug }"
                   
                >
                    <nuxt-link :to="diagnose.to" class="themeBtnBold" >
                        <div
                            class="themeBtnBold__square"
                            :class="diagnose.color"
                        >
                            {{ diagnose.short }}
                        </div>
                        <span> {{ diagnose.name }} </span>
                        <div class="themeBtnBold__arrow">
                            <Icon name="CaretdownIcon" width="32" height="32" />
                        </div>
                    </nuxt-link>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps({
    activeSlug:{
        type:String,
    },
    moduleTitle:{
        type:String,
    }
})
const diagnoses = ref([
    {
        name: 'Depresi',
        to: '/depresi',
        short: 'DEP',
        color: 'pink'
    },
    {
        name: 'Psikosis',
        to: '/psikosis',
        short: 'PSY',
        color: 'purple'
    },
    {
        name: 'Gangguan Mental & Perilaku Anak & Remaja',
        to: '/',
        short: 'CMH',
        color: 'green'
    },
    {
        name: 'Demensia',
        to: '/',
        short: 'DEM',
        color: 'lime'
    },
    {
        name: 'Menyakiti Diri Sendiri / Bunuh Diri',
        to: '/menyakiti-diri-sendiri-bunuh-diri',
        short: 'SUI',
        color: 'red'
    }
])
</script>

<style lang="scss" scoped>
.module {
    @include vwUnit(padding-top, 45);
    @include vwUnit(padding-bottom, 94);
    overflow: hidden;

    &__title {
        @include vwUnit(margin-bottom, 30);
        @include typo(heading-1);
    }
    @media screen and (max-width:767px) {
        @include vwUnit(padding-bottom, 50);
    }
}

::v-deep .module-swiper {
    overflow: visible;
}
</style>
