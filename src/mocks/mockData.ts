import type {
  IBaseCounterparty,
  IBaseImage,
  IBaseLabel,
  IBaseProduct,
  ILabelWithValue,
  IRoomCategories
} from '@/types'
import { EDeliveryTypes, EPriceTypes, ERoomTypes } from '@/types'
import { ESortableFields } from '@/types/enums/ESortableFields'
import { createArray } from '@/mocks/categoryUtils'

const defaultImages: IBaseImage[] = [
  {
    src: 'https://cdn.pixabay.com/photo/2023/09/03/01/16/dragon-fly-8229773_1280.jpg',
    name: 'Image 1'
  },
  {
    src: 'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80',
    name: 'Image 2'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2023/09/25/19/52/bear-8275920_1280.jpg',
    name: 'Image 2'
  }
]

export const products: IBaseProduct[] = [
  {
    id: 1,
    name: 'Керамическая плита для ванной комнаты',
    shortShipping: 'Бесплатная доставка по Москве',
    code: '12345',
    additionalInfo: 'Размер 30x30 см, водонепроницаемая',
    unit: 'шт',
    price: 15.0,
    reserveCount: 5,
    freeCount: 15,
    onWayCount: 3,
    providerInfo: {
      name: 'Керамические изделия Ltd'
    },
    images: defaultImages,
    roomType: ERoomTypes.BATHROOM,
    priceType: EPriceTypes.PROMOTION,
    region: 'Москва г',
    stock: 'Подольск//Основной',
    category: 'Категория для Ванная - 1',
    brand: 'Villeroy',
    brandId: 1,
    categoryId: 1
  },
  {
    id: 2,
    name: 'Керомагранит Мраморное вдохновение',
    shortShipping: 'Доставка в Европу за 3 дня',
    code: '52345',
    additionalInfo: 'искусственный гранит',
    unit: 'кв. м',
    price: 156.0,
    reserveCount: 8,
    freeCount: 10,
    onWayCount: 2,
    providerInfo: {
      name: 'Provider 2'
    },
    images: defaultImages,
    roomType: ERoomTypes.COMBINED_BATHROOM,
    priceType: EPriceTypes.ACCOUNTING,
    region: 'Нижегородская обл',
    stock: 'Нижегородск склад 1',
    category: 'Категория для Совмещенный санузел - 1',
    brand: 'Wedgwood',
    brandId: 2,
    categoryId: 1
  },
  {
    id: 3,
    name: 'Строительская плита Прочный Фундамент',
    shortShipping: 'Экспресс-доставка на стройплощадку',
    code: '2365343',
    additionalInfo: 'Железобетонные блоки, 30x30x15 см',
    unit: 'шт',
    price: 235.0,
    reserveCount: 8,
    freeCount: 10,
    onWayCount: 2,
    providerInfo: {
      name: 'СтройБетон Групп'
    },
    images: defaultImages,
    roomType: ERoomTypes.TOILET,
    priceType: EPriceTypes.ACCOUNTING,
    region: 'Саратовская обл',
    stock: 'Саратов склад 1',
    category: 'Категория для Туалет - 1',
    brand: 'Royal Doulton',
    brandId: 3,
    categoryId: 1
  },
  {
    id: 4,
    name: 'Клинкер сантехника Ледяной Шик',
    shortShipping: 'Доставка по всей Азии',
    code: '2634536',
    additionalInfo: 'Стильная и прочная сантехника из клинкера',
    unit: 'шт',
    price: 56.0,
    reserveCount: 5,
    freeCount: 15,
    onWayCount: 3,
    providerInfo: {
      name: 'СантехНовация Corp.'
    },
    images: defaultImages,
    roomType: ERoomTypes.CORRIDOR,
    priceType: EPriceTypes.PROMOTION,
    region: 'Краснодарский край',
    stock: 'Краснодар 1',
    category: 'Категория для Комната, Коридор - 1',
    brand: 'Le Creuset',
    brandId: 4,
    categoryId: 1
  },
  {
    id: 5,
    name: 'Сопутствующие товары для стройки',
    shortShipping: 'Разнообразные варианты доставки',
    code: '623456',
    additionalInfo: 'Инструменты, крепежные материалы и многое другое',
    unit: 'разные',
    price: 645.0,
    reserveCount: 8,
    freeCount: 10,
    onWayCount: 2,
    providerInfo: {
      name: 'СтройМагазин Поставка'
    },
    images: defaultImages,
    roomType: ERoomTypes.VERANDA,
    priceType: EPriceTypes.ACCOUNTING,
    region: 'Ростов на дону г',
    stock: 'Ростов склад 1',
    category: 'Категория для Лоджия, Веранда - 1',
    brand: 'Rookwood Pottery',
    brandId: 5,
    categoryId: 1
  },
  {
    id: 6,
    name: 'Заказной ассортимент по вашим пожеланиям',
    shortShipping: 'Индивидуальные условия доставки',
    code: '236345',
    additionalInfo: 'Мастер-Заказ Производство',
    unit: 'Unit 2',
    price: 2435.0,
    reserveCount: 8,
    freeCount: 10,
    onWayCount: 2,
    providerInfo: {
      name: 'Provider 2'
    },
    images: defaultImages,
    roomType: ERoomTypes.FACADE,
    priceType: EPriceTypes.ACCOUNTING,
    region: 'Казань г',
    stock: 'Казань склад 2',
    category: 'Категория для Фасад, Крыльцо, Беседка - 1',
    brand: 'Portmeirion Group',
    brandId: 6,
    categoryId: 1
  },
  {
    id: 7,
    name: 'Керамическая плита Солнечный Рай',
    shortShipping: 'Бесплатная доставка по всей России',
    code: '6234635',
    additionalInfo: 'Яркие цвета, идеально для кухни',
    unit: 'шт',
    price: 6452.0,
    reserveCount: 5,
    freeCount: 15,
    onWayCount: 3,
    providerInfo: {
      name: 'Керамика Дизайн ООО'
    },
    images: defaultImages,
    roomType: ERoomTypes.BATHROOM,
    priceType: EPriceTypes.PROMOTION,
    region: 'Челябиск г',
    stock: 'Челябинск склад 1',
    category: 'Категория для Ванная - 1',
    brand: 'Fiesta',
    brandId: 7,
    categoryId: 1
  },
  {
    id: 8,
    name: 'Керомагранит Каменная Элегантность',
    shortShipping: 'Доставка в Европу и США',
    code: '6234536',
    additionalInfo: 'Мраморный эффект, легкий в уходе',
    unit: 'кв. м.',
    price: 3562.0,
    reserveCount: 8,
    freeCount: 10,
    onWayCount: 2,
    providerInfo: {
      name: 'ГранитМастер Корпорация'
    },
    images: defaultImages,
    roomType: ERoomTypes.KITCHEN,
    priceType: EPriceTypes.ACCOUNTING,
    region: 'Ижеевск г',
    stock: 'Ижеевск склад 1',
    category: 'Категория для Кухня, Столовая - 1',
    brand: 'Mikasa',
    brandId: 8,
    categoryId: 1
  },
  {
    id: 9,
    name: "Строительская плита 'Универсальный Герой'",
    shortShipping: 'Доставка на любой объект строительства',
    code: '0987345',
    additionalInfo: 'Подходит для стен и перегородок',
    unit: 'шт',
    price: 3424.0,
    reserveCount: 8,
    freeCount: 10,
    onWayCount: 2,
    providerInfo: {
      name: 'СтройТехника Инжиниринг'
    },
    images: defaultImages,
    roomType: ERoomTypes.KITCHEN,
    priceType: EPriceTypes.ACCOUNTING,
    region: 'Санкт-Петербург г',
    stock: 'Санкт-Петербург склад 1',
    category: 'Категория для Кухня, Столовая - 2',
    brand: 'Dansk',
    brandId: 9,
    categoryId: 1
  },
  {
    id: 10,
    name: "Клинкер сантехника 'Лесная Гармония'",
    shortShipping: 'Доставка по всей Азии и Австралии',
    code: '863673',
    additionalInfo: 'Оригинальный дизайн для ванной комнаты',
    unit: 'комплект',
    price: 445.0,
    reserveCount: 5,
    freeCount: 15,
    onWayCount: 3,
    providerInfo: {
      name: 'СантехСтрой Глобал'
    },
    images: defaultImages,
    roomType: ERoomTypes.BATHROOM,
    priceType: EPriceTypes.PROMOTION,
    region: 'Москва г',
    stock: 'Подольск//Склад приемки',
    category: 'Категория для Ванная - 3',
    brand: 'Denby',
    brandId: 10,
    categoryId: 1
  },
  {
    id: 11,
    name: "Плита 'Бриллиант",
    shortShipping: 'Бесплатная доставка',
    code: '823456',
    additionalInfo: 'Разнообразие дизайнов',
    unit: 'шт',
    price: 8856.0,
    reserveCount: 8,
    freeCount: 10,
    onWayCount: 2,
    providerInfo: {
      name: 'Керамико'
    },
    images: defaultImages,
    roomType: ERoomTypes.KITCHEN,
    priceType: EPriceTypes.ACCOUNTING,
    region: 'Нижегородская обл',
    stock: 'Нижегородск склад 1',
    category: 'Категория для Кухня, Столовая - 3',
    brand: 'Poole Pottery',
    brandId: 11,
    categoryId: 1
  },
  {
    id: 12,
    name: "Гранит 'Мрамор'",
    shortShipping: 'Доставка в Европу',
    code: '345624',
    additionalInfo: 'Искусственный границ',
    unit: 'кв. м.',
    price: 7346.0,
    reserveCount: 8,
    freeCount: 10,
    onWayCount: 2,
    providerInfo: {
      name: 'ГранитСтайл'
    },
    images: defaultImages,
    roomType: ERoomTypes.KITCHEN,
    priceType: EPriceTypes.ACCOUNTING,
    region: 'Саратовская обл',
    stock: 'Саратов склад 1',
    category: 'Категория для Кухня, Столовая - 3',
    brand: 'Arabia',
    brandId: 12,
    categoryId: 1
  },
  {
    id: 13,
    name: "Сантехника 'Клинкер'",
    shortShipping: 'Доставка по Азии',
    code: '63456',
    additionalInfo: 'Сантехника из клинкера',
    unit: 'комплект',
    price: 764.0,
    reserveCount: 5,
    freeCount: 15,
    onWayCount: 3,
    providerInfo: {
      name: 'СантехПроизводство'
    },
    images: defaultImages,
    roomType: ERoomTypes.BATHROOM,
    priceType: EPriceTypes.PROMOTION,
    region: 'Краснодарский край',
    stock: 'Краснодар 2',
    category: 'Категория для Ванная - 4',
    brand: 'Moorcroft',
    brandId: 13,
    categoryId: 1
  },
  {
    id: 14,
    name: 'Товары для стройки',
    shortShipping: 'Разные варианты доставки',
    code: '236456',
    additionalInfo: 'Инструменты и материалы',
    unit: 'разные',
    price: 8564.0,
    reserveCount: 8,
    freeCount: 10,
    onWayCount: 2,
    providerInfo: {
      name: 'СтройМагазин'
    },
    images: defaultImages,
    roomType: ERoomTypes.KITCHEN,
    priceType: EPriceTypes.ACCOUNTING,
    region: 'Ростов на дону г',
    stock: 'Ростов склад 2',
    category: 'Категория для Кухня, Столовая - 4',
    brand: 'Fulper Pottery',
    brandId: 14,
    categoryId: 1
  },
  {
    id: 15,
    name: 'Заказы по запросу',
    shortShipping: 'Индивидуальные условия',
    code: '634533',
    additionalInfo: 'Создайте свой заказ',
    unit: 'по запросу',
    price: 7234.0,
    reserveCount: 8,
    freeCount: 10,
    onWayCount: 2,
    providerInfo: {
      name: 'Мастер-Заказ'
    },
    images: defaultImages,
    roomType: ERoomTypes.KITCHEN,
    priceType: EPriceTypes.ACCOUNTING,
    region: 'Казань г',
    stock: 'Казань склад 3',
    category: 'Категория для Кухня, Столовая - 2',
    brand: 'Heath Ceramics',
    brandId: 15,
    categoryId: 1
  },
  {
    id: 16,
    name: "Плита 'Яркая",
    shortShipping: 'Бесплатная доставка по России',
    code: '9985454',
    additionalInfo: 'Идеально для кухни',
    unit: 'шт',
    price: 3634.0,
    reserveCount: 5,
    freeCount: 15,
    onWayCount: 3,
    providerInfo: {
      name: 'Керамика Дизайн'
    },
    images: defaultImages,
    roomType: ERoomTypes.BATHROOM,
    priceType: EPriceTypes.PROMOTION,
    region: 'Челябиск г',
    stock: 'Челябинск склад 2',
    category: 'Категория для Ванная - 1',
    brand: 'Nymphenburg Porcelain ',
    brandId: 16,
    categoryId: 1
  },
  {
    id: 17,
    name: "Гранит 'Шарм",
    shortShipping: 'Доставка в Европу и США',
    code: '8824564',
    additionalInfo: 'Мраморный эффект',
    unit: 'кв. м.',
    price: 8247.0,
    reserveCount: 8,
    freeCount: 10,
    onWayCount: 2,
    providerInfo: {
      name: 'ГранитМастер'
    },
    images: defaultImages,
    roomType: ERoomTypes.KITCHEN,
    priceType: EPriceTypes.ACCOUNTING,
    region: 'Ижеевск г',
    stock: 'Ижеевск склад 2',
    category: 'Категория для Кухня, Столовая - 4',
    brand: 'Wedgwood',
    brandId: 17,
    categoryId: 1
  },
  {
    id: 18,
    name: "Плита 'Универсал",
    shortShipping: 'Доставка на стройку',
    code: '1635353',
    additionalInfo: 'Подходит для стен',
    unit: 'шт',
    price: 2745.0,
    reserveCount: 8,
    freeCount: 10,
    onWayCount: 2,
    providerInfo: {
      name: 'СтройТехника'
    },
    images: defaultImages,
    roomType: ERoomTypes.KITCHEN,
    priceType: EPriceTypes.ACCOUNTING,
    region: 'Санкт-Петербург г',
    stock: 'Санкт-Петербург склад 2',
    category: 'Категория для Кухня, Столовая - 1',
    brand: 'Royal Doulton',
    brandId: 18,
    categoryId: 1
  },
  {
    id: 19,
    name: "Сантехника 'Лес'",
    shortShipping: 'Доставка по Азии и Австралии',
    code: '73436345',
    additionalInfo: 'Оригинальный дизайн',
    unit: 'комплект',
    price: 8475.0,
    reserveCount: 5,
    freeCount: 15,
    onWayCount: 3,
    providerInfo: {
      name: 'СантехСтрой'
    },
    images: defaultImages,
    roomType: ERoomTypes.BATHROOM,
    priceType: EPriceTypes.PROMOTION,
    region: 'Москва г',
    stock: 'Подольск Вагоны',
    category: 'Категория для Ванная - 2',
    brand: 'Le Creuset',
    brandId: 19,
    categoryId: 1
  },
  {
    id: 20,
    name: "Плита 'Сапфир",
    shortShipping: 'Бесплатная доставка',
    code: '6346345',
    additionalInfo: 'Разнообразие дизайнов',
    unit: 'шт',
    price: 6245.0,
    reserveCount: 8,
    freeCount: 10,
    onWayCount: 2,
    providerInfo: {
      name: 'Керамико'
    },
    images: defaultImages,
    roomType: ERoomTypes.KITCHEN,
    priceType: EPriceTypes.ACCOUNTING,
    region: 'Нижегородская обл',
    stock: 'Нижегородск склад 1',
    category: 'Категория для Кухня, Столовая - 2',
    brand: 'Rookwood Pottery',
    brandId: 20,
    categoryId: 1
  },
  {
    id: 21,
    name: 'Товары для стройки и ремонта',
    shortShipping: 'Разные варианты доставки',
    code: '63463453',
    additionalInfo: 'Инструменты и материалы',
    unit: 'Unit 2',
    price: 235.0,
    reserveCount: 8,
    freeCount: 10,
    onWayCount: 2,
    providerInfo: {
      name: 'разные'
    },
    images: defaultImages,
    roomType: ERoomTypes.KITCHEN,
    priceType: EPriceTypes.ACCOUNTING,
    region: 'Краснодарский край',
    stock: 'Краснодар//Предварительный набор',
    category: 'Категория для Кухня, Столовая - 3',
    brand: 'Portmeirion Group',
    brandId: 21,
    categoryId: 1
  },
  {
    id: 22,
    name: 'Доставка в Европу',
    shortShipping: 'shortShipping 1',
    code: '6346345',
    additionalInfo: 'Искусственный гранит',
    unit: 'кв. м.',
    price: 210.0,
    reserveCount: 5,
    freeCount: 15,
    onWayCount: 3,
    providerInfo: {
      name: 'ГранитСтайл'
    },
    images: defaultImages,
    roomType: ERoomTypes.BATHROOM,
    priceType: EPriceTypes.PROMOTION,
    region: 'Казань г',
    stock: 'Казань Аракчино',
    category: 'Категория для Ванная - 3',
    brand: 'Fiesta',
    brandId: 22,
    categoryId: 1
  },
  {
    id: 23,
    name: 'Блоки',
    shortShipping: 'Экспресс-доставка',
    code: '86757565',
    additionalInfo: 'Железобетонные блоки',
    unit: 'шт',
    price: 115.0,
    reserveCount: 8,
    freeCount: 10,
    onWayCount: 2,
    providerInfo: {
      name: 'СтройМастер'
    },
    images: defaultImages,
    roomType: ERoomTypes.KITCHEN,
    priceType: EPriceTypes.ACCOUNTING,
    region: 'Ижеевск г',
    stock: 'Ижеевск склад 3',
    category: 'Категория для Кухня, Столовая - 4',
    brand: 'Mikasa',
    brandId: 23,
    categoryId: 1
  },
  {
    id: 24,
    name: "Сантехника 'Камень",
    shortShipping: 'Доставка по Азии',
    code: '67890',
    additionalInfo: 'Сантехника из клинкера',
    unit: 'комплект',
    price: 15.0,
    reserveCount: 8,
    freeCount: 10,
    onWayCount: 2,
    providerInfo: {
      name: 'СантехПроизводство'
    },
    images: defaultImages,
    roomType: ERoomTypes.KITCHEN,
    priceType: EPriceTypes.ACCOUNTING,
    region: 'Челябиск г',
    stock: 'Челябинск склад 3',
    category: 'Категория для Кухня, Столовая - 2',
    brand: 'Dansk',
    brandId: 24,
    categoryId: 1
  }
]

