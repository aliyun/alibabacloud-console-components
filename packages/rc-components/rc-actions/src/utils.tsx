import React, {
  Children,
  isValidElement,
  ReactNode,
  ReactElement,
} from 'react'
import classNames from 'classnames'
import { ConfigProvider } from '@alicloud/console-components'
// eslint-disable-next-line import/no-cycle
import {
  PartitionFn as IPartitionFn_,
  RenderItemsByParts as RenderItemsByParts_,
  IActionsProps as IActionsProps_,
} from './actions'

type PartitionFn = IPartitionFn_
type RenderItemsByParts = RenderItemsByParts_
type IActionsProps = IActionsProps_

/**
 * @public
 * merge className and style from props with 'addition'
 */
export function getWrapperProps(
  props: {
    className?: string | string[]
    style?: any
  },
  addition: {
    className?: string | string[]
    style?: any
  }
) {
  return {
    className: classNames(props.className, addition.className),
    style: { ...props.style, ...addition.style },
  }
}

/**
 * @internal
 */
export function renderActionsChildren(
  children: ReactNode,
  partitionFn: PartitionFn,
  remderItemsByParts: RenderItemsByParts
) {
  let newChildren = children
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
  const parts = partitionFn(newChildren as ReactElement[])
  return remderItemsByParts(...parts)
}

/**
 * `flattern the React.Fragment inside children:
 * children: [<A>, <B>, <React.Fragment><C><D></React.Fragment>, <E>]
 * =>
 * result: [<A>, <B>, <C>, <D>, <E>]
 *
 * recursive option explain:
 * children: [<A>,
 *  <B>,
 *  <React.Fragment>
 *    <C>
 *    <React.Fragment><D></React.Fragment>
 *  </React.Fragment>,
 * <E>]
 * =>
 * if recursive: true, result will be:  [<A>, <B>, <C>, <D>, <E>] ()
 * if recursive: false, result will be: [<A>, <B>, <C>, <React.Fragment><D></React.Fragment>, <E>]`
 */

/**
 * @public
 */
export function spreadFragmentInChildren(
  children: ReactNode,
  recursive = true
) {
  if (!isValidElement(children) && !Array.isArray(children)) {
    throw new Error(`expect a single react element of an array of element`)
  }
  const result: ReactNode[] = []
  // children can be a single element or array of it
  Children.forEach(children, (node) => {
    if (!isValidElement(node)) {
      // node maybe 0, '', boolean, null, undefined
      // React.Children.forEach auto spread array into nodes, so node can't be array
      result.push(node)
    } else if (
      node.type === React.Fragment &&
      node.props &&
      node.props.children
    ) {
      // node.props.children can be a single element or array of it
      if (recursive) {
        result.push(...spreadFragmentInChildren(node.props.children))
      } else if (Array.isArray(node.props.children)) {
        result.push(...node.props.children)
      } else result.push(node.props.children)
    } else {
      result.push(node)
    }
  })
  return result
}

/**
 * @internal
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

/**
 * @public
 */
export interface IFusionConfig {
  prefix?: string
}

/**
 * @public
 */
export interface IFusionConfigProps {
  fusionConfig?: IFusionConfig
}

/**
 * @public
 */
export function GetFusionConfig<PropType>(
  Wrapped: React.ComponentType<IActionsProps & IFusionConfigProps>
) {
  const ConfifgConsumer: any = (ConfigProvider as any).Consumer
  const HOC: React.FC<IActionsProps> = (props) => (
    <ConfifgConsumer>
      {(context: IFusionConfig) => (
        <Wrapped {...props} fusionConfig={context} />
      )}
    </ConfifgConsumer>
  )
  return HOC
}
