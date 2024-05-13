<template>
    <div class="page-bar">
        <div class="row align-items-center">
            <div class="col-12 col-md-6">
                <p class="page-bar__info text-center text-md-start">
                    Terdapat
                    <b>{{ totalRows }}</b> data rumah sakit
                </p>
            </div>
            <div class="col-12 col-md-6">
                <nav aria-label="Page navigation example bg-primary">
                    <ul class="pagination">
                        <li
                            class="page-item"
                            :class="{
                                disabled: modelValue == 1
                            }"
                        >
                            <a
                                class="page-link"
                                href="#"
                                aria-label="Previous"
                                @click.prevent="previousPage"
                            >
                            Previous  
                            </a>
                        </li>
                        <li v-if="isShowPreviousEllipsis" class="page-item">
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
                                    <li v-for="page in totalPage" :key="page">
                                        <a
                                            href="#"
                                            class="dropdown-item"
                                            :data-page-target="page"
                                            @click="gotoPage(page)"
                                        >
                                            {{ page }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            v-for="page in shownPage"
                            :key="page"
                            class="page-item"
                            :class="{
                                active: page == modelValue
                            }"
                        >
                            <a
                                class="page-link"
                                href="#"
                                @click.prevent="gotoPage(page)"
                                >{{ page }}</a
                            >
                        </li>
                        <li v-if="isShowNextEllipsis" class="page-item">
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
                                    <li v-for="page in totalPage" :key="page">
                                        <a
                                            href="#"
                                            class="dropdown-item"
                                            :data-page-target="page"
                                            @click="gotoPage(page)"
                                        >
                                            {{ page }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            class="page-item"
                            :class="{
                                disabled: modelValue == totalPage
                            }"
                        >
                            <a
                                class="page-link"
                                href="#"
                                aria-label="Next"
                                @click.prevent="nextPage"
                            >
                            Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        biggestIndexNumber: {
            type: Number,
            default: 1
        },
        modelValue: {
            type: [Number, String],
            default: null
        },
        totalRows: {
            type: [Number, String],
            default: 0
        },
        perPage: {
            type: [Number, String],
            default: 20
        },
        limit: {
            type: [Number, String],
            default: 5
        }
    },
    computed: {
        totalPage() {
            return Math.ceil(this.totalRows / this.perPage)
        },
        shownPage() {
            const pages = []

            if (this.totalPage <= this.limit) {
                for (let page = 1; page <= this.totalPage; page++) {
                    pages.push(page)
                }
            } else if (this.modelValue < this.limit - 1) {
                for (let page = 1; page < this.limit; page++) {
                    pages.push(page)
                }
            } else if (
                this.modelValue >
                Number(this.totalPage) - (this.limit - 2)
            ) {
                for (
                    let page = this.totalPage - (this.limit - 2);
                    page <= this.totalPage;
                    page++
                ) {
                    pages.push(page)
                }
            } else if (this.limit > 3) {
                for (
                    let page = this.modelValue - (this.limit - 4);
                    page <= this.modelValue + (this.limit - 4);
                    page++
                ) {
                    pages.push(page)
                }
            } else {
                pages.push(this.modelValue)
            }

            return pages
        },
        isShowPreviousEllipsis() {
            if (this.totalPage > this.limit) {
                if (this.modelValue > this.limit - 2) {
                    return true
                } else {
                    return false
                }
            }
            return false
        },
        isShowNextEllipsis() {
            if (this.totalPage > this.limit) {
                if (this.modelValue < this.totalPage - (this.limit - 3)) {
                    return true
                } else {
                    return false
                }
            }
            return false
        }
    },
    methods: {
        previousPage() {
            if (this.modelValue > 1) {
                this.$emit('update:modelValue', Number(this.modelValue) - 1)
            }
        },
        nextPage() {
            if (this.modelValue < this.totalPage) {
                this.$emit('update:modelValue', Number(this.modelValue) + 1)
            }
        },
        gotoPage(page) {
            this.$emit('update:modelValue', page)
        }
    }
}
</script>

<style lang="scss" scoped>
.page-bar {
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
        @include vwMobile(margin-top, 5);
        @media screen and (max-width: 767px) {
            justify-content: center;
        }
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
