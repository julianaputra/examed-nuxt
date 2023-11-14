<template>
  <main>
    <div class="container default-container">
      <div class="row gy-4">
        <div
          v-for="(diagnose, diagnoseIndex) in diagnoses"
          :key="diagnoseIndex"
          class="col-lg-4"
        >
          <nuxt-link :to="diagnose.to" class="themeBtnBold">
            <div class="themeBtnBold__square" :class="diagnose.color">
              {{ diagnose.short }}
            </div>
            <span> {{ diagnose.name }} </span>
            <div class="themeBtnBold__arrow">
              <Icon name="CaretdownIcon" width="32" height="32" />
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const diagnoses = ref([
  {
    name: 'Depresi',
    to: '/depresi',
    short: 'DEP',
    color: 'pink'
  },
  {
    name: 'Psikosis',
    to: '/',
    short: 'PSY',
    color: 'purple'
  },
  {
    name: 'Gangguan Mental & Perilaku Anak & Remaja',
    to: '/',
    short: 'CMH',
    color: 'green'
  },
  {
    name: 'Demensia',
    to: '/',
    short: 'DEM',
    color: 'lime'
  },
  {
    name: 'Menyakiti Diri Sendiri / Bunuh Diri',
    to: '/',
    short: 'SUI',
    color: 'red'
  },
  {
    name: 'Keluhan Kesehatan Mental Penting Lainnya',
    to: '/',
    short: 'OTH',
    color: 'blue'
  }
])
</script>

<style lang="scss" scoped>
.themeBtnBold {
  position: relative;
  display: flex;
  gap: 16px;
  align-items: center;
  text-align: center;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #303178;
  background: linear-gradient(136deg, #42429a 0%, #1a1a4a 97.56%);
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  line-height: 1.2;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(152deg, #5355c4 -147.46%, #131336 98.25%);
    border-radius: 12px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    .themeBtnBold__arrow {
      left: 4px;
    }
  }

  span {
    position: relative;
    flex: 1 1 100%;
    text-align: left;
  }

  &__square {
    flex-shrink: 0;
    position: relative;
    padding: 4px;
    border-radius: 12px;
    font-size: 20px;
    font-weight: 600;
    background-color: #000;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.pink {
      background: linear-gradient(137deg, #e1a8c4 -10%, #c75c91 92.67%);
    }

    &.purple {
      background: linear-gradient(315deg, #686cc7 5.83%, #b1b3e2 106.24%);
    }

    &.green {
      background: linear-gradient(318deg, #72c66e 4.72%, #b8e2b6 108.38%);
    }

    &.lime {
      background: linear-gradient(135deg, #d6f075 -3.77%, #8eb012 91.65%);
    }

    &.red {
      background: linear-gradient(138deg, #f2b6b5 -4.46%, #e35e5d 92.56%);
    }

    &.blue {
      background: linear-gradient(136deg, #7c7dcb 0%, #303178 97.56%);
    }
  }

  &__arrow {
    flex-shrink: 0;
    color: #fff;
    position: relative;
    left: 0;
    transition: 0.3s;
  }
}
</style>
