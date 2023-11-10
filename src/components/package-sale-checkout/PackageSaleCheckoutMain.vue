<script setup lang="ts">
import { computed, reactive } from 'vue'
import PackageSaleCheckoutHead from '@/components/package-sale-checkout/package-sale-checkout-head/PackageSaleCheckoutHead.vue'
import PackageSaleCheckoutOrders from '@/components/package-sale-checkout/package-sale-checkout-orders/PackageSaleCheckoutOrders.vue'
import type { IBaseCounterparty, IOrderData, IOrderShort } from '@/types'
import VButton from '@/components/base-components/v-button/VButton.vue'

interface IPackageSaleCheckoutMainProps {
  activeOrder: string
  orders: Array<IOrderShort>
}

const props = defineProps<IPackageSaleCheckoutMainProps>()

const emits = defineEmits<{
  'update:activeOrder': [string]
  'update:orders': [Array<IOrderShort>]
}>()

let orderData = reactive<Array<IOrderData>>([])

const counterparty = reactive<IBaseCounterparty | null>(null)

const activeOrder = computed({
  get: () => props.activeOrder,
  set: (val) => emits('update:activeOrder', val)
})

const orders = computed({
  get: () => props.orders,
  set: (val) => emits('update:orders', val)
})

const onSubmit = () => {
  orderData = orders.value.map((order) => {
    return {
      counterparty: counterparty,
      ...order
    }
  })
  console.log(orders, orderData)
}
</script>

<template>
  <div class="package-sale-check-out">
    <!-- <CheckOutAdditionalInfo /> -->

    <PackageSaleCheckoutHead v-model:counterparty="counterparty" />

    <PackageSaleCheckoutOrders
      v-model:activeOrder="activeOrder"
      v-model:orders="orders"
    />

    <VButton
      class="package-sale-check-out__submit-btn"
      @click="onSubmit"
      >Submit</VButton
    >
  </div>
</template>
<style scoped lang="scss">
.package-sale-check-out {
  padding: 20px;
}
</style>
