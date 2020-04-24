import React from 'react'
import PropTypes from 'prop-types'
import { Table } from '@alicloud/console-components'
import { withProps } from 'recompose'
import styled from 'styled-components'
import { isArray } from 'lodash'
import { PaginationProps } from '@alicloud/console-components/types/pagination'
import {
  TableProps,
  ColumnProps,
} from '@alicloud/console-components/types/table'
import { OverlayProps } from '@alicloud/console-components/types/overlay'
import { SearchProps } from '@alicloud/console-components/types/search'
import ActionBar, {
  IntersectionFixedActionBar,
  IActionBarProps,
} from '../action-bar'
import Context from './FixedBarContext'
import Search from '../search'
import Selection, { ISelectionRenderParams } from '../selection'
import Pagination from '../pagination'
import renderComponent from '../renderComponent'

/**
 * @public
 */
export type TableOperaion =
  | ((tableProps: ITableProps) => React.ReactNode)
  | React.ReactNode

/**
 * @public
 */
export type Operation =
  | TableOperaion
  | {
      primary?: TableOperaion
      secondary?: TableOperaion
    }

/**
 * @public
 */
export type IPaginationProps = TableOperaion | PaginationProps

/**
 * @public
 */
export type ISearchProps = TableOperaion | SearchProps

/**
 * @public
 */
export interface IRcTableProps {
  /**
   * 位于 Table 左上角和右上角的操作区，没有任何预设组件和行为，通过 operation 来定义操作区的内容。<br />
   * `operation`可传入一个对象，通过指定`primary`和`secondary`来定义左上角和右上角的内容。<br />
   * 也可直接传入ReactNode只定义左上角行为。<br />
   * 详见下<a href="#operation">operation</a>小节
   * @defaultValue `null`
   */
  operation?: Operation
  /**
   * 搜索，组件内置`Search`组件，开发者只需要传入`SearchProps`即可。<br />
   * 也可以传入自定义Search组件来覆盖内置的Search。<br />
   * 也可以传入一个函数返回一个Search组件。<br />
   * 详见下<a href="#search">search</a>小节
   * @defaultValue `null`
   */
  search?: ISearchProps
  /**
   * 批量操作选择器，详见下`selection`小节
   * @defaultValue `null`
   */
  selection?: (selection: ISelectionRenderParams) => React.ReactNode
  /**
   * 分页，组件内置`Pagination`组件，开发者只需要传入`PaginationProps`即可。<br />
   * 也可以传入自定义Pagination组件来覆盖内置的Pagination。<br />
   * 也可以传入一个函数返回Pagination组件。<br />
   * 详见下 <a href="#pagination">pagination</a>小节
   * @defaultValue `null`
   */
  pagination?: IPaginationProps
  /**
   * 动作区滚动锁定, 在 rc-table 中最多会有上下两个动作区, 可以指定 `affixActionBar` 的值为 `true` 来同时开启两个动作区的滚动锁定特性, <br />
   * 也可以通过字符串`affixActionBar: ('bottom'|'top')`或者是数组`['bottom', 'top']`声明  指定某一个动作区开启该特性。<br />
   * 顶部和底部的操作栏affix的状态的时候，使用`position: sticky`来实现。需满足祖先元素的`overflow`不能为: `auto | hidden | overlay | scroll`，详情见 {@link https://developer.mozilla.org/zh-CN/docs/Web/CSS/position | sticky定位 }<br />
   * 或者使用`fixedHeader`结合`maxBodyHeight`让body区域滚动实现操作栏固定，详见 <a href="#fixedHeader实现固定操作栏">Demo</a>
   * @defaultValue `false`
   */
  affixActionBar?: boolean | string | string[]
  /**
   * 设置上下操作栏 affix 时候的层级
   * @defaultValue `1000`
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
   * @defaultValue `[0, 0]`
   */
  fixedBarExpandWidth?: number[]
  /**
   * 为`true`时将会对传入的`selectedRowKeys`进行过滤，把不存在于dataSource中primaryKey过滤掉。
   * @defaultValue `false`
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
  /**
   * @internal
   * 当action-bar为affix状态的时候，透传给弹层overlay，继承基础组件`Overlay`。可以指定action-bar在affix状态时候渲染的容器
   */
  affixBarOverlayProps?: OverlayProps
}

/**
 * @public
 */
export type ITableProps = TableProps & IRcTableProps

interface IFixedAlign {
  fixedAlign?: 'top' | 'bottom'
}

const getFixedAlign = (
  align: 'top' | 'bottom'
): {
  fixedAlign: 'top' | 'bottom'
} => ({
  fixedAlign: align,
})

const FixedTopActionBar = withProps<IFixedAlign, IActionBarProps & IFixedAlign>(
  getFixedAlign('top')
)(IntersectionFixedActionBar)

const FixedBottomActionBar = withProps<
  IFixedAlign,
  IActionBarProps & IFixedAlign
>(getFixedAlign('bottom'))(IntersectionFixedActionBar)

