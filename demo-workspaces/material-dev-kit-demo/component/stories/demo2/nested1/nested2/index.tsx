import React, { useEffect } from 'react'
import MyButton from '@alicloud/cc-demo-component'
// 可以import更远的模块，demo依然能够正常工作
import utils from '../../demo-utils'

import './style1.scss'

const Example: React.FC<{}> = () => {
  useEffect(() => {
    utils()
  }, [])
  return (
    <p>
      This is demo2: <MyButton />
    </p>
  )
}

export default Example

export const demoMeta = {
  zhName: 'demo2',
  zhDesc: 'demo2描述',
}
