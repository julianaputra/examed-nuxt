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
                                    <ul class="overview__navbar ">
                                        <li
                                            class="overview__navbar-item"
                                            :class="[isActive('deskripsi')]"
                                        >
                                            <a
                                                :href="`#deskripsi`"
                                                class="overview__navbar-link"
                                            >
                                                Deskripsi
                                            </a>
                                        </li>
                                        <li
                                            class="overview__navbar-item"
                                            :class="[isActive('prinsipUmum')]"
                                        >
                                            <a
                                                :href="`#prinsipUmum`"
                                                class="overview__navbar-link"
                                            >
                                                Prinsip Umum
                                            </a>
                                            <ol class="overview__sub-list">
                                                <li
                                                    class="overview__navbar-item"
                                                    :class="[
                                                        isActive(
                                                            'gunakanKeterampilan'
                                                        )
                                                    ]"
                                                >
                                                    <a
                                                        :href="`#gunakanKeterampilan`"
                                                        class="overview__sub-link"
                                                    >
                                                        Gunakan Keterampilan
                                                        Komunikasi yang Efektif
                                                    </a>
                                                </li>
                                                <li
                                                    class="overview__navbar-item"
                                                    :class="[
                                                        isActive(
                                                            'meningkatkanRasaHormat'
                                                        )
                                                    ]"
                                                >
                                                    <a
                                                        :href="`#meningkatkanRasaHormat`"
                                                        class="overview__sub-link"
                                                    >
                                                        Meningkatkan Rasa Hormat
                                                        dan Martabat
                                                    </a>
                                                </li>
                                            </ol>
                                        </li>
                                        <li
                                            class="overview__navbar-item"
                                            :class="[
                                                isActive('pentingnyaPraktik')
                                            ]"
                                        >
                                            <a
                                                :href="`#pentingnyaPraktik`"
                                                class="overview__navbar-link"
                                            >
                                                Pentingnya Praktik Klinis
                                                Kesehatan Mental
                                            </a>
                                            <ol class="overview__sub-list">
                                                <li
                                                    class="overview__navbar-item"
                                                    :class="[
                                                        isActive(
                                                            'menilaiKesehatan'
                                                        )
                                                    ]"
                                                >
                                                    <a
                                                        :href="`#menilaiKesehatan`"
                                                        class="overview__sub-link"
                                                    >
                                                        Menilai Kesehatan Fisik
                                                    </a>
                                                </li>
                                                <li
                                                    class="overview__navbar-item"
                                                    :class="[
                                                        isActive(
                                                            'melakukanPenilaian'
                                                        )
                                                    ]"
                                                >
                                                    <a
                                                        :href="`#melakukanPenilaian`"
                                                        class="overview__sub-link"
                                                    >
                                                        Melakukan Penilaian MNS
                                                    </a>
                                                </li>
                                                <li
                                                    class="overview__navbar-item"
                                                    :class="[
                                                        isActive(
                                                            'kelolaKondisi'
                                                        )
                                                    ]"
                                                >
                                                    <a
                                                        :href="`#kelolaKondisi`"
                                                        class="overview__sub-link"
                                                    >
                                                        Kelola Kondisi MNS
                                                    </a>
                                                </li>
                                            </ol>
                                        </li>
                                    </ul>
                                </nav>
                            </template>
                        </UiCard>
                    </div>
                    <div class="col-lg-8 col-xxl-9 mt-4 mt-lg-0">
                        <LayananPerawatanPraktekPenting></LayananPerawatanPraktekPenting>
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

const activeSection = ref('deskripsi')

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

const title: Ref<string> = ref('Perawatan & Praktek Penting')
const menu: Ref<Menu[]> = ref([])
const konten = ref()
const breadcrumbs: Ref<Breadcrumb[]> = ref([
    {
        title: 'Home',
        to: '/'
    },
    {
        title: 'Perawatan & Praktek Penting',
        to: `/${route.params.slug}`
    }
])
</script>

<style lang="scss" scoped>
$danger-color: #b5222a;
$primary-color: #303178;
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

    &__menu .overview__navbar {
        margin: 0;
        list-style: none;
        padding-left: 0;
        & ol.overview__navbar {
            list-style: lower-roman;
        }
    }
    &__sub-list{
        @include vwUnit(padding-left, 45, 40);
        list-style-type: lower-roman;
    }

    &__navbar-item {
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

    &__sub-link{
        text-decoration: none;
        $pad-y: 5;
        $pad-x: 0;
        display: block;
        @include vwUnit(margin-bottom, 10);
        @include vwUnit(padding-top, $pad-y);
        // @include vwUnit(padding-right, $pad-x);
        @include vwUnit(padding-bottom, $pad-y);
        // @include vwUnit(padding-left, $pad-x);
        color: rgba(18, 32, 50, 1);
        &:hover{
            text-decoration: underline;
        }
    }
}

.prinsip-umum {
    &__column {
        height: 100%;
        padding: 24px;
        border-radius: 8px;
    }
    &--lakukan {
        border: 1px solid #29cc6a;
    }

    &--jangan-lakukan {
        border: 1px solid #b5222a;
    }
    &__title-lakukan {
        color: #29cc6a;
    }
    &__title-jangan-lakukan {
        color: #b5222a;
    }
}
.pentingnya-praktik {
    &__mengambil-sejarah {
        border-radius: 8px;
        border: 1px solid #040405;
        padding: 24px;
    }
    &__arrow {
        display: flex;
        justify-content: center;
        padding: 0px;
    }
    &__curigai-kondisi {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #040405;
        padding: 24px;
        border-radius: 8px;
    }
    &__title-curigai {
        margin: 0px;
    }
    &__title {
        color: $primary-color;
    }

    &__tips {
        color: $danger-color;
    }
    &__wrap-border {
        border-radius: 8px;
        border: 1px solid #040405;
        padding: 24px;
    }
    .langkah-manajemen {
        &__list-title {
            font-weight: 700;
        }
    }
}
</style>
