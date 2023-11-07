<template>
  <main class="default-container">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="shadow p-3">
            <!-- FORM VALIDATION -->

            <h5 class="mb-3">Form and Validation</h5>
            <VeeForm @submit="onSubmit">
              <div class="mb-3">
                <VeeField
                  v-slot="{ field, errors }"
                  v-model="form.name"
                  :name="$t('name')"
                  rules="required"
                >
                  <label for="name" class="form-label">{{ $t('name') }}</label>
                  <input
                    id="name"
                    v-bind="field"
                    class="form-control"
                    :class="{ 'is-invalid': errors.length > 0 }"
                  />
                  <div class="invalid-feedback">{{ errors[0] }}</div>
                </VeeField>
              </div>
              <div class="mb-3">
                <VeeField
                  v-slot="{ field, errors }"
                  v-model="form.address"
                  :name="$t('address')"
                  rules="required"
                >
                  <label for="address" class="form-label">
                    {{ $t('address') }}
                  </label>
                  <textarea
                    id="address"
                    v-bind="field"
                    class="form-control"
                    :class="{ 'is-invalid': errors.length > 0 }"
                  ></textarea>
                  <div class="invalid-feedback">{{ errors[0] }}</div>
                </VeeField>
              </div>
              <Button type="submit">
                {{ $t('submit') }}
              </Button>
            </VeeForm>

            <pre>{{ form }}</pre>
          </div>
        </div>

        <!--END OF FORM VALIDATION -->

        <div class="col-6">
          <div class="shadow p-3">
            <!--BUTTONS-->

            <div class="mb-3">
              <h5 class="mb-3">Button</h5>
              <div class="mb-1">
                <Button class="me-1" size="sm">Small</Button>
                <Button class="me-1">Normal</Button>
                <Button class="me-1" size="lg">Large</Button>
              </div>
              <div>
                <Button class="me-1" is-disabled>
                  Loading
                  <div
                    class="spinner-border spinner-border-sm ms-1"
                    role="status"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </Button>
                <Button class="me-1" variant="success"> Success </Button>
                <Button class="me-1" variant="danger">Danger </Button>
                <Button class="me-1" to="/" variant="link">Nuxt Link </Button>
                <Button href="https://www.google.com" target="_blank">
                  Link Href
                </Button>
              </div>
            </div>

            <!--END OF BUTTONS -->

            <!--MODAL-->
            <h5 class="mb-3">Modal</h5>
            <Button class="me-1" @click="$bModal.show('exampleModal')">
              Default Modal
            </Button>

            <!--END OF MODAL -->
          </div>
        </div>
      </div>
    </div>
    <Modal id="exampleModal">
      <template #title>Title</template>
      <template #body>Body Modal</template>
      <template #footer>
        <Button
          type="button"
          variant="secondary"
          @click="$bModal.hide('exampleModal')"
        >
          Close
        </Button>
        <button type="button" class="btn btn-primary" to="/">
          Save changes
        </button>
      </template>
    </Modal>
  </main>
</template>
<script setup lang="ts">
const { $bModal } = useNuxtApp()

const form = ref({ name: null, address: null })

const onSubmit = () => {
  alert('Submitted')
}

definePageMeta({
  title: 'Components',
  description: 'This is description components page'
})
</script>
