<template>
    <main class="kontak">
        <div class="container">
            <UiBreadcrumbs :breadcrumbs="breadcrumbs"></UiBreadcrumbs>
            <div class="row">
                <div class="col-12 col-lg-5">
                    <div class="kontak__info">
                        <h1 class="kontak__title">Kontak</h1>
                        <p class="kontak__desc">
                            Apakah Anda ingin menggunkaan produk kakmi? Apakah
                            Anda memiliki pertanyaan tentang kami? Jangan ragu
                            untuk menghubungi kami,
                        </p>
                        <div class="kontak__info-container">
                            <h2 class="kontak__info-title">
                                <Icon
                                    name="material-symbols:mail-rounded"
                                    class="kontak__info-icon"
                                />
                                Email Support
                            </h2>
                            <p class="kontak__info-desc">
                                Silakan kirimkan email kepada kami.
                            </p>
                            <p class="kontak__info-desc">
                                <a
                                    href="mailto:info@examed.id?"
                                    target="_blank"
                                    class="kontak__info-link"
                                >
                                    info@examed.id
                                </a>
                            </p>
                        </div>
                        <div class="kontak__info-container">
                            <h2 class="kontak__info-title">
                                <Icon
                                    name="ic:baseline-whatsapp"
                                    class="kontak__info-icon"
                                />
                                Whatsapp
                            </h2>
                            <p class="kontak__info-desc">
                                Jangan ragu untuk menghubungi kami.
                            </p>
                            <p class="kontak__info-desc">
                                <a
                                    href="https://wa.me/621234567890"
                                    target="_blank"
                                    class="kontak__info-link"
                                >
                                    +62 123 456 7890
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-7">
                    <Form>
                        <div class="form-group">
                            <label class="form-label">Nama</label>
                            <Field
                                :rules="isRequired"
                                name="nama"
                                type="text"
                                class="form-control"
                            />
                            <ErrorMessage
                                class="form__error-message"
                                name="nama"
                            />
                        </div>
                        <div class="form-group">
                            <label class="form-label">No. HP</label>
                            <Field
                                @keydown="validateInput"
                                v-model="phoneNumber"
                                :rules="isRequired"
                                name="no-hp"
                                type="numeric"
                                class="form-control"
                            />
                            <ErrorMessage
                                class="form__error-message"
                                name="no-hp"
                            />
                        </div>
                        <div class="form-group">
                            <label class="form-label">Email</label>
                            <Field
                                :rules="isRequired"
                                name="email"
                                type="mail"
                                class="form-control"
                            />
                            <ErrorMessage
                                class="form__error-message"
                                name="email"
                            />
                        </div>
                        <div class="form-group">
                            <label class="form-label">Pesan</label>
                            <Field
                                :rules="isRequired"
                                as="textarea"
                                rows="6"
                                name="pesan"
                                class="form-control"
                            />
                        </div>
                        <button class="themeBtnBold">
                            <span> Kirim </span>
                        </button>
                    </Form>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { nextTick } from 'process'
import { Form, Field, ErrorMessage } from 'vee-validate'
import type { Breadcrumb } from '../types/index'

useHead({
    title: `Kontak`,
    meta: [
        {
            name: 'description',
            content: 'info@examed.id'
        }
    ]
})

const phoneNumber: any = ref('')
const validateInput = (e: any) => {
    const allowedKeys = [8, 37, 39, 187]
    if (
        (e.keyCode >= 48 && e.keyCode <= 57) || // Numeric keys
        e.keyCode === 43 || // +
        allowedKeys.includes(e.keyCode)
    ) {
        return true // Allow the key to be entered
    } else {
        e.preventDefault() // Prevent the default action (typing the character)
        return false // Block the key from being entered
    }
}
const extractedNumbers = ref('')
const extractNumbers = () => {
    // Use regex to match digits
    const numbers = phoneNumber.value.match(/\d+/g)
    // Join the matched digits into a single string
    extractedNumbers.value = numbers ? numbers.join('') : ''
}
const handleInput = () => {
    phoneNumber.value = phoneNumber.value.replace(/\D/g, '')
    extractNumbers()
}

onMounted(() => {
    //   nextTick(async () => {
    breadcrumbs.value = [
        {
            title: 'Home',
            to: '/'
        },
        {
            title: 'Kontak',
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
.kontak {
    @include vwUnit(padding-top, 80, 40);
    @include vwUnit(padding-bottom, 100, 50);
    background: rgba(246, 247, 254, 1);

    label {
        @include vwUnit(margin-bottom, 10);
    }

    &__title {
        @include vwUnit(margin-bottom, 15);
        @include typo(heading-1);
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
    @include vwUnit(padding-bottom, 40);
}

// remove increase and decrease number
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
