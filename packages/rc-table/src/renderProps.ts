import { isValidElement } from 'react'
import isFunction from 'lodash/isFunction'
import { IRcTableProps } from './index'
import { ITableProps } from './layout/index'

const renderProps = (
  ownerProps: IRcTableProps & {
    children: (props: IRcTableProps) => React.ReactNode
    render?: ITableProps['selection']
  },
  ...args: IRcTableProps[]
): React.ReactNode => {
  const { children, render } = ownerProps

  if (isValidElement(children)) {
    return children
  }

  if (isFunction(children)) {
    return children(...args)
  }

  if (isFunction(render)) {
    return render(...args)
  }

  return null
}

export default renderProps
