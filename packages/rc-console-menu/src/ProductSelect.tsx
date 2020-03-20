import React, { useCallback, useState } from 'react'
import { IMenuSelectProps } from '@alicloud/console-components-menu-select'
import cs from 'classnames'
import { isFunction } from 'lodash'
import { SProductSelect } from './styles'

const ProductSelect: React.FC<IMenuSelectProps> = ({
  dropdownProps = {},
  onSelect,
  ...restProps
}) => {
  const { onVisibleChange, ...restDropdownProps } = dropdownProps

  const [isActive, setIsActive] = useState(false)

  const handleSelect = useCallback(
    (value, item) => {
      if (isFunction(onSelect)) {
        onSelect(value, item)
      }
      setIsActive(false)
    },
    [onSelect]
  )

  const handleVisibleChange = useCallback(
    (visible: boolean, type: string, e: {}) => {
      setIsActive(visible)
      if (isFunction(onVisibleChange)) {
        onVisibleChange(visible, type, e)
      }
    },
    [onVisibleChange]
  )

  return (
    <SProductSelect
      className={cs('wind-consolemenu-product-select', {
        active: isActive,
      })}
      showSelectLabel
      onSelect={handleSelect}
      dropdownProps={{
        onVisibleChange: handleVisibleChange,
        ...restDropdownProps,
        style: { width: '176px' },
        align: 'tl, bl',
        offset: [-1, 0],
      }}
      {...restProps}
    />
  )
}

export default ProductSelect
