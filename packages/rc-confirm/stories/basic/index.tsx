import React from 'react'
import Confirm from '@alicloud/console-components-confirm'
import { Button } from '@alicloud/console-components'

const BasicDemo: React.FC<{}> = () => {
  return (
    <>
      <Confirm
        type="error"
        title="错误"
        content="格式错误，请以“XXX”格式输入"
        onConfirm={() => {
          console.log('onConfirm被点击了')
        }}
        dialogProps={{
          footerActions: ['ok'],
          okProps: { children: '关闭' },
        }}
      >
        <Button>error</Button>
      </Confirm>
      <Confirm
        type="loading"
        title="创建实例中"
        content="创建中，可关闭弹窗，进程将在后台继续"
        onConfirm={() => {
          console.log('onConfirm被点击了')
        }}
        dialogProps={{
          okProps: { children: '关闭' },
        }}
      >
        <Button>loading</Button>
      </Confirm>
      <Confirm
        type="notice"
        title="提示"
        content="有可下载的新版插件"
        onConfirm={() => {
          console.log('onConfirm被点击了')
        }}
        dialogProps={{
          footerActions: ['ok'],
          okProps: { children: '关闭' },
        }}
      >
        <Button>notice</Button>
      </Confirm>
      <Confirm
        type="success"
        title="创建实例成功"
        content="如需查看实例，请前往实例列表"
        onConfirm={() => {
          console.log('onConfirm被点击了')
        }}
        dialogProps={{
          footerActions: ['ok'],
        }}
      >
        <Button>success</Button>
      </Confirm>
      <Confirm
        type="warning"
        title="警告"
        content="更改后可能导致不可用，是否继续？"
        onConfirm={() => {
          console.log('onConfirm被点击了')
        }}
        dialogProps={{
          okProps: { children: '继续' },
        }}
      >
        <Button>warning</Button>
      </Confirm>
    </>
  )
}

export default BasicDemo
