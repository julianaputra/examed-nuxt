<template>
    <div class="pagination-bar">
        <div class="row align-items-center">
            <div class="col-12 col-lg-6">
                <p class="pagination-bar__info">
                    Menampilkan <b>{{ biggestIndexNumber }}</b> dari
                    <b>{{ props.totalItem }}</b> data rumah sakit
                </p>
            </div>
            <div class="col-12 col-lg-6">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item" :class="prevDisable">
                            <a class="page-link" href="#" @click="prevPage"
                                >Previous</a
                            >
                        </li>
                        <li
                            v-show="lotPagination"
                            class="page-item"
                            :class="isFirstPage"
                        >
                            <template v-if="firstPageIsNotVisible">
                                <div class="btn-group dropup">
                                    <button
                                        type="button"
                                        class="page-link"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        ...
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li
                                            v-for="item in numberOfPage"
                                            :key="item"
                                        >
                                            <a
                                                href="#"
                                                class="dropdown-item"
                                                :data-page-target="item"
                                                @click="toPage"
                                            >
                                                {{ item }}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </template>
                            <template v-else>
                                <a
                                    href="#"
                                    class="page-link"
                                    data-page-target="1"
                                    @click="toPage"
                                >
                                    1
                                </a>
                            </template>
                        </li>
                        <template v-if="paginationIsInMiddle && lotPagination">
                            <li
                                v-for="page in showPage[currentLocation - 2]"
                                :key="page"
                                class="page-item"
                                :class="isActive(page)"
                            >
                                <a
                                    href="#"
                                    class="page-link"
                                    :data-page-target="page"
                                    @click="toPage"
                                >
                                    {{ page }}
                                </a>
                            </li>
                        </template>
                        <template v-else-if="paginationIsInLast">
                            <li
                                v-for="page in 3"
                                :key="page"
                                class="page-item"
                                :class="isActive(page + numberOfPage - 4)"
                            >
                                <a
                                    href="#"
                                    class="page-link"
                                    :data-page-target="page + numberOfPage - 4"
                                    @click="toPage"
                                >
                                    {{ page + numberOfPage - 4 }}
                                </a>
                            </li>
                        </template>
                        <template v-else-if="lotPagination">
                            <li
                                v-for="page in 3"
                                :key="page"
                                class="page-item"
                                :class="isActive(page + 1)"
                            >
                                <a
                                    href="#"
                                    class="page-link"
                                    :data-page-target="page + 1"
                                    @click="toPage"
                                >
                                    {{ page + 1 }}
                                </a>
                            </li>
                        </template>
                        <template v-else>
                            <li
                                v-for="page in numberOfPage"
                                :key="page"
                                class="page-item"
                                :class="isActive(page)"
                            >
                                <a
                                    href="#"
                                    class="page-link"
                                    :data-page-target="page"
                                    @click="toPage"
                                >
                                    {{ page }}
                                </a>
                            </li>
                        </template>
                        <li
                            v-show="lotPagination"
                            class="page-item"
                            :class="isLastPage"
                        >
                            <template v-if="showLastPage">
                                <a
                                    href="#"
                                    class="page-link"
                                    :data-page-target="numberOfPage"
                                    @click="toPage"
                                >
                                    {{ numberOfPage }}
                                </a>
                            </template>
                            <template v-else>
                                <div class="btn-group dropup">
                                    <button
                                        type="button"
                                        class="page-link"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        ...
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li
                                            v-for="item in numberOfPage"
                                            :key="item"
                                        >
                                            <a
                                                href="#"
                                                class="dropdown-item"
                                                :data-page-target="item"
                                                @click="toPage"
                                            >
                                                {{ item }}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </template>
                        </li>
                        <li class="page-item" :class="nextDisable">
                            <a class="page-link" href="#" @click="nextPage"
                                >Next</a
                            >
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    totalItem: {
        type: Number,
        default: 1
    }
})

const numberOfPage = defineModel('numberOfPage')

