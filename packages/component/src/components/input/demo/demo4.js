import React from 'react'
import { Input } from '@alicloud/console-components'

const Demo4 = () => {
  return (
    <div>
      <Input
        hasLimitHint
        addonTextBefore="http://"
        addonTextAfter=".com"
        size="large"
        defaultValue="alibaba"
        maxLength={2}
        aria-label="input with config of addonTextBefore and addonTextAfter"
      />
      <br />
      <br />

      <Input
        addonTextBefore="http://"
        addonTextAfter=".com"
        size="medium"
        value="alibaba"
        aria-label="input with config of addonTextBefore and addonTextAfter"
      />
      <br />
      <br />

      <Input
        addonTextBefore="http://"
        addonTextAfter=".com"
        size="small"
        value="alibaba"
        aria-label="input with config of addonTextBefore and addonTextAfter"
      />
    </div>
  )
}

export default Demo4

export const demoMeta = {
  zhName: '前后扩展',
  zhDesc: `通过设置 \`addonTextBefore\`和 \`addonTextAfter\`实现前后扩展`,
}
