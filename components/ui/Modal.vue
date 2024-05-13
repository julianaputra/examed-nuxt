<template>
    <div :id="id" class="modal fade" tabindex="-1" :class="modalClass">
        <div class="modal-dialog" :class="dialogClass">
            <div class="modal-content" :class="contentClass">
                <div
                    v-if="!hideHeader"
                    class="modal-header custom-modal__header"
                    :class="headerClass"
                >
                    <h1 class="modal-title fs-5" :class="titleClass">
                        <slot name="title" />
                    </h1>
                    <button
                        v-if="!hideHeaderClose"
                        type="button"
                        class="btn-close"
                        aria-label="Close"
                        data-bs-dismiss="modal"
                    />
                </div>
                <div class="modal-body custom-modal__body"  :class="bodyClass">
                    <slot name="body" />
                </div>
                <div
                    v-if="!hideFooter"
                    class="modal-footer custom-modal__footer"
                    :class="footerClass"
                >
                    <slot name="footer" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const route = useRoute()
const props = defineProps({
    id: {
        type: String,
        default: null
    },
    hideHeader: {
        type: Boolean,
        default: null
    },
    hideHeaderClose: {
        type: Boolean,
        default: null
    },
    hideFooter: {
        type: Boolean,
        default: null
    },
    modalClass: {
        type: String,
        default: null
    },
    dialogClass: {
        type: String,
        default: null
    },
    contentClass: {
        type: String,
        default: null
    },
    headerClass: {
        type: String,
        default: null
    },
    titleClass: {
        type: String,
        default: null
    },
    bodyClass: {
        type: String,
        default: null
    },
    footerClass: {
        type: String,
        default: null
    }
})

const {
    id,
    hideHeader,
    hideHeaderClose,
    hideFooter,
    modalClass,
    dialogClass,
    contentClass,
    headerClass,
    titleClass,
    bodyClass,
    footerClass
} = props

const emit = defineEmits(['hide', 'hidden', 'show', 'shown'])
const { $bModal } = useNuxtApp()

onBeforeUnmount(() => {
    $bModal.hide(props.id)
})

onMounted(() => {
    const myModalEl: HTMLElement = document.getElementById(id)!
    myModalEl.addEventListener('hide.bs.modal', () => {
        emit('hide')
    })
    myModalEl.addEventListener('hidden.bs.modal', () => {
        emit('hidden')
    })
    myModalEl.addEventListener('show.bs.modal', () => {
        emit('show')
    })
    myModalEl.addEventListener('shown.bs.modal', () => {
        emit('shown')
    })
})
</script>


<style scoped lang="scss" >
.custom-modal{
    &__header{
        @include vwUnit(padding,24);
    }
    &__body{
    @include typo (body-s);
    @include vwUnit(padding, 24);
    }
    &__footer{
        @include vwUnit(padding-left, 16);
        @include vwUnit(padding-right, 16);
        @include vwUnit(padding-top, 12);
        @include vwUnit(padding-bottom, 12);
        @include typo(caption-1);
    }
}
</style>
