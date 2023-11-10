<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import type {
  ISortState,
  IBaseImage,
  IBaseProduct,
  TNullable,
  IProductShort,
  ESortableFields
} from '@/types'
import { ESortOrder } from '@/types'
import { normalizeFiltersQuery } from '@/utils'
import { useValueSets, useProductsStore } from '@/stores'
import { productsTableColumns } from '@/mocks'

import VSlider from '@/components/base-components/v-slider/VSlider.vue'
import VPagination from '@/components/base-components/v-pagination/VPagination.vue'
import PackageSaleCheckoutMain from '@/components/package-sale-checkout/PackageSaleCheckoutMain.vue'
import ProductRow from '@/components/products/products-table/ProductRow.vue'

interface ITableProps {
  isCheckoutShown: boolean
  isTablePhotosShown: boolean
  sortBy: TNullable<ISortState>
}
type TableEmits = {
  changeSort: [ISortState]
  addProduct: [IProductShort]
  toggleCheckoutShown: [void]
}

const emit = defineEmits<TableEmits>()
const props = withDefaults(defineProps<ITableProps>(), {
  isTablePhotosShown: false
})

const route = useRoute()
const productStore = useProductsStore()
const valueSets = useValueSets()

const { state } = storeToRefs(valueSets)
const { productsState } = storeToRefs(productStore)

const activePhotos = ref<IBaseImage[]>([])
const page = ref<number>(1)
const pageSize = ref<number>(20)

const handleCloseSlider = () => {
  activePhotos.value = []
}

const handlePageChange = (newPage: number) => {
  page.value = newPage
}

const handleSort = (sortKey: ESortableFields) => {
  const newSort: ISortState = {
    sortKey: sortKey,
    sortOrder: ESortOrder.ASC
  }

  if (props.sortBy?.sortOrder === ESortOrder.ASC) {
    newSort.sortOrder = ESortOrder.DESC
  }

  emit('changeSort', newSort)
}

const handleAddItem = (item: IBaseProduct) => {
  emit('addProduct', { id: String(item.id), categoryId: String(item.categoryId) })
}

const handleToggleCheckoutShown = () => {
  emit('toggleCheckoutShown')
}

watch(
  () => route.query,
  () => {
    if (state.value.filterValueSets.data) {
      productStore.getProductList(
        normalizeFiltersQuery(route.query, state.value.filterValueSets.data)
      )
    }
  }
)

onMounted(() => {
  productStore.getProductList({})
})
</script>
<template>
  <div
    v-if="productsState.productsList.loading"
    class="spinner"
  />
  <table class="products-table">
    <thead class="products-table__head">
      <tr class="products-table__row">
        <th
          v-for="product in productsTableColumns"
          :key="product.id"
          class="products-table__item table-item__head"
          :class="{
            ['table-item__head_active']: product.sortValue
          }"
          @click="product.sortValue && handleSort(product.sortValue)"
        >
          <img
            v-if="sortBy && sortBy.sortKey === product.sortValue"
            class="table-item__head-img"
            :class="{
              ['table-item__head-img_reversed']: sortBy.sortOrder === ESortOrder.ASC
            }"
            src="../../../assets/images/svg/sort.svg"
            alt="sort svg"
          />
          <span class="table-item__label">{{ product.label }}</span>
        </th>
      </tr>
    </thead>
    <tbody
      v-if="productsState.productsList.data"
      class="products-table__body"
      :class="{
        ['products-table__body_short']: isCheckoutShown
      }"
    >
      <ProductRow
        v-for="product in productsState.productsList.data"
        :key="product.id"
        :product="product"
        :isTablePhotosShown="isTablePhotosShown"
        @addProduct="handleAddItem(product)"
        @changeActivePhotos="activePhotos = $event"
      />
    </tbody>
    <div
      class="checkout-tabs"
      :class="{
        ['checkout-tabs_opened']: isCheckoutShown
      }"
    >
      <span
        class="checkout-tabs__toggle-button"
        :class="{
          ['checkout-tabs__toggle-button_opened']: isCheckoutShown
        }"
        @click="handleToggleCheckoutShown"
      >
        <img
          alt="chevron"
          src="../../../assets/images/svg/chevron.svg"
        />
      </span>
    </div>
    <tfoot class="products-table__footer">
      <VPagination
        :totalSize="300"
        :pageSize="pageSize"
        :page="page"
        affectUrl
        @onPageChange="handlePageChange($event)"
      />
    </tfoot>
  </table>

  <VSlider
    :images="activePhotos"
    @closeSlider="handleCloseSlider"
  />
</template>

<style lang="scss">
@import 'products-table';
</style>