const currentLocation = defineModel('currentLocation', { type: Number })

const biggestIndexNumber = defineModel('biggestIndexNumber')

const pageNumber = ref([])

const showPage = ref([])

function isActive(pageNumber: Number) {
    if (pageNumber === currentLocation.value) {
        return 'active'
    }
}

// prev Button Function -- start
const prevDisable = computed(() => {
    return currentLocation.value === 1 ? 'disabled' : ''
})

function prevPage(e) {
    e.preventDefault()
    currentLocation.value -= 1
}
// prev Button Function -- end

// next Button Function -- start
const nextDisable = computed(() => {
    return currentLocation.value === numberOfPage.value ? 'disabled' : ''
})

function nextPage(e) {
    e.preventDefault()
    currentLocation.value += 1
}
// next Button Function -- end

// determining is First Page -- start
const isFirstPage = computed(() => {
    return currentLocation.value == 1 ? 'active' : ''
})

const firstPageIsNotVisible = computed(() => {
    return currentLocation.value - 2 > 1
})
// determining is First Page -- end

// determining page have more than 5 pages -- start
const lotPagination = computed(() => {
    return numberOfPage.value > 5
})
// determining page have more than 5 pages -- start

// determining is Last Page -- start
const isLastPage = computed(() => {
    return currentLocation.value == numberOfPage.value ? 'active' : ''
})

const showLastPage = computed(() => {
    const trigger = numberOfPage.value - 3
    return currentLocation.value >= trigger
})
// determining is Last Page -- end

// determining pagination location -- start
const paginationIsInMiddle = computed(() => {
    const trigger = numberOfPage.value - 4
    return currentLocation.value >= 4 && currentLocation.value <= trigger
})
const paginationIsInLast = computed(() => {
    const trigger = numberOfPage.value - 4
    return currentLocation.value >= trigger
})
// determining pagination location -- end

// function to change page
function toPage(e) {
    e.preventDefault()
    currentLocation.value = parseInt(e.target.dataset.pageTarget)
}

watch(numberOfPage, () => {
    for (let i = 1; i <= parseInt(numberOfPage.value); i++) {
        pageNumber.value.push(i)
    }

    for (let i = 0; i < parseInt(numberOfPage.value) - 1; i++) {
        const pageGroup = pageNumber.value.slice(i, i + 3)
        showPage.value.push(pageGroup)
    }

    console.log(showPage.value)
})

onMounted(() => {
    console.log(pageNumber.value)
})
</script>

<style lang="scss" scoped>
.pagination-bar {
    @include vwUnit(margin-top, 40);
    @include vwUnit(margin-bottom, 15);
    @include vwUnit(padding-top, 25);
    @include vwUnit(padding-right, 30);
    @include vwUnit(padding-bottom, 25);
    @include vwUnit(padding-left, 30);
    background-color: #ffffff;
    border: 1px solid rgba(233, 233, 233, 1);
    border-radius: 8px;

    .pagination {
        justify-content: end;
        margin: 0;
    }

    .page-item {
        .page-link {
            $space-y: 10;
            $space-x: 16;
            @include vwUnit(margin-right, 5);
            @include vwUnit(margin-left, 5);
            @include vwUnit(padding-top, $space-y);
            @include vwUnit(padding-right, $space-x);
            @include vwUnit(padding-bottom, $space-y);
            @include vwUnit(padding-left, $space-x);
            color: rgba(48, 49, 120, 1);
            border-radius: 10px;

            &:hover {
                color: #ffffff;
                background-color: colorMod(#1a1a4a, +40%);
            }
        }
        &.active .page-link {
            color: #ffffff;
            border: 1px solid #303178;
            background: linear-gradient(136deg, #42429a 0%, #1a1a4a 97.56%);
        }
    }

    &__info {
        margin: 0;
        @include vwMobile(margin-bottom, 15);
        @include typo(body-s);
    }
}
</style>
