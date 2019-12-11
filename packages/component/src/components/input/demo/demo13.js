import React from 'react'
import { Input } from '@alicloud/console-components'

const Demo13 = () => {
  return (
    <div>
      <Input
        htmlType="password"
        defaultValue="whoami"
        aria-label="Please input password"
      />
    </div>
  )
}

export default Demo13

export const demoMeta = {
  zhName: '密码输入框',
  zhDesc: `使用htmlType="password"`,
}
