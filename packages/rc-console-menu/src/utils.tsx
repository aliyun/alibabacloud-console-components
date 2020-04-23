import React, { useCallback, useState } from 'react'
import { isFunction } from 'lodash'
import { ConfigProvider } from '@alicloud/console-components'
import { IMenuSelectProps } from '@alicloud/console-components-menu-select'
import cs from 'classnames'
import { SProductSelect } from './styles'

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @param {Number} level
 */
export const getPriority = (level: number): string =>
  new Array(level).fill('&').join('')

/**
 * Checks if value is `null` or `undefined`
 * @param {*} value
 * @return {Boolean}
 */
export const isNil = (value: any): value is undefined | null => value == null

export function GetFusionConfig<PropType extends { fusionConfig: any }>(
  Wrapped: React.ComponentType<PropType>
) {
  const ConfifgConsumer: any = (ConfigProvider as any).Consumer
  const HOC: React.FC<Omit<PropType, 'fusionConfig'>> = props => (
    <ConfifgConsumer>
      {(context: any) => (
        <Wrapped {...(props as PropType)} fusionConfig={context} />
      )}
    </ConfifgConsumer>
  )
  return HOC
}

export const ProductSelect: React.FC<IMenuSelectProps> = ({
  dropdownProps = {},
  onSelect,
  ...restProps
}) => {
  const { onVisibleChange, ...restDropdownProps } = dropdownProps

  const [isActive, setIsActive] = useState(false)

  const handleSelect = useCallback(
    (value, item) => {
      isFunction(onSelect) && onSelect(value, item)
      setIsActive(false)
    },
    [onSelect]
  )

  const handleVisibleChange = useCallback(
    (visible: boolean, type: string, e: {}) => {
      setIsActive(visible)
      isFunction(onVisibleChange) && onVisibleChange(visible, type, e)
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
