<script setup lang="ts">
import type { IBaseProduct, IBaseImage } from '@/types'

import VTooltip from '@/components/base-components/v-tooltip/VTooltip.vue'
import VButton from '@/components/base-components/v-button/VButton.vue'

interface IProductRowProps {
  product: IBaseProduct
  isTablePhotosShown: boolean
}
type IRowEmits = {
  addProduct: [IBaseProduct]
  changeActivePhotos: [IBaseImage[]]
}

const emit = defineEmits<IRowEmits>()
defineProps<IProductRowProps>()
</script>

<template>
  <tr class="products-table__row">
    <td class="products-table__item">{{ product.code }}</td>
    <td class="products-table__item">{{ product.name }}</td>
    <td class="products-table__item">{{ product.additionalInfo }}</td>
    <td class="products-table__item">{{ product.unit }}</td>
    <td class="products-table__item">{{ product.shortShipping }}</td>
    <td class="products-table__item">{{ product.price }}</td>
    <td class="products-table__item">{{ product.reserveCount }}</td>
    <td class="products-table__item">{{ product.freeCount }}</td>
    <td class="products-table__item">{{ product.onWayCount }}</td>
    <td class="products-table__item row-actions">
      <VTooltip
        v-if="isTablePhotosShown"
        tooltip="Открыть изображения"
      >
        <VButton>
          <img
            :src="product.images[0].src"
            :alt="product.images[0].name"
            class="row-actions__img"
            @click.stop="emit('changeActivePhotos', product.images)"
          />
        </VButton>
      </VTooltip>
      <VTooltip tooltip="Добавить в корзину">
        <VButton
          class="row-actions__add-btn"
          @click="emit('addProduct', product)"
        >
          <img
            src="../../../assets/images/svg/plus-icon.svg"
            alt="plus"
          />
        </VButton>
      </VTooltip>
    </td>
  </tr>
</template>

<style lang="scss">
@import 'products-table';
</style>