// init ExpandedWidth
const defaultExpandedWidth = 0

const getActionBarComponent = (
  status: ITableProps['affixActionBar']
): {
  top?: React.ComponentType<IActionBarProps & IFixedAlign>
  bottom?: React.ComponentType<IActionBarProps & IFixedAlign>
} => {
  if (status === true) {
    return {
      top: FixedTopActionBar,
      bottom: FixedBottomActionBar,
    }
  }

  let arrStatus = status

  if (typeof status === 'string') {
    arrStatus = status.replace(/\s/g, '').split(',')
  }

  if (Array.isArray(arrStatus)) {
    return arrStatus.reduce((result, key) => {
      switch (key) {
        case 'top': {
          return {
            ...result,
            top: FixedTopActionBar,
          }
        }
        case 'bottom': {
          return {
            ...result,
            bottom: FixedBottomActionBar,
          }
        }
        default: {
          return result
        }
      }
    }, {})
  }

  return {}
}

// eslint-disable-next-line import/no-named-as-default-member
const ScActionBarRight = styled(ActionBar.Right)`
  flex: 0 0 auto;
`
const getExpandedStyle = (
  fixedBarExpandWidth: number[]
): {
  marginLeft: number
  width: string
} => {
  let actualExpandedWidth = []
  if (isArray(fixedBarExpandWidth)) {
    if (fixedBarExpandWidth.length === 0) {
      actualExpandedWidth = [defaultExpandedWidth, defaultExpandedWidth]
    } else if (fixedBarExpandWidth.length === 1) {
      actualExpandedWidth = [fixedBarExpandWidth[0], fixedBarExpandWidth[0]]
    } else {
      actualExpandedWidth = [fixedBarExpandWidth[0], fixedBarExpandWidth[1]]
    }
  } else {
    actualExpandedWidth = [defaultExpandedWidth, defaultExpandedWidth]
  }
  return {
    marginLeft: -actualExpandedWidth[0],
    width: `calc(100% + ${actualExpandedWidth[0] + actualExpandedWidth[1]}px)`,
  }
}

const Layout: React.FC<Omit<ITableProps, 'columns' | 'exact'>> = (props) => {
  const {
    operation,
    search,
    selection,
    pagination,
    affixActionBar,
    fixedBarZIndex,
    fixedClassName,
    fixedStyle,
    afterFixedBarIntersectChanged,
    fixedBarExpandWidth = [defaultExpandedWidth, defaultExpandedWidth],
    affixBarOverlayProps,
    ...restProps
  } = props

  const {
    top: ExactTopActionBar = ActionBar,
    bottom: ExactBottomActionBar = ActionBar,
  } = getActionBarComponent(affixActionBar)
  const extraStyle = getExpandedStyle(fixedBarExpandWidth)
  return (
    <Context.Provider
      value={{
        fixedBarZIndex,
        fixedClassName,
        fixedStyle: {
          ...fixedStyle,
          ...extraStyle,
        },
      }}
    >
      <STableWrapper>
        {(operation || search) && (
          <ExactTopActionBar
            afterIntersectChanged={afterFixedBarIntersectChanged}
            affixBarOverlayProps={affixBarOverlayProps}
          >
            <ActionBar.Left>
              {operation &&
                renderComponent(
                  null,
                  (operation as { primary: TableOperaion }).primary ||
                    operation,
                  props
                )}
              {renderComponent(Search, search, props)}
            </ActionBar.Left>
            <ActionBar.Right>
              {operation &&
                renderComponent(
                  null,
                  (operation as { secondary: TableOperaion }).secondary,
                  props
                )}
            </ActionBar.Right>
          </ExactTopActionBar>
        )}
        <div>
          <Table {...restProps} />
        </div>
        {(selection || pagination) && (
          <ExactBottomActionBar
            align="bottom"
            afterIntersectChanged={afterFixedBarIntersectChanged}
            affixBarOverlayProps={affixBarOverlayProps}
          >
            <ActionBar.Left>
              {selection && <Selection render={selection} />}
            </ActionBar.Left>
            <ScActionBarRight>
              {renderComponent(Pagination, pagination, props)}
            </ScActionBarRight>
          </ExactBottomActionBar>
        )}
      </STableWrapper>
    </Context.Provider>
  )
}

Layout.propTypes = {
  operation: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.objectOf(PropTypes.any),
  ]),
  search: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.node,
    PropTypes.func,
  ]),
  selection: PropTypes.oneOfType([PropTypes.func]),
  pagination: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.node,
    PropTypes.func,
  ]),
  affixActionBar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
  ]),
  fixedBarZIndex: PropTypes.number,
  fixedClassName: PropTypes.string,
  fixedStyle: PropTypes.objectOf(PropTypes.any),
  afterFixedBarIntersectChanged: PropTypes.func,
  fixedBarExpandWidth: PropTypes.arrayOf(PropTypes.any),
}

export default Layout

const STableWrapper = styled.div`
  .next-table-header {
    .next-table-cell-wrapper {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
`
