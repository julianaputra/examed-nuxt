<template>
    <main class="main">
        <HomeBanner />
        <HomeModule />
        <HomeServices />
        <HomeAbout />
        <HomeTesti />
        <div class="container custom-line" >
            <hr class=" m-0 ">
        </div>
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
.custom-line{
    @include vwUnit(margin-top, 110);
}
</style>
