<template>
    <div class="list-table">
        <table class="table">
            <thead>
                <tr>
                    <th
                        v-for="(header, headerIndex) in props.header"
                        :key="headerIndex"
                    >
                        {{ header }}
                    </th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in displayRecords" :key="index">
                    <td>{{ item.no }}</td>
                    <td>{{ item.kode }}</td>
                    <td class="list-table__name">{{ item.nama }}</td>
                    <td class="list-table__typo">{{ item.jenis }}</td>
                    <td>{{ item.kelas }}</td>
                    <td class="list-table__location">{{ item.daerah }}</td>
                    <td>
                        <a
                            :href="item.map"
                            target="_blank"
                            class="list-table__link"
                        >
                            Google Maps
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    header: {
        type: Array,
        default: () => []
    },
    rsList: {
        type: Array,
        default: () => []
    },
    displayRecords: {
        type: Array,
        default: () => []
    }
})

// const items = defineModel('items')

// const currentLocation = defineModel('currentLocation')

// const showItems = computed(() => {
//     return items.value[currentLocation.value - 1]
// })

// function itemNumber(index: Number) {
//     return +index + 1
// }
</script>

<style lang="scss" scoped>
.list-table {
    background-color: #ffffff;
    border: 1px solid rgba(233, 233, 233, 1);
    border-radius: 12px;

    &__name {
        width: 500px;
    }

    &__typo {
        width: 150px;
    }

    &__location {
        width: 200px;
    }
}

.table {
    %cellSpacing {
        $space-y: 15;
        $space-x: 15;
        @include vwUnit(padding-top, $space-y);
        @include vwUnit(padding-right, $space-x);
        @include vwUnit(padding-bottom, $space-y);
        @include vwUnit(padding-left, $space-x);
    }

    width: 100%;
    th {
        @extend %cellSpacing;
        @include vwUnit(padding-top, 30);
        border-bottom: 2px solid #000000;
    }
    td {
        @extend %cellSpacing;
    }
}
</style>
