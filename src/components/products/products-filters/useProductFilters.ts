import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import debounce from 'lodash/debounce'
import type { Ref, UnwrapNestedRefs } from 'vue'
import type { LocationQueryRaw, LocationQuery, LocationQueryValueRaw } from 'vue-router'

import type { IFiltersSelectedState, IFiltersState } from '@/types'
import {
  getExistingValues,
  normalizeFiltersQuery,
  normalizeFiltersToQuery,
  filterArrayByValue
} from '@/utils'
import { useValueSets } from '@/stores'
import { defaultFiltersState } from '@/mocks'

export const useProductFilters = (
  filtersSelectedState: Ref<UnwrapNestedRefs<IFiltersSelectedState>>,
  filtersState: UnwrapNestedRefs<IFiltersState>
) => {
  const route = useRoute()
  const router = useRouter()
  const valueSets = useValueSets()
  const { state } = storeToRefs(valueSets)

  function setQuery(newQuery: LocationQueryRaw) {
    router.replace({ query: { ...newQuery } }).then(() => {})
  }

  // сеттинг данных с сервера в динамические селекты
  watch(
    () => state.value.filterValueSets.data,
    (data) => {
      if (data) {
        filtersState.currentBrands = data.brandTypes
        filtersState.currentStocks = data.stockTypes
        filtersState.currentCategories = data.categoryTypes
      }
    }
  )

  watch(
    () => state.value.filterValueSets.data,
    () => {
      if (state.value.filterValueSets.data) {
        filtersSelectedState.value = normalizeFiltersQuery(
          route.query,
          state.value.filterValueSets.data
        )
      }
    }
  )

  watch(
    () => filtersSelectedState.value.selectedRoomType,
    () => {
      if (!filtersSelectedState.value.selectedRoomType) return
      filtersState.currentCategories = filterArrayByValue(
        state.value.filterValueSets.data?.categoryTypes ?? [],
        'roomTypeIds',
        filtersSelectedState.value.selectedRoomType.id
      )
    }
  )

  watch(
    () => filtersSelectedState.value.selectedRegion,
    () => {
      if (!filtersSelectedState.value.selectedRegion) return
      filtersState.currentStocks = filterArrayByValue(
        state.value.filterValueSets.data?.stockTypes ?? [],
        'parentId',
        filtersSelectedState.value.selectedRegion.id
      )
    }
  )

  watch(
    () => filtersSelectedState.value.selectedCategory,
    () => {
      if (!filtersSelectedState.value.selectedCategory) return
      filtersState.currentBrands = filterArrayByValue(
        state.value.filterValueSets.data?.brandTypes ?? [],
        'parentId',
        filtersSelectedState.value.selectedCategory.id
      )
    }
  )

  const debouncedSearchText = debounce(setQuery, 1000)

  watch(
    () => ({ ...filtersSelectedState.value }),
    (newState, oldState) => {
      const newQuery = getExistingValues<
        IFiltersSelectedState,
        LocationQueryValueRaw,
        LocationQueryRaw
      >(newState, normalizeFiltersToQuery)

      const filteredQuery = Object.entries(route.query).reduce(
        (acc: LocationQuery, [key, value]) => {
          // если это query не для фильтров или в новом filtersQuery есть выбранное значение оставляем его
          if (!Object.keys(defaultFiltersState).includes(key) || key in newQuery)
            return { ...acc, [key]: value }

          return acc
        },
        {}
      )

      const mergedQuery = { ...filteredQuery, ...newQuery }

      if (newState.sortBy) {
        Object.entries(newState.sortBy).forEach(([key, value]) => {
          mergedQuery[key] = value
        })
      }

      if (newState.searchText?.length !== oldState.searchText?.length) {
        debouncedSearchText(mergedQuery)

        return
      }

      setQuery(mergedQuery)
    },
    { deep: true }
  )
}
