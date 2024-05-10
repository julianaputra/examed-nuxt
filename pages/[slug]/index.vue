<template>
    <main>
        <section class="section overview">
            <div class="container">
                <UiBreadcrumbs :breadcrumbs="breadcrumbs"></UiBreadcrumbs>
                <h1 class="title section__title">{{ title }}</h1>
                <div class="row">
                    <div class="col-lg-4 col-xxl-3">
                        <UiCard :border="false">
                            <template #title>Pilihan Menu</template>
                            <template #content>
                                <div class="overview__menu">
                                    <UiMenuButton
                                        v-for="menuItem in menu"
                                        :key="`menu-${menuItem.slug}`"
                                        :icon="menuItem.icon"
                                        :class="{
                                            active: activeMenu === menuItem.slug
                                        }"
                                        @click="setActiveMenu(menuItem.slug)"
                                        >{{ menuItem.title }}</UiMenuButton
                                    >
                                </div>
                            </template>
                        </UiCard>
                    </div>
                    <div class="col-lg-8 col-xxl-9">
                        <Transition mode="out-in">
                            <!-- Psikosis Tindaklanjut -->
                            <UiCard
                                v-if="
                                    route.params.slug === 'psikosis' &&
                                    activeContent?.slug === 'tindaklanjut'
                                "
                                :key="activeContent?.id"
                                title-size="small"
                            >
                                <template #title>
                                    <Transition mode="out-in">
                                        <div
                                            v-if="activeTindakLanjut"
                                            role="button"
                                            class="d-flex align-items-center"
                                            @click="setActiveTindakLanjut(null)"
                                        >
                                            <div class="me-2">
                                                <Icon
                                                    name="basil:arrow-left-solid"
                                                    width="32"
                                                    height="32"
                                                ></Icon>
                                            </div>
                                            {{ activeTindakLanjut.title }}
                                        </div>
                                        <div v-else>Tindak Lanjut</div>
                                    </Transition>
                                </template>
                                <template #content>
                                    <Transition mode="out-in">
                                        <div v-if="activeTindakLanjut">
                                            <UiSelectionButton
                                                v-for="item in tindaklanjut"
                                                :key="`menu-link-${item.id}`"
                                                :to="
                                                    activeTindakLanjut === 1
                                                        ? `/${route.params.slug}/tindaklanjut?question=${item.id}`
                                                        : `/${route.params.slug}/tindaklanjut?type=2&question=${item.id}`
                                                "
                                                >{{
                                                    item.title
                                                }}</UiSelectionButton
                                            >
                                        </div>
                                        <!-- Header -->
                                        <div v-else>
                                            <UiSelectionButton
                                                v-for="item in tindaklanjutPsikosis"
                                                :key="`menu-link-${item.id}`"
                                                @click="
                                                    setActiveTindakLanjut(item)
                                                "
                                            >
                                                {{ item.title }}
                                            </UiSelectionButton>
                                        </div>
                                    </Transition>
                                </template>
                            </UiCard>
                            <UiCard class="section-content"
                                v-else
                                :key="activeContent?.id"
                                title-size="small"
                            >
                                <template #title>{{
                                    activeContent?.title
                                }}</template>
                                <template #content>
                                    <div 
                                        v-if="
                                            activeContent?.slug === 'deskripsi'
                                        "
                                        v-html="deskripsi?.content"
                                    ></div>
                                    <div
                                        v-else-if="
                                            activeContent?.slug === 'penilaian'
                                        "
                                    >
                                        <UiSelectionButton class="list-selection"
                                            v-for="item in penilaian"
                                            :key="`menu-link-${item.id}`"
                                            :to="`/${route.params.slug}/penilaian?question=${item.id}`"
                                            >{{ item.title }}</UiSelectionButton
                                        >
                                    </div>
                                    <div
                                        v-else-if="
                                            activeContent?.slug === 'manajemen'
                                        "
                                    >
                                        <UiSelectionButton
                                            v-for="item in manajemen"
                                            :key="`menu-link-${item.id}`"
                                            :to="`/${route.params.slug}/manajemen?item=${item.id}`"
                                            >{{ item.title }}</UiSelectionButton
                                        >
                                    </div>
                                    <div
                                        v-else-if="
                                            activeContent?.slug ===
                                            'tindaklanjut'
                                        "
                                    >
                                        <UiSelectionButton
                                            v-for="item in tindaklanjut"
                                            :key="`menu-link-${item.id}`"
                                            :to="`/${route.params.slug}/tindaklanjut?question=${item.id}`"
                                            >{{ item.title }}</UiSelectionButton
                                        >
                                    </div>
                                </template>
                            </UiCard>
                        </Transition>
                    </div>
                </div>
            </div>
        </section>
        <HomeModule :active-slug="route.params.slug" module-title="List Modul Lainnya" class="pt-0" />
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

