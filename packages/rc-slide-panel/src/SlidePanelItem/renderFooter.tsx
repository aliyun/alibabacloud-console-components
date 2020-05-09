import React from 'react'
import { Button } from '@alicloud/console-components'
import { withRcIntl } from '@alicloud/console-components-intl'
import defaultMessages from '../defaultMessages'
import { SFooterWrapper } from './style'
import { ISlidePanelItemProps } from './index'

function renderFooter({
  customFooter,
  onOk,
  okText,
  isProcessing,
  processingText,
  onCancel,
  cancelText,
  isActive,
  intl,
}: Pick<
  ISlidePanelItemProps,
  | 'customFooter'
  | 'onOk'
  | 'okText'
  | 'isProcessing'
  | 'processingText'
  | 'onCancel'
  | 'cancelText'
> & { isActive: boolean; intl: (message: string, args?: any) => string }) {
  if (!isActive) return null
  let footerContent = customFooter
  if (!footerContent) {
    // 如果没有事件处理函数，则不渲染footer
    if (onOk || onCancel) {
      const actualProcessingText =
        processingText || intl('processing') || defaultMessages.processing
      const actualOkText = okText || intl('ok') || defaultMessages.ok
      const actualCancelText =
        cancelText || intl('cancel') || defaultMessages.cancel
      footerContent = (
        <>
          {/* 如果没有某个事件处理函数，则不渲染对应的button */}
          {onOk && (
            <Button
              onClick={onOk}
              size="medium"
              type="primary"
              loading={isProcessing}
            >
              {isProcessing ? actualProcessingText : actualOkText}
            </Button>
          )}
          {onCancel && (
            <Button onClick={onCancel} size="medium">
              {actualCancelText}
            </Button>
          )}
        </>
      )
    }
  }
  // 如果没有事件处理函数，则不渲染footer
  if (!footerContent) return null
  return <SFooterWrapper>{footerContent}</SFooterWrapper>
}

export default withRcIntl({
  componentName: 'SlidePanel',
  defaultMessages,
  warningIfNoMessageFromCtx: false,
})(renderFooter)
