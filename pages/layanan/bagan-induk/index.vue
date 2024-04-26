<template>
    <main>
        <section class="section overview">
            <div class="container">
                <UiBreadcrumbs :breadcrumbs="breadcrumbs"></UiBreadcrumbs>
                <h1 class="title section__title">{{ title }}</h1>
                <div class="row">
                    <div class="col-lg-4 col-xxl-3">
                        <UiCard :border="false" class="overview__card-content">
                            <template #title>List Konten</template>
                            <template #content>
                                <nav class="overview__menu">
                                    <ul class="overview__navbar">
                                        <li
                                            class="overview__navbar-item"
                                            :class="[isActive('sekilasMns')]"
                                        >
                                            <a
                                                :href="`#sekilasMns`"
                                                class="overview__navbar-link"
                                            >
                                                Sekilas Tentang Ketentuan MNS
                                                Prioritas
                                            </a>
                                            <ol class="overview__navbar">
                                                <li
                                                    class="overview__navbar-item"
                                                    :class="[
                                                        isActive('depresi')
                                                    ]"
                                                >
                                                    <a
                                                        :href="`#depresi`"
                                                        class="overview__navbar-link"
                                                    >
                                                        Depresi (DEP)
                                                    </a>
                                                </li>
                                                <li
                                                    class="overview__navbar-item"
                                                    :class="[
                                                        isActive('psikosis')
                                                    ]"
                                                >
                                                    <a
                                                        :href="`#psikosis`"
                                                        class="overview__navbar-link"
                                                    >
                                                        Psikosis (PSY)
                                                    </a>
                                                </li>
                                                <li
                                                    class="overview__navbar-item"
                                                    :class="[isActive('cmh')]"
                                                >
                                                    <a
                                                        :href="`#cmh`"
                                                        class="overview__navbar-link"
                                                    >
                                                        Gangguan Mental &
                                                        Perilaku Anak & Remaja
                                                        (CMH)
                                                    </a>
                                                </li>
                                                <li
                                                    class="overview__navbar-item"
                                                    :class="[
                                                        isActive('demensia')
                                                    ]"
                                                >
                                                    <a
                                                        :href="`#demensia`"
                                                        class="overview__navbar-link"
                                                    >
                                                        Demensia (DEM)
                                                    </a>
                                                </li>
                                                <li
                                                    class="overview__navbar-item"
                                                    :class="[isActive('sui')]"
                                                >
                                                    <a
                                                        :href="`#sui`"
                                                        class="overview__navbar-link"
                                                    >
                                                        Menyakiti Diri Sendiri /
                                                        Bunuh Diri (SUI)
                                                    </a>
                                                </li>
                                            </ol>
                                        </li>
                                        <li
                                            class="overview__navbar-item"
                                            :class="[isActive('presentasiMns')]"
                                        >
                                            <a
                                                :href="`#presentasiMns`"
                                                class="overview__navbar-link"
                                            >
                                                Presentasi DARURAT Kondisi MNS
                                                Prioritas
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </template>
                        </UiCard>
                    </div>
                    <div class="col-lg-8 col-xxl-9 mt-4 mt-lg-0">
                        <LayananBaganInduk></LayananBaganInduk>
                    </div>
                </div>
            </div>
        </section>
        <HomeServices />
    </main>
</template>

<script setup lang="ts">
import type {
    Menu,
    Breadcrumb,
    Deskripsi,
    Question,
    Manajemen
} from '~/types/index'

const router = useRouter()
const route = useRoute()

const activeSection = ref('sekilasMns')

function isActive(target: String) {
    return activeSection.value === target ? 'active' : ''
}

// onMounted(() => {
//     nextTick(async () => {
//         const url = `/data/modules/${route.params.slug}/index.json`
//         const { data } = await useFetch(url)
//         const res = data.value as any

//         title.value = res.data.title
//         menu.value = res.data.menu as Menu[]

//         konten.value = res.data.konten

//         breadcrumbs.value = [
//             {
//                 title: 'Home',
//                 to: '/'
//             },
//             {
//                 title: title.value,
//                 to: `/${route.params.slug}`
//             }
//         ]

setTimeout(() => {
    window.addEventListener('scroll', (e) => {
        const contentWithID = document.querySelectorAll('.inputed-text div')
        contentWithID.forEach((e) => {
            if (window.scrollY >= e.offsetTop - 50) {
                if (!e.attributes.id) {
                    return
                }
                activeSection.value = e.attributes.id.value
            }
        })
    })
}, 100)
//     })
// })

const title: Ref<string> = ref('Bagan Induk')
const menu: Ref<Menu[]> = ref([])
const konten = ref()
const breadcrumbs: Ref<Breadcrumb[]> = ref([
    {
        title: 'Home',
        to: '/'
    },
    {
        title: 'Bagan Induk',
        to: `/${route.params.slug}`
    }
])
</script>

<style lang="scss" scoped>
.title {
    font-size: 54px;
    @media screen and (max-width: 991px) {
        font-size: 48px;
    }
    @media screen and (max-width: 576px) {
        font-size: 40px;
    }
}
.overview {
    &__card-content {
        position: sticky;
        top: 50px;
    }

    &__menu {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        @include vwUnit(margin-top, 15);
        gap: 10px;
    }

    &__navbar {
        margin: 0;
        list-style: none;

        @media screen and (max-width: 480px) {
            padding-left: 10px;
        }

        & ol.overview__navbar {
            list-style: lower-roman;
        }
    }

    &__navbar-item {
        list-style: none;
        &.active {
            > .overview__navbar-link {
                background-color: colorMod(rgba(18, 32, 50, 1), +90%);
            }
        }
    }

    &__navbar-link {
        $pad-y: 5;
        $pad-x: 15;
        display: block;
        @include vwUnit(margin-bottom, 10);
        @include vwUnit(padding-top, $pad-y);
        @include vwUnit(padding-right, $pad-x);
        @include vwUnit(padding-bottom, $pad-y);
        @include vwUnit(padding-left, $pad-x);
        color: rgba(18, 32, 50, 1);
        text-decoration: none;
        background-color: transparent;
        border-radius: 14px;

        &:hover {
            background-color: colorMod(rgba(18, 32, 50, 1), +90%);
        }
    }
}
.table {
    %cellSpacing {
        $space-y: 15;
        $space-x: 15;
        @include vwUnit(padding-top, $space-y);
        @include vwUnit(padding-right, $space-x);
        @include vwUnit(padding-bottom, $space-y);
        @include vwUnit(padding-left, $space-x);
    }

    width: 100%;
    th {
        @extend %cellSpacing;
        @include vwUnit(padding-top, 10);
        @include vwUnit(padding-bottom, 10);
        border-bottom: 2px solid #d50303;
    }
    td {
        $space-y: 15;
        $space-x: 15;
        @include vwUnit(padding-top, $space-y);
        @include vwUnit(padding-right, $space-x);
        @include vwUnit(padding-bottom, $space-y);
        @include vwDesktop(padding-left, $space-x);
    }

    &__underline {
        text-decoration: underline;
    }
}
.list-table {
    &__darurat {
        width: 40%;
    }
    &__kondisi {
        width: 40%;
    }
    &__modul {
        width: 20%;
    }
}
.border-bottom {
    border: #0000;
}
</style>
