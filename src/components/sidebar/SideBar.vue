<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import { ERoomTypes } from '@/types'
import { RoomTypeLabels } from '@/mocks/mockData'
import VButton from '@/components/base-components/v-button/VButton.vue'

const { setSidebarState, productsState, setCurrentRoomType } = useProductsStore()

const changeVisibility = () => {
  setSidebarState(!productsState.isSidebarShown)
}

const handleRoomTypeClick = (payload: ERoomTypes) => {
  setCurrentRoomType(payload)
}

const handleClearRoomTypesClick = () => {
  productsState.currentRoomType = null
}

const handleAddRoomTypeClick = () => {
  productsState.isCreateSaleModalOpen = true
}

const handleDeleteRoomTypeClick = (roomType: ERoomTypes) => {
  console.log(roomType)
}
</script>
<template>
  <div
    class="sidebar-wrapper"
    :class="{
      'sidebar-wrapper_opened': productsState.isSidebarShown,
      'sidebar-wrapper_active': !!productsState.currentRoomType
    }"
    @click="changeVisibility"
  >
    <img
      src="../../assets/images/svg/arrow.svg"
      alt="arrow"
      class="sidebar-wrapper__arrow"
      :class="{ 'sidebar-wrapper__arrow-closed': productsState.isSidebarShown }"
    />
  </div>

  <div
    v-if="productsState.isSidebarShown"
    class="sidebar"
  >
    <div class="container sidebar__content">
      <div class="sidebar__top">
        <VButton
          class="sidebar__top-item"
          @click="handleAddRoomTypeClick"
          >Добавить тип комнаты</VButton
        >
      </div>
      <div v-if="productsState.roomsWithCategories">
        <div
          v-for="[roomType, categories] in Object.entries(productsState.roomsWithCategories)"
          :key="roomType"
          class="sidebar__item"
        >
          <span
            class="sidebar__item-label"
            :class="{
              'sidebar__item-label_active':
                productsState.currentRoomType === (roomType as ERoomTypes)
            }"
            @click="handleRoomTypeClick(roomType as ERoomTypes)"
          >
            {{ RoomTypeLabels[roomType as ERoomTypes] }}
            <VButton @click.stop="handleDeleteRoomTypeClick(roomType as ERoomTypes)">
              &times;
            </VButton>
          </span>

          <div class="room-types__subtypes subtypes">
            <span
              v-for="category in categories"
              :key="category.id"
              class="subtypes__item"
              :class="{ 'subtypes__active-item': category.isActive }"
            >
              {{ category.label }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar__footer">
      <VButton
        class="sidebar__footer-btn"
        @click="handleClearRoomTypesClick"
      >
        Сбросить все типы комнат
      </VButton>
      <!--        <VButton>Сохранить</VButton>-->
    </div>
  </div>
</template>
<style lang="scss">
@import 'sidebar';
</style>
