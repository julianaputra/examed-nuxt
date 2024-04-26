<template>
    <Transition mode="out-in">
        <!-- Psikosis Tindaklanjut -->
        <UiCard :border="false">
            <!-- <template #title> Konten </template> -->
            <template #content>
                <div class="inputed-text">
                    <div id="sekilasMns" class="sekilas-mns">
                        <h2>Sekilas tentang ketentuan MNS prioritas</h2>
                        <ol>
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
                                <a href="" class="sekilas-mns__darurat"
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

                    <div id="cmh" class="gangguan-cmh">
                        <h2>Gangguan Mental & Perilaku Anak & Remaja (CMH)</h2>
                        <p>
                            Gambaran umum gangguan emosi, perilaku, dan
                            perkembangan bervariasi berdasarkan usia pada
                            anak-anak dan remaja.
                        </p>

                        <span class="gangguan-cmh__title"
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

                        <span class="gangguan-cmh__title"
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

                        <span class="gangguan-cmh__title"
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

                        <span class="gangguan-cmh__title"
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
                            <span class="presentasi-mns__darurat">DARURAT</span>
                            MNS Prioritas
                        </h3>
                        <div class="table-responsive">
                            <table class="table">
                                <thead class="">
                                    <tr>
                                        <th
                                            class="text-danger list-table__darurat"
                                        >
                                            Presentasi Darurat
                                        </th>
                                        <th
                                            class="text-danger list-table__kondisi"
                                        >
                                            Kondisi yang perlu Diperhatikan
                                        </th>
                                        <th
                                            class="text-danger list-table__modul"
                                        >
                                            Modul Terkait
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-bottom">
                                        <td
                                            data-title="Presentasi Darurat"
                                            class="list-table__name"
                                        >
                                            <ul>
                                                <li>
                                                    <p>
                                                        Tindakan menyakiti diri
                                                        sendiri dengan
                                                        tanda-tanda keracunan
                                                        atau mabuk, pendarahan
                                                        akibat luka yang
                                                        dilakukan sendiri,
                                                        kehilangan kesadaran
                                                        dan/atau kelesuan
                                                        ekstrem
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        Pikiran, rencana, atau
                                                        tindakan menyakiti diri
                                                        sendiri atau bunuh diri
                                                        saat ini, atau riwayat
                                                        pemikiran, rencana, atau
                                                        tindakan menyakiti diri
                                                        sendiri atau bunuh diri
                                                        pada seseorang yang saat
                                                        ini sangat gelisah,
                                                        melakukan kekerasan,
                                                        tertekan, atau kurang
                                                        komunikasi
                                                    </p>
                                                </li>
                                            </ul>
                                        </td>
                                        <td
                                            data-title="Kondisi yang Perlu Diperhatikan"
                                        >
                                            <ul>
                                                <li>
                                                    <p>
                                                        Tindakan merugi diri
                                                        yang serius secara medis
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        Risiko terjadi merugikan
                                                        diri/bunuh diri
                                                    </p>
                                                </li>
                                            </ul>
                                        </td>
                                        <td class="table__underline">SUI</td>
                                    </tr>
                                    <tr>
                                        <td
                                            data-title="Modul Terkait"
                                            class="list-table__name"
                                        >
                                            <ul>
                                                <li>
                                                    <p>
                                                        Tindakan menyakiti diri
                                                        sendiri dengan
                                                        tanda-tanda keracunan
                                                        atau mabuk, pendarahan
                                                        akibat luka yang
                                                        dilakukan sendiri,
                                                        kehilangan kesadaran
                                                        dan/atau kelesuan
                                                        ekstrem
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        Perilaku gelisah
                                                        dan/atau agresif
                                                    </p>
                                                </li>
                                            </ul>
                                        </td>
                                        <td><span>-</span></td>
                                        <td>
                                            <span class="table__underline"
                                                >DEM,</span
                                            >
                                            &nbsp;
                                            <span class="table__underline"
                                                >PSY</span
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
$danger-color: #b5222a;
.sekilas-mns {
    padding-top: 0;
    ol &__darurat {
        color: $danger-color;
        font-weight: 500;
    }
}

.gangguan-cmh {
    &__title {
        font-weight: 500;
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
        @include vwUnit(padding-top, 10);
        @include vwUnit(padding-bottom, 10);
        border-bottom: 2px solid #d50303;
    }
    th:nth-child(1) {
        @media screen and (max-width: 576px) {
            min-width: 220px;
        }
    }
    th:nth-child(2) {
        @media screen and (max-width: 576px) {
            min-width: 220px;
        }
    }
    th:nth-child(3) {
        @media screen and (max-width: 576px) {
            min-width: 120px;
        }
    }
    td {
        $space-y: 15;
        $space-x: 15;
        @include vwUnit(padding-top, $space-y);
        @include vwUnit(padding-right, $space-x);
        @include vwUnit(padding-bottom, $space-y);
        @include vwDesktop(padding-left, $space-x);
    }

    &__underline {
        text-decoration: underline;
    }
}
.list-table {
    &__darurat {
        width: 40%;
    }
    &__kondisi {
        width: 40%;
    }
    &__modul {
        width: 20%;
    }
}
.border-bottom {
    border: #0000;
}
.presentasi-mns {
    &__darurat {
        color: $danger-color;
    }
}
</style>
