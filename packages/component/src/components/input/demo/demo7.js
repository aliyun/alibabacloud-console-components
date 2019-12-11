import React, { useState } from 'react'
import { Input } from '@alicloud/console-components'

const Demo7 = () => {
  const [value, setValue] = useState('')

  const handleChange = v => {
    console.log('onChange', v)
    setValue(v)
  }

  const handleKeyDown = (e, opts) => {
    console.log('onKeyDown', opts)
  }

  return (
    <div>
      <Input
        value={value}
        trim
        placeholder="cant not input space"
        aria-label="cant not input space"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default Demo7

export const demoMeta = {
  zhName: '去除空格',
  zhDesc: 'onChange返回会自动去除头尾空字符',
}
