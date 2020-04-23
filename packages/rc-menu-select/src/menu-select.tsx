import React, { useState, useCallback, useMemo } from 'react'
import { Icon, Menu } from '@alicloud/console-components'
import { DropdownProps } from '@alicloud/console-components/types/dropdown'
import cs from 'classnames'
import * as S from './style'

/**
 * @public
 */
export interface IDataSourceItem {
  label: React.ReactNode
  value: string
}

/**
 * @public
 */
export interface IMenuSelectProps {
  /**
   * 设置渲染下拉列表的数据源，数据格式为`[{ value: string, label: React.ReactNode }]`
   */
  dataSource?: IDataSourceItem[]
  /**
   * 当前的值
   */
  value?: string
  /**
   * 下拉选择之后的回调函数，一般在该函数里面改变value的值
   */
  onSelect?: (value: string, item: IDataSourceItem) => void
  /**
   * 选择label之后是否展示
   */
  showSelectLabel?: boolean
  /**
   * 设置trigger（下拉按钮）的className
   */
  triggerClassName?: string
  /**
   * 下拉框弹层的props, 透传给Dropdown
   */
  dropdownProps?: DropdownProps
  /**
   * 组件最外层的className
   */
  className?: string
}

const renderItem = (
  dataSource: IMenuSelectProps['dataSource']
): React.ReactNode =>
  Array.isArray(dataSource)
    ? dataSource.map((item: IDataSourceItem) => (
        <Menu.Item key={item.value}>{item.label}</Menu.Item>
      ))
    : null

/**
 * @public
 */
const MenuSelect: React.FC<IMenuSelectProps> = ({
  dataSource = [],
  value,
  onSelect,
  showSelectLabel = false,
  triggerClassName,
  dropdownProps = {},
  className,
}) => {
  const { onVisibleChange, ...restDropdownProps } = useMemo(
    () => dropdownProps,
    [dropdownProps]
  )

  const mapToDetail = useCallback(
    v => {
      return dataSource.filter(item => item.value === v)[0] || {}
    },
    [dataSource]
  )

  const actualLabel = useMemo(() => {
    return mapToDetail(value).label
  }, [mapToDetail, value])

  const [direction, setDirection] = useState('down')

  const handleChangeDirection = (): void => {
    setDirection(direction === 'down' ? 'up' : 'down')
  }

  const handleClick = (selectedKey: string): void => {
    handleChangeDirection()
    onSelect && onSelect(selectedKey, mapToDetail(selectedKey))
  }

  const handleVisibleChange = useCallback(
    (visible: boolean, type: string, e: {}) => {
      setDirection(visible ? 'up' : 'down')
      if (typeof onVisibleChange === 'function') {
        onVisibleChange(visible, type, e)
      }
    },
    [onVisibleChange]
  )

  return (
    <S.SMenuSelectContainer
      className={cs('wind-menu-select-container', className)}
    >
      <S.SDropdown
        className="wind-menu-select-dropdown"
        visible={direction === 'up'}
        triggerType="click"
        offset={[0, 0]}
        cache
        onVisibleChange={handleVisibleChange}
        trigger={
          <S.STriggerWrapper className="wind-menu-select-inner">
            {showSelectLabel && (
              <S.SSelectLabel className="select-label">
                {actualLabel}
              </S.SSelectLabel>
            )}
            <S.STrigger className={cs('trigger-icon-wrap', triggerClassName)}>
              <Icon
                onClick={handleChangeDirection}
                size="xs"
                type={`sort-${direction}`}
                className={cs({
                  'trigger-icon': true,
                  'icon-up': direction === 'up',
                })}
              />
            </S.STrigger>
          </S.STriggerWrapper>
        }
        {...restDropdownProps}
      >
        <S.SMenu
          className="wind-select-menu"
          popupAutoWidth
          selectedKeys={String(value)}
          selectMode="single"
          onItemClick={handleClick}
          isSelectIconRight
        >
          {renderItem(dataSource)}
        </S.SMenu>
      </S.SDropdown>
    </S.SMenuSelectContainer>
  )
}

export default MenuSelect
