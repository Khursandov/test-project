import { reactive } from 'vue'
import { defineStore } from 'pinia'
import type { IProductsState } from './product.interfaces'
import type { ERoomTypes, IBaseProduct, IGetProductsArgs } from '@/types'
import type { AxiosError } from 'axios'
import { filterProductsBy } from '@/mocks/utils'

export const useProductsStore = defineStore('products', () => {
  const productsState = reactive<IProductsState>({
    currentRoomType: null,
    selectedProductIds: [],
    roomsWithCategories: null,
    productsList: {
      data: null,
      error: null,
      loading: false
    },
    isCreateSaleModalOpen: false,
    isSidebarShown: false
  })

  const ordersState = reactive({
    activeOrderIndex: 0,
    isShown: false,
    orderTabs: [
      {
        orderName: 'Заказ 1',
        deliveryType: 1,
        products: []
      }
    ]
  })

  // SETTERS
  const setCreateModalState = (payload: boolean) => {
    productsState.isCreateSaleModalOpen = payload
  }

  const setSidebarState = (payload: boolean) => {
    productsState.isSidebarShown = payload
  }

  const setCurrentRoomType = (payload: ERoomTypes) => {
    if (productsState.currentRoomType === payload) {
      productsState.currentRoomType = null
    } else {
      productsState.currentRoomType = payload
    }
  }

  const getProductById = (id: string): IBaseProduct | undefined => {
    // Need to change all products ids to string in mock data
    return productsState.productsList.data?.find((item) => String(item.id) === id)
  }

  // ASYNC
  const getProductList = async (params: IGetProductsArgs) => {
    try {
      productsState.productsList.loading = true

      await new Promise(() => {
        setTimeout(() => {
          // primaryFiltersResult
          productsState.productsList.data = filterProductsBy(params)

          productsState.productsList.loading = false
        }, 500)
      })
    } catch (e) {
      productsState.productsList.loading = false
      productsState.productsList.error = e as AxiosError
    }
  }

  return {
    ordersState,
    productsState,
    getProductById,
    getProductList,
    setCreateModalState,
    setSidebarState,
    setCurrentRoomType
  }
})
