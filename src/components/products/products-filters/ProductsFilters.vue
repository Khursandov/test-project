<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import type { IFiltersSelectedState, IFiltersState, TNullable, ISortState } from '@/types'
import { defaultFiltersState, searchTypes } from '@/mocks'
import { useValueSets } from '@/stores'

import VButton from '@/components/base-components/v-button/VButton.vue'
import VSelect from '@/components/base-components/v-select/VSelect.vue'
import VInput from '@/components/base-components/v-input/VInput.vue'
import ChooseRoomTypesModal from '@/components/choose-room-type-modal/ChooseRoomTypesModal.vue'

import { useProductFilters } from './useProductFilters'

interface IFilterProps {
  sortBy: TNullable<ISortState>
  isCheckoutShown: boolean
}
type TFilterEmits = {
  toggleTablePhotosShown: [void]
  toggleCheckoutShown: [void]
}

const props = defineProps<IFilterProps>()
const emit = defineEmits<TFilterEmits>()

const valueSets = useValueSets()
const { state } = storeToRefs(valueSets)

const filtersSelectedState = ref<IFiltersSelectedState>(defaultFiltersState)

const filtersState = reactive<IFiltersState>({
  currentStocks: [],
  currentBrands: [],
  currentCategories: []
})

onMounted(() => {
  valueSets.getValueSets()
})

watch(
  () => props.sortBy,
  () => {
    if (props.sortBy) filtersSelectedState.value.sortBy = props.sortBy
  }
)

useProductFilters(filtersSelectedState, filtersState) // работа с селектами и watch

const handleCreateNewSaleClick = () => {
  if (props.isCheckoutShown) return
  emit('toggleCheckoutShown')
}
</script>
<template>
  <section class="section">
    <div class="filters">
      <div class="filters__primary">
        <div class="filters__primary-buttons buttons">
          <VButton
            class="buttons__item"
            @click="handleCreateNewSaleClick"
          >
            Создать КП
          </VButton>
          <VButton
            class="buttons__item"
            @click="emit('toggleTablePhotosShown')"
          >
            Изображения
          </VButton>
        </div>

        <div class="select-fields">
          <VSelect
            v-model="filtersSelectedState.selectedRoomType"
            :data="state.filterValueSets.data?.roomTypes ?? []"
            label="Тип комнаты"
            class-name="select-fields__item"
          />
          <VSelect
            v-model="filtersSelectedState.selectedCategory"
            :data="filtersState.currentCategories"
            label="Категория"
            class-name="select-fields__item"
          />
          <VSelect
            v-model="filtersSelectedState.selectedBrand"
            :data="filtersState.currentBrands"
            label="Бренд"
            class-name="select-fields__item"
          />

          <VSelect
            v-model="filtersSelectedState.selectedRegion"
            :data="state.filterValueSets.data?.regionsTypes ?? []"
            label="Регион"
            class-name="select-fields__item"
          />
          <VSelect
            v-model="filtersSelectedState.selectedStock"
            :data="filtersState.currentStocks"
            label="Склад"
            class-name="select-fields__item"
          />
          <VSelect
            v-model="filtersSelectedState.selectedPrice"
            :data="state.filterValueSets.data?.priceTypes ?? []"
            label="Тип цены"
            class-name="select-fields__item"
          />
        </div>
      </div>

      <div class="filters__secondary">
        <VSelect
          v-model="filtersSelectedState.selectedSearchType"
          :data="searchTypes"
          label="Тип поиска"
          className="select"
        />
        <span class="filters__secondary-search-title">Содержит</span>
        <VInput
          id="search"
          v-model="filtersSelectedState.searchText"
          class="filters__secondary-search-input"
        />
      </div>
    </div>
    <ChooseRoomTypesModal />
  </section>
</template>
<style lang="scss">
@import 'products-filters';
</style>
