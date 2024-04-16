<template>
    <div class="card">
        <h2 :class="className">
            <slot name="title"></slot>
        </h2>

        <hr v-if="props.border" class="card__hr" />
        <div class="card__body">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    border: {
        type: Boolean,
        default: true
    },
    titleSize: {
        type: String,
        default: 'big'
    }
})

const className = computed(() => {
    return props.titleSize === 'small' ? 'heading--secondary' : 'heading'
})
</script>

<style lang="scss" scoped>
.card {
    background-color: #fff;
    padding: 40px;
    border: 1px solid #e9e9e9;
    border-radius: 14px;

    &__hr {
        margin: 24px 0;
        color: rgba(19, 24, 44, 0.5);
    }

    &__body {
        :deep(*) ul,
        ol {
            padding-left: 28px;

            li {
                color: rgba(18, 32, 50, 0.8);
                font-size: 18px;
                font-weight: 400;
            }
        }

        :deep(*) p {
            color: rgba(18, 32, 50, 0.8);
            font-size: 18px;
            font-weight: 400;
        }

        :deep(*) a {
            color: #303178;
        }
    }

    @media (max-width: 767px) {
        padding: 30px;
    }
}
</style>
