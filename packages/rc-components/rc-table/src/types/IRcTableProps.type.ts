import { TableProps } from '@alifd/next/types/table';
import React from 'react';
import { IPaginationProps, ISearchProps, Operation } from '../layout/index';
import { ISelectionRenderParams } from '../selection';
import { IRcTableColumnProps } from './IRcTableColumnProps.type';

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
   * 通过对象的方式可以分别指定上下操作栏的属性。
   * affixMode: 'intersection-observer'表示使用intersection-observer来监听操作栏是否滚动出视口，如果是，则会额外渲染一个固定在顶部或底部的弹层。<br />
   * affixMode: 'sticky'表示纯sticky模式，直接使用css的sticky来实现吸顶或吸底，不通过“监听操作栏是否滚动出视口”来动态插入额外弹层。<br />
   * “固定在顶部或底部的弹层”使用`position: sticky`来实现，详情见 {@link https://developer.mozilla.org/zh-CN/docs/Web/CSS/position | sticky定位 }<br />
   * 固定操作栏的另一中实现方式是使用`fixedHeader`结合`maxBodyHeight`让body区域滚动实现操作栏固定，这种方式不需要使用`affixActionBar`，详见Demo
   * @defaultValue false
   */
  affixActionBar?:
  | boolean
  | string
  | string[]
  | {
    top?: { affixMode?: 'intersection-observer' | 'sticky' }
    bottom?: { affixMode?: 'intersection-observer' | 'sticky' }
  }
  /**
   * 设置上下操作栏 affix 时候的层级
   * @defaultValue 99
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
   * 当 affixActionBar 开启时，锁定动作区向`左` `右`两边延伸的宽度, 左右相同可简写为一个，如：`[0]`。在阿里云控制台中，请传入`[24]`。
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
  columns?: IRcTableColumnProps[]
  /**
   * 是否启用选择模式，继承基础组件`Table`的rowSelection 的API。可通过传入UNSTABLE_defaultSelectedRowKeys 指定默认的selectedRowKeys
   */
  rowSelection?: TableProps['rowSelection'] & {
    UNSTABLE_defaultSelectedRowKeys?: any[]
  }
}
