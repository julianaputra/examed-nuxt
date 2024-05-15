<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-4 col-xl-3 order-1 order-lg-0">
                    <nuxt-link class="footer__image-container" to="/">
                        <img
                            :src="pageData.mainLogo"
                            alt="examed logo"
                            class="ratio-item"
                        />
                    </nuxt-link>
                    <p class="footer__copyright">
                        {{ pageData.copyright }}
                    </p>
                    <p class="footer__tnc">
                        This site is protected by reCAPTCHA and the Google
                        <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            class="footer__tnc--link"
                            >Privacy Policy</a
                        >
                        and
                        <a
                            href="https://policies.google.com/terms"
                            target="_blank"
                            class="footer__tnc--link"
                            >Terms of Service </a
                        >apply.
                    </p>
                    <div class="footer__udayana-container">
                        <img
                            :src="pageData.udayanaLogo"
                            alt="Universitas Udayana logo"
                            class="ratio-item"
                        />
                    </div>
                </div>
                <div class="col-12 col-lg-4 offset-xl-2">
                    <h3 class="footer__title">List Modul</h3>
                    <nav class="footer__nav">
                        <ul class="footer__nav-list list-unstyled">
                            <li
                                v-for="(module, moduleIndex) in pageData.module"
                                :key="moduleIndex"
                                class="footer__nav-item"
                            >
                                <nuxt-link
                                    :to="module.to"
                                    class="footer__nav-link"
                                >
                                    <span> {{ module.name }}</span>
                                    <img
                                        src="/images/ic-arrow-right.svg"
                                        alt="Ic-arrow"
                                        class="footer__arrow-link"
                                    />
                                </nuxt-link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="col-12 col-lg-4 col-xl-3">
                    <h3 class="footer__title">Layanan Lainnya</h3>
                    <nav class="footer__nav">
                        <ul class="footer__nav-list list-unstyled">
                            <li
                                v-for="(
                                    module, moduleIndex
                                ) in pageData.otherServices"
                                :key="moduleIndex"
                                class="footer__nav-item"
                            >
                                <nuxt-link
                                    :to="module.to"
                                    class="footer__nav-link"
                                >
                                    <span> {{ module.title }}</span>
                                    <img
                                        src="/images/ic-arrow-right.svg"
                                        alt="Ic-arrow"
                                        class="footer__arrow-link"
                                    />
                                </nuxt-link>
                            </li>
                        </ul>
                    </nav>
                    <h3 class="footer__title">Perusahaan Kami</h3>
                    <nav class="footer__nav">
                        <ul class="footer__nav-list list-unstyled">
                            <li
                                v-for="(module, moduleIndex) in pageData.about"
                                :key="moduleIndex"
                                class="footer__nav-item"
                            >
                                <nuxt-link
                                    :to="module.to"
                                    class="footer__nav-link"
                                >
                                    <span>{{ module.title }}</span>
                                    <img
                                        src="/images/ic-arrow-right.svg"
                                        alt="Ic-arrow"
                                        class="footer__arrow-link"
                                    />
                                </nuxt-link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <a :href="whatsappRedirect()" target="_blank" class="whatsapp-icon">
            <img
                class="w-100"
                src="/images/ic-whatsapp.svg"
                alt="Whatsapp Icon"
            />
        </a>
    </footer>
</template>

<script lang="ts" setup>
const pageData = ref({
    mainLogo: '/images/examed-icon.png',
    copyright: 'Copyright © 2023 Examed - All Rights Reserved.',
    tnc: 'This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.',
    udayanaLogo: '/images/udayana_logo.png',
    module: [
        {
            name: 'Depresi',
            to: '/depresi'
        },
        {
            name: 'Demensia',
            to: '/'
            // name: 'Psikosis',
            // to: '/psikosis'
        },
        {
            name: 'Menyakiti Diri Sendiri / Bunuh Diri',
            to: '/menyakiti-diri-sendiri-bunuh-diri'
            // name: 'Gangguan Mental & Perilaku Anak & Remaja',
            // to: '/'
        },
        {
            name: 'Psikosis',
            to: '/psikosis'
        },
        {
            name: 'Gangguan Mental & Perilaku Anak & Remaja',
            to: '/layanan/bagan-induk#cmh'
        },
        {
            name: 'Keluhan Kesehatan Mental Penting Lainnya',
            to: '/'
        }
    ],
    otherServices: [
        {
            title: 'Bagan Induk',
            to: '/bagan-induk'
        },
        {
            title: 'Perawatan & Praktek Penting',
            to: '/perawtan-praktek-penting'
        },
        {
            title: 'Informasi Lebih Lanjut',
            to: '/informasi-lanjut'
        }
    ],
    about: [
        {
            title: 'Tentang Kami',
            to: '/tentang-kami'
        },
        {
            title: 'Resources',
            to: '/resources'
        },
        {
            title: 'Kontak',
            to: '/kontak'
        }
    ]
})

const whatsappRedirect = () => {
    const phoneNumber = '+621234567890'
    const message = 'Hi , Examed!'
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}
</script>

<style lang="scss" scoped>
.footer {
    position: relative;
    background-color: #ffffff;
    @include vwUnit(padding-top, 80, 40);
    @include vwUnit(padding-bottom, 25, 50);
    @include imageRatio(293, 72, true);

    &__image-container {
        @include vwUnit(margin-bottom, 40, 30);
    }

    &__copyright {
        @include vwUnit(margin-bottom, 5);
        @include typo(body-s);
    }

    &__tnc {
        @include vwUnit(margin-bottom, 30);
        @include typo(body-s);
        opacity: 0.5;
        &--link {
            color: #122032;
        }
    }

    @include imageRatio(189, 49, true, $className: udayana);

    &__udayana-container {
        @include vwMobile(margin-bottom, 35);
    }

    &__title {
        @include vwUnit(margin-bottom, 25, 10);
        @include typo(title-1);
    }

    &__nav {
        @include vwUnit(margin-bottom, 40, 20);
    }

    &__nav-link {
        display: block;
        @include vwUnit(padding-bottom, 15, 10);
        color: rgba(19, 24, 44, 0.8);
        @include typo(body-s);
        text-decoration: none;
        @include transition(all 0.3s ease);
        &:hover {
            .footer__arrow-link {
                opacity: 1;
                transform: translate(10px, 0px);
            }
        }
    }
    &__arrow-link {
        opacity: 0;
        transition: all 0.3s ease;
    }

    .whatsapp-icon {
        z-index: 10;
        position: fixed;
        @include vwUnit(width, 81, 60);
        @include vwUnit(bottom, 56, 40);
        @include vwUnit(right, 28, 15);
        cursor: pointer;
    }
}
</style>
