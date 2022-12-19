import React from 'react'
import { Table as NextTable } from '@alifd/next'
import classnames from 'classnames'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { useCssVar } from '../utils/useCssVar'

type TableProps = React.ComponentProps<typeof NextTable>

const Table: React.FC<TableProps> = ({
  hasBorder,
  rowSelection,
  className,
  ...restProps
}) => {
  const theme = useCssVar('--alicloudfe-components-theme')
  const isWind = theme.trim() === 'wind'
  if (hasBorder === undefined) {
    // wind主题的默认值为true
    hasBorder = isWind
  }
  return (
    <NextTable
      hasBorder={hasBorder}
      rowSelection={rowSelection}
      className={classnames(className, {
        // 对于有选择列的表格，我们增加一个类名，方便对这种表格进行样式覆盖
        ['with-row-select']: !!rowSelection,
        ['is-wind']: isWind
      })}
      {...restProps}
    />
  )
}

hoistNonReactStatics(Table, NextTable)

const exported: typeof NextTable = Table as any

export default exported
