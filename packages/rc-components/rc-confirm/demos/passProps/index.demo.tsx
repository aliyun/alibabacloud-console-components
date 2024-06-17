/**
 * @title passProps
 */

import React from 'react'
import Confirm from '@alicloud/console-components-confirm'
import { Button } from '@alicloud/console-components'

const PassPropsDemo: React.FC<{}> = () => {
  return (
    <>
      <Confirm
        type="error"
        title="确认删除"
        content="确认要删除这些实例？"
        onConfirm={() => {
          console.log('删除成功')
        }}
        dialogProps={{
          okProps: {
            children: '自定义确认',
          },
          cancelProps: {
            children: '自定义取消',
          },
        }}
        messageProps={{
          iconType: 'account',
        }}
      >
        <Button>error</Button>
      </Confirm>
    </>
  )
}

export default PassPropsDemo
