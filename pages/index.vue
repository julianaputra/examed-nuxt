<template>
    <main class="main">
        <HomeBanner />
        <HomeModule />
        <HomeServices />
        <HomeAbout />
        <HomeTesti />
    </main>
</template>

<script setup lang="ts">
definePageMeta({
    title: 'Home',
    description: 'This is homepage description'
})
</script>

<style lang="scss" scoped>
.main{
    background-color: #FFFFFF;
}
</style>
