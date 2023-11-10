import type { EPriceTypes, ERoomTypes, IBaseImage, IBaseProvider } from '@/types'

export interface IBaseProduct {
  id: string // идентификатор
  name: string // название
  shortShipping: string // столбец Кр. отгрузка - пока непонятно
  code: string // код товара
  additionalInfo: string // то что лежит в колонке Инфо
  unit: string // ед. измерения
  price: number // цена
  reserveCount: number // в резерве
  freeCount: number // свободно
  onWayCount: number // в пути
  providerInfo: IBaseProvider // данные о поставщике - может быть другим типом пока - unknown
  images: IBaseImage[] // фотографии
  // типы для фильтрации
  roomType: ERoomTypes // тип комнаты
  priceType: EPriceTypes // тип цены
  region: string // регион
  stock: string // склад
  isSelected?: boolean
  category: string
  brand: string
  brandId: number
  categoryId: number
}
