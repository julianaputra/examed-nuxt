<template>
    <div class="about-desc">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-xl-5">
                    <h1 class="about-desc__title">Tentang Kami</h1>
                    <p>
                        Website ini berisikan panduan skrining dan tata laksana
                        gangguan mental bagi dokter dan tenaga kesehatan di
                        puskesmas yang dapat membantu Anda dalam memberikan
                        pelayanan kesehatan yang lebih baik.
                        <br />
                        <br />
                        Panduan ini diadaptasi dari panduan internasional mental
                        health gap action program (mhGAP IG) yang disusun dan
                        dipublikasikan oleh World Health Organization (WHO)
                        dikombinasikan dengan konsep kedokteran keluarga serta
                        aspek kehidupan sosial. Kepercayaan (Agama Hindu),
                        budaya dan adat istiadat masyarakat Bali.
                        <br />
                        <br />
                        Panduan ini mencakup informasi tentang skrining, tata
                        laksana dan tindak lanjut kasus-kasus gangguan mental
                        yang paling umum ditemukan pada pasien yang berobat ke
                        puskesmas. Panduan ini juga memberikan informasi tentang
                        obat-obatan yang digunakan dalam tata laksana gangguan
                        mental dan cara mengatasi efek sampingnya. Selain itu,
                        panduan ini juga membahas tentang penanganan kasus-kasus
                        khusus seperti gangguan mental pada ibu hamil, anak dan
                        remaja serta kelompok lanjut usia (lansia).
                    </p>
                </div>
                <div class="col-12 col-xl-6 offset-xl-1 text-center">
                    <div class="about-desc__image-container">
                        <img
                            src="/images/about_image.png"
                            alt="Tentang Kami Picture"
                            class="ratio-item"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.about-desc {
    @include vwUnit(padding-top, 40, 30);
    @include vwUnit(padding-bottom, 50, 30);

    @include imageRatio(810, 720, true);

    &__image-container {
        @media (max-width: 1199px) {
            margin-top: unit(60, 1199);
            max-width: unit(670, 1199);
        }

        @include vwMobile(margin-top, 60);
        @include vwMobile(max-width, 670);
    }

    &__title {
        @include vwUnit(margin-bottom, 40, 30);
        @include typo(heading-1);
    }
}
</style>
