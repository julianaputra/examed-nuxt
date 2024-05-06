<template>
    <Transition mode="out-in">
        <!-- Psikosis Tindaklanjut -->
        <UiCard :border="false">
            <!-- <template #title> Konten </template> -->
            <template #content>
                <div class="inputed-text">
                    <div id="sekilasMns" class="sekilas-mns">
                        <h2>Sekilas tentang ketentuan MNS prioritas</h2>
                        <ol class="sekilas-mns__list">
                            <li>
                                Presentasi ini menunjukkan perlunya penilaian
                            </li>
                            <li>
                                Jika orang datang dengan ciri-ciri lebih dari
                                satu kondisi,maka semua kondisi relevan perlu di
                                nilali
                            </li>
                            <li>
                                Semua ketentuan berlaku untuk segala usia,
                                kecuali ditentukan lain.
                            </li>
                            <li>
                                untuk presentasi darurat silahkan klik link ini
                                <a href="" class="text-red font-500"
                                    >Presentasi Darurat.</a
                                >
                            </li>
                        </ol>
                    </div>
                    <div id="depresi" class="depresi">
                        <h3>Depresi (DEP)</h3>
                        <ul>
                            <li>
                                Beberapa gejala fisik yang persisten tanpa
                                penyebab yang jelas
                            </li>
                            <li>Energi rendah, kelelahan, masalah tidur</li>
                            <li>
                                Kesedihan terus-menerus atau suasana hati
                                tertekan, kecemasan
                            </li>
                            <li>
                                Hilangnya minat atau kesenangan dalam aktivitas
                                yang biasanya menyenangkan
                            </li>
                        </ul>
                    </div>
                    <div id="psikosis">
                        <h3>Psikosis (PSY)</h3>
                        <ul>
                            <li>
                                Perubahan perilaku yang nyata; mengabaikan
                                tanggung jawab biasa yang berkaitan dengan
                                pekerjaan, sekolah, kegiatan rumah tangga atau
                                sosial
                            </li>
                            <li>
                                Agitasi, perilaku agresif, penurunan atau
                                peningkatan aktivitas
                            </li>
                            <li>
                                Memperbaiki keyakinan salah yang tidak dimiliki
                                oleh orang lain dalam budaya orang tersebu
                            </li>
                            <li>
                                Mendengar suara-suara atau melihat sesuatu yang
                                sebenarnya tidak ada
                            </li>
                            <li>
                                Kurangnya kesadaran bahwa seseorang sedang
                                mengalami masalah kesehatan mental
                            </li>
                        </ul>
                    </div>

                    <div id="cmh">
                        <h2>Gangguan Mental & Perilaku Anak & Remaja (CMH)</h2>
                        <p>
                            Gambaran umum gangguan emosi, perilaku, dan
                            perkembangan bervariasi berdasarkan usia pada
                            anak-anak dan remaja.
                        </p>

                        <span class="font-500"
                            >Anak/remaja yang diperiksa untuk keluhan fisik atau
                            pemeriksaan kesehatan umum yang memiliki:</span
                        >

                        <ul>
                            <li>
                                Masalah dengan perkembangan, emosi, atau
                                perilaku (misalnya kurangnya perhatian,
                                aktivitas berlebihan, atau perilaku menantang,
                                tidak patuh, dan agresif yang berulang-ulang)
                            </li>
                            <li>
                                Faktor risiko seperti malnutrisi, pelecehan
                                dan/atau penelantaran, sering sakit, penyakit
                                kronis (misalnya HIV/AIDS atau riwayat sulit
                                melahirkan)
                            </li>
                        </ul>

                        <span class="font-500"
                            >Pengasuh yang mempunyai kekhawatiran terhadap
                            anak/remaja:</span
                        >

                        <ul>
                            <li>
                                Kesulitan mengikuti teman sebaya atau melakukan
                                aktivitas sehari-hari dianggap normal sesuai
                                usia
                            </li>
                            <li>
                                Perilaku (misalnya terlalu aktif, agresif,
                                sering mengamuk dan/atau parah, terlalu ingin
                                menyendiri, menolak melakukan aktivitas rutin
                                atau bersekolah)
                            </li>
                        </ul>

                        <span class="font-500"
                            >Guru yang mempunyai kepedulian terhadap
                            anak/remaja</span
                        >

                        <ul>
                            <li>
                                misalnya mudah teralihkan, mengganggu di kelas,
                                sering mendapat masalah, kesulitan menyelesaikan
                                tugas sekolah
                            </li>
                        </ul>

                        <span class="font-500"
                            >Pekerja kesehatan masyarakat atau layanan sosial
                            yang mempunyai kekhawatiran terhadap
                            anak/remaja</span
                        >

                        <ul>
                            <li>
                                misalnya perilaku melanggar aturan atau hukum,
                                agresi fisik di rumah atau di masyarakat
                            </li>
                        </ul>
                    </div>
                    <div id="demensia">
                        <h3>Demensia (DEM)</h3>
                        <ul>
                            <li>
                                Penurunan atau masalah dengan ingatan (kelupaan
                                parah) dan orientasi (kesadaran akan waktu,
                                tempat dan orang)
                            </li>
                            <li>
                                Masalah suasana hati atau perilaku seperti
                                apatis (tampak tidak tertarik) atau mudah
                                tersinggung
                            </li>
                            <li>
                                Hilangnya kendali emosi (mudah kesal, mudah
                                tersinggung atau menangis)
                            </li>
                            <li>
                                Kesulitan dalam melakukan pekerjaan biasa,
                                aktivitas rumah tangga atau sosial
                            </li>
                        </ul>
                    </div>
                    <div id="sui">
                        <h3>Menyakiti Diri Sendiri / Bunuh Diri (SUI)</h3>
                        <ul>
                            <li>Keputusasaan dan keputusasaan yang ekstrim</li>
                            <li>
                                Pikiran saat ini, rencana atau tindakan
                                menyakiti diri sendiri/bunuh diri, atau
                                riwayatnya
                            </li>
                            <li>
                                Salah satu kondisi prioritas lainnya, nyeri
                                kronis, atau tekanan emosional ekstrem
                            </li>
                        </ul>
                    </div>

                    <div id="presentasiMns" class="presentasi-mns">
                        <h3>
                            Presentasi Kondisi
                            <span class="text-red">DARURAT</span>
                            MNS Prioritas
                        </h3>
                        <div class="table-responsive">
                            <table class="table">
                                <thead class="list-table">
                                    <tr>
                                        <th
                                            class="list-table__darurat text-red"
                                        >
                                            Presentasi Darurat
                                        </th>
                                        <th
                                            class="list-table__kondisi text-red"
                                        >
                                            Kondisi yang perlu Diperhatikan
                                        </th>
                                        <th class="list-table__modul text-red">
                                            Modul Terkait
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td
                                            data-title="Presentasi Darurat"
                                            class="list-table__name mb-0"
                                        >
                                            <ul class="mb-0">
                                                <li>
                                                    Tindakan menyakiti diri
                                                    sendiri dengan tanda-tanda
                                                    keracunan atau mabuk,
                                                    pendarahan akibat luka yang
                                                    dilakukan sendiri,
                                                    kehilangan kesadaran
                                                    dan/atau kelesuan ekstrem
                                                </li>
                                                <li class="mb-0">
                                                    Pikiran, rencana, atau
                                                    tindakan menyakiti diri
                                                    sendiri atau bunuh diri saat
                                                    ini, atau riwayat pemikiran,
                                                    rencana, atau tindakan
                                                    menyakiti diri sendiri atau
                                                    bunuh diri pada seseorang
                                                    yang saat ini sangat
                                                    gelisah, melakukan
                                                    kekerasan, tertekan, atau
                                                    kurang komunikasi
                                                </li>
                                            </ul>
                                        </td>
                                        <td
                                            data-title="Kondisi yang Perlu Diperhatikan"
                                        >
                                            <ul>
                                                <li>
                                                    Tindakan merugi diri yang
                                                    serius secara medis
                                                </li>
                                                <li>
                                                    Risiko terjadi merugikan
                                                    diri/bunuh diri
                                                </li>
                                            </ul>
                                        </td>
                                        <td class="table__underline">
                                            <NuxtLink to="#sui">SUI</NuxtLink>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            data-title="Modul Terkait"
                                            class="list-table__name"
                                        >
                                            <ul>
                                                <li>
                                                    Perilaku gelisah dan/atau
                                                    agresif
                                                </li>
                                            </ul>
                                        </td>
                                        <td><span>-</span></td>
                                        <td>
                                            <NuxtLink
                                                to="#demensia"
                                                class="table__underline"
                                                >DEM,</NuxtLink
                                            >
                                            &nbsp;
                                            <NuxtLink
                                                to="#psikosis"
                                                class="table__underline"
                                                >PSY</NuxtLink
                                            >
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </template>
        </UiCard>
    </Transition>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
