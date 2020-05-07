import React, { useState } from 'react'
import { Icon, Balloon, Button } from '@alicloud/console-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { withRcIntl } from '@alicloud/console-components-intl'
import { BalloonProps } from '@alicloud/console-components/types/balloon'
import defaultLocaleMessages, { defaultMessages } from './defaultLocaleMessages'

import {
  CopyWrapper,
  CopyIconWrapper,
  CopyTipWrapper,
  CopyTextWrapper,
} from './styles'

/**
 * @public
 */
export interface IProps {
  /**
   * 需要拷贝的内容
   */
  id: string
  /**
   * 拷贝成功的提示
   */
  message?: string
  /**
   * 拷贝按钮的文案，在`text={true}`时生效
   */
  copyText?: string
  /**
   * 是否为文本按钮
   */
  text?: boolean
  /**
   * 拷贝成功的提示气泡的属性，继承基础组件`Balloon`的API
   */
  balloonProps?: BalloonProps
  /**
   * @internal
   */
  intl: (key: string, args?: any) => string
}

/**
 * @public
 */
const CopyId: React.FC<IProps> = (props) => {
  const [showCopySuccess, setShowCopySuccess] = useState(false)
  const {
    id,
    message,
    children,
    text,
    copyText,
    balloonProps = {},
    intl,
  } = props

  const triggerShowCopySuccess = (isSuccess: boolean) => {
    setShowCopySuccess(isSuccess)
  }

  const extractCopyText = copyText || intl('copy') || defaultMessages.copy

  const extractMessage =
    message || intl('copy_success') || defaultMessages.copy_success

  return (
    <CopyWrapper>
      {children || id}
      <Balloon
        {...balloonProps}
        trigger={
          <CopyToClipboard
            text={id}
            onCopy={() => triggerShowCopySuccess(true)}
            onMouseLeave={() => triggerShowCopySuccess(false)}
          >
            {!text ? (
              <CopyIconWrapper>
                <Icon
                  size="xs"
                  type="copy"
                  title={extractCopyText}
                  className="copy-icon"
                />
              </CopyIconWrapper>
            ) : (
              <CopyTextWrapper>
                <Button type="primary" text>
                  {extractCopyText}
                </Button>
              </CopyTextWrapper>
            )}
          </CopyToClipboard>
        }
        closable={false}
        visible={showCopySuccess}
      >
        <CopyTipWrapper>
          <Icon size="xs" type="success-filling" />
          <span>{extractMessage}</span>
        </CopyTipWrapper>
      </Balloon>
    </CopyWrapper>
  )
}

export default withRcIntl({
  defaultLocaleMessages,
  defaultMessages,
  componentName: 'CopyId',
  warningIfNoMessageFromCtx: false,
})(CopyId)
