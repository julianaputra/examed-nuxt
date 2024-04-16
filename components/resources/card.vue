<template>
    <a :href="props.file" download class="resources-card" :title="props.title">
        <div class="resources-card__image-container">
            <img
                :src="props.image"
                alt="placeholder iamge"
                class="ratio-item"
            />
        </div>
        <div class="resources-card__body">
            <h2 class="resources-card__title">
                {{ props.title }}
            </h2>
            <p class="resource-card__download-text">
                <icon name="material-symbols:download" />
                Download Resources
            </p>
        </div>
    </a>
</template>

<script setup lang="ts">
const props = defineProps({
    image: {
        type: String,
        default: 'https://placehold.co/387x236'
    },
    title: {
        type: String,
        default: ''
    },
    file: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.resources-card {
    display: block;
    color: #122032;
    text-decoration: none;
    border: 1px solid rgba(102, 102, 102, 0.15);
    border-radius: 12px;
    box-shadow: 0 0 0px rgba(0, 0, 0, 0.07);
    overflow: hidden;

    @include fullState {
        color: colorMod(#122032, +25%);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);
    }

    @include imageRatio(387, 236);

    &__body {
        @include vwUnit(padding, 25);
    }

    &__title {
        @include vwUnit(margin-bottom, 30);
        @include typo(card-title-1, true, 2);
    }
}
</style>