$primary-color: #303178;

.sekilas-mns {
    padding-top: 0;
}

.table {
    @include vwUnit(margin-bottom, 0);
    width: 100%;

    %cellSpacing {
        $space-y: 15;
        $space-x: 15;
        @include vwUnit(padding-top, $space-y);
        @include vwUnit(padding-right, $space-x);
        @include vwUnit(padding-bottom, $space-y);
        @include vwUnit(padding-left, $space-x);
    }

    th {
        @extend %cellSpacing;
        @include vwUnit(padding-top, 10);
        @include vwUnit(padding-bottom, 10);
        border-bottom: 2px solid #d50303;
    }
    .list-table {
        &__darurat {
            width: 43%;
            @media screen and (max-width: 767px) {
                @include vwUnit(min-width, 280);
            }
        }
        &__kondisi {
            width: 40%;
            @media screen and (max-width: 767px) {
                @include vwUnit(min-width, 280);
            }
        }
        &__modul {
            width: auto;
            @media screen and (max-width: 767px) {
                @include vwUnit(min-width, 120);
            }
        }
    }
    tr:last-child {
        border: 0px none transparent;
    }

    td {
        $space-y: 15;
        $space-x: 15;
        @include vwUnit(padding-top, $space-y);
        @include vwUnit(padding-right, $space-x);
        @include vwUnit(padding-bottom, $space-y);
        @include vwDesktop(padding-left, $space-x);
        vertical-align: middle;
    }

    &__underline {
        text-decoration: underline;
    }
}
</style>
