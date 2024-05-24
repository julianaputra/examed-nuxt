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
                                            :class="[
                                                isActive('aspekDiagnosis')
                                            ]"
                                        >
                                            <a
                                                :href="`#aspekDiagnosis`"
                                                class="overview__navbar-link"
                                            >
                                                Aspek Diagnosis Holistik Bagi
                                                Pasien Dengan Gangguan Mental
                                            </a>
                                            <ol class="overview__sub-list">
                                                <li
                                                    class="overview__navbar-item"
                                                    :class="[
                                                        isActive(
                                                            'aspekPersonal'
                                                        )
                                                    ]"
                                                >
                                                    <a
                                                        :href="`#aspekPersonal`"
                                                        class="overview__sub-link overview__navbar-link"
                                                    >
                                                        Aspek Personal
                                                    </a>
                                                </li>
                                                <li
                                                    class="overview__navbar-item"
                                                    :class="[
                                                        isActive('aspekKlinis')
                                                    ]"
                                                >
                                                    <a
                                                        :href="`#aspekKlinis`"
                                                        class="overview__sub-link overview__navbar-link"
                                                    >
                                                        Aspek Klinis
                                                    </a>
                                                </li>
                                                <li
                                                    class="overview__navbar-item"
                                                    :class="[
                                                        isActive(
                                                            'penilaianInternal'
                                                        )
                                                    ]"
                                                >
                                                    <a
                                                        :href="`#penilaianInternal`"
                                                        class="overview__sub-link overview__navbar-link"
                                                    >
                                                        Penilaian Risiko
                                                        Internal
                                                    </a>
                                                </li>
                                                <li
                                                    class="overview__navbar-item"
                                                    :class="[
                                                        isActive(
                                                            'risikoEksternal'
                                                        )
                                                    ]"
                                                >
                                                    <a
                                                        :href="`#risikoEksternal`"
                                                        class="overview__sub-link overview__navbar-link"
                                                    >
                                                        Faktor Risiko Eksternal
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
                        <LayananManajemenKedokteranKeluarga></LayananManajemenKedokteranKeluarga>
                    </div>
                </div>
            </div>
        </section>
        <HomeServices />
    </main>
</template>

<script setup lang="ts">
useHead({
    title: `Manajemen Kedokteran Keluarga`,
    meta: [
        {
            name: 'description',
            content: 'Manajemen Kedokteran Keluarga | Examed'
        }
    ]
})
import type {
    Menu,
    Breadcrumb,
    Deskripsi,
    Question,
    Manajemen
} from '~/types/index'

const router = useRouter()
const route = useRoute()

const activeSection = ref('aspekDiagnosis')

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

const title: Ref<string> = ref('Manajemen Kedokteran Keluarga')
const menu: Ref<Menu[]> = ref([])
const konten = ref()
const breadcrumbs: Ref<Breadcrumb[]> = ref([
    {
        title: 'Home',
        to: '/'
    },
    {
        title: 'Manajemen Kedokteran Keluarga',
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
    &__menu .overview__navbar {
        margin: 0;
        list-style: none;
        padding-left: 0;
    }

    &__sub-list {
        @include vwUnit(padding-left, 45, 40);
        list-style-type: decimal;
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

    &__sub-link {
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
        &:hover {
            text-decoration: underline;
        }
    }

    // .family-screem {
    //     padding: 100px;
    //     &__table {
    //         border: 1px solid black;
    //         width: 100%;

    //         %cellSpacing {
    //             $space-y: 15;
    //             $space-x: 15;
    //             @include vwUnit(padding-top, $space-y);
    //             @include vwUnit(padding-right, $space-x);
    //             @include vwUnit(padding-bottom, $space-y);
    //             @include vwUnit(padding-left, $space-x);
    //         }

    //         th {
    //             border: 1px solid black;
    //             @extend %cellSpacing;
    //             @include vwUnit(padding-top, 30);
    //             border-bottom: 1px solid #000000;
    //         }
    //         td {
    //             border: 1px solid black;
    //             $space-y: 15;
    //             $space-x: 15;
    //             @include vwUnit(padding-top, $space-y);
    //             @include vwUnit(padding-right, $space-x);
    //             @include vwUnit(padding-bottom, $space-y);
    //             @include vwDesktop(padding-left, $space-x);
    //         }
    //     }
    // }
}
</style>
