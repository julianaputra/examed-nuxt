<template>
  <nav
    style="
      --bs-breadcrumb-divider: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&quot;);
    "
    aria-label="breadcrumb"
  >
    <ol class="breadcrumb">
      <li
        v-for="(breadcrumb, breadcrumbIndex) in props.breadcrumbs"
        :key="breadcrumbIndex"
        class="breadcrumb-item"
      >
        <nuxt-link
          v-if="breadcrumbIndex + 1 != props.breadcrumbs.length"
          :to="breadcrumb.to"
          >{{ breadcrumb.title }}</nuxt-link
        >
        <span v-else class="active">{{ breadcrumb.title }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps({
  breadcrumbs: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="scss" scoped>
.breadcrumb {
  font-size: 16px;

  .breadcrumb-item {
    a {
      color: #303178;
    }

    .active {
      color: #404040;
    }
  }
}
</style>
