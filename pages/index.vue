<template>
  <main class="default-container">
    <div class="container">
      <h1>{{ $t('home') }}</h1>
      <p>{{ $t('content', { value: 'Beranda' }) }}</p>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Home',
  description: 'This is homepage description'
})
</script>
