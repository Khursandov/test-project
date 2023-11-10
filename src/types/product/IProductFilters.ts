import type {
  ISortState,
  IBaseLabel,
  ILabelWithParentId,
  ILabelWithValue,
  TNullable,
  ILabelWithRoomTypes
} from '@/types'
import { ERoomTypes, ESearchTypes } from '@/types'
import type { IFilterValueSets } from '@/stores/valueSets/valueSets.interfaces'

export interface IFiltersSelectedState {
  selectedRoomType: TNullable<ILabelWithValue<ERoomTypes>>
  selectedCategory: TNullable<IBaseLabel>
  selectedRegion: TNullable<IBaseLabel>
  selectedBrand: TNullable<IBaseLabel>
  selectedStock: TNullable<IBaseLabel>
  selectedPrice: TNullable<IBaseLabel>
  selectedSearchType: ILabelWithValue<ESearchTypes>
  sortBy: TNullable<ISortState>
  searchText: string
}

export interface IFiltersState {
  currentBrands: ILabelWithParentId[]
  currentCategories: ILabelWithRoomTypes[]
  currentStocks: ILabelWithParentId[]
}

export interface IFilterWithDefaultValueSets extends IFilterValueSets {
  default: []
}

export interface INormalizedFiltersQuery extends IFiltersSelectedState, ISortState {}
