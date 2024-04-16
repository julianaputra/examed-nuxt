<template>
    <button class="menu__button">
        <div class="menu__icon">
            <Icon :name="props.icon" width="32" height="32" />
        </div>
        <span class="menu__button-text">
            <slot></slot>
        </span>
        <div class="menu__arrow">
            <Icon name="CaretdownIcon" width="32" height="32" />
        </div>
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
    icon: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.menu {
    &__icon {
        padding: 8px;
        background-color: #eaf0fd;
        border-radius: 12px;
        transition: 0.3s;

        svg {
            color: #303178;
            transition: 0.3s;
        }
    }

    &__button {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px;
        background-color: #fff;
        border-radius: 14px;
        border: 0;
        transition: 0.3s;

        &:hover,
        &.active {
            background-color: #e9f0fc;

            .menu__icon {
                background-color: #303178;

                svg {
                    color: #fff;
                }
            }
        }
    }

    &__button-text {
        font-size: 18px;
        color: #122032;
        flex-basis: 100%;
        text-align: left;
    }

    &__arrow {
        color: #122032;
    }
}
</style>
