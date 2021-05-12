import React from 'react'
import {
  TableProps,
  ColumnProps,
} from '@alicloud/console-components/types/table'
import { ISelectionRenderParams } from '../selection'
import { Operation, ISearchProps, IPaginationProps } from '../layout/index'

/**
 * @public
 */

export interface IRcTableProps {
  /**
   * 位于 Table 左上角和右上角的操作区，没有任何预设组件和行为，通过 operation 来定义操作区的内容。<br />
   * `operation`可传入一个对象，通过指定`primary`和`secondary`来定义左上角和右上角的内容。<br />
   * 也可直接传入ReactNode只定义左上角行为。<br />
   * 详见文档 operation 小节
   * @defaultValue null
   */
  operation?: Operation
  /**
   * 搜索，组件内置`Search`组件，开发者只需要传入`SearchProps`即可。<br />
   * 也可以传入自定义Search组件来覆盖内置的Search。<br />
   * 也可以传入一个函数返回一个Search组件。<br />
   * 详见文档 search小节
   * @defaultValue null
   */
  search?: ISearchProps
  /**
   * 批量操作选择器，详见下`selection`小节
   * @defaultValue null
   */
  selection?: (selection: ISelectionRenderParams) => React.ReactNode
  /**
   * 分页，组件内置`Pagination`组件，开发者只需要传入`PaginationProps`即可。<br />
   * 也可以传入自定义Pagination组件来覆盖内置的Pagination。<br />
   * 也可以传入一个函数返回Pagination组件。<br />
   * 详见文档 pagination 小节
   * @defaultValue null
   */
  pagination?: IPaginationProps
  /**
   * 动作区滚动锁定, 在 rc-table 中最多会有上下两个动作区, 可以指定 `affixActionBar` 的值为 `true` 来同时开启两个动作区的滚动锁定特性, <br />
   * 也可以通过字符串`affixActionBar: ('bottom'|'top')`或者是数组`['bottom', 'top']`声明  指定某一个动作区开启该特性。<br />
   * 顶部和底部的操作栏affix的状态的时候，使用`position: sticky`来实现。需满足祖先元素的`overflow`不能为: `auto | hidden | overlay | scroll`，详情见 {@link https://developer.mozilla.org/zh-CN/docs/Web/CSS/position | sticky定位 }<br />
   * 或者使用`fixedHeader`结合`maxBodyHeight`让body区域滚动实现操作栏固定，详见Demo
   * @defaultValue false
   */
  affixActionBar?: boolean | string | string[]
  /**
   * 设置上下操作栏 affix 时候的层级
   * @defaultValue 1000
   */
  fixedBarZIndex?: number
  /**
   * 设置上下操作栏 affix 的时候的className
   */
  fixedClassName?: string
  /**
   * 设置上下操作栏 affix 的时候的样式
   */
  fixedStyle?: React.CSSProperties
  /**
   * 当 affixActionBar 开启时，顶部和底部的操作栏移入或者移出Table可视区域的回调函数
   */
  afterFixedBarIntersectChanged?: (
    alignType: 'top' | 'bottom',
    isIntersecting: boolean
  ) => void
  /**
   * 当 affixActionBar 开启时，锁定动作区向`左` `右`两边延伸的宽度, 左右相同可简写为一个如：[0], 按照控制台规范一般为[40, 24]
   * @defaultValue [0, 0]
   */
  fixedBarExpandWidth?: number[]
  /**
   * 为`true`时将会对传入的`selectedRowKeys`进行过滤，把不存在于dataSource中primaryKey过滤掉。
   * @defaultValue false
   */
  exact?: boolean
  /**
   * 列描述数据对象，是 columns 中的一项，继承`Table.Column`的 API
   */
  columns?: ColumnProps[]
  /**
   * 是否启用选择模式，继承基础组件`Table`的rowSelection 的API。可通过传入UNSTABLE_defaultSelectedRowKeys 指定默认的selectedRowKeys
   */
  rowSelection?: TableProps['rowSelection'] & {
    UNSTABLE_defaultSelectedRowKeys?: any[]
  }
}
