import DataFields from './DataFields'
import Item from './Item'
import Label from './Label'
import Value from './Value'

/**
 * @public
 */
export type IDataFields = typeof DataFields & {
  Item: typeof Item
  Label: typeof Label
  Value: typeof Value
}

/**
 * @public
 */
const ExportedDataFields: IDataFields = Object.assign(DataFields, {
  Item,
  Label,
  Value,
})

export default ExportedDataFields
export { DataFields, Item, Label, Value }

export * from './DataFields'
export * from './Item'
export * from './Label'
export * from './Value'

export * from './types'
