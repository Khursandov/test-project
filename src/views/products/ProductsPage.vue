<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { IOrderState, IProductShort, ISortState, TNullable } from '@/types'

import ProductsTable from '@/components/products/products-table/ProductsTable.vue'
import ChooseRoomTypesModal from '@/components/choose-room-type-modal/ChooseRoomTypesModal.vue'
import ProductsFilters from '@/components/products/products-filters/ProductsFilters.vue'
import PackageSaleCheckoutMain from '@/components/package-sale-checkout/PackageSaleCheckoutMain.vue'

const ordersState = reactive<IOrderState>({
  activeOrder: '0',
  orders: [
    {
      deliveryType: null,
      orderIndex: '0',
      products: []
    }
  ]
})
const isTablePhotosShown = ref<boolean>(false)
const isCheckoutShown = ref<boolean>(false)
const sortBy = ref<TNullable<ISortState>>(null)

const handleToggleCheckoutShown = () => {
  isCheckoutShown.value = !isCheckoutShown.value
}

const handleToggleTablePhotosShown = () => {
  isTablePhotosShown.value = !isTablePhotosShown.value
}

const handleSortChange = (newSort: ISortState) => {
  sortBy.value = newSort
}

const handleAddNewProduct = (productData: IProductShort) => {
  const activeOrder = ordersState.orders.find((elem) => elem.orderIndex === ordersState.activeOrder)
  if (!activeOrder) return

  const currentProduct = activeOrder?.products.find((product) => product.id === productData.id)

  if (!isCheckoutShown.value) isCheckoutShown.value = true

  if (currentProduct) {
    currentProduct.count++

    return
  }

  activeOrder.products.push({ ...productData, count: 1 })
}
</script>

<template>
  <main class="app-body">
    <ProductsFilters
      :isCheckoutShown="isCheckoutShown"
      :sortBy="sortBy"
      @toggleTablePhotosShown="handleToggleTablePhotosShown"
      @toggleCheckoutShown="handleToggleCheckoutShown"
    />
    <ProductsTable
      :isCheckoutShown="isCheckoutShown"
      :sortBy="sortBy"
      :isTablePhotosShown="isTablePhotosShown"
      @addProduct="handleAddNewProduct($event)"
      @changeSort="handleSortChange($event)"
      @toggleCheckoutShown="handleToggleCheckoutShown"
    />
    <ChooseRoomTypesModal :isShown="false" />

    <PackageSaleCheckoutMain
      v-model:activeOrder="ordersState.activeOrder"
      v-model:orders="ordersState.orders"
    />
  </main>
</template>

<style lang="scss">
@import '@/assets/scss/main';
</style>
