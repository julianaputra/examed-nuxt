<template>
  <main>
    <section class="section">
      <div class="container">
        <UiBreadcrumbs :breadcrumbs="breadcrumbItem"></UiBreadcrumbs>
        <h1 class="title section__title section__title--no-margin">Summary</h1>
        <h2 class="subtitle section__subtitle">Modul Depresi</h2>
        <div class="card">
          <div class="card__header">
            <nav class="card__nav">
              <button
                v-for="summary in summaries"
                :key="summary.id"
                class="card__nav-button"
                :class="{ active: activeSummary === summary.id }"
                @click="changeActiveSummary(summary.id)"
              >
                {{ summary.title }}
              </button>
            </nav>
          </div>
          <Transition mode="out-in">
            <div class="card__body" :key="getActiveSummary?.id">
              <div class="row justify-content-center">
                <div class="col-lg-10 col-xxl-8">
                  <h2 class="heading--secondary">
                    {{ getActiveSummary?.subtitle }}
                  </h2>
                  <hr class="card__hr--bottom" />
                  <UiSelectionButton
                    v-for="sumList in getActiveSummary?.lists"
                    :to="sumList?.to"
                    >{{ sumList.title }}</UiSelectionButton
                  >
                </div>
              </div>
            </div>
          </Transition>
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
  },
  {
    title: 'Summary',
    to: '/depresi/penilaian/summary'
  }
])

const activeSummary = ref(1)

const summaries = ref([
  {
    id: 1,
    title: 'Summary Hasil',
    subtitle: 'Hasil Penilanan',
    lists: [
      {
        title: 'Pertimbangkan pasien mengalami depresi',
        to: '/'
      },
      {
        title:
          'Kelola kondisi fisik (sesuai dengan prosedur penanganan penyakit tersebut atau konsulkan dengan spesialis yang sesuai)',
        to: '/'
      },
      {
        title:
          'Episode depresi pada gangguan bipolar mungkin terjadi, buka PROTOKOL 2 (Depresi pada gangguan Bipolar). ',
        to: '/'
      }
    ]
  },
  {
    id: 2,
    title: 'Summary Pertanyaan',
    subtitle: 'List Pertanyaan',
    lists: [
      {
        title:
          'Apakah pasien tersebut pernah mengalami setidaknya satu dari gejala inti depresi berikut selama minimal 2 minggu?',
        to: '/'
      },
      {
        title:
          'Apakah pasien tersebut mengalami beberapa gejala tambahan berikut selama minimal 2 minggu:',
        to: '/'
      },
      {
        title:
          'Apakah pasien tersebut mengalami kesulitan besar dalam menjalankan fungsi sehari-hari dalam bidang pribadi, keluarga, sosial, pendidikan, pekerjaan atau bidang lainnya?',
        to: '/'
      },
      {
        title:
          'Apakah ini kondisi fisik yang dapat menyerupikan atau memperbesar depresi?',
        to: '/'
      },
      {
        title: 'Apakah gejala depresi tetap ada setelah pengobatan?',
        to: '/'
      },
      {
        title:
          'Apakah beberapa gejala berikut terjadi secara bersamaan, berlangsung selama minimal 1 minggu, dan cukup parah sehingga mengganggu pekerjaan dan aktivitas sosial secara signifikan atau memerlukan rawat inap atau kurungan?',
        to: '/'
      }
    ]
  }
])

const getActiveSummary = computed(() => {
  const result = summaries.value.find((summ) => {
    return summ.id === activeSummary.value
  })

  return result
})

const changeActiveSummary = (e: any) => {
  activeSummary.value = e
}
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  border: 1px solid #e9e9e9;
  border-radius: 14px;

  &__hr {
    margin: 34px 0 60px 0;
    color: rgba(19, 24, 44, 0.5);

    &--bottom {
      @extend .card__hr;
      margin: 24px 0;
    }
  }

  &__header {
    border-bottom: 1px solid #e9e9e9;
  }

  &__nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  &__nav-button {
    position: relative;
    color: #757575;
    font-size: 24px;
    font-weight: 400;
    background-color: transparent;
    border: 0;
    padding: 24px 12px;
    transition: color 0.3s ease;

    &::before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 2px;
      background-color: #303178;
      opacity: 0;
      transition: 0.3s;
    }

    &:hover,
    &.active {
      color: #303178;

      &::before {
        opacity: 1;
      }
    }
  }

  :deep(*) &__body {
    padding: 50px 40px 60px 40px;
    ul,
    ol {
      padding-left: 28px;

      li {
        color: rgba(18, 32, 50, 0.8);
        font-size: 18px;
        font-weight: 400;
      }
    }
  }

  :deep(*) &__buttons {
    display: flex;
    gap: 12px;
  }
}
</style>
