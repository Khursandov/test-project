import type {
  IBaseLabel,
  IFilterWithDefaultValueSets,
  ILabelWithParentId,
  ILabelWithRoomTypes,
  ILabelWithValue,
  INormalizedFiltersQuery,
  IFiltersSelectedState
} from '@/types'
import { ERoomTypes, ESearchTypes } from '@/types'

const numbers: number[] = [1, 2, 3, 4]

export const regionsTypes: IBaseLabel[] = [
  {
    label: 'Москва г',
    id: 1
  },
  {
    label: 'Нижегородская обл',
    id: 2
  },
  {
    label: 'Саратовская обл',
    id: 3
  },
  {
    label: 'Краснодарский край',
    id: 4
  },
  {
    label: 'Ростов на дону г',
    id: 5
  },
  {
    label: 'Казань г',
    id: 6
  },
  {
    label: 'Челябиск г',
    id: 7
  },
  {
    label: 'Ижеевск г',
    id: 8
  },
  {
    label: 'Санкт-Петербург г',
    id: 9
  }
]

export const brandTypes: ILabelWithParentId[] = [
  {
    id: 1,
    label: 'Villeroy',
    parentId: 1
  },
  {
    id: 2,
    label: 'Wedgwood',
    parentId: 2
  },
  {
    id: 3,
    label: 'Royal Doulton',
    parentId: 3
  },
  {
    id: 4,
    label: 'Le Creuset',
    parentId: 4
  },
  {
    id: 5,
    label: 'Rookwood Pottery',
    parentId: 5
  },
  {
    id: 6,
    label: 'Portmeirion Group',
    parentId: 6
  },
  {
    id: 7,
    label: 'Fiesta',
    parentId: 7
  },
  {
    id: 8,
    label: 'Mikasa',
    parentId: 8
  },
  {
    id: 9,
    label: 'Dansk',
    parentId: 9
  },
  {
    id: 10,
    label: 'Denby',
    parentId: 10
  },
  {
    id: 11,
    label: 'Poole Pottery',
    parentId: 11
  },
  {
    id: 12,
    label: 'Arabia',
    parentId: 12
  },
  {
    id: 13,
    label: 'Moorcroft',
    parentId: 13
  },
  {
    id: 14,
    label: 'Fulper Pottery',
    parentId: 14
  },
  {
    id: 15,
    label: 'Heath Ceramics',
    parentId: 15
  },
  {
    id: 16,
    label: 'Nymphenburg Porcelain',
    parentId: 16
  },
  {
    id: 17,
    label: 'Villeroy 2',
    parentId: 1
  },
  {
    id: 18,
    label: 'Fulper Pottery 2',
    parentId: 18
  },
  {
    id: 19,
    label: 'Heath Ceramics 2',
    parentId: 19
  },
  {
    id: 20,
    label: 'Nymphenburg Porcelain 2',
    parentId: 20
  },
  {
    id: 21,
    label: 'Le Creuset 2',
    parentId: 21
  },
  {
    id: 22,
    label: 'Rookwood Pottery 2',
    parentId: 22
  },
  {
    id: 23,
    label: 'Portmeirion Group 2',
    parentId: 23
  },
  {
    id: 24,
    label: 'Fiesta 2',
    parentId: 24
  },
  {
    id: 25,
    label: 'Mikasa 3',
    parentId: 25
  },
  {
    id: 26,
    label: 'Portmeirion Group 3',
    parentId: 26
  },
  {
    id: 27,
    label: 'Heath Ceramics',
    parentId: 27
  },
  {
    id: 28,
    label: 'Heath Ceramics 4',
    parentId: 28
  }
]

export const roomTypes: ILabelWithValue<ERoomTypes>[] = [
  {
    id: 1,
    value: ERoomTypes.BATHROOM,
    label: 'Ванная'
  },
  {
    id: 2,
    value: ERoomTypes.COMBINED_BATHROOM,
    label: 'Совмещенный санузел'
  },
  {
    id: 3,
    value: ERoomTypes.TOILET,
    label: 'Туалет'
  },
  {
    id: 4,
    value: ERoomTypes.KITCHEN,
    label: 'Кухня, Столовая'
  },
  {
    id: 5,
    value: ERoomTypes.CORRIDOR,
    label: 'Комната, Коридор'
  },
  {
    id: 6,
    value: ERoomTypes.VERANDA,
    label: 'Лоджия, Веранда'
  },
  {
    id: 7,
    value: ERoomTypes.FACADE,
    label: 'Фасад, Крыльцо, Беседка'
  }
]

