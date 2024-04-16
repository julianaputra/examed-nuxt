<template>
    <div class="home-feature">
        <div class="home-feature__image-container">
            <img
                :src="props.icon"
                :alt="`${props.title} Icon`"
                class="ratio-item"
            />
        </div>
        <div class="home-feature__content">
            <p class="home-feature__title">{{ props.title }}</p>
            <div class="home-feature__content-body">
                <p class="home-feature__number">{{ props.number }}</p>
                <p class="home-feature__desc">{{ props.desc }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    icon: {
        type: String,
        default: 'https://placehold./co/60'
    },
    title: {
        type: String,
        default: 'Title'
    },
    number: {
        type: String,
        default: '99+'
    },
    desc: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.home-feature {
    display: flex;
    align-items: center;
    @include vwUnit(margin-top, 60, 0);
    @include vwUnit(margin-bottom, 30);

    @include imageRatio(60, 60, true);

    &__image-container {
        flex: 0 0 auto;
    }

    &__content {
        flex: 1 0;
        @include vwUnit(padding-left, 10);
    }

    &__title {
        @include vwUnit(margin-bottom, 5);
        @include typo(caption-1);
    }

    &__content-body {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        // @media screen and (max-width: 1679px) {
        //     flex-wrap: wrap;
        // }
    }

    &__number {
        margin: 0;
        @include vwUnit(font-size, 36);
        font-weight: 700;
        line-height: 1;
    }

    &__desc {
        // @include vwUnit(margin-top, 5);
        margin-bottom: 0;
        width: 100%;
        @include typo(caption-1);
    }
}
</style>
