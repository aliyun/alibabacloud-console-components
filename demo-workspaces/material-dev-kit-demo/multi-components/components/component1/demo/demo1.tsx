import React from 'react'
import { MyButton1 } from '@alicloud/cc-demo-multi-components'
import './style.less'

const Example: React.FC<any> = ({ prop1, ...rest }) => {
  console.log('log from demo', prop1, rest)
  return (
    <p>
      This is demo1: <MyButton1 />
    </p>
  )
}

export default Example

export const demoMeta = {
  zhName: 'demo1名称',
  zhDesc: 'demo1描述',
}
