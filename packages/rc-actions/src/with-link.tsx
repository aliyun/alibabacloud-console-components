import React, { ComponentType } from 'react'
import { Link } from 'dva/router'
import { SLinkButton, IWithLinkProps } from './linkButton'

/**
 * @public
 */
function WithLink<T>(WrapperComponent: ComponentType<T>) {
  const H: React.FC<T & IWithLinkProps & React.HTMLProps<HTMLLinkElement>> = ({
    href,
    to,
    ...restProps
  }) => {
    if ((href || to) && !restProps.disabled) {
      const shape = href ? 'a' : Link

      const attributes = href ? { href } : { to }

      return (
        <SLinkButton {...(restProps as T)} {...attributes} as={shape}>
          {restProps.children}
        </SLinkButton>
      )
    }
    return <WrapperComponent {...(restProps as T)} />
  }
  return H
}

export default WithLink
