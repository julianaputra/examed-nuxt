<template>
    <section class="testi">
        <div class="container">
            <div class="testi__info-container">
                <div class="testi__info-header">
                    <div class="row">
                        <div class="col-12 col-lg-9 col-xl-10 order-1">
                            <h2 class="testi__title">{{ pageData.title }}</h2>
                            <p>
                                {{ pageData.desc }}
                            </p>
                        </div>
                        <div
                            class="col-5 col-sm-8 col-lg-3 col-xl-2 mx-auto align-self-end mb-lg-3 order-3 order-lg-2 testi__navigation"
                        >
                            <HomeSwiperNavigation
                                :prev-class="'testi-swiper__prev'"
                                :next-class="'testi-swiper__next'"
                                :pagination-class="'testi-swiper__pagination'"
                            />
                        </div>
                        <div class="testi__info-body order-lg-3 order-2">
                            <Swiper
                                id="testimony-swiper"
                                :modules="[
                                    SwiperAutoplay,
                                    SwiperNavigation,
                                    SwiperPagination
                                ]"
                                :slides-per-view="1"
                                :loop="true"
                                :loop-fill-group-with-blank="true"
                                :space-between="30"
                                :pagination="{
                                    el: '.testi-swiper__pagination'
                                }"
                                :navigation="{
                                    prevEl: '.testi-swiper__prev',
                                    nextEl: '.testi-swiper__next'
                                }"
                                :breakpoints="{
                                    '992': {
                                        slidesPerView: 2,
                                        slidesPerGroup: 2
                                    }
                                }"
                            >
                                <SwiperSlide
                                    v-for="(
                                        testi, testiIndex
                                    ) in pageData.testimony"
                                    :key="testiIndex"
                                >
                                    <HomeTestiCard
                                        :star="testi.star"
                                        :message="testi.message"
                                        :picture="testi.picture"
                                        :name="testi.name"
                                        :info="testi.info"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <!-- <div class="testi__info-body">
                    <Swiper
                        id="testimony-swiper"
                        :modules="[
                            SwiperAutoplay,
                            SwiperNavigation,
                            SwiperPagination
                        ]"
                        :slides-per-view="1"
                        :loop="true"
                        :loop-fill-group-with-blank="true"
                        :space-between="30"
                        :pagination="{
                            el: '.testi-swiper__pagination'
                        }"
                        :navigation="{
                            prevEl: '.testi-swiper__prev',
                            nextEl: '.testi-swiper__next'
                        }"
                        :breakpoints="{
                            '992': {
                                slidesPerView: 2,
                                slidesPerGroup: 2
                            }
                        }"
                    >
                        <SwiperSlide
                            v-for="(testi, testiIndex) in pageData.testimony"
                            :key="testiIndex"
                        >
                            <HomeTestiCard
                                :star="testi.star"
                                :message="testi.message"
                                :picture="testi.picture"
                                :name="testi.name"
                                :info="testi.info"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div> -->
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const pageData = ref({
    title: 'Kata Mereka Tentang Kami',
    desc: 'Baca apa yang para dokter dan perawat katakan tentang website guidebook kami',
    testimony: [
        {
            star: 5,
            message:
                'Website panduan ini sangat Praktis dan lengkap serta sangat membantu kami dlm Praktek sehari-hari di Puskesmas. Terimakasih karena sudah mengembangkan panduan ini.',
            picture: '/images/person1.png',
            name: 'dr. Ketut Parining, Sp.KKLP',
            info: 'Puskesmas Seririt 1, Kabupaten Buleleng, Bali'
        },
        {
            star: 4,
            message:
                'Aplikasi EXAMED ini sangat membantu kami melakukan skrining dan tata laksana gangguan mental yang banyak ditemui di puskesmas. Step by step-nya yang mudah diikuti sangat menghemat waktu kami saat pelayanan.',
            picture: '/images/person2.png',
            name: 'dr. Luh Dani Herawati',
            info: 'Puskesmas Blahbatuh II, Kabupaten Gianyar, Bali'
        },
        {
            star: 5,
            message:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            picture: 'https://i.pravatar.cc/300?img=3',
            name: 'Janice L German',
            info: 'Surya Husada Hospital'
        },
        {
            star: 5,
            message:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus vitae massa ut varius. Phasellus eros nunc, sagittis rhoncus blandit nec, fringilla quis orci. Mauris dui quam, egestas nec nisi eu, facilisis tempus magna.',
            picture: 'https://i.pravatar.cc/300?img=4',
            name: 'John C Willoughby',
            info: 'BaliMed Hospital and Daycare'
        }
    ]
})
</script>

<style lang="scss" scoped>
.testi {
    @include vwUnit(padding-top, 50);
    @include vwUnit(padding-bottom, 50);

    &__info-container {
        @include vwDesktop(padding, 80);
        @include vwMobile(padding-top, 40);
        @include vwMobile(padding-right, 30);
        @include vwMobile(padding-bottom, 40);
        @include vwMobile(padding-left, 30);
        background-color: #e9f0fc;
        border-radius: 53px;
        @media screen and (max-width: 767px) {
            border-radius: 30px;
        }

        @media (max-width: 320px) {
            padding-right: unit(15, 320);
            padding-left: unit(15, 320);
        }
    }
    &__navigation {
        @media screen and (max-width: 991px) {
            margin-top: 10px;
        }
    }

    &__title {
        @include vwUnit(margin-bottom, 10);
        @include typo(heading-1);
    }
}
</style>
