<template>
    <header>
        <nav class="navbar navbar-expand-lg custom-navbar">
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
                                    />
                                </nuxt-link>

                                <ul
                                    class="dropdown-menu custom-navbar__wrap-dropdown-modul"
                                >
                                    <div class="row gy-1">
                                        <div class="col-12 col-lg-6">
                                            <div>
                                                <li
                                                    class="custom-navbar__list-dropdown w-100"
                                                >
                                                    <NuxtLink
                                                        to="/depresi"
                                                        class="dropdown-item"
                                                        ><span
                                                            class="custom-navbar__dropdown-sub-title"
                                                            >Depresi</span
                                                        >
                                                    </NuxtLink>
                                                    <img
                                                        src="/images/ic-arrow-right.svg"
                                                        alt=""
                                                        class="nav-item__arrow"
                                                    />
                                                </li>
                                                <li>
                                                    <hr
                                                        class="dropdown-divider custom-navbar__line-dropdown"
                                                    />
                                                </li>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-6">
                                            <div>
                                                <li
                                                    class="custom-navbar__list-dropdown w-100"
                                                >
                                                    <NuxtLink
                                                        to="/psikosis"
                                                        class="dropdown-item"
                                                        ><span
                                                            class="custom-navbar__dropdown-sub-title"
                                                            >Psikosis</span
                                                        >
                                                    </NuxtLink>
                                                    <img
                                                        src="/images/ic-arrow-right.svg"
                                                        alt=""
                                                        class="nav-item__arrow"
                                                    />
                                                </li>
                                                <li>
                                                    <hr
                                                        class="dropdown-divider custom-navbar__line-dropdown"
                                                    />
                                                </li>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-6">
                                            <div>
                                                <li
                                                    class="custom-navbar__list-dropdown w-100"
                                                >
                                                    <NuxtLink
                                                        to="/layanan/perawatan-praktek-penting"
                                                        class="dropdown-item"
                                                        ><span
                                                            class="custom-navbar__dropdown-sub-title"
                                                            >Demensia
                                                        </span>
                                                    </NuxtLink>
                                                    <img
                                                        src="/images/ic-arrow-right.svg"
                                                        alt=""
                                                        class="nav-item__arrow"
                                                    />
                                                </li>
                                                <li>
                                                    <hr
                                                        class="dropdown-divider custom-navbar__line-dropdown"
                                                    />
                                                </li>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-6">
                                            <div>
                                                <li
                                                    class="custom-navbar__list-dropdown w-100"
                                                >
                                                    <NuxtLink
                                                        to="/layanan/perawatan-praktek-penting"
                                                        class="dropdown-item"
                                                        ><span
                                                            class="custom-navbar__dropdown-sub-title"
                                                            >Gangguan Mental &
                                                            Perilaku Anak &
                                                            Remaja</span
                                                        >
                                                    </NuxtLink>
                                                    <img
                                                        src="/images/ic-arrow-right.svg"
                                                        alt=""
                                                        class="nav-item__arrow"
                                                    />
                                                </li>
                                                <li>
                                                    <hr
                                                        class="dropdown-divider custom-navbar__line-dropdown"
                                                    />
                                                </li>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-6">
                                            <div>
                                                <li
                                                    class="custom-navbar__list-dropdown w-100"
                                                >
                                                    <NuxtLink
                                                        to="/menyakiti-diri-sendiri-bunuh-diri"
                                                        class="dropdown-item"
                                                        ><span
                                                            class="custom-navbar__dropdown-sub-title"
                                                            >Menyakiti Diri
                                                            Sendiri / Bunuh
                                                            Diri</span
                                                        >
                                                    </NuxtLink>
                                                    <img
                                                        src="/images/ic-arrow-right.svg"
                                                        alt=""
                                                        class="nav-item__arrow"
                                                    />
                                                </li>
                                                <li class="d-lg-none">
                                                    <hr
                                                        class="dropdown-divider custom-navbar__line-dropdown"
                                                    />
                                                </li>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-6">
                                            <div>
                                                <li
                                                    class="custom-navbar__list-dropdown w-100"
                                                >
                                                    <NuxtLink
                                                        to="/layanan/perawatan-praktek-penting"
                                                        class="dropdown-item"
                                                        ><span
                                                            class="custom-navbar__dropdown-sub-title"
                                                            >Keluhan Kesehatan
                                                            Mental Penting
                                                            Lainnya</span
                                                        >
                                                    </NuxtLink>
                                                    <img
                                                        src="/images/ic-arrow-right.svg"
                                                        alt=""
                                                        class="nav-item__arrow"
                                                    />
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
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
                                    />
                                </nuxt-link>

                                <ul
                                    class="dropdown-menu custom-navbar__wrap-dropdown"
                                >
                                    <li
                                        class="custom-navbar__list-dropdown w-100"
                                    >
                                        <NuxtLink
                                            to="/layanan/bagan-induk"
                                            class="dropdown-item"
                                            ><span
                                                class="custom-navbar__dropdown-sub-title"
                                                >Bagan Induk</span
                                            >
                                        </NuxtLink>
                                        <img
                                            src="/images/ic-arrow-right.svg"
                                            alt=""
                                            class="nav-item__arrow"
                                        />
                                    </li>
                                    <li>
                                        <hr
                                            class="dropdown-divider custom-navbar__line-dropdown"
                                        />
                                    </li>
                                    <li
                                        class="custom-navbar__list-dropdown w-100"
                                    >
                                        <NuxtLink
                                            to="/layanan/perawatan-praktek-penting"
                                            class="dropdown-item"
                                            ><span
                                                class="custom-navbar__dropdown-sub-title"
                                                >Perawatan & Praktek
                                                Penting</span
                                            >
                                        </NuxtLink>
                                        <img
                                            src="/images/ic-arrow-right.svg"
                                            alt=""
                                            class="nav-item__arrow"
                                        />
                                    </li>
                                    <li>
                                        <hr
                                            class="dropdown-divider custom-navbar__line-dropdown"
                                        />
                                    </li>
                                    <li
                                        class="custom-navbar__list-dropdown w-100"
                                    >
                                        <NuxtLink
                                            to="/layanan/manajemen-kedokteran-keluarga"
                                            class="dropdown-item"
                                            ><span
                                                class="custom-navbar__dropdown-sub-title"
                                                >Manajemen Kedokteran
                                                Keluarga</span
                                            ></NuxtLink
                                        >
                                        <img
                                            src="/images/ic-arrow-right.svg"
                                            alt=""
                                            class="nav-item__arrow"
                                        />
                                    </li>
                                </ul>
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
    padding: 14px 0;

    &__logo-container {
        @include vwMobile(max-width, 175);
        @media screen and (max-width: 1199px) {
            max-width: 150px;
        }
    }

    &__navbar-nav {
        margin-left: auto;
        gap: 8px;
        @media screen and (max-width: 1199px) {
            gap: 4px;
        }
    }

    &__nav-link {
        display: block;
        padding: 8px 12px;
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
        transition-duration: 0.5s;
    }
    &__nav-link:hover {
        .custom-navbar__arrow-dropdown {
            rotate: -180deg;
            transition: all;
            transition-duration: 0.5s;
        }
    }
    &__wrap-dropdown {
        width: 280px;
        padding: 30px;
        left: 50%;
        transform: translate(-50%, 0px);

        @media screen and (max-width: 991px) {
            width: 100%;
            padding: 0px 25px;
            border: none;
            box-shadow: none;
            left: auto;
            transform: unset;
        }
        @media screen and (max-width: 767px) {
            padding: 15px 25px;
        }
    }
    &__dropdown-sub-title {
        // background-color: yellow;
        display: block;
        white-space: normal;
        @include typo(body-s);
    }

    &__wrap-dropdown-modul {
        width: 530px;
        left: 50%;
        transform: translate(-50%, 0px);
        padding: 30px;

        @media screen and (max-width: 991px) {
            width: 100%;
            padding: 0px 25px;
            border: none;
            box-shadow: none;
            left: auto;
            transform: unset;
        }
        @media screen and (max-width: 767px) {
            padding: 15px 25px;
        }
    }
    &__line-dropdown {
        @media screen and (max-width: 991px) {
            opacity: 0;
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
        height: 40px;
        @media screen and (max-width: 767px) {
            height: 15px;
        }
        .nav-item__arrow {
            opacity: 0;
            transition: all 0.5s ease;
            transform: translateX(-10px);
            @media screen and (max-width: 991px) {
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
        padding: 8px 0px;
        &:hover {
            background-color: transparent;
        }
        @media screen and (max-width: 991px) {
            &:hover {
                padding: 8px 8px;
                color: #303178;
                background-color: #e9f0fc;
                border-radius: 5px;
            }
        }
    }
    hr {
        margin: 14px 0px;
        @media screen and (max-width: 991px) {
            margin: 0px 0px;
        }
        @media screen and (max-width: 767px) {
            margin: 10px 0px;
        }
    }
}
// .dropdown-item:hover {
//     background-color: transparent;
//     @media screen and (max-width: 991px) {
//         &:hover {
//             color: #303178;
//             background-color: #e9f0fc;
//             border-radius: 5px;
//         }
//     }
// }
</style>
