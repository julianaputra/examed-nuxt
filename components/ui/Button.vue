<template>
    <nuxt-link v-if="props.to" :to="props.to" :class="className">
        <span>
            <slot></slot>
        </span>
    </nuxt-link>
    <button v-else :class="className" @click.prevent="emit('click', $event)">
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
    to: {
        type: String,
        default: ''
    },
    variant: {
        type: String,
        default: ''
    }
})

const className = computed(() => {
    return props.variant === 'outline' ? 'themeBtn--outline' : 'themeBtn'
})

const emit = defineEmits(['click'])
</script>

<style lang="scss" scoped>
.themeBtn {
    position: relative;
    display: inline-block;
    // min-width: 180px;
    flex: 1 1 100%;
    text-align: center;
    padding: 15px 24px;
    border-radius: 12px;
    border: 1px solid #303178;
    background: linear-gradient(136deg, #42429a 0%, #1a1a4a 97.56%);
    color: #fff;
    font-size: 18px;
    text-decoration: none;
    line-height: 1.2;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(152deg, #5355c4 -147.46%, #131336 98.25%);
        border-radius: 12px;
        opacity: 0;
        transition: opacity 0.15s ease;
    }

    &:hover {
        &::before {
            opacity: 1;
        }
    }

    span {
        position: relative;
    }

    &--outline {
        @extend .themeBtn;
        border: 1px solid #303178;
        background: #fff;
        color: #303178;
        transition: background 0.15s ease;

        &:hover {
            background: #e9f0fc;

            &::before {
                opacity: 0;
            }
        }
    }
}
</style>
