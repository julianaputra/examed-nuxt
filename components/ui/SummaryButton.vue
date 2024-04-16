<template>
    <nuxt-link
        v-if="props.to && props.to.isExternal === false"
        class="selection-button"
        :class="{
            disabled: props.disabled === true,
            'no-link': props.hasIcon === false
        }"
        :to="props.to.path"
    >
        <span class="selection-button__text"> <slot></slot> </span>

        <div v-if="props.hasIcon" class="selection-button__arrow">
            <Icon name="basil:arrow-right-outline" width="32" height="32" />
        </div>
    </nuxt-link>

    <a
        v-else-if="props.to && props.to.isExternal === true"
        :href="props.to.path"
        target="_blank"
        class="selection-button"
        rel="noopener noreferrer"
    >
        <span class="selection-button__text"> <slot></slot> </span>

        <div v-if="props.hasIcon" class="selection-button__arrow">
            <Icon name="basil:arrow-right-outline" width="32" height="32" />
        </div>
    </a>

    <nuxt-link v-else-if="props.to === null" class="selection-button">
        <span class="selection-button__text"> <slot></slot> </span>
    </nuxt-link>
</template>
<script setup lang="ts">
const props = defineProps({
    disabled: {
        type: Boolean,
        default: false
    },
    to: {
        type: Object,
        default: () => {}
    },
    hasIcon: {
        type: Boolean,
        default: true
    }
})
</script>

<style lang="scss" scoped>
.selection-button {
    display: flex;
    align-items: center;
    gap: 60px;
    min-height: 81px;
    text-decoration: none;
    border-bottom: 1px solid rgba(19, 24, 44, 0.1);
    padding: 12px 0;
    margin-bottom: 12px;
    cursor: pointer;
    transition: 0.3s;

    &.disabled {
        pointer-events: none;
        opacity: 0.3;
    }

    &.no-link {
        cursor: default;
    }

    &:hover {
        border-color: #303178;
        .selection-button__text {
            color: #303178;
        }

        .selection-button__arrow {
            background-color: #303178;
            color: #fff;
        }
    }

    &__text {
        flex-basis: 100%;
        font-size: 18px;
        font-weight: 400;
        color: #122032;
        transition: 0.3s;
    }

    &__arrow {
        border: 1px solid #303178;
        border-radius: 50%;
        padding: 11px;
        color: #303178;
        transition: 0.3s;
    }
}
</style>