interface ITableHead extends IBaseLabel {
  sortValue?: ESortableFields
}

export const productsTableColumns: Array<ITableHead> = [
  {
    id: 1,
    label: 'Код'
  },
  {
    id: 2,
    label: 'Наименование',
    sortValue: ESortableFields.NAME
  },
  {
    id: 3,
    label: 'Инфо'
  },
  {
    id: 4,
    label: 'Ед. изм.'
  },
  {
    id: 5,
    label: 'Кр. отгр.'
  },
  {
    id: 6,
    label: 'Цена (с учетом скидки)',
    sortValue: ESortableFields.PRICE
  },
  {
    id: 7,
    label: 'Резерв',
    sortValue: ESortableFields.RESERVE_COUNT
  },
  {
    id: 8,
    label: 'Свободно',
    sortValue: ESortableFields.FREE_COUNT
  },
  {
    id: 9,
    label: 'В пути',
    sortValue: ESortableFields.ON_WAY_COUNT
  },
  {
    id: 10,
    label: 'Действия'
  }
]

const facade = createArray('фасада', 6)
const bathRoom = createArray('ванны', 6)
const combinedBath = createArray('совмещенной ванны', 6)
const toilet = createArray('туалета', 6)
const kitchen = createArray('кухни', 6)
const corridor = createArray('коридора', 6)
const verandaCategories = createArray('веранды', 6)

