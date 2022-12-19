import React from 'react'
import { Button } from '@alicloud/console-components'
import { withRcIntl } from '@alicloud/console-components-intl-core';
import defaultMessages from '../defaultMessages'
import { SFooterWrapper } from './style'
import type { ISlidePanelItemProps } from '../types/ISlidePanelItemProps.type'

type IProps = Pick<
  ISlidePanelItemProps,
  | 'customFooter'
  | 'onOk'
  | 'okText'
  | 'isProcessing'
  | 'processingText'
  | 'onCancel'
  | 'cancelText'
  | 'okProps'
  | 'cancelProps'
> & { isActive: boolean, intl?: any };

const Footer = ({
  customFooter,
  onOk,
  okText,
  isProcessing,
  processingText,
  onCancel,
  cancelText,
  isActive,
  okProps,
  intl,
  cancelProps,
}: IProps) => {
  if (!isActive) return null
  let footerContent = customFooter
  if (!footerContent) {
    // 如果没有事件处理函数，则不渲染footer
    if (onOk || onCancel) {
      const actualProcessingText = processingText || intl('processing')
      const actualOkText = okText || intl('ok')
      const actualCancelText = cancelText || intl('cancel')
      footerContent = (
        <>
          {/* 如果没有某个事件处理函数，则不渲染对应的button */}
          {onOk && (
            <Button
              onClick={onOk}
              size="medium"
              type="primary"
              loading={isProcessing}
              {...okProps}
            >
              {isProcessing ? actualProcessingText : actualOkText}
            </Button>
          )}
          {onCancel && (
            <Button onClick={onCancel} size="medium" {...cancelProps}>
              {actualCancelText}
            </Button>
          )}
        </>
      )
    }
  }
  // 如果没有事件处理函数，则不渲染footer
  if (!footerContent) return null
  return (
    <SFooterWrapper className="panel-footer">{footerContent}</SFooterWrapper>
  )
}


export const FooterWithIntl = withRcIntl({
  componentName: 'SlidePanel',
  defaultMessages,
  warningIfNoMessageFromCtx: false,
})(Footer) as typeof Footer;


export default FooterWithIntl
