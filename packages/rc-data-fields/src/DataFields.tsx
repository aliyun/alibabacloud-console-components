import React from 'react'

import { Grid } from '@alicloud/console-components'
import classNames from 'classnames'

import { BASE_CLASS_NAME } from './consts'
import { IDataFieldsProps } from './types'
import Context from './Context'
import Item from './Item'

const { Row } = Grid

/**
 * @public
 */
function DataFields(props: IDataFieldsProps) {
  const {
    dataSource,
    items: fieldList,
    labelLayout: customAllLabelLayout,
    className: customClassName,
    style: customStyle,
    children,
  } = props

  return (
    <Context.Provider value={dataSource}>
      <Row
        className={classNames(BASE_CLASS_NAME, customClassName)}
        style={customStyle}
        gutter={32}
        wrap
      >
        {fieldList &&
          fieldList.map((fieldInfo, filedIndex) => {
            if (!fieldInfo.labelLayout) {
              fieldInfo.labelLayout = customAllLabelLayout
            }

            return (
              <Item
                key={fieldInfo.dataIndex || `field-item-${filedIndex}`}
                {...fieldInfo}
                isNextCol
              />
            )
          })}
        {children}
      </Row>
    </Context.Provider>
  )
}

export default DataFields
