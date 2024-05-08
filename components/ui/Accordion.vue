<template>
    <div class="accordion-item">
        <div class="accordion-header">
            <button
                class="accordion__button collapsed"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#collapse-${props.item.id}`"
            >
                <span class="accordion__text">{{ props.item.title }}</span>
                <div class="accordion__arrow">
                    <Icon
                        name="basil:arrow-down-solid"
                        width="32"
                        height="32"
                    />
                </div>
            </button>
        </div>
        <div
            :id="`collapse-${props.item.id}`"
            class="accordion-collapse collapse"
            :data-bs-parent="`#${props.title}`"
        >
            <div
                class="accordion-body accordion__body"
                v-html="props.item.content"
            ></div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    item: {
        type: Object,
        default: () => {}
    }
})

const { $bootstrap } = useNuxtApp()

const route = useRoute()
const router = useRouter()

onMounted(() => {
    // const bsCollapse = new $bootstrap.Collapse(`#collapse-${props.item.id}`)

    setTimeout(() => {
        const accordionButton = document.getElementById(
            `collapse-${props.item.id}`
        )

        accordionButton?.addEventListener('show.bs.collapse', () => {
            router.push(
                `/${route.params.slug}/manajemen?item=${route.query.item}&collapse=${props.item.id}`
            )
        })

        accordionButton?.addEventListener('hide.bs.collapse', () => {
            if (String(route.query.collapse) === String(props.item.id)) {
                router.push(
                    `/${route.params.slug}/manajemen?item=${route.query.item}`
                )
            }
        })

        if (String(route.query.collapse) === String(props.item.id)) {
            const bsCollapse = new $bootstrap.Collapse(
                `#collapse-${props.item.id}`
            )

            bsCollapse.show()
        }
    }, 400)
})
</script>

<style lang="scss" scoped>
.accordion {
    &__button {
        display: flex;
        width: 100%;
        align-items: center;
        gap: 60px;
        text-decoration: none;
        border: 0;
        border-bottom: 1px solid rgba(19, 24, 44, 0.1);
        padding: 12px 0;
        background: transparent;
        text-align: left;
        transition: 0.3s;

        .accordion__arrow {
            transform: rotate(180deg);
            background-color: #303178;
            color: #fff;
        }
        .accordion__text{
            color: #303178;
        }

        &.collapsed {
            .accordion__arrow {
                transform: rotate(0);
                background-color: #fff;
                color: #303178;
            }
            .accordion__text{
            color: #122032;
        }
        }

        &.disabled {
            pointer-events: none;
            opacity: 0.3;
        }

        &:hover {
            border-color: #303178;
            .accordion__text {
                color: #303178;
            }

            .accordion__arrow {
                background-color: #303178;
                color: #fff;
            }
        }
    }

    &__body {
        padding: 30px 0;
        :deep(*) a {
            word-break: break-all;
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
