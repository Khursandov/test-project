import type { IBaseCounterparty, IBaseLabel, TDefaultState } from '@/types'

export interface IPackageSaleState {
  organizationsList: TDefaultState<IBaseLabel[]>
  counterpartyList: TDefaultState<IBaseCounterparty[]>
}
