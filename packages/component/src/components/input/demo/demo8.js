import React from 'react'
import { Input } from '@alicloud/console-components'

const Demo8 = () => {
  return (
    <div>
      <Input
        disabled
        aria-label="disabled"
        placeholder="disabled"
        size="small"
      />
      <br />
      <br />

      <Input
        disabled
        aria-label="disabled"
        addonTextBefore="http://"
        addonTextAfter=".com"
        size="medium"
        value="alibaba"
      />
      <br />
      <br />

      <Input
        disabled
        aria-label="disabled"
        placeholder="medium"
        maxLength={10}
        hasLimitHint
      />
      <br />
      <br />

      <Input.TextArea
        disabled
        aria-label="disabled"
        placeholder="medium"
        maxLength={10}
        hasLimitHint
      />
    </div>
  )
}

export default Demo8

export const demoMeta = {
  zhName: '禁用状态',
  zhDesc: '为 `Input` 设置 `disabled` 状态；',
}
