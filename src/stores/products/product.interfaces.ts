// в этом файле интерфейсов лежит все что относится только к стору
import type { ERoomTypes, IBaseProduct, IRoomCategories, TDefaultState, TNullable } from '@/types'

export type TRoomsWithCategories = Record<ERoomTypes, IRoomCategories[]>
export interface IProductsState {
  // текущая выбранная комната (таб)
  currentRoomType: TNullable<ERoomTypes>
  // выбранные комнаты с подкатегориями
  roomsWithCategories: TNullable<TRoomsWithCategories>
  selectedProductIds: TNullable<number[]>
  productsList: TDefaultState<IBaseProduct[]>
  // создать КП модалка
  isCreateSaleModalOpen: boolean
  isSidebarShown: boolean
}
