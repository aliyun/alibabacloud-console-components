export enum NodeKind {
  Package = 'Package',
  Interface = 'Interface',
  Variable = 'Variable',
  TypeAlias = 'TypeAlias',
  PropertySignature = 'PropertySignature',
}

export interface IAPIDataItemBase {
  name: string
  kind: NodeKind
  displayName: string
  definitionHierarchy: string[]
  excerpt: string
  summary: string
}

export interface IAPIDataIterface extends IAPIDataItemBase {
  kind: NodeKind.Interface
  properties: { name: string }[]
}

export interface IAPIDataProperty extends IAPIDataItemBase {
  kind: NodeKind.PropertySignature
  defaultValue: string
}

export type IAPIDataItem = IAPIDataIterface | IAPIDataProperty

export interface IAPIData {
  [name: string]: IAPIDataItem
}
