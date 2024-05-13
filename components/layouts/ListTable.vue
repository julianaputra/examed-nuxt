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
                    <th v-if="!$props.psikiater">Action</th>
                </tr>
            </thead>
            <!-- Table in list rumah sakit page -->
            <tbody v-if="!$props.psikiater">
                <tr>
                    <td
                        v-if="!$props.displayRecords.length"
                        class="text-center"
                        colspan="7"
                    >
                        Tidak ada data rumah sakit !
                    </td>
                </tr>
                <tr v-for="(item, index) in displayRecords" :key="index">
                    <td data-title="No">{{ item.no }}</td>
                    <td data-title="Kode Rs">{{ item.kode }}</td>
                    <td data-title="Nama Rs" class="list-table__name">
                        {{ item.nama }}
                    </td>
                    <td data-title="Jenis Rs" class="list-table__typo">
                        {{ item.jenis }}
                    </td>
                    <td data-title="Kelas Rs">{{ item.kelas }}</td>
                    <td data-title="Daerah" class="list-table__location">
                        {{ item.daerah }}
                    </td>
                    <td data-title="Action">
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
            <!-- table in psikiater page -->
            <tbody v-if="$props.psikiater">
                <tr>
                    <td
                        v-if="!$props.displayRecords.length"
                        class="text-center"
                        colspan="6"
                    >
                        Tidak ada data rumah sakit !
                    </td>
                </tr>
                <tr v-for="(item, index) in displayRecords" :key="index">
                    <td data-title="No">{{ item.no }}</td>
                    <td data-title="Nama Psikiater">{{ item.namaDokter }}</td>
                    <td data-title="Tempat Praktek" class="list-table__name">
                        {{ item.nama }}
                    </td>
                    <td data-title="Kabupaten/Kota" class="list-table__typo">
                        {{ item.daerah }}
                    </td>
                    <td data-title="Alamat">{{ item.alamat }}</td>
                    <td data-title="No. Tlpn" class="list-table__location">
                        {{ item.telepon }}
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
    },
    psikiater: {
        type: Boolean,
        default: false
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
        $space-y: 15;
        $space-x: 15;
        @include vwUnit(padding-top, $space-y);
        @include vwUnit(padding-right, $space-x);
        @include vwUnit(padding-bottom, $space-y);
        @include vwDesktop(padding-left, $space-x);
    }
}
.list-table {
    background-color: #ffffff;
    border: 1px solid rgba(233, 233, 233, 1);
    border-radius: 12px;

    &__name {
        width: 500px;

        @media only screen and (max-width: 800px) {
            width: 100%;
        }
    }

    &__typo {
        width: 150px;

        @media only screen and (max-width: 767px) {
            width: 100%;
        }
    }

    &__location {
        width: 200px;

        @media only screen and (max-width: 767px) {
            width: 100%;
        }
    }
    @media only screen and (max-width: 767px) {
        // responsive table
        table,
        thead,
        tbody,
        th,
        td,
        tr {
            display: block;
        }
        /* Hide table headers (but not display: none;, for accessibility) */
        thead tr {
            position: absolute;
            top: -9999px;
            left: -9999px;
        }
        tr {
            border: 1px solid #ccc;
        }

        td {
            /* Behave  like a "row" */
            border: none;
            border-bottom: 1px solid #eee;
            position: relative;
            padding-left: 50%;
            white-space: normal;
            text-align: left;
        }

        td:before {
            /* Now like a table header */
            position: absolute;
            /* Top/left values mimic padding */
            top: 6px;
            left: 6px;
            width: 45%;
            padding-right: 0px;
            white-space: nowrap;
            text-align: left;
            font-weight: bold;
        }

        /*
	Label the data
	*/
        td:before {
            content: attr(data-title);
        }

        // End Responsive table
    }
}
</style>
