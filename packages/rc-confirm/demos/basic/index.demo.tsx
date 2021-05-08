/**
* @title basic
*/

import React from 'react'
import Confirm from '@alicloud/console-components-confirm'
import { Button } from '@alicloud/console-components'

const BasicDemo: React.FC<{}> = () => {
  return (
    <>
      <Confirm
        type="error"
        title="确认删除"
        content="确认要删除这些实例？"
        onConfirm={() => {
          console.log('删除成功')
        }}
      >
        <Button>error</Button>
      </Confirm>
      <Confirm
        type="help"
        title="确认删除"
        content="确认要删除这些实例？"
        onConfirm={() => {
          console.log('删除成功')
        }}
      >
        <Button>help</Button>
      </Confirm>
      <Confirm
        type="loading"
        title="确认删除"
        content="确认要删除这些实例？"
        onConfirm={() => {
          console.log('删除成功')
        }}
      >
        <Button>loading</Button>
      </Confirm>
      <Confirm
        type="notice"
        title="确认删除"
        content="确认要删除这些实例？"
        onConfirm={() => {
          console.log('删除成功')
        }}
      >
        <Button>notice</Button>
      </Confirm>
      <Confirm
        type="success"
        title="确认删除"
        content="确认要删除这些实例？"
        onConfirm={() => {
          console.log('删除成功')
        }}
      >
        <Button>success</Button>
      </Confirm>
      <Confirm
        type="warning"
        title="确认删除"
        content="确认要删除这些实例？"
        onConfirm={() => {
          console.log('删除成功')
        }}
      >
        <Button>warning</Button>
      </Confirm>
    </>
  )
}

export default BasicDemo
