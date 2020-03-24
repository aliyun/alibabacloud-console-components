import { Checkbox } from '@alicloud/console-components'
import { mapProps } from 'recompose'
import { ISelection } from './index'

const SelectAll = mapProps(
  (
    ownerProps: ISelection & {
      selectAll: (checked: boolean) => string[]
    }
  ) => ({
    checked: ownerProps.isSelectedAll,
    indeterminate: ownerProps.isIndeterminate,
    onChange: ownerProps.selectAll,
  })
)(Checkbox)

export default SelectAll
