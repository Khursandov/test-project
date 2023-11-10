<script setup lang="ts">
import { computed } from 'vue'
import PackageSaleSubOrders from '@/components/package-sale-checkout/package-sale-checkout-sub-orders/PackageSaleSubOrders.vue'
import { IBaseProduct, IOrderShort, IProductWithCount } from '@/types'
import { deliveryTypes as deliveryTypesList } from '@/mocks'
import VSelect from '@/components/base-components/v-select/VSelect.vue'
import PackageSaleCheckoutList from '@/components/package-sale-checkout/package-sale-checkout-list/PackageSaleCheckoutList.vue'
import { useProductsStore } from '@/stores'

interface IPackageSaleCheckoutOrdersProps {
  activeOrder: string
  orders: Array<IOrderShort>
}

interface ICheckoutProduct extends IBaseProduct, IProductWithCount {}

const props = defineProps<IPackageSaleCheckoutOrdersProps>()

const emits = defineEmits<{
  'update:activeOrder': [string]
  'update:orders': [Array<IOrderShort>]
}>()

const productStore = useProductsStore()

const orders = computed({
  get: () => props.orders,
  set: (val) => {
    emits('update:orders', val)
  }
})

const onCreateSubOrder = (data: IOrderShort) => {
  orders.value.push(data)
}

const onDeleteSubOrder = (index: number) => {
  orders.value.splice(index, 1)
}

const onChangeActiveOrderIndex = (index: string) => {
  emits('update:activeOrder', index)
}

const onChangeCount = (param) => {
  const currentOrderIndex = getCurrentOrderIndex(param.previousOrderIndex)

  //   Find current product
  const productIndex = getProductIndex(String(currentOrderIndex), param.id)

  orders.value[currentOrderIndex].products[productIndex].count = param.count
}

const onMoveProduct = (param) => {
  //   Find new orderIndex to move product to it
  const newOrderIndex = orders.value.findIndex((item) => {
    return item.orderIndex === param.orderIndex
  })

  //   Find previous orderIndex to remove product from it
  const previousOrderIndex = getCurrentOrderIndex(param.previousOrderIndex)

  //   Find current product
  const productIndex = getProductIndex(String(previousOrderIndex), param.productId)

  const product = orders.value[previousOrderIndex].products[productIndex]

  //   Push product to new order
  orders.value[newOrderIndex].products.push(product)

  //   Remove product from previous order
  orders.value[previousOrderIndex].products.splice(productIndex, 1)
}

const getCurrentOrderIndex = (index: string) => {
  return orders.value.findIndex((item) => {
    return item.orderIndex === index
  })
}

const getProductIndex = (currentOrderIndex: string, productId: string) => {
  return orders.value[currentOrderIndex].products.findIndex(
    (product) => String(product.id) === String(productId)
  )
}

const getProductList = (orders: Array<IProductWithCount>): ICheckoutProduct[] => {
  const newOrdersList: ICheckoutProduct[] = []
  orders.forEach((item) => {
    const product: IBaseProduct | undefined = productStore.getProductById(item.id)
    if (product) {
      newOrdersList.push({ ...item, ...product })
    }
  })
  return newOrdersList
}
</script>

<template>
  <div class="package-sale-check-out-orders">
    <PackageSaleSubOrders
      :activeIndex="activeOrder"
      :orders="orders"
      @changeActiveOrderIndex="onChangeActiveOrderIndex"
      @createSubOrder="onCreateSubOrder"
      @deleteSubOrder="onDeleteSubOrder"
    />

    <div
      v-for="(order, index) in orders"
      v-show="index == activeOrder"
      :key="index"
      class=""
    >
      <VSelect
        v-model="order.deliveryType"
        label="Способо доставки"
        :data="deliveryTypesList"
      />

      <PackageSaleCheckoutList
        :list="orders"
        :orderIndex="order.orderIndex"
        :products="getProductList(order.products)"
        @moveProduct="onMoveProduct"
        @changeCount="onChangeCount"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'package-sale-checkout-orders';
</style>
