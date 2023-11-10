<script setup lang="ts">
import VButton from '@/components/base-components/v-button/VButton.vue'
import { IOrderShort } from '@/types'

interface ICheckOutOrdersProps {
  orders: Array<IOrderShort>
  activeIndex: string
}

const props = defineProps<ICheckOutOrdersProps>()

const emit = defineEmits<{
  createSubOrder: [IOrderShort]
  deleteSubOrder: [number]
  changeActiveOrderIndex: [string]
}>()

const onChangeActiveOrderList = (index: number) => {
  emit('changeActiveOrderIndex', String(index))
}

const onAddingSubOrder = () => {
  let lastIndex = Number(props.orders[props.orders.length - 1].orderIndex) + 1

  const newSubOrder: IOrderShort = {
    deliveryType: null,
    orderIndex: String(lastIndex++),
    products: []
  }

  emit('createSubOrder', newSubOrder)
}

const onDeleteSubOrder = (index: number) => {
  emit('deleteSubOrder', index)
}
</script>

<template>
  <div class="package-sale-sub-order">
    <div class="package-sale-sub-order__items">
      <div
        v-for="(order, index) in orders"
        :key="index"
        class="package-sale-sub-order__item"
        :class="{ 'package-sale-sub-order__item--active': activeIndex == index }"
        @click="onChangeActiveOrderList(index)"
      >
        Заказ {{ order.orderIndex }}

        <span @click.stop>
          <VButton @click="onDeleteSubOrder(index)">x</VButton>
        </span>
      </div>
    </div>

    <div class="package-sale-sub-order__add-btn">
      <VButton @click="onAddingSubOrder">+</VButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'package-sale-checkout-sub-orders';
</style>