export const categoriesByRooms: Record<ERoomTypes, IRoomCategories[]> = {
  [ERoomTypes.VERANDA]: verandaCategories,
  [ERoomTypes.FACADE]: facade,
  [ERoomTypes.BATHROOM]: bathRoom,
  [ERoomTypes.COMBINED_BATHROOM]: combinedBath,
  [ERoomTypes.TOILET]: toilet,
  [ERoomTypes.KITCHEN]: kitchen,
  [ERoomTypes.CORRIDOR]: corridor
}

export const RoomTypeLabels: Record<ERoomTypes, string> = {
  [ERoomTypes.VERANDA]: 'Веранда',
  [ERoomTypes.FACADE]: 'Фасад',
  [ERoomTypes.BATHROOM]: 'Ванная',
  [ERoomTypes.COMBINED_BATHROOM]: 'Совмещенный санузел',
  [ERoomTypes.TOILET]: 'Тулет',
  [ERoomTypes.KITCHEN]: 'Кухня',
  [ERoomTypes.CORRIDOR]: 'Корридор'
}

export const counterpartyList: IBaseCounterparty[] = [
  {
    id: 0,
    name: 'Контрагент 1',
    surname: 'Surname',
    lastName: 'Last Name',
    email: 'test1@test.test',
    phone: '11111'
  },
  {
    id: 0,
    name: 'Контрагент 2',
    surname: 'Surname 2',
    lastName: 'Last Name 2',
    email: 'test2@test.test',
    phone: '22222'
  }
]

