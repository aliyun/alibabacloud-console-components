/* eslint-disable import/no-cycle */
import React, { ReactNode, isValidElement, ReactElement } from 'react'
import { Dropdown, Menu } from '@alicloud/console-components'
import classNames from 'classnames'
import Context from './context'
import { IActionsProps } from './actions'
import { DropDownStyle } from './styles'
import { spreadFragmentInChildren } from './utils'
import {
  itemClassName,
  triggerClassName,
  expandMenuClassName,
  collapsedItemClassName,
} from './constants'

export type RenderItemsByParts = (...parts: ReactElement[][]) => ReactNode

export interface IActionsChildrenProps extends IActionsProps {
  nodes: ReactNode
  threshold: number
  expandTrigger: IActionsProps['expandTrigger']
  expandTriggerType: IActionsProps['expandTriggerType']
}

const ActionsChildren: React.FC<IActionsChildrenProps> = ({
  nodes,
  threshold,
  expandTrigger,
  expandTriggerType,
}) => {
  let newChildren = nodes
  if (isValidElement(newChildren)) {
    newChildren = [newChildren]
  }
  if (!Array.isArray(newChildren)) {
    throw new Error(
      `unexpected children type: ${{}.toString.call(newChildren)}`
    )
  }
  newChildren = spreadFragmentInChildren(newChildren)
    // only consider these nodes
    .filter(
      (node) => isValidElement(node) && node.props.visible !== false
    ) as ReactElement[]
  const parts = partitionWithThreshold(newChildren as ReactElement[], threshold)
  return renderItemsByParts(expandTrigger, expandTriggerType, ...parts)
}

export default ActionsChildren

/**
 * 根据threshold将子节点分为两组：`[前threshold个, 剩下的x个]`
 */
export function partitionWithThreshold<T>(arr: T[], threshold: number) {
  const front: T[] = []
  const back: T[] = []
  arr.forEach((item, i) => {
    if (i < threshold) {
      front.push(item)
    } else {
      back.push(item)
    }
  })
  return [front, back] as [T[], T[]]
}

function renderItemsByParts(
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
 * 将后x个收敛到Menu列表中
 */
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
                className={classNames(
                  expandMenuClassName,
                  menuProps.className || ''
                )}
              >
                {items.map((item, i) => {
                  const {
                    props: { disabled },
                  } = item
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

/**
 * partitionFn已经将子元素分为了两组：`[前threshold个, 剩下的x个]`，它会将前面这组直接展示，并用竖线分开，将后面这组收敛在一个下拉菜单中
 */
function defaultRenderDisplayedItems(items: ReactElement[]) {
  return items.map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <span key={index} className={itemClassName}>
      {item}
    </span>
  ))
}
