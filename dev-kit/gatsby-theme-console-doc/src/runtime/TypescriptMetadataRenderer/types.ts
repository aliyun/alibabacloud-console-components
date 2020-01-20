export enum MetaKind {
  Package = 'Package',
  Interface = 'Interface',
  Variable = 'Variable',
  TypeAlias = 'TypeAlias',
  PropertySignature = 'PropertySignature',
  // ...省略了一些没有用到的
}

export interface IMetaBase {
  name: string
  kind: MetaKind
  displayName: string
  definitionHierarchy: string[]
  excerpt: string
  summary: string
}

export interface IMetaIterface extends IMetaBase {
  kind: MetaKind.Interface
  properties: { name: string }[]
}

export interface IMetaInterfaceProperty extends IMetaBase {
  kind: MetaKind.PropertySignature
  defaultValue: string
}

export type IMeta = IMetaIterface | IMetaInterfaceProperty

export interface IAPIData {
  [name: string]: IMeta
}
