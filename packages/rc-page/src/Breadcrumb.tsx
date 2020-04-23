import * as React from 'react'
import { Breadcrumb as RawBreadcrumb } from '@alicloud/console-components'

/**
 * @public
 */
export type BreadcrumbItemType = typeof import('@alicloud/console-components/types/breadcrumb').Item

/**
 * @public
 */
export interface IBreadcrumbProps {
  /**
   * 面包屑的项。通常包括若干个{@link IBreadcrumb.Item | Breadcrumb.Item}作为子元素。
   */
  children: React.ReactNode
}

/**
 * @public
 */
export interface IBreadcrumb extends React.FC<IBreadcrumbProps> {
  /**
   * 定义面包屑的项。
   */
  Item: BreadcrumbItemType
}

/**
 * 定义面包屑。通常包括若干个{@link IBreadcrumb.Item | Breadcrumb.Item}作为子元素。
 * @public
 */
const Breadcrumb: IBreadcrumb = props => (
  <RawBreadcrumb maxNode={5} separator="/" {...props} />
)

Breadcrumb.Item = RawBreadcrumb.Item

export default Breadcrumb
