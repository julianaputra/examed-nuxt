<template>
    <main class="about">
        <div class="container">
            <UiBreadcrumbs :breadcrumbs="breadcrumbs"></UiBreadcrumbs>
        </div>
        <AboutDesc />
        <HomeAbout />
    </main>
</template>

<script setup lang="ts">
import { nextTick } from 'process'
import type { Breadcrumb } from '../types/index'

useHead({
    title: `Tentang kami`,
    meta: [
        {
            name: 'description',
            content:
                'Panduan skrining dan tata laksana gangguan mental bagi dokter dan tenaga kesehatan di puskesmas yang dapat membantu Anda dalam memberikan pelayanan kesehatan yang lebih baik.'
        }
    ]
})

onMounted(() => {
    //   nextTick(async () => {
    breadcrumbs.value = [
        {
            title: 'Home',
            to: '/'
        },
        {
            title: 'Tentang Kami',
            to: ''
        }
    ]
    //   })
})

const breadcrumbs: Ref<Breadcrumb[]> = ref([])
</script>

<style lang="scss" scoped>
.about {
    @include vwUnit(padding-top, 50, 30);
    @include vwUnit(padding-bottom, 50, 30);
    background: rgba(246, 247, 254, 1);
}
</style>
