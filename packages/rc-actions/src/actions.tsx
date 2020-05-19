/* eslint-disable import/no-cycle */
import React, { CSSProperties, ReactNode, useMemo } from 'react'
import { Icon, ConfigProvider } from '@alicloud/console-components'
import { DropdownProps } from '@alicloud/console-components/types/dropdown'
import { MenuProps } from '@alicloud/console-components/types/menu'
import Context from './context'
import { getWrapperProps } from './utils'
import { baseClassName } from './constants'
import { SActions } from './styles'
import ActionsChildren from './children'

/**
 * Actions 的props类型。
 * @public
 */
export interface IActionsProps {
  /**
   * 设置wrapper div的className
   */
  className?: string
  /**
   * 设置wrapper div的style
   */
  style?: CSSProperties
  /**
   * 子节点收敛阈值, 超过这个阈值的子节点将被收敛在下拉菜单中
   * @defaultValue `3`
   */
  threshold?: number
  /**
   * 收敛菜单的触发器
   * @defaultValue `<Icon type="more">`
   */
  expandTrigger?: ReactNode
  /**
   * 触发收敛菜单展示/收缩的动作
   * @defaultValue `click`
   */
  expandTriggerType?: 'hover' | 'click'
  /**
   * 是否允许Actions换行
   */
  wrap?: boolean
  /**
   * 开发者可传入dropdownProps，透传给弹层Dropdown。继承基础组件`Dropdown`的API
   */
  dropdownProps?: DropdownProps
  /**
   * 开发者可传入menuProps，透传给弹层内的Menu组件，继承基础组件`Menu`的API
   */
  menuProps?: MenuProps
  /**
   * @internal
   * @deprecated 请直接使用`children`
   * 效果等价于设置`children`。
   */
  dataSource?: ReactNode
}

/**
 * 多个操作器（如按钮、链接）的布局容器。
 * @public
 */
const Actions: React.FC<IActionsProps> = (props) => {
  const wrapperProps = getWrapperProps(props, { className: baseClassName })
  const {
    children,
    threshold = 3,
    dataSource,
    expandTrigger = <Icon type="more" size="xs" tabIndex={0} />,
    expandTriggerType = 'click' as IActionsProps['expandTriggerType'],
    wrap = false,
    dropdownProps = {},
    menuProps = {},
  } = props

  const fusionConfig = (ConfigProvider as any).getContext()

  const { prefix = 'next-' } = fusionConfig

  const providerValue = useMemo(
    () => ({
      dropdownProps,
      menuProps,
      prefix,
    }),
    [dropdownProps, menuProps, prefix]
  )

  return (
    <Context.Provider value={providerValue}>
      <SActions {...wrapperProps} wrap={wrap}>
        <ActionsChildren
          nodes={children || dataSource || []}
          threshold={threshold}
          expandTrigger={expandTrigger}
          expandTriggerType={expandTriggerType}
        />
      </SActions>
    </Context.Provider>
  )
}

export default Actions
