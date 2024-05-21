<template>
    <div class="swiper-custom-nav">
        <div class="swiper-custom-nav__button" :class="prevClass">
            <Icon
                name="basil:arrow-left-outline"
                class="swiper-custom-nav__arrow"
            />
            <Icon
                name="basil:arrow-left-outline"
                color="white"
                class="swiper-custom-nav__arrow--active"
            />
        </div>
        <div
            class="swiper-custom-nav__pagination d-none d-sm-block"
            :class="paginationClass"
        ></div>
        <div class="swiper-custom-nav__button" :class="nextClass">
            <Icon
                name="basil:arrow-right-outline"
                class="swiper-custom-nav__arrow"
            />
            <Icon
                name="basil:arrow-right-outline"
                color="white"
                class="swiper-custom-nav__arrow--active"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    prevClass: {
        type: String,
        default: ''
    },
    nextClass: {
        type: String,
        default: ''
    },
    paginationClass: {
        type: String,
        default: ''
    }
})
// const emit = defineEmits({
//   prevAction: null,
//   nextAction: null
// })

// function btnClick($action: any) {
//   emit($action)
// }
</script>

<style lang="scss" scoped>
.swiper-custom-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include vwUnit(gap, 10);

    &__button {
        position: relative;
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        @include vwUnit(width, 56);
        @include vwUnit(height, 56);
        @include vwUnit(font-size, 32);
        border: 1px solid #303178;
        border-radius: 100px;
        cursor: pointer;

        &:hover {
            background-color: #303178;
            .swiper-custom-nav__arrow--active {
                opacity: 1;
            }
            .swiper-custom-nav__arrow {
                opacity: 0;
            }
        }
    }

    &__arrow {
        position: absolute;
        &--active {
            position: absolute;
            opacity: 0;
        }
    }

    &__pagination {
        width: auto;
        text-align: center;
    }
}

::v-deep .swiper-button-disabled {
    opacity: 0.3;
}

::v-deep .swiper-pagination-bullet {
    @include vwUnit(width, 21);
    height: 2px;
    background-color: #d9d9d9;
    @include transition(all 0.3s ease);
    border-radius: 0;
    margin-right: 0 !important;
    margin-left: 0 !important;
}

::v-deep .swiper-pagination-bullet-active {
    background-color: #303178;
}
</style>
