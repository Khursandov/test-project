export interface IBaseLabel {
  label: string
  id: number
}

export interface ILabelWithParentId extends IBaseLabel {
  parentId: number
}

export interface ILabelWithRoomTypes extends IBaseLabel {
  roomTypeIds: string[]
}
