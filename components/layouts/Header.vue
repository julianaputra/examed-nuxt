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
                                    class="dropdown-menu custom-navbar__wrap-dropdown custom-navbar__wrap-dropdown--big"
                                >
                                    <div class="row gy-1">
                                        <div class="col-12 col-xl-6">
                                            <NuxtLink
                                                to="/depresi"
                                                class="custom-navbar__list-dropdown custom-navbar__list-dropdown--border"
                                            >
                                                <span
                                                    class="dropdown-item custom-navbar__dropdown-sub-title"
                                                    >Depresi
                                                </span>
                                                <img
                                                    src="/images/ic-arrow-right.svg"
                                                    alt="Ic-arrow"
                                                    class="nav-item__arrow"
                                                />
                                            </NuxtLink>
                                        </div>
                                        <div class="col-12 col-xl-6">
                                            <NuxtLink
                                                to="/psikosis"
                                                class="custom-navbar__list-dropdown custom-navbar__list-dropdown--border"
                                            >
                                                <span
                                                    class="dropdown-item custom-navbar__dropdown-sub-title"
                                                    >Psikosis
                                                </span>
                                                <img
                                                    src="/images/ic-arrow-right.svg"
                                                    alt="Ic-arrow"
                                                    class="nav-item__arrow"
                                                />
                                            </NuxtLink>
                                        </div>
                                        <div class="col-12 col-xl-6">
                                            <NuxtLink
                                                to="/psikosis"
                                                class="custom-navbar__list-dropdown custom-navbar__list-dropdown--border"
                                            >
                                                <span
                                                    class="dropdown-item custom-navbar__dropdown-sub-title"
                                                    >Demensia
                                                </span>
                                                <img
                                                    src="/images/ic-arrow-right.svg"
                                                    alt="Ic-arrow"
                                                    class="nav-item__arrow"
                                                />
                                            </NuxtLink>
                                        </div>
                                        <div class="col-12 col-xl-6">
                                            <NuxtLink
                                                to="/layanan/perawatan-praktek-penting"
                                                class="custom-navbar__list-dropdown custom-navbar__list-dropdown--border"
                                            >
                                                <span
                                                    class="dropdown-item custom-navbar__dropdown-sub-title"
                                                    >Gangguan Mental & Perilaku
                                                    Anak & Remaja
                                                </span>
                                                <img
                                                    src="/images/ic-arrow-right.svg"
                                                    alt="Ic-arrow"
                                                    class="nav-item__arrow"
                                                />
                                            </NuxtLink>
                                        </div>
                                        <div class="col-12 col-xl-6">
                                            <NuxtLink
                                                to="/menyakiti-diri-sendiri-bunuh-diri"
                                                class="custom-navbar__list-dropdown "
                                            >
                                                <span
                                                    class="dropdown-item custom-navbar__dropdown-sub-title"
                                                    >Menyakiti Diri Sendiri /
                                                    Bunuh Diri
                                                </span>
                                                <img
                                                    src="/images/ic-arrow-right.svg"
                                                    alt="Ic-arrow"
                                                    class="nav-item__arrow"
                                                />
                                            </NuxtLink>
                                        </div>
                                        <div class="col-12 col-xl-6">
                                            <NuxtLink
                                                to="/layanan/perawatan-praktek-penting"
                                                class="custom-navbar__list-dropdown "
                                            >
                                                <span
                                                    class="dropdown-item custom-navbar__dropdown-sub-title"
                                                    >Keluhan Kesehatan Mental
                                                    Penting Lainnya
                                                </span>
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
                                    class="dropdown-menu custom-navbar__wrap-dropdown"
                                >
                                    <NuxtLink
                                        to="/layanan/bagan-induk"
                                        class="custom-navbar__list-dropdown custom-navbar__list-dropdown--border"
                                    >
                                        <span
                                            class="dropdown-item custom-navbar__dropdown-sub-title"
                                            >Bagan Induk
                                        </span>
                                        <img
                                            src="/images/ic-arrow-right.svg"
                                            alt="Ic-arrow"
                                            class="nav-item__arrow"
                                        />
                                    </NuxtLink>
                                    <NuxtLink
                                        to="/layanan/perawatan-praktek-penting"
                                        class="custom-navbar__list-dropdown custom-navbar__list-dropdown--border"
                                    >
                                        <span
                                            class="dropdown-item custom-navbar__dropdown-sub-title"
                                            >Perawatan & Praktek Penting
                                        </span>
                                        <img
                                            src="/images/ic-arrow-right.svg"
                                            alt="Ic-arrow"
                                            class="nav-item__arrow"
                                        />
                                    </NuxtLink>

                                    <NuxtLink
                                        to="/layanan/manajemen-kedokteran-keluarga"
                                        class="custom-navbar__list-dropdown"
                                    >
                                        <span
                                            class="dropdown-item custom-navbar__dropdown-sub-title"
                                            >Manajemen Kedokteran Keluarga
                                        </span>
                                        <img
                                            src="/images/ic-arrow-right.svg"
                                            alt="Ic-arrow"
                                            class="nav-item__arrow"
                                        />
                                    </NuxtLink>
                                </div>
                            </li>
                            <li class="nav-item">
                                <nuxt-link
                                    to="/list-rumah-sakit"
                                    class="custom-navbar__nav-link"
                                    >List Rumah Sakit</nuxt-link
                                >
                            </li>
                            <li class="nav-item">
                                <nuxt-link
                                    to="/list-psikiater"
                                    class="custom-navbar__nav-link"
                                    >List Psikiater</nuxt-link
                                >
                            </li>
                            <li class="nav-item">
                                <nuxt-link
                                    to="/tentang-kami"
                                    class="custom-navbar__nav-link"
                                    >Tentang Kami</nuxt-link
                                >
                            </li>
                            <li class="nav-item">
                                <nuxt-link
                                    to="/resources"
                                    class="custom-navbar__nav-link"
                                    >Resources</nuxt-link
                                >
                            </li>
                            <li class="nav-item">
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
        @include vwUnit(width, 280);
        @include vwUnit(padding, 30);
        left: 50%;
        transform: translate(-50%, 0px);
        @include vwUnit(margin-top, 35);

        @media screen and (max-width: 1199px) {
            width: 100%;
            @include vwUnit(margin-top, 0);
            @include vwUnit(padding-top, 0);
            @include vwUnit(padding-bottom, 0);
            @include vwUnit(padding-right, 25);
            @include vwUnit(padding-left, 25);
            border: none;
            box-shadow: none;
            left: auto;
            transform: unset;
        }
        @media screen and (max-width: 991px) {
            @include vwUnit(margin-top, 5);
        }

        @media screen and (max-width: 767px) {
            @include vwUnit(margin-top, 0);
            @include vwUnit(padding-top, 0);
            @include vwUnit(padding-bottom, 0);
            @include vwUnit(padding-left, 25);
            @include vwUnit(padding-right, 25);
        }

        &--big {
            @include vwUnit(width, 530);
        }
        @media screen and (max-width: 1199px) {
            &--big {
                width: 100%;
            }
        }
    }

    &__dropdown-sub-title {
        display: block;
        white-space: normal;
        @include typo(body-s);

        @media screen and (max-width: 1199px) {
            @include typo(nav-item);
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
        @include vwUnit(height, 48);
        text-decoration: none;

        &--border {
            border-bottom: 1px solid rgba(0, 0, 0, 0.07);
            @include vwUnit(padding-bottom, 14);
            @include vwUnit(margin-bottom, 14);
        }
        @media screen and (max-width:1399px) {
            height: 100%;
            padding: 0;
        }

        @media screen and (max-width: 1199px) {
            &--border {
                border-bottom: none;
                @include vwUnit(padding-bottom, 0);
                @include vwUnit(margin-bottom, 0);
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

    .dropdown-item {
        @include vwUnit(padding-top, 8);
        @include vwUnit(padding-bottom, 8);
        @include vwUnit(padding-left, 0);
        @include vwUnit(padding-right, 0);
        transition: all 0.3s ease;
        &:hover {
            background-color: transparent;
        }

        @media screen and (max-width: 1199px) {
            &:hover {
                @include vwUnit(padding-top, 8);
                @include vwUnit(padding-bottom, 8);
                @include vwUnit(padding-left, 8);
                @include vwUnit(padding-right, 8);
                color: #303178;
                background-color: #e9f0fc;
                border-radius: 5px;
            }
        }
        @media screen and (max-width: 767px) {
            &:hover {
                @include vwUnit(padding-top, 4);
                @include vwUnit(padding-bottom, 4);
                @include vwUnit(padding-left, 4);
                @include vwUnit(padding-right, 4);
            }
        }
    }
}
</style>