export const organizationsList: IBaseLabel[] = [
  {
    id: 0,
    label: 'Организация 1'
  },
  {
    id: 1,
    label: 'Организация 2'
  },
  {
    id: 2,
    label: 'Организация 3'
  },
  {
    id: 3,
    label: 'Организация 4'
  }
]

export const deliveryTypes: ILabelWithValue<EDeliveryTypes>[] = [
  {
    id: 1,
    value: EDeliveryTypes.DELIVERY,
    label: 'Доставка'
  },
  {
    id: 2,
    value: EDeliveryTypes.PICKUP,
    label: 'Самовывоз'
  }
]

export const checkOutTableColumns = [
  {
    value: 'code',
    label: 'Код'
  },
  {
    value: 'name',
    label: 'Наименование'
  },
  {
    value: 'additionalInfo',
    label: 'Инфо'
  },
  {
    value: 'count',
    label: 'Кол-во'
  },
  {
    value: 'unit',
    label: 'Ед. изм.'
  },
  {
    value: 'price',
    label: 'Цена (с учетом скидки)'
  },
  {
    value: 'reserveCount',
    label: 'Резерв'
  },
  {
    value: 'freeCount',
    label: 'Свободно'
  },
  {
    value: 'onWayCount',
    label: 'В пути'
  },
  {
    value: 'action',
    label: 'Действия'
  }
]
