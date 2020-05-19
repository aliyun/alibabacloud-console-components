import React from 'react'
import { LinkButton } from '@alicloud/console-components-button'
import { Icon } from '@alicloud/console-components'

/**
 * @public
 */
const LinkMore: React.FC<React.HTMLProps<HTMLSpanElement>> = ({
  children,
  ...props
}) => {
  return (
    <LinkButton {...props}>
      {children}
      <Icon type="caret-down" size="xs" />
    </LinkButton>
  )
}

export default LinkMore
