import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@alicloud/console-components'
import classNames from 'classnames'
import Context from './Context'
import Item, { IItemProps } from './Item'
import { baseClassName } from './constants'

const { Row } = Grid

/**
 * @public
 */
export interface IDataFieldsProps {
  /**
   * 字段列表数据
   */
  dataSource: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }
  /**
   * 定义要展示哪些字段，以及如何展示。数组项的数据结构见`IItemProps`的API
   */
  items: IItemProps[]
  /**
   * 自定义wrapper div的类名
   */
  className?: string
  /**
   * 自定义wrapper div的样式
   */
  style?: React.CSSProperties
  /**
   * 自定义wrapper div中的额外内容
   */
  children?: React.ReactNode
}

/**
 * @public
 */
const DataFields: React.FC<IDataFieldsProps> = ({
  dataSource,
  items,
  className,
  style,
  children,
}) => (
  <Context.Provider value={dataSource}>
    <Row
      className={classNames(baseClassName, className)}
      style={style}
      gutter={32}
      wrap
    >
      {items &&
        items.map((item, i) => (
          <Item key={item.key || `item-${i}`} {...item} />
        ))}
      {children}
    </Row>
  </Context.Provider>
)

DataFields.propTypes = {
  dataSource: PropTypes.objectOf(PropTypes.any.isRequired).isRequired,
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node,
}

export default DataFields
