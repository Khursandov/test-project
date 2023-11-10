import { reactive } from 'vue'
import { defineStore } from 'pinia'
import type { AxiosError } from 'axios'
import type { IPackageSaleState } from '@/stores/packageSale/packageSale.interface'
import type { IBaseCounterparty } from '@/types'
import { counterpartyList, organizationsList } from '@/mocks'

export const usePackageSaleStore = defineStore('packageSale', () => {
  const packageSaleState = reactive<IPackageSaleState>({
    organizationsList: {
      data: null,
      error: null,
      loading: false
    },
    counterpartyList: {
      data: null,
      error: null,
      loading: false
    }
  })

  // SETTERS
  // const updateSelectedCategories = (roomType: ERoomTypes, subtypeId: number) => {
  //     if (!productsState.roomsWithCategories) return
  //
  //     productsState.roomsWithCategories[roomType].map((elem) => {
  //         if (elem.id === subtypeId) elem.isActive = !elem.isActive
  //         return elem
  //     })
  // }

  // ASYNC
  const getOrganizationList = async () => {
    try {
      packageSaleState.organizationsList.loading = true

      // имитация запроса
      await new Promise(() =>
        setTimeout(() => {
          packageSaleState.organizationsList.data = organizationsList
          packageSaleState.organizationsList.loading = false
        }, 1000)
      )
    } catch (e) {
      packageSaleState.organizationsList.loading = false
      packageSaleState.organizationsList.error = e as AxiosError
    }
  }

  const getCounterpartyList = async () => {
    try {
      packageSaleState.counterpartyList.loading = true

      // имитация запроса
      await new Promise(() =>
        setTimeout(() => {
          packageSaleState.counterpartyList.data = counterpartyList
          packageSaleState.counterpartyList.loading = false
        }, 1000)
      )
    } catch (e) {
      packageSaleState.counterpartyList.loading = false
      packageSaleState.counterpartyList.error = e as AxiosError
    }
  }

  const createCounterparty = async (payload: IBaseCounterparty) => {
    try {
      if (Array.isArray(packageSaleState.counterpartyList.data)) {
        packageSaleState.counterpartyList.data.push(payload)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return {
    packageSaleState,
    getCounterpartyList,
    createCounterparty,
    getOrganizationList
  }
})
