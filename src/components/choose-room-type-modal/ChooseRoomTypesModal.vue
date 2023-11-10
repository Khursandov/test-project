<script setup lang="ts">
import { ref } from 'vue'
import { roomTypes } from '@/mocks/valueSets'
import type { ERoomTypes } from '@/types'

import VCheckbox from '@/components/base-components/v-checkbox/VCheckbox.vue'
import VButton from '@/components/base-components/v-button/VButton.vue'
import { useProductsStore } from '@/stores/products'

const IS_MODAL_SHOWN = false // как будет ясно что сайдбар не нужен - удалить компонентку

const { setCreateModalState, setSidebarState } = useProductsStore()

const selectedTypes = ref<ERoomTypes[]>([])

const save = () => {
  setCreateModalState(false)
  setSidebarState(true)
}

const cancel = () => {
  setCreateModalState(false)
}
</script>

<template>
  <teleport
    v-if="IS_MODAL_SHOWN"
    to="body"
  >
    <div class="modal__wrapper">
      <div class="modal__content">
        <div class="modal__body">
          <div
            v-for="roomType in roomTypes"
            :key="roomType.id"
            class="modal__item"
          >
            <VCheckbox
              :id="String(roomType.id)"
              v-model="selectedTypes"
              :value="roomType.value"
            >
              {{ roomType.label }}
            </VCheckbox>
          </div>
        </div>

        <div class="modal__buttons">
          <VButton
            class="modal__button-item"
            @click="save"
            >Сохранить</VButton
          >
          <VButton
            class="modal__button-item"
            @click="cancel"
            >Отмена</VButton
          >
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped lang="scss">
@import 'choose-room-type-modal';
</style>
