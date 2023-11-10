<script setup lang="ts">
import { computed, ref } from 'vue'
import VTable from '@/components/base-components/v-table/VTable.vue'
import VTableRow from '@/components/base-components/v-table/VTableRow.vue'
import type { IBaseImage } from '@/types'
import { IBaseProduct, IOrderShort, IProductWithCount } from '@/types'
import VButton from '@/components/base-components/v-button/VButton.vue'
import VSlider from '@/components/base-components/v-slider/VSlider.vue'
import PackageSaleCheckoutCopyMenu from '@/components/package-sale-checkout/package-sale-checkout-copy-menu/PackageSaleCheckoutCopyMenu.vue'
import { checkOutTableColumns } from '@/mocks'
import VInput from '@/components/base-components/v-input/VInput.vue'

interface ICheckoutProduct extends IBaseProduct, IProductWithCount {}

interface ICheckOutOrdersProps {
  list: Array<IOrderShort>
  products: Array<ICheckoutProduct>
  orderIndex: string
}

interface IMovingProduct {
  orderIndex: string
  productId: string
}

interface IMovingProductWithPreviousOrderId extends IMovingProduct {
  previousOrderIndex: string
}

interface IChangeCount extends ICheckoutProduct {
  previousOrderIndex: string
}

const onChangeUnitOfProduct = (inputValue: Event, product: ICheckoutProduct) => {
  const input = inputValue.target as HTMLInputElement

  const data = {
    count: input.value,
    ...product,
    previousOrderIndex: props.orderIndex
  }
  emits('changeCount', data)
}

const props = defineProps<ICheckOutOrdersProps>()

const emits = defineEmits<{
  'update:products': [Array<IProductWithCount>]
  moveProduct: [IMovingProductWithPreviousOrderId]
  changeCount: [IChangeCount]
}>()

const activePhotos = ref<IBaseImage[]>([])

const getSubOrdersList = computed(() => {
  return props.list.filter((order) => order.orderIndex !== props.orderIndex)
})

const handleCloseSlider = () => {
  activePhotos.value = []
}

const onMoveProduct = (param: IMovingProduct) => {
  emits('moveProduct', {
    previousOrderIndex: props.orderIndex,
    ...param
  })
}
</script>

<template>
  <div class="package-sale-checkout-list">
    <VTable :table-head="checkOutTableColumns">
      <VTableRow
        v-for="(item, index) in products"
        :key="index"
        :item="item"
        :table-head="checkOutTableColumns"
      >
        <!-- :value не работает пока что modelValue -->
        <template #count>
          <VInput
            id="test"
            v-model="item.count"
            type="number"
            @input="onChangeUnitOfProduct($event, item)"
          />
        </template>

        <!-- actions -->
        <template #action>
          <PackageSaleCheckoutCopyMenu
            v-if="getSubOrdersList.length"
            class="package-sale-checkout-list__action-btn"
            :sub-orders-list="getSubOrdersList"
            :productId="item.id"
            @moveProduct="onMoveProduct"
          />

          <VButton
            class="package-sale-checkout-list__action-btn"
            @click="activePhotos = item.images"
          >
            <img
              src="@/assets/images/svg/eye.svg"
              alt="eye svg"
              class="row-actions__img"
            />
          </VButton>
        </template>
      </VTableRow>
    </VTable>
    <VSlider
      :images="activePhotos"
      @closeSlider="handleCloseSlider"
    />
  </div>
</template>
<style scoped lang="scss">
@import 'package-sale-checkout-list';
</style>
