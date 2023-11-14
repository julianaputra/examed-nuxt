<template>
  <main>
    <section class="section overview">
      <div class="container">
        <UiBreadcrumbs :breadcrumbs="breadcrumbItem"></UiBreadcrumbs>
        <h1 class="title section__title">Depresi</h1>
        <div class="row">
          <div class="col-lg-4 col-xxl-3">
            <UiCard :border="false">
              <template #title>Pilihan Menu</template>
              <template #content>
                <div class="overview__menu">
                  <UiMenuButton
                    v-for="(menu, menuIndex) in menus"
                    :key="`menu-${menuIndex}`"
                    :icon="menu.icon"
                    :class="{ active: activeMenu === menu.id }"
                    @click="setActiveMenu(menu.id)"
                    >{{ menu.title }}</UiMenuButton
                  >
                </div>
              </template>
            </UiCard>
          </div>
          <div class="col-lg-8 col-xxl-9">
            <Transition mode="out-in">
              <UiCard :key="activeContent?.id" title-size="small">
                <template #title>{{ activeContent?.title }}</template>
                <template #content>
                  <div
                    v-if="activeContent?.content.type == 'text'"
                    class="paragraph"
                    v-html="activeContent?.content.text"
                  ></div>
                  <div v-if="activeContent?.content.type == 'link'">
                    <UiSelectionButton
                      v-for="(link, linkIndex) in activeContent.content.links"
                      :key="`menu-link-${linkIndex}`"
                      :data="link"
                    ></UiSelectionButton>
                  </div>
                </template>
              </UiCard>
            </Transition>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import dataJson from '@/dummy/data.json'

definePageMeta({
  title: 'Home',
  description: 'This is homepage description'
})

const breadcrumbItem = ref([
  {
    title: 'Home',
    to: '/'
  },
  {
    title: 'Depresi',
    to: '/depresi'
  }
])

const menus = ref(dataJson.data)

const activeMenu = ref(1)

const activeContent = computed(() => {
  const result = menus.value.find((menu) => {
    return menu.id === activeMenu.value
  })

  return result
})

const setActiveMenu = (e: any) => {
  activeMenu.value = e
}
</script>

<style lang="scss" scoped>
.overview {
  &__menu {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
