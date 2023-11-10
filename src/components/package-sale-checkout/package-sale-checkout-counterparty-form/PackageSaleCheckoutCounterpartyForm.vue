<script setup lang="ts">
import VDialog from '@/components/base-components/v-dialog/VDialog.vue'
import { computed, reactive } from 'vue'
import VInput from '@/components/base-components/v-input/VInput.vue'
import VButton from '@/components/base-components/v-button/VButton.vue'
import { useProductsStore } from '@/stores/products'

interface ICounterpartyFormProps {
  isOpenedModal: boolean
}

const props = defineProps<ICounterpartyFormProps>()

const emit = defineEmits(['update:isOpenedModal'])

const { createCounterparty } = useProductsStore()

const value = computed({
  get: () => props.isOpenedModal,
  set: (val) => {
    emit('update:isOpenedModal', val)
  }
})

const counterparty = reactive({
  name: '',
  surname: '',
  lastName: '',
  phone: '',
  email: ''
})

const onCloseForm = () => {
  emit('update:isOpenedModal', false)
}

const onCreateForm = () => {
  createCounterparty({
    id: Math.floor(Math.random() * 100),
    ...counterparty
  }).then(() => {
    onCloseForm()
  })
}
</script>

<template>
  <div class="check-out-counterparty-form">
    <VDialog v-model="value">
      <form
        class="check-out-counterparty-form__wrapper"
        @submit.prevent="onCreateForm"
      >
        <VInput
          id="surname"
          v-model="counterparty.surname"
          class="check-out-counterparty-form__item"
        >
          Фамилия
        </VInput>

        <VInput
          id="name"
          v-model="counterparty.name"
          class="check-out-counterparty-form__item"
        >
          Имя
        </VInput>

        <VInput
          id="lastName"
          v-model="counterparty.lastName"
          class="check-out-counterparty-form__item"
        >
          Отчество
        </VInput>

        <VInput
          id="phone"
          v-model="counterparty.phone"
          class="check-out-counterparty-form__item"
        >
          Телефон
        </VInput>

        <VInput
          id="email"
          v-model="counterparty.email"
          type="email"
          class="check-out-counterparty-form__item"
        >
          Email
        </VInput>
        <div class="check-out-counterparty-form__action">
          <VButton
            class="check-out-counterparty-form__btn"
            @click="onCloseForm"
          >
            Отмена
          </VButton>

          <VButton class="check-out-counterparty-form__btn"> Создать </VButton>
        </div>
      </form>
    </VDialog>
  </div>
</template>

<style scoped lang="scss">
@import 'package-sale-checkout-counterparty-form';
</style>