export const categoryTypes: ILabelWithRoomTypes[] = roomTypes
  .map((roomType, index) => {
    const offset = index * numbers.length
    return numbers.map((elem) => {
      return {
        id: offset + elem,
        roomTypeIds: [String(roomType.id), String(roomType.id + 1), String(roomType.id + 2)],
        label: `Категория для ${roomType.label} - ${elem}`
      }
    })
  })
  .flat(1)

export const stockTypes: ILabelWithParentId[] = [
  {
    id: 1,
    label: 'Подольск//Основной',
    parentId: 1
  },
  {
    id: 2,
    label: 'Подольск//Склад приемки',
    parentId: 1
  },
  {
    id: 3,
    label: 'Подольск Вагоны',
    parentId: 1
  },
  {
    id: 4,
    label: 'Казань склад 2',
    parentId: 6
  },
  {
    id: 5,
    label: 'Казань склад 3',
    parentId: 6
  },
  {
    id: 6,
    label: 'Казань Аракчино',
    parentId: 6
  },
  {
    id: 7,
    label: 'Краснодар 1',
    parentId: 4
  },
  {
    id: 8,
    label: 'Краснодар 2',
    parentId: 4
  },
  {
    id: 9,
    label: 'Краснодар//Предварительный набор',
    parentId: 4
  },
  {
    id: 10,
    label: 'Нижегородск склад 1',
    parentId: 2
  },
  {
    id: 11,
    label: 'Саратов склад 1',
    parentId: 3
  },
  {
    id: 12,
    label: 'Ростов склад 1',
    parentId: 5
  },
  {
    id: 13,
    label: 'Ростов склад 2',
    parentId: 5
  },
  {
    id: 14,
    label: 'Ростов склад 3',
    parentId: 5
  },
  {
    id: 15,
    label: 'Челябинск склад 1',
    parentId: 7
  },
  {
    id: 16,
    label: 'Челябинск склад 2',
    parentId: 7
  },
  {
    id: 17,
    label: 'Челябинск склад 3',
    parentId: 7
  },
  {
    id: 18,
    label: 'Ижеевск склад 1',
    parentId: 8
  },
  {
    id: 19,
    label: 'Ижеевск склад 2',
    parentId: 8
  },
  {
    id: 20,
    label: 'Ижеевск склад 3',
    parentId: 8
  },
  {
    id: 21,
    label: 'Санкт-Петербург склад 1',
    parentId: 9
  },
  {
    id: 22,
    label: 'Санкт-Петербург склад 2',
    parentId: 9
  },
  {
    id: 23,
    label: 'Санкт-Петербург склад 3',
    parentId: 9
  }
]

export const priceTypes: IBaseLabel[] = [
  { id: 1, label: 'Акция' },
  { id: 1, label: 'Учетная' },
  { id: 1, label: 'Розничная' },
  { id: 1, label: 'Розничная старая' }
]

export const searchTypes: ILabelWithValue<ESearchTypes>[] = [
  {
    id: 1,
    label: 'Наименование',
    value: ESearchTypes.NAME
  },
  {
    id: 2,
    label: 'Код',
    value: ESearchTypes.CODE
  },
  {
    id: 3,
    label: 'ID товара',
    value: ESearchTypes.PRODUCT_ID
  },
  {
    id: 4,
    label: 'Номер планшета / готового решения',
    value: ESearchTypes.RESULT_NUMBER
  },
  {
    id: 5,
    label: 'По цене до...',
    value: ESearchTypes.PRICE
  },
  {
    id: 6,
    label: 'По признакам',
    value: ESearchTypes.PROPERTIES
  }
]

export const defaultFiltersState: IFiltersSelectedState = {
  selectedRoomType: null,
  selectedCategory: null,
  selectedRegion: null,
  selectedBrand: null,
  selectedStock: null,
  selectedPrice: null,
  selectedSearchType: searchTypes[0],
  searchText: '',
  sortBy: null
}

export const filtersToValueSetsRelations: Record<
  keyof INormalizedFiltersQuery,
  keyof IFilterWithDefaultValueSets
> = {
  selectedRoomType: 'roomTypes',
  selectedCategory: 'categoryTypes',
  selectedRegion: 'regionsTypes',
  selectedBrand: 'brandTypes',
  selectedStock: 'stockTypes',
  selectedPrice: 'priceTypes',
  selectedSearchType: 'searchTypes',
  searchText: 'default',
  sortKey: 'default',
  sortOrder: 'default',
  sortBy: 'default'
}

export const productFiltersPrimitiveValueKeys = ['searchText', 'sortKey', 'sortOrder']
