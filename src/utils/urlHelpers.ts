import type { LocationQuery, LocationQueryValueRaw } from 'vue-router'
import type {
  IFiltersSelectedState,
  IFilterWithDefaultValueSets,
  INormalizedFiltersQuery
} from '@/types'
import type { IFilterValueSets } from '@/stores/valueSets/valueSets.interfaces'
import { filtersToValueSetsRelations, productFiltersPrimitiveValueKeys } from '@/mocks'

export const getExistingValues = <T extends object, S, R>(
  data: T,
  formatterFn?: (value: T[keyof T]) => S
): R => {
  return Object.entries(data).reduce((acc, [key, value]) => {
    if (!value && typeof value !== 'string') return acc

    const resultValue = typeof formatterFn === 'function' ? formatterFn(value) : value

    if (!resultValue) {
      return acc
    }

    return {
      ...acc,
      [key]: resultValue
    }
  }, {} as Partial<T>) as R
}

type TFiltersKey = keyof IFiltersSelectedState

export const normalizeFiltersToQuery = (
  data: IFiltersSelectedState[TFiltersKey]
): LocationQueryValueRaw => {
  if (typeof data === 'string') {
    return data
  }

  if (!data) return

  if ('id' in data) {
    return data.id as LocationQueryValueRaw
  }

  return
}

export const normalizeFiltersQuery = (
  query: LocationQuery,
  filtersValueSets: IFilterValueSets
): INormalizedFiltersQuery => {
  const filterSets: IFilterWithDefaultValueSets = { ...filtersValueSets, default: [] }

  const relationKeys = Object.keys(filtersToValueSetsRelations)

  // фильтруем другие(которые не относятся к фильтрам) query
  const filtered = Object.keys(query).reduce((acc, elem) => {
    if (relationKeys.includes(elem)) {
      return {
        ...acc,
        [elem]: query[elem]
      }
    }
    return acc
  }, {} as LocationQuery)

  return Object.entries(filtered).reduce((acc, [key, value]) => {
    const castedKey = key as keyof INormalizedFiltersQuery

    if (castedKey in acc && acc[castedKey] === value) return acc

    if (productFiltersPrimitiveValueKeys.includes(key)) {
      return { ...acc, [key]: String(value) }
    }

    const castedValue = Number(value)

    const newValue = filterSets[filtersToValueSetsRelations[castedKey]].find(
      (elem) => elem.id === castedValue
    )

    if (!newValue) return acc

    return {
      ...acc,
      [castedKey]: newValue
    }
  }, {} as INormalizedFiltersQuery)
}
