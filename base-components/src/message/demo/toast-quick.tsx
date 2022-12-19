/**
 * @title 弹窗便捷用法
 * @description 可以通过`Message.success`等静态方法来快速显示指定类型的信息弹窗。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Message, Button } from '@alicloudfe/components'

const showSuccess = () => Message.success('提交成功')
const showWarning = () => Message.warning('warning')
const showError = () => Message.error('error')
const showNotice = () => Message.notice('notice')
const showHelp = () => Message.help('help')
const showLoading = () => Message.loading('loading')

export default function DemoComponent() {
  const content = (
    <div className="message-toast-quick-demo">
      <Button type="primary" onClick={showSuccess}>
        success
      </Button>
      <Button type="primary" onClick={showWarning}>
        warning
      </Button>
      <Button type="primary" onClick={showError}>
        error
      </Button>
      <Button type="primary" onClick={showNotice}>
        notice
      </Button>
      <Button type="primary" onClick={showHelp}>
        help
      </Button>
      <Button type="primary" onClick={showLoading}>
        loading
      </Button>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .message-toast-quick-demo .next-btn.next-medium {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`
