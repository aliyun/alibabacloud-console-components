import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@alicloud/console-components'
import classNames from 'classnames'
import Context from './Context'
import Item from './Item'
import { baseClassName } from './constants'
import type { IDataFieldsProps } from './types/IDataFieldsProps.type'
export type { IDataFieldsProps }

const { Row } = Grid

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
