<template>
    <main class="resources">
        <div class="container">
            <UiBreadcrumbs :breadcrumbs="breadcrumbs"></UiBreadcrumbs>
            <div class="resources__info">
                <h1 class="resources__title">Resources</h1>
            </div>
            <div class="row">
                <div
                    v-for="(item, itemIndex) in pageData"
                    :key="itemIndex"
                    class="col-12 col-md-6 col-lg-4 col-xl-3"
                >
                    <ResourcesCard class="resources__card" title="item.title" :file="item.file" :image="item.image" />
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { nextTick } from 'process'
import type { Breadcrumb } from '../types/index'

const pageData = ref([
    {
        image: '/images/resouces-mhgap.png',
        title: 'MHGAP IG WHO English',
        file: ''
    },
    {
        image: '/images/resources-pelayanan.png',
        title: 'Pelayanan Kesehatan Mental dengan Pendekatan Kedokteran Keluarga',
        file: ''
    }
])

definePageMeta({
    title: 'Resources',
    description: 'This is aboutpage description'
})

onMounted(() => {
    //   nextTick(async () => {
    breadcrumbs.value = [
        {
            title: 'Home',
            to: '/'
        },
        {
            title: 'Resources',
            to: ''
        }
    ]
    //   })
})

function isRequired(value) {
    if (value && value.trim()) {
        return true
    }
    return 'Bagian ini perlu di isi'
}

const breadcrumbs: Ref<Breadcrumb[]> = ref([])
</script>

<style lang="scss" scoped>
.resources {
    @include vwUnit(padding-top, 80, 40);
    @include vwUnit(padding-bottom, 100, 50);
    background: rgba(246, 247, 254, 1);

    label {
        @include vwUnit(margin-bottom, 10);
    }

    &__title {
        @include vwUnit(margin-bottom, 40);
        @include typo(display);
    }

    &__desc {
        @include vwUnit(margin-bottom, 40);
    }

    &__info-container {
        @include vwUnit(margin-bottom, 40);
    }

    &__info-icon {
        @include vwUnit(font-size, 24);
    }

    &__info-title {
        @include vwUnit(margin-bottom, 10);
        @include typo(title-1);
    }

    &__info-desc {
        @include vwUnit(margin-bottom, 5);
    }

    &__info-link {
        color: rgba(48, 49, 120, 1);
        text-decoration: none;

        @include fullState {
            color: colorMod(rgba(48, 49, 120, 1), +25%);
        }
    }
    &__card{
        @include vwMobile(margin-top, 30)
    }
}

.form {
    &__error-message {
        @include vwUnit(margin-top, 5);
        color: red;
        @include typo(caption-2);
        letter-spacing: 0.5px;
    }
}

.form-group {
    @include vwUnit(margin-bottom, 30);
}

.form-control {
    @include vwUnit(padding-top, 13);
    @include vwUnit(padding-right, 15);
    @include vwUnit(padding-bottom, 13);
    @include vwUnit(padding-left, 15);
}

::v-deep .themeBtnBold {
    display: inline-block;
    width: auto;
    text-align: center;
    @include vwUnit(min-width, 250);
}

::v-deep .breadcrumb {
    @include vwUnit(padding-bottom, 0);
    @include vwUnit(margin-bottom, 8);
}
</style>
