<template>
    <div class="filter-bar">
        <div class="row">
            <div class="col-12 col-lg-3 col-xl-2 px-0">
                <div class="filter-bar__item-container">
                    <select v-model="daerahValue" class="form-select">
                        <option value="all">{{ titleSort }}</option>
                        <option
                            v-for="(daerah, daerahIndex) in daerahData"
                            :key="daerahIndex"
                            :value="daerah"
                        >
                            {{ daerah }}
                        </option>
                    </select>
                </div>
            </div>
            <div v-if="props.rsuFilter" class="col-12 col-lg-3 px-0 px-lg-2">
                <div class="filter-bar__item-container">
                    <select v-model="praktekValue" class="form-select">
                        <option value="all" class="form-select__title">
                            Pilih Tempat Praktek
                        </option>
                        <option
                            v-for="(praktek, index) in $props.praktekList"
                            :key="index"
                            :value="praktek"
                        >
                            {{ praktek }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="col-12 col-lg-6 col-xl-4 ms-auto px-0 px-lg-2">
                <div class="filter-bar__item-container">
                    <form class="row gx-2">
                        <div class="col">
                            <div class="input-group">
                                <div class="input-group-text">
                                    <Icon
                                        name="ic:baseline-search"
                                        class="filter-bar__search-icon"
                                    />
                                </div>
                                <input
                                    v-model.trim="keyword"
                                    type="text"
                                    class="form-control"
                                    placeholder="Cari nama rumah sakit"
                                />
                            </div>
                        </div>
                        <div class="col-auto" @click="searchRumahSakit">
                            <UiButton class="button-search">Search</UiButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate'

const props = defineProps({
    rsuFilter: {
        type: Boolean,
        default: false
    },
    daerahData: {
        type: Array,
        default: () => []
    },
    praktekList: {
        type: Array,
        default: () => []
    },
    titleSort: {
        type: String,
        default: ''
    }
})
const emit = defineEmits(['search'])

const daerahValue = defineModel('daerahValue')
const praktekValue = defineModel('praktekValue')

const keyword: any = ref('')

const searchRumahSakit = () => {
    emit('search', keyword.value)
}
</script>

<style lang="scss" scoped>
.filter-bar {
    @include vwUnit(margin-top, 40);
    @include vwUnit(margin-bottom, 15);
    @include vwUnit(padding-top, 25);
    @include vwUnit(padding-right, 30);
    @include vwUnit(padding-bottom, 25);
    @include vwUnit(padding-left, 30);
    background-color: #ffffff;
    border: 1px solid rgba(233, 233, 233, 1);
    border-radius: 8px;

    .form-control,
    .form-select {
        @include vwUnit(margin-top, 7.5);
        @include vwUnit(margin-bottom, 7.5);
        @include vwUnit(padding-top, 15);
        @include vwUnit(padding-right, 15);
        @include vwUnit(padding-bottom, 15);
        @include vwUnit(padding-left, 15);
        @include typo(caption-1);
        opacity: 0.6;
        &__title {
            background-color: aqua;
        }
    }

    .input-group {
        @include vwUnit(margin-top, 7.5);
        @include vwUnit(margin-bottom, 7.5);
        .form-control {
            margin: 0;
        }
    }

    .input-group-text {
        padding: 0;
        @include vwUnit(padding-right, 10);
        @include vwUnit(padding-left, 10);
        @include vwUnit(width, 49);
        background-color: transparent;
        border-right: 0;
    }

    .input-group .form-control {
        border-left: 0;
    }

    &__search-icon {
        @include vwUnit(font-size, 24);
    }
}

::v-deep .themeBtn {
    @include vwUnit(margin-top, 7.5);
    @include vwUnit(margin-bottom, 7.5);
}
</style>
