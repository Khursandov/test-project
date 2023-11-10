import type { ILabelWithValue } from '@/types'

interface IRoomCategories extends ILabelWithValue<string> {
  isActive: boolean
}

export const getCategoryTmp = (key: string, index: number): IRoomCategories => {
  return {
    label: `Керамика для ${key} ${index}`,
    id: index,
    value: `bathroom ${index}`,
    isActive: false
  }
}

export const createArray = (title: string, arrayLength: number): IRoomCategories[] => {
  return Array(arrayLength)
    .fill(null)
    .map((_, index) => getCategoryTmp(title, index))
}
