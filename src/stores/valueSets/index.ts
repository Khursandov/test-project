import { reactive } from 'vue'
import type { IValueSetsState } from '@/stores/valueSets/valueSets.interfaces'
import { defineStore } from 'pinia'
import {
  regionsTypes,
  stockTypes,
  priceTypes,
  brandTypes,
  categoryTypes,
  roomTypes,
  searchTypes
} from '@/mocks'

export const useValueSets = defineStore('value-sets', () => {
  const state = reactive<IValueSetsState>({
    filterValueSets: {
      data: null,
      loading: false,
      error: false
    }
  })

  // ASYNC
  const getValueSets = async () => {
    try {
      state.filterValueSets.loading = true
      await new Promise(() => {
        setTimeout(() => {
          state.filterValueSets.data = {
            regionsTypes,
            stockTypes,
            priceTypes,
            brandTypes,
            categoryTypes,
            roomTypes,
            searchTypes
          }
        }, 500)
      })
    } catch (e) {
      state.filterValueSets.error = e
      //
    } finally {
      state.filterValueSets.loading = false
    }
  }

  return {
    state,
    getValueSets
  }
})
