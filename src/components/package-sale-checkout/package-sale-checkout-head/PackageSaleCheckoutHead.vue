<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import VSelect from '@/components/base-components/v-select/VSelect.vue'
import VButton from '@/components/base-components/v-button/VButton.vue'
import CheckOutCounterpartyForm from '@/components/package-sale-checkout/package-sale-checkout-counterparty-form/PackageSaleCheckoutCounterpartyForm.vue'
import type { IBaseCounterparty } from '@/types'
import { usePackageSaleStore } from '@/stores/packageSale'

interface IPackageSaleCheckOutHead {
  counterparty: IBaseCounterparty | null
}

const props = defineProps<IPackageSaleCheckOutHead>()

const emit = defineEmits<{
  'update:counterparty': [IBaseCounterparty]
}>()

const { packageSaleState, getCounterpartyList } = usePackageSaleStore()

onMounted(() => {
  getCounterpartyList()
})

const counterpartyModal = ref(false)

const counterparty = computed({
  get: () => props.counterparty,
  set: (val) => {
    emit('update:counterparty', val)
  }
})

const onOpenCounterpartyForm = () => {
  counterpartyModal.value = true
}
</script>

<template>
  <div class="package-sale-check-out-head">
    <div class="package-sale-check-out-head__counterparty">
      <!--   Need to refactor VSelect component   -->
      {{ counterparty }}
      <VSelect
        v-model="counterparty"
        label="Контрагент"
        :data="packageSaleState.counterpartyList.data || []"
        text-property="name"
      />

      <div class="package-sale-check-out-head__action">
        <VButton @click="onOpenCounterpartyForm">+</VButton>
      </div>
    </div>

    <CheckOutCounterpartyForm v-model:isOpenedModal="counterpartyModal" />
  </div>
</template>

<style scoped lang="scss">
@import 'package-sale-checkout-head';
</style>
