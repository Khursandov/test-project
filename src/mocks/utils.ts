import type { IBaseProduct, IGetProductsArgs } from '@/types'
import { ESortOrder } from '@/types'
import { products } from '@/mocks/mockData'

export const filterProductsBy = (params: IGetProductsArgs): IBaseProduct[] => {
  // имитация фильтрации как сделают бэк нужно удалить
  let result = products
  if (params?.selectedRoomType) {
    result = products.filter((elem) => elem.roomType === params.selectedRoomType?.value)
  }

  if (params.selectedCategory) {
    result = products.filter((elem) => elem.category === params.selectedCategory?.label)
  }

  if (params.selectedBrand) {
    result = products.filter((elem) => elem.brandId === params.selectedBrand?.id)
  }

  if (params.selectedRegion) {
    result = products.filter((elem) => elem.region === params.selectedRegion?.label)
  }

  if (params.selectedStock) {
    result = products.filter((elem) => elem.stock === params.selectedStock?.label)
  }

  if (params.sortKey) {
    result = result.sort((a, b) => {
      if (params.sortOrder === ESortOrder.ASC && params.sortKey) {
        return a[params.sortKey] > b[params.sortKey] ? 1 : -1
      } else if (params.sortKey) {
        return a[params.sortKey] < b[params.sortKey] ? 1 : -1
      }
      return 1
    })
  }

  return result
}
