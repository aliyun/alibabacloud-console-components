import { isValidElement } from 'react'
import { isFunction } from 'lodash'

const renderProps = (ownerProps: any, ...args: any[]): React.ReactNode => {
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
