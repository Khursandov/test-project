import type {
  ERoomTypes,
  IFiltersSelectedState,
  TNullable,
  ESortableFields,
  ESortOrder
} from '@/types'

export interface ISortState {
  sortKey: ESortableFields
  sortOrder: ESortOrder
}

export interface IGetProductsParams {
  size?: number
  page?: number
  roomType?: TNullable<ERoomTypes>
}

export interface IGetProductsArgs
  extends IGetProductsParams,
    Partial<IFiltersSelectedState>,
    Partial<ISortState> {}
