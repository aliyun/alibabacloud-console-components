import React, { useEffect } from 'react'
import MyButton from '@alicloud/cc-demo-component'
import utils from './demo-utils'

// TODO: 样式隔离
import './style.less'

const Example: React.FC<{}> = () => {
  useEffect(() => {
    utils()
  }, [])
  return (
    <div>
      <p>
        This is a React demo: <MyButton />
      </p>
      <p>This is styled by shadow dom</p>
    </div>
  )
}

export default Example

export const demoMeta = {
  zhName: 'demo名称',
  zhDesc: 'demo描述',
}
