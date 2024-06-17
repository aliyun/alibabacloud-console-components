import { CSSProperties, ReactNode } from 'react'
import { DropdownProps } from '@alicloud/console-components/types/dropdown'
import { MenuProps } from '@alicloud/console-components/types/menu'

/**
 * Actions 的props类型。
 * @public
 */
export interface IActionsProps {
  /**
   * Actions 的 children
   */
  children?: ReactNode
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
   * @privateRemarks 这个prop只是{@link IActionsProps.partitionFn | partitionFn}的语法糖。这个属性的效果在内部实际上是使用{@link IActionsProps.partitionFn | partitionFn}来实现的，如果设置了threshold，则partitionFn将子节点分为两组：`[前threshold个, 剩下的x个]`
   * @defaultValue 3
   */
  threshold?: number
  /**
   * 收敛菜单的触发器
   * @defaultValue <Icon type="more">
   */
  expandTrigger?: ReactNode
  /**
   * 触发收敛菜单展示/收缩的动作
   * @defaultValue click
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
