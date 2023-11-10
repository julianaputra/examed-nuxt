<template>
  <main>
    <section class="section">
      <div class="container">
        <UiBreadcrumbs :breadcrumbs="breadcrumbItem"></UiBreadcrumbs>
        <h1 class="title section__title">Penilaian</h1>
        <div class="row">
          <div class="col-lg-12">
            <UiCardAssesment>
              <template #title>Presentasi Umum Depresi</template>
              <template #subtitle
                >Apakah pasien tersebut pernah mengalami setidaknya satu dari
                gejala inti depresi berikut selama minimal 2 minggu?</template
              >
              <template #content>
                <UiCheckbox>Energi rendah, kelelahan, masalah tidur</UiCheckbox>
                <UiCheckbox
                  >Beberapa gejala fisik yang persisten tanpa penyebab yang
                  jelas</UiCheckbox
                >
                <UiCheckbox
                  >Kesedihan terus-menerus atau suasana hati tertekan,
                  kecemasan</UiCheckbox
                >
                <UiCheckbox
                  >Hilangnya minat atau kesenangan dalam aktivitas yang biasanya
                  menyenangkan</UiCheckbox
                >
              </template>
            </UiCardAssesment>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const breadcrumbItem = ref([
  {
    title: 'Home',
    to: '/'
  },
  {
    title: 'Depresi',
    to: '/depresi'
  },
  {
    title: 'Penilaian',
    to: '/depresi/penilaian'
  }
])
</script>
