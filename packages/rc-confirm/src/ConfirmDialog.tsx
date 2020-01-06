import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'
import { Dialog, Message } from '@alicloud/console-components'
import { MessageProps } from '@alifd/next/types/message'
import { DialogProps } from '@alifd/next/types/dialog'
import { GetFusionConfig, IFusionConfigProps } from './utils'

export interface IConfirmDialogProps {
  /**
   * 透传给Message组件的props，控制信息的内容
   */
  messageProps: MessageProps
  /**
   * 透传给Dialog组件的props，控制弹窗的展示
   */
  dialogProps: DialogProps
  /**
   * 对话框内容
   */
  children: React.ReactNode
}

const ConfirmDialog: React.FC<IConfirmDialogProps & IFusionConfigProps> = ({
  children,
  messageProps,
  dialogProps,
  fusionConfig,
}) => {
  const { prefix = 'next-' } = fusionConfig
  return (
    <SDialog
      {...dialogProps}
      className={classnames('wind-rc-confirm-dialog', dialogProps.className)}
      prefix={prefix}
    >
      <Message
        size="large"
        shape="addon"
        type="help"
        {...messageProps}
        className={classnames(
          'wind-rc-confirm-message',
          messageProps.className
        )}
      >
        {children}
      </Message>
    </SDialog>
  )
}

export default GetFusionConfig(ConfirmDialog)

const SDialog = styled(Dialog)`
  &&& ${({ prefix }) => `.${prefix}message-title`} {
    color: #111;
  }
  .wind-rc-confirm-message {
    min-width: 300px;
    padding: 0;
    margin-top: 24px;
  }
`
