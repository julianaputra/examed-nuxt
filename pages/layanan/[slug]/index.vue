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
                                            v-for="(menu, menuIndex) in menu"
                                            :key="menuIndex"
                                            class="overview__navbar-item"
                                            :class="[isActive(menu.slug)]"
                                        >
                                            <a
                                                :href="`#${menu.slug}`"
                                                class="overview__navbar-link"
                                            >
                                                {{ menu.title }}
                                            </a>
                                            <ol
                                                v-if="menu.sub"
                                                class="overview__navbar"
                                            >
                                                <li
                                                    v-for="(
                                                        item, itemIndex
                                                    ) in menu.sub"
                                                    :key="itemIndex"
                                                    class="overview__navbar-item"
                                                    :class="[
                                                        isActive(item.slug)
                                                    ]"
                                                >
                                                    <a
                                                        :href="`#${item.slug}`"
                                                        class="overview__navbar-link"
                                                    >
                                                        {{ item.title }}
                                                    </a>
                                                </li>
                                            </ol>
                                        </li>
                                    </ul>
                                </nav>
                            </template>
                        </UiCard>
                    </div>
                    <div class="col-lg-8 col-xxl-9">
                        <Transition mode="out-in">
                            <!-- Psikosis Tindaklanjut -->
                            <UiCard>
                                <template #title> Konten </template>
                                <template #content>
                                    <div
                                        class="inputed-text"
                                        v-html="konten"
                                    ></div>
                                </template>
                            </UiCard>
                        </Transition>
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

onMounted(() => {
    nextTick(async () => {
        const url = `/data/modules/${route.params.slug}/index.json`
        const { data } = await useFetch(url)
        const res = data.value as any

        title.value = res.data.title
        menu.value = res.data.menu as Menu[]

        konten.value = res.data.konten

        breadcrumbs.value = [
            {
                title: 'Home',
                to: '/'
            },
            {
                title: title.value,
                to: `/${route.params.slug}`
            }
        ]

        setTimeout(() => {
            window.addEventListener('scroll', (e) => {
                const contentWithID =
                    document.querySelectorAll('.inputed-text div')
                contentWithID.forEach((e) => {
                    if (window.scrollY >= e.offsetTop - 50) {
                        activeSection.value = e.attributes.id.value
                    }
                })
            })
        }, 100)
    })
})

const title: Ref<string> = ref('')
const menu: Ref<Menu[]> = ref([])
const konten = ref()
const breadcrumbs: Ref<Breadcrumb[]> = ref([])
</script>

<style lang="scss" scoped>
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

        & ol.overview__navbar {
            list-style: lower-roman;
        }
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
}
</style>
