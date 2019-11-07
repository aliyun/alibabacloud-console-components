import React from 'react'
import { Button } from '@alicloud/console-components'
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
}: Pick<
  ISlidePanelItemProps,
  | 'customFooter'
  | 'onOk'
  | 'okText'
  | 'isProcessing'
  | 'processingText'
  | 'onCancel'
  | 'cancelText'
> & { isActive: boolean }): React.ReactNode {
  if (!isActive) return null
  let footerContent = customFooter
  if (!footerContent) {
    // 如果没有事件处理函数，则不渲染footer
    if (onOk || onCancel) {
      const actualProcessingText = processingText || defaultMessages.processing
      const actualOkText = okText || defaultMessages.ok
      const actualCancelText = cancelText || defaultMessages.cancel
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

export default renderFooter
