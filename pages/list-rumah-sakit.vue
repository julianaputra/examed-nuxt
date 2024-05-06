<template>
    <main class="listRUmah">
        <div class="container">
            <UiBreadcrumbs :breadcrumbs="breadcrumbs"></UiBreadcrumbs>
            <div class="listRUmah__info">
                <h1 class="listRUmah__title">{{ pageData.title }}</h1>
                <LayoutsFilterbar
                    v-model:daerah-value="daerahFilter"
                    :daerah-data="daerahData"
                    title-sort="Pilih Daerah"
                    @search="searchRumahSakit"
                />
                <LayoutsListTable
                    v-model:items="pageData.itemList"
                    v-model:currentLocation="pageData.currentPage"
                    :header="pageData.tableHeader"
                    :rs-list="rsList"
                    :display-records="displayRecords"
                />

                <LayoutsPaginationBarVue2
                    v-model="currentPage"
                    :biggest-index-number="pageData.biggestIndexNumber"
                    :total-rows="pageData.totalItem"
                    :per-page="perPage"
                    :new-total-page="totalPage"
                    :display-records="displayRecords.length"
                    :result-list="resultList"
                />
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
// import { nextTick } from 'process' // before
import { nextTick } from 'vue' // after
import type { Breadcrumb } from '../types/index'

definePageMeta({
    title: 'List Rumah Sakit',
    description: 'This is aboutpage description'
})

const pageData = ref({
    title: 'List Rumah Sakit',
    tableHeader: [
        'No.',
        'Kode RS',
        'Nama Rumah Sakit',
        'Jenis RS',
        'Kelas RS',
        'Daerah'
    ],
    tableData: [],
    totalPage: 1,
    totalItem: 1,
    // itemPerPage: 5,
    // currentPage: 1,
    itemList: [],
    biggestIndexNumber: 1
})

const daerahData = ref([])
const daerahFilter = ref('all')
// new variable
const rsList: any = ref([])
const resultList: any = ref(null)
const currentPage: any = ref(1)
const perPage: any = ref(5)
const searchQuery: Ref<string> = ref('')

watch(daerahFilter, () => {
    currentPage.value = 1
})
watch(searchQuery, () => {
    currentPage.value = 1
})

const displayRecords = computed(() => {
    if (!rsList.value) {
        return []
    }
    let result: any = rsList.value
    if (daerahFilter.value !== 'all') {
        result = result.filter((item: any) =>
            item.daerah.toLowerCase().includes(daerahFilter.value.toLowerCase())
        )
        resultList.value = result.length
    } else {
        result = rsList.value
    }

    if (searchQuery.value !== '') {
        result = result.filter((item: any) =>
            item.nama.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
        resultList.value = result.length
    }
    pageData.value.totalItem = result.length
    // pagination
    const startIndex = perPage.value * (currentPage.value - 1)
    const endIndex = startIndex + perPage.value
    result = result.slice(startIndex, endIndex)
    return result
})

const totalPage = computed(() => {
    const totalPage = Math.ceil(rsList.value.length / perPage.value)
    // if (currentPage.value > 1 && currentPage.value > totalPage) {
    return totalPage
    // }
})
const searchRumahSakit = (keyword: any) => {
    searchQuery.value = keyword
}

onMounted(() => {
    nextTick(async () => {
        const url = `/data/modules/list-rumah-sakit.json`
        const data = await useFetch(url)

        const res = data.data.value as any

        pageData.value.tableData = res.data
        rsList.value = res.data
        resultList.value = pageData.value.tableData.length

        pageData.value.totalItem = pageData.value.tableData.length

        let itemIndex = 1
        pageData.value.tableData.forEach((item) => {
            item.no = itemIndex
            itemIndex++

            if (!daerahData.value.includes(item.daerah)) {
                daerahData.value.push(item.daerah)
            }
        })

        for (
            let i = 0;
            i < pageData.value.tableData.length;
            i += perPage.value
        ) {
            const itemGroup = pageData.value.tableData.slice(
                i,
                i + perPage.value
            )
            pageData.value.itemList.push(itemGroup)
        }

        setBiggestIndexNumber()

        pageData.value.totalPage = pageData.value.itemList.length

        breadcrumbs.value = [
            {
                title: 'Home',
                to: '/'
            },
            {
                title: 'List Rumah Sakit',
                to: ''
            }
        ]
    })
})

watch(
    () => currentPage.value,
    (updatedValue) => {
        setBiggestIndexNumber()
    }
)

// watch(daerahFilter, (value) => {
//     pageData.value.itemList = []
//     currentPage.value = 1
//     if (value == 'all') {
//         pageData.value.totalItem = pageData.value.tableData.length

//         for (
//             let i = 0;
//             i < pageData.value.tableData.length;
//             i += pageData.value.itemPerPage
//         ) {
//             const itemGroup = pageData.value.tableData.slice(
//                 i,
//                 i + pageData.value.itemPerPage
//             )
//             pageData.value.itemList.push(itemGroup)
//         }
//     } else {
//         const newItemList = pageData.value.tableData.filter(
//             (item) => item.daerah == value
//         )

//         pageData.value.totalItem = newItemList.length

//         for (
//             let i = 0;
//             i < newItemList.length;
//             i += pageData.value.itemPerPage
//         ) {
//             const itemGroup = newItemList.slice(
//                 i,
//                 i + pageData.value.itemPerPage
//             )
//             pageData.value.itemList.push(itemGroup)
//         }
//     }
// })

function setBiggestIndexNumber() {
    pageData.value.biggestIndexNumber =
        pageData.value.itemList[currentPage.value - 1][
            pageData.value.itemList[currentPage.value - 1].length - 1
        ].no
}

const breadcrumbs: Ref<Breadcrumb[]> = ref([])
</script>

<style lang="scss" scoped>
.listRUmah {
    @include vwUnit(padding-top, 80, 40);
    @include vwUnit(padding-bottom, 100, 50);
    background: rgba(246, 247, 254, 1);

    label {
        @include vwUnit(margin-bottom, 10);
    }

    &__title {
        @include vwUnit(margin-bottom, 15);
        @include typo(display);
    }

    &__desc {
        @include vwUnit(margin-bottom, 40);
    }

    &__info-container {
        @include vwUnit(margin-bottom, 40);
    }

    &__info-icon {
        @include vwUnit(font-size, 24);
    }

    &__info-title {
        @include vwUnit(margin-bottom, 10);
        @include typo(title-1);
    }

    &__info-desc {
        @include vwUnit(margin-bottom, 5);
    }

    &__info-link {
        color: rgba(48, 49, 120, 1);
        text-decoration: none;

        @include fullState {
            color: colorMod(rgba(48, 49, 120, 1), +25%);
        }
    }
}

.form {
    &__error-message {
        @include vwUnit(margin-top, 5);
        color: red;
        @include typo(caption-2);
        letter-spacing: 0.5px;
    }
}

.form-group {
    @include vwUnit(margin-bottom, 30);
}

.form-control {
    @include vwUnit(padding-top, 13);
    @include vwUnit(padding-right, 15);
    @include vwUnit(padding-bottom, 13);
    @include vwUnit(padding-left, 15);
}

::v-deep .themeBtnBold {
    display: inline-block;
    width: auto;
    text-align: center;
    @include vwUnit(min-width, 250);
}

::v-deep .breadcrumb {
    @include vwUnit(padding-bottom, 8);
}
</style>
