import type { TNullable } from '@/types'

export type TDefaultState<T> = {
  data: TNullable<T>
  loading: boolean
  error: unknown
}
