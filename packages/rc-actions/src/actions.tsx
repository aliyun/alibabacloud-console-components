import React, {
  CSSProperties,
  ReactNode,
  ReactElement,
  createContext,
  useMemo,
} from 'react'
import { Dropdown, Menu, Icon } from '@alicloud/console-components'
import { DropdownProps } from '@alicloud/console-components/types/dropdown'
import { MenuProps } from '@alicloud/console-components/types/menu'
import cls from 'classnames'

import {
  GetFusionConfig,
  IFusionConfigProps,
  getWrapperProps,
  partitionWithThreshold,
  renderActionsChildren,
} from './utils'
import { LinkButton } from './linkButton'
import {
  baseClassName,
  itemClassName,
  triggerClassName,
  expandMenuClassName,
  collapsedItemClassName,
} from './constants'
import { SActions, DropDownStyle } from './styles'

const Context = createContext<{
  menuProps: MenuProps
  dropdownProps: DropdownProps
  prefix: string
}>({
  menuProps: {},
  dropdownProps: {},
  prefix: 'next-',
})

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
   * @privateRemarks 这个prop只是{@link IActionsProps.partitionFn | partitionFn}的语法糖。这个属性的效果在内部实际上是使用{@link IActionsProps.partitionFn | partitionFn}来实现的，如果设置了threshold，则partitionFn将子节点分为两组：`[前threshold个, 剩下的x个]`
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
const Actions: React.FC<IActionsProps & IFusionConfigProps> = (props) => {
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
    fusionConfig = {},
  } = props

  /**
   * 根据threshold将子节点分为两组：`[前threshold个, 剩下的x个]`
   */
  const partitionFn: PartitionFn = ((childrenArg) =>
    partitionWithThreshold(childrenArg, threshold)) as PartitionFn
  /**
   * partitionFn已经将子元素分为了两组：`[前threshold个, 剩下的x个]`，它会将前面这组直接展示，并用竖线分开，将后面这组收敛在一个下拉菜单中
   */
  const renderItemsByParts: RenderItemsByParts = defaultRenderItemsByParts.bind(
    null,
    expandTrigger,
    expandTriggerType
  )

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
        {renderActionsChildren(
          children || dataSource || [],
          partitionFn,
          renderItemsByParts
        )}
      </SActions>
    </Context.Provider>
  )
}

export default GetFusionConfig(Actions)

function defaultRenderDisplayedItems(items: ReactElement[]) {
  return items.map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <span key={index} className={itemClassName}>
      {item}
    </span>
  ))
}

function defaultRenderShrinkItems(
  items: ReactElement[],
  config: {
    expandTriggerType: IActionsProps['expandTriggerType']
    expandTrigger: IActionsProps['expandTrigger']
  }
) {
  if (items.length === 0) {
    return null
  }

  const { expandTrigger, expandTriggerType } = config
  return (
    <Context.Consumer>
      {({ prefix, dropdownProps, menuProps }) => {
        return (
          <>
            <DropDownStyle prefix={prefix} />
            <Dropdown
              {...dropdownProps}
              trigger={
                <span className={triggerClassName}>{expandTrigger}</span>
              }
              triggerType={expandTriggerType}
            >
              <Menu
                {...menuProps}
                className={cls(expandMenuClassName, menuProps.className || '')}
              >
                {items.map((item, i) => {
                  const {
                    props: { disabled },
                    type,
                  } = item
                  if (type && (type as any).__windType === 'LinkButton') {
                    return <Menu.Item {...item.props} />
                  }
                  return (
                    // eslint-disable-next-line react/no-array-index-key
                    <Menu.Item disabled={disabled} key={i}>
                      <span className={collapsedItemClassName}>{item}</span>
                    </Menu.Item>
                  )
                })}
              </Menu>
            </Dropdown>
          </>
        )
      }}
    </Context.Consumer>
  )
}

function defaultRenderItemsByParts(
  expandTrigger: ReactNode,
  expandTriggerType: IActionsProps['expandTriggerType'],
  displayedItems: ReactElement[],
  shrinkItems: ReactElement[]
) {
  return (
    <>
      {defaultRenderDisplayedItems(displayedItems)}
      {defaultRenderShrinkItems(shrinkItems, {
        expandTrigger,
        expandTriggerType,
      })}
    </>
  )
}

/**
 * 这个函数将子元素划分为多个“部分”。比如，可以分为【需要直接展示的元素】和【需要藏在下拉菜单的元素】。
 * 用户可以通过这个API来自定义如何将子元素**过滤、排序、分类**。分好类以后会被传给  `IActionsProps.renderItemsByParts` 处理。
 * @param children - Actions组件的所有子元素。
 * @returns 经过过滤、排序、分类后的子元素。比如可以返回`[Array<需要直接展示的元素>, Array<需要隐藏在下拉菜单的元素>]`。
 * @public
 */
export type PartitionFn = (
  children: ReactElement[]
) => [ReactElement[], ReactElement[]]

/**
 * 这个函数接受经过 {@link IActionsProps.partitionFn | partitionFn}处理的子元素。返回需要渲染的元素。
 * 比如，如果 {@link IActionsProps.partitionFn | partitionFn}将子元素划分为`[Array<displayedItem>, Array<shrinkItems>]`，那么这个函数的签名就应该是:"(displayedItems: ReactElement[], shrinkItems: ReactElement[]) =\> ReactNode"
 * @param parts - 经过 {@link IActionsProps.partitionFn | partitionFn}分类以后的数组。
 * @returns 最终需要渲染的ReactNode。
 * @internal
 */
export type RenderItemsByParts = (...parts: ReactElement[][]) => ReactNode
