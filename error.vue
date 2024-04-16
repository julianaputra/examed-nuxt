<template>
    <div class="bg-light w-50 p-3">
        <h1>Error Page</h1>
        <pre>{{ error }}</pre>
        <button class="btn btn-primary" @click="handleError">Go to Home</button>
    </div>
</template>

<script setup lang="ts">
defineProps({
    error: {
        type: Object,
        default: () => {}
    }
})

const handleError = () => clearError({ redirect: '/' })
</script>
