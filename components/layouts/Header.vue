<template>
    <header>
        <nav class="navbar navbar-expand-xl custom-navbar">
            <div class="container">
                <nuxt-link class="custom-navbar__logo-container" to="/">
                    <img
                        src="/images/examed-icon.png"
                        alt="examed icon"
                        class="ratio-item"
                        width="296"
                    />
                </nuxt-link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#navbarMainMenu"
                    aria-controls="navbarMainMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbarMainMenu" class="offcanvas offcanvas-end">
                    <div class="offcanvas-header">
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav custom-navbar__navbar-nav">
                            <li class="nav-item dropdown">
                                <nuxt-link
                                    class="custom-navbar__nav-link custom-navbar__menu-dropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    >List Modul
                                    <img
                                        src="/images/ic-dropdown-bottom.svg"
                                        alt="Dropdown-arrow"
                                        class="custom-navbar__arrow-dropdown"
                                    />
                                </nuxt-link>

                                <div
                                    class="dropdown-menu custom-navbar__wrap-dropdown custom-navbar__wrap-dropdown--big shadow-xl-sm"
                                >
                                    <div class="row gy-1">
                                        <div
                                            class="col-12 col-xl-6"
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"
                                        >
                                            <NuxtLink
                                                to="/depresi"
                                                class="custom-navbar__list-dropdown custom-navbar__list-dropdown--border"
                                            >
                                                Depresi

                                                <img
                                                    src="/images/ic-arrow-right.svg"
                                                    alt="Ic-arrow"
                                                    class="nav-item__arrow"
                                                />
                                            </NuxtLink>
                                        </div>
                                        <div
                                            class="col-12 col-xl-6"
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"
                                        >
                                            <NuxtLink
                                                to="/psikosis"
                                                class="custom-navbar__list-dropdown custom-navbar__list-dropdown--border"
                                            >
                                                Psikosis
                                                <img
                                                    src="/images/ic-arrow-right.svg"
                                                    alt="Ic-arrow"
                                                    class="nav-item__arrow"
                                                />
                                            </NuxtLink>
                                        </div>
                                        <div
                                            class="col-12 col-xl-6"
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"
                                        >
                                            <NuxtLink
                                                to="/psikosis"
                                                class="custom-navbar__list-dropdown custom-navbar__list-dropdown--border"
                                            >
                                                Demensia
                                                <img
                                                    src="/images/ic-arrow-right.svg"
                                                    alt="Ic-arrow"
                                                    class="nav-item__arrow"
                                                />
                                            </NuxtLink>
                                        </div>
                                        <div
                                            class="col-12 col-xl-6"
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"
                                        >
                                            <NuxtLink
                                                to="/layanan/perawatan-praktek-penting"
                                                class="custom-navbar__list-dropdown custom-navbar__list-dropdown--border"
                                            >
                                                Gangguan Mental & Perilaku Anak
                                                & Remaja
                                                <img
                                                    src="/images/ic-arrow-right.svg"
                                                    alt="Ic-arrow"
                                                    class="nav-item__arrow"
                                                />
                                            </NuxtLink>
                                        </div>
                                        <div
                                            class="col-12 col-xl-6"
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"
                                        >
                                            <NuxtLink
                                                to="/menyakiti-diri-sendiri-bunuh-diri"
                                                class="custom-navbar__list-dropdown"
                                            >
                                                Menyakiti Diri Sendiri / Bunuh
                                                Diri
                                                <img
                                                    src="/images/ic-arrow-right.svg"
                                                    alt="Ic-arrow"
                                                    class="nav-item__arrow"
                                                />
                                            </NuxtLink>
                                        </div>
                                        <div
                                            class="col-12 col-xl-6"
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"
                                        >
                                            <NuxtLink
                                                to="/layanan/perawatan-praktek-penting"
                                                class="custom-navbar__list-dropdown"
                                            >
                                                Keluhan Kesehatan Mental Penting
                                                Lainnya
                                                <img
                                                    src="/images/ic-arrow-right.svg"
                                                    alt="Ic-arrow"
                                                    class="nav-item__arrow"
                                                />
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <nuxt-link
                                    class="custom-navbar__nav-link custom-navbar__menu-dropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    >Layanan Lainnya
                                    <img
                                        src="/images/ic-dropdown-bottom.svg"
                                        alt="Dropdown-arrow"
                                        class="custom-navbar__arrow-dropdown"
                                    />
                                </nuxt-link>

                                <div
                                    class="dropdown-menu custom-navbar__wrap-dropdown shadow-xl-sm"
                                >
                                    <div
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                    >
                                        <NuxtLink
                                            to="/layanan/bagan-induk"
                                            class="custom-navbar__list-dropdown custom-navbar__list-dropdown--border"
                                        >
                                            Bagan Induk
                                            <img
                                                src="/images/ic-arrow-right.svg"
                                                alt="Ic-arrow"
                                                class="nav-item__arrow"
                                            />
                                        </NuxtLink>
                                    </div>
                                    <div
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                    >
                                        <NuxtLink
                                            to="/layanan/perawatan-praktek-penting"
                                            class="custom-navbar__list-dropdown custom-navbar__list-dropdown--border"
                                        >
                                            Perawatan & Praktek Penting
                                            <img
                                                src="/images/ic-arrow-right.svg"
                                                alt="Ic-arrow"
                                                class="nav-item__arrow"
                                            />
                                        </NuxtLink>
                                    </div>

                                    <div
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                    >
                                        <NuxtLink
                                            to="/layanan/manajemen-kedokteran-keluarga"
                                            class="custom-navbar__list-dropdown"
                                        >
                                            Manajemen Kedokteran Keluarga
                                            <img
                                                src="/images/ic-arrow-right.svg"
                                                alt="Ic-arrow"
                                                class="nav-item__arrow"
                                            />
                                        </NuxtLink>
                                    </div>
                                </div>
                            </li>
                            <li
                                class="nav-item"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            >
                                <nuxt-link
                                    to="/list-rumah-sakit"
                                    class="custom-navbar__nav-link"
                                    >List Rumah Sakit</nuxt-link
                                >
                            </li>
                            <li
                                class="nav-item"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            >
                                <nuxt-link
                                    to="/list-psikiater"
                                    class="custom-navbar__nav-link"
                                    >List Psikiater</nuxt-link
                                >
                            </li>
                            <li
                                class="nav-item"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            >
                                <nuxt-link
                                    to="/tentang-kami"
                                    class="custom-navbar__nav-link"
                                    >Tentang Kami</nuxt-link
                                >
                            </li>
                            <li
                                class="nav-item"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            >
                                <nuxt-link
                                    to="/resources"
                                    class="custom-navbar__nav-link"
                                    >Resources</nuxt-link
                                >
                            </li>
                            <li
                                class="nav-item"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            >
                                <nuxt-link
                                    to="/kontak"
                                    class="custom-navbar__nav-link"
                                    >Kontak</nuxt-link
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.custom-navbar {
    @include imageRatio(293, 72, true, contain, 'logo');
    background-color: #fff;
    @include vwUnit(padding-top, 14);
    @include vwUnit(padding-bottom, 14);
    @include vwUnit(padding-left, 0);
    @include vwUnit(padding-right, 0);

    &__logo-container {
        @include vwMobile(max-width, 175);

        @media screen and (max-width: 1199px) {
            @include vwUnit(max-width, 150);
        }
    }

    &__navbar-nav {
        margin-left: auto;
        gap: 8px;
    }

    &__nav-link {
        @include vwUnit(padding-top, 8);
        @include vwUnit(padding-bottom, 8);
        @include vwUnit(padding-left, 12);
        @include vwUnit(padding-right, 12);
        display: block;
        @include typo(nav-item);
        font-weight: 400;
        color: #122032;
        text-decoration: none;
        border-radius: 6px;
        transition:
            background-color 0.3s ease,
            color 0.3s ease;

        &:hover {
            color: #303178;
            background-color: #e9f0fc;
        }
    }

    &__arrow-dropdown {
        transition: all;
        transition-duration: 0.3s;
    }

    &__nav-link:hover {
        .custom-navbar__arrow-dropdown {
            rotate: -180deg;
            transition: all;
            transition-duration: 0.3s;
        }
    }

    &__wrap-dropdown {
        width: unit(280 , 1920);
        padding-top: unit(30, 1920);
        padding-bottom: unit(30, 1920);
        @include vwUnit(padding-right, 30, 25);
        @include vwUnit(padding-left, 30, 25);
        left: 50%;
        transform: translate(-50%, 0px);
        margin-top: unit(35, 1920);
        border: none;
        border-radius: 14px;

        &--big {
            width: unit(530 , 1920);
        }

        @media screen and (max-width: 1199px) {
            padding-top: 0;
            padding-bottom: 0;
            margin-top: unit(10, 1199);
            
            width: 100%;
            box-shadow: none;
            left: auto;
            transform: unset;
        }
    }

    &__menu-dropdown {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 6px;
        cursor: pointer;
    }

    &__list-dropdown {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        @include vwUnit(height, 54);
        @include typo(body-s);
        color: #122032;
        text-decoration: none;
        transition: all 0.3s ease;

        @media screen and (max-width: 1399px) {
            height: 100%;
            padding: 0;
        }

        &--border {
            border-bottom: 1px solid rgba(0, 0, 0, 0.07);
            @include vwUnit(padding-bottom, 14, 0);
            @include vwUnit(margin-bottom, 14, 0);

            @media screen and (max-width: 1199px) {
                border: none;
                padding-bottom: 0;
                margin-top: 0;
            }
        }

        @media screen and (max-width: 1199px) {
            @include vwUnit(padding, 8);
            @include typo(nav-item);

            &:hover {
                background-color: #e9f0fc;
                border-radius: 5px;
            }
        }

        @media screen and (max-width: 767px) {
            @include vwUnit(min-height, 35);
            @include vwUnit(padding-top, 10);
            @include vwUnit(padding-bottom, 10);
        }

        .nav-item__arrow {
            opacity: 0;
            transition: all 0.3s ease;
            transform: translateX(-10px);

            @media screen and (max-width: 1199px) {
                display: none;
            }
        }

        &:hover {
            .nav-item__arrow {
                opacity: 1;
                transform: translateX(0px);
            }
        }
    }
}
</style>
