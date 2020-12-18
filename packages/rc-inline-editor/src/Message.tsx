import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@alicloud/console-components'
import * as S from './styles'

export type IType = 'error' | 'success' | 'warning'

const FormMessage: React.FC<{
  children: React.ReactNode
  type?: IType
  inline?: boolean
  prefix: string
}> = ({ children, type = 'error', inline = true, prefix }) => {
  if (inline) {
    return (
      <S.MessageInline prefix={prefix} type={type} className={type}>
        <Icon type={type} size="xs" />
        <S.Message>{children}</S.Message>
      </S.MessageInline>
    )
  }
  return (
    <S.MessageBlock prefix={prefix} type={type}>
      <Icon type={type} size="xs" />
      <S.Message>{children}</S.Message>
    </S.MessageBlock>
  )
}

FormMessage.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['error', 'success', 'warning']),
  inline: PropTypes.bool,
}

export default FormMessage
