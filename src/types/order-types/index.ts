import type { IBaseDelivery } from '@/types/delivery-types'
import type { IBaseCounterparty, TNullable } from '@/types'

export interface IOrderState {
  activeOrder: string
  orders: Array<IOrderShort>
}

export interface IOrderShort {
  deliveryType: TNullable<IBaseDelivery>
  orderIndex: string
  products: Array<IProductWithCount>
}

export interface IOrderData extends IOrderShort {
  deliveryType: IBaseDelivery | null
  counterparty: IBaseCounterparty | null
}
export interface IProductShort {
  id: string
  categoryId: string
}

export interface IProductWithCount extends IProductShort {
  count: number
}
