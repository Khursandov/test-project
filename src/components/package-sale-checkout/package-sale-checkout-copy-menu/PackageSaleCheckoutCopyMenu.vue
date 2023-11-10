<script setup lang="ts">
import { ref } from 'vue'
import VButton from '@/components/base-components/v-button/VButton.vue'
import { IOrderShort } from '@/types'

interface IPackageSaleCheckoutCopyMenu {
  subOrdersList: Array<IOrderShort>
  productId: string
}

interface IMovingProduct {
  orderIndex: string
  productId: string
}

const emit = defineEmits<{
  moveProduct: [IMovingProduct]
}>()

const props = defineProps<IPackageSaleCheckoutCopyMenu>()

const isMenuOpen = ref(false)

const handleIsMenuOpen = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const onSelectSubOrder = (index: string) => {
  emit('moveProduct', { orderIndex: index, productId: props.productId })

  handleIsMenuOpen()
}

// const text = ref('')
</script>

<template>
  <div class="package-sale-checkout-copy-menu">
    <VButton @click="handleIsMenuOpen">
      <img
        src="@/assets/images/svg/copy.svg"
        alt="eye svg"
        class="row-actions__img"
      />
    </VButton>
    <div
      v-if="isMenuOpen"
      class="package-sale-checkout-copy-menu__wrapper"
    >
      <!--      <VInput-->
      <!--        id="copy_menu"-->
      <!--        v-model="text"-->
      <!--      />-->
      <ul class="package-sale-checkout-copy-menu__list">
        <li
          v-for="(subOrder, index) in subOrdersList"
          :key="index"
          class="package-sale-checkout-copy-menu__item"
          @click="onSelectSubOrder(subOrder.orderIndex)"
        >
          Заказ {{ subOrder.orderIndex }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'package-sale-checkout-copy-menu';
</style>
