import { Checkbox } from '@alicloud/console-components'
import { mapProps } from 'recompose'

const SelectAll = mapProps(ownerProps => ({
  checked: ownerProps.isSelectedAll,
  indeterminate: ownerProps.isIndeterminate,
  onChange: ownerProps.selectAll,
}))(Checkbox)

export default SelectAll
