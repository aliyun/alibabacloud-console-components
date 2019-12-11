import React, { useState } from 'react'
import { Input } from '@alicloud/console-components'

const handleChange = v => {
  console.log(v)
  this.setState({
    control: v,
  })
}

const handleKeyDown = (e, opts) => {
  console.log('onKeyDown', opts)
}

const Demo5 = () => {
  const [control, setControl] = useState('maxLen control')
  return (
    <div>
      <Input
        maxLength={10}
        size="large"
        placeholder="Large"
        value={control}
        hasLimitHint
        aria-label="input max length 10"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <br />
      <br />

      <Input
        maxLength={20}
        placeholder="medium"
        hasLimitHint
        cutString={false}
        aria-label="input max length 20"
        onChange={v => {
          setControl(v)
          console.log(v)
        }}
        onKeyDown={(e, opts) => {
          console.log('onKeyDown', opts)
        }}
      />
      <br />
      <br />

      <Input
        hasLimitHint
        size="small"
        placeholder="small"
        maxLength={100}
        aria-label="input max length 100"
      />
      <br />
      <br />

      <Input.TextArea
        placeholder="TextArea"
        maxLength={100}
        rows={4}
        hasLimitHint
        aria-label="input max length 100"
      />
      <br />
      <br />

      <Input
        maxLength={5}
        placeholder="Original maxLength"
        aria-label="input max length 5"
      />
    </div>
  )
}

export default Demo5

export const demoMeta = {
  zhName: '最大长度',
  zhDesc:
    '最大长度 `hasLimitHint` 会展现限制数字; cutString 可控制是否要切割字符串, 用于只展示最大长度',
}
