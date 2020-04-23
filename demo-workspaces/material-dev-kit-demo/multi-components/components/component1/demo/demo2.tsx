import React from 'react'
import { MyButton1 } from '@alicloud/cc-demo-multi-components'

const Example: React.FC<{}> = () => {
  return (
    <p>
      This is demo2: <MyButton1 />
    </p>
  )
}

export default Example

export const demoMeta = {
  zhName: 'demo2名称',
  zhDesc: 'demo2描述',
}
