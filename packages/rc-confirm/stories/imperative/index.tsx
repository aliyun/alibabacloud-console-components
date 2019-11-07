import React from 'react'
import { showConfirmDialog } from '@alicloud/console-components-confirm'
import { Button } from '@alicloud/console-components'

const ImperativeDemo: React.FC<{}> = () => {
  return (
    <Button
      onClick={() => {
        showConfirmDialog({
          type: 'warning',
          title: '命令激活的弹窗',
          content: <p>我是弹窗内容</p>,
          onConfirm: () => console.log('弹窗确认'),
          onCancel: () => console.log('弹窗取消'),
        })
      }}
    >
      弹窗
    </Button>
  )
}

export default ImperativeDemo