onMounted(() => {
    nextTick(async () => {
        const url = `/data/modules/${route.params.slug}/index.json`
        const { data } = await useFetch(url)
        const res = data.value as any

        title.value = res.data.title
        menu.value = res.data.menu as Menu[]

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

        if (route.query.menu) {
            activeMenu.value = String(route.query.menu)
        } else {
            activeMenu.value = menu.value[0].slug
        }

        getDeskripsi()
        getPenilaian()
        getManajemen()

        if (route.params.slug !== 'psikosis') {
            getTindaklanjut()
        }
    })
})

const title: Ref<string> = ref('')
const menu: Ref<Menu[]> = ref([])
const breadcrumbs: Ref<Breadcrumb[]> = ref([])

const activeMenu: Ref<string> = ref('')

const activeContent = computed(() => {
    const result = menu.value.find((m) => {
        return m.slug === activeMenu.value
    })

    return result
})

const setActiveMenu = (slug: string) => {
    activeMenu.value = slug
    router.push(`/${route.params.slug}?menu=${slug}`)

    if (slug === 'tindaklanjut' && route.params.slug === 'psikosis') {
        setActiveTindakLanjut(null)
    }
}

const tindaklanjutPsikosis = ref([
    {
        id: 1,
        title: 'Psikosis'
    },
    {
        id: 2,
        title: 'Episode manik pada gangguan bipolar'
    }
])

const activeTindakLanjut = ref(null)

const deskripsi: Ref<Deskripsi | null> = ref(null)
const penilaian: Ref<Question[]> = ref([])
const manajemen: Ref<Manajemen[]> = ref([])
const tindaklanjut: Ref<Question[]> = ref([])

const getDeskripsi = () => {
    nextTick(async () => {
        const url = `/data/modules/${route.params.slug}/deskripsi.json`
        const { data } = await useFetch(url)

        const res = data.value as any

        deskripsi.value = res.data
    })
}
const getPenilaian = () => {
    nextTick(async () => {
        const url = `/data/modules/${route.params.slug}/penilaian.json`
        const { data } = await useFetch(url)

        const res = data.value as any

        const questions = res.data

        const steps = questions.filter((q: Question) => q.isStep)

        penilaian.value = steps as Question[]
    })
}
const getManajemen = () => {
    nextTick(async () => {
        const url = `/data/modules/${route.params.slug}/manajemen.json`
        const { data } = await useFetch(url)

        const res = data.value as any

        const items = res.data.filter((m: Manajemen) => m.parentId === null)

        manajemen.value = items as Manajemen[]
    })
}
const getTindaklanjut = () => {
    nextTick(async () => {
        const url = `/data/modules/${route.params.slug}/tindaklanjut.json`
        const { data } = await useFetch(url)

        const res = data.value as any

        const questions = res.data

        const steps = questions.filter((q: Question) => q.isStep)

        tindaklanjut.value = steps as Question[]
    })
}
const getTindaklanjut2 = () => {
    nextTick(async () => {
        const url = `/data/modules/${route.params.slug}/tindaklanjut-2.json`
        const { data } = await useFetch(url)

        const res = data.value as any

        const questions = res.data

        const steps = questions.filter((q: Question) => q.isStep)

        tindaklanjut.value = steps as Question[]
    })
}

const setActiveTindakLanjut = (val: any) => {
    if (!val) {
        tindaklanjut.value = []
    } else if (Number(val.id) === 1) {
        getTindaklanjut()
    } else if (Number(val.id) === 2) {
        getTindaklanjut2()
    }

    activeTindakLanjut.value = val
}
</script>

<style lang="scss" scoped>
.overview {
    &__menu {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        gap: 10px;
    }
}
.section-content{
    @media screen and (max-width: 991px) {
        @include vwUnit(margin-top, 30)
    }
}
.list-selection:last-child{
    opacity: 50%;
}
</style>
