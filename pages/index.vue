<template>
  <main>
    <section class="overview">
      <div class="container">
        <UiBreadcrumbs></UiBreadcrumbs>
        <h1 class="title overview__title">Depresi</h1>
        <div class="row">
          <div class="col-lg-3">
            <div class="overview__card">
              <h2 class="heading">Pilihan Menu</h2>
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
            </div>
          </div>
          <div class="col-lg-9">
            <TransitionGroup mode="out-in">
              <div class="overview__card" v-if="activeContent">
                <h2 class="heading--secondary overview__subtitle">
                  {{ activeContent.title }}
                </h2>
                <hr class="overview__hr" />
                <div
                  class="paragraph"
                  v-if="activeContent.content?.type == 'text'"
                  v-html="activeContent.content?.text"
                ></div>
                <div v-if="activeContent.content?.type == 'link'">
                  <Nuxt-link
                    v-for="(link, linkIndex) in activeContent.content.links"
                    :key="`menu-link-${linkIndex}`"
                    :to="link.to"
                    class="overview__selection"
                  >
                    <span class="overview__selection-text">
                      {{ link.title }}
                    </span>
                    <div class="overview__selection-arrow">
                      <Icon
                        name="basil:arrow-right-outline"
                        width="32"
                        height="32"
                      />
                    </div>
                  </Nuxt-link>
                </div>
              </div>
            </TransitionGroup>
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

const menus = ref(dataJson.data)

const activeMenu = ref(1)

const activeContent = computed(() => {
  const result = menus.value.find((menu) => {
    return menu.id === activeMenu.value
  })

  return result
})

const setActiveMenu = (e: any) => {
  activeMenu.value = 0

  setTimeout(() => {
    activeMenu.value = e
  }, 300)
}
</script>

<style lang="scss" scoped>
.overview {
  padding: 100px 0;

  &__title {
    margin-bottom: 40px;
  }

  &__card {
    background-color: #fff;
    padding: 40px;
    border: 1px solid #e9e9e9;
    border-radius: 14px;
  }

  &__hr {
    margin: 24px 0;
    color: rgba(19, 24, 44, 1);
  }

  &__menu {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    gap: 10px;
  }

  &__selection {
    display: flex;
    align-items: center;
    text-decoration: none;
    border-bottom: 1px solid rgba(19, 24, 44, 0.1);
    padding: 12px 0;
    margin-bottom: 12px;
    transition: 0.3s;

    &:hover {
      border-color: #303178;
      .overview__selection-text {
        color: #303178;
      }

      .overview__selection-arrow {
        background-color: #303178;
        color: #fff;
      }
    }
  }

  &__selection-text {
    flex-basis: 100%;
    font-size: 18px;
    font-weight: 400;
    color: #122032;
    transition: 0.3s;
  }

  &__selection-arrow {
    border: 1px solid #303178;
    border-radius: 50%;
    padding: 11px;
    color: #303178;
    transition: 0.3s;
  }
}
</style>
