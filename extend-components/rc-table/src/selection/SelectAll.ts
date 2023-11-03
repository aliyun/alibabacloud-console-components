import { Checkbox } from '@alicloud/console-components'
import { CheckboxProps } from '@alicloud/console-components/types/checkbox'
import { mapProps } from 'recompose'
import { ISelectionProps } from './index'

const SelectAll = mapProps(
  (
    ownerProps: ISelectionProps & {
      selectAll: CheckboxProps['onChange']
    }
  ): {
    checked?: CheckboxProps['checked']
    indeterminate?: CheckboxProps['indeterminate']
    onChange?: CheckboxProps['onChange']
    disabled?: CheckboxProps['disabled']
  } => ({
    checked: ownerProps.isSelectedAll,
    indeterminate: ownerProps.isIndeterminate,
    onChange: ownerProps.selectAll,
    disabled: ownerProps.isDisabled,
  })
)(Checkbox)

export default SelectAll
