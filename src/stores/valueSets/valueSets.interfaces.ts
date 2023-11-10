import type {
  IBaseLabel,
  ILabelWithValue,
  ESearchTypes,
  ILabelWithParentId,
  TDefaultState,
  ILabelWithRoomTypes
} from '@/types'

export interface IFilterValueSets {
  priceTypes: IBaseLabel[]
  regionsTypes: IBaseLabel[]
  stockTypes: ILabelWithParentId[]
  brandTypes: ILabelWithParentId[]
  categoryTypes: ILabelWithRoomTypes[]
  roomTypes: IBaseLabel[]
  searchTypes: ILabelWithValue<ESearchTypes>[]
}

export interface IValueSetsState {
  filterValueSets: TDefaultState<IFilterValueSets>
}
