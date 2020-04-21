import React, { useEffect } from 'react'
import MyButton from '@alicloud/cc-demo-component'
import utils from './demo-utils'

const Example: React.FC<{}> = () => {
  useEffect(() => {
    utils()
  }, [])
  return (
    <p>
      This is a React demo: <MyButton />
    </p>
  )
}

export default Example

export const demoMeta = {
  zhName: 'demo名称',
  zhDesc: 'demo描述',
}
