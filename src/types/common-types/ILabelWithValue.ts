import type { IBaseLabel } from '@/types'

export interface ILabelWithValue<T> extends IBaseLabel {
  value: T
}
