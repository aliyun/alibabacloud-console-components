import React, { useState } from 'react'
import { Input, Icon } from '@alicloud/console-components'

const Demo = () => {
  const [value, setValue] = useState('')

  const handleChange = v => {
    setValue(v)
  }

  const handleClick = () => {
    console.log(value)
  }

  return (
    <div>
      <Input
        innerBefore={
          <Icon type="search" style={{ margin: 4 }} onClick={handleClick} />
        }
        placeholder="search"
        value={value}
        aria-label="input with config of innerBefore"
        onChange={handleChange}
      />
      <br />
      <br />

      <Input
        innerAfter={
          <Icon
            type="search"
            size="xs"
            onClick={handleClick}
            style={{ margin: 4 }}
          />
        }
        placeholder="search"
        value={value}
        aria-label="input with config of innerAfter"
        onChange={handleChange}
      />
      <br />
      <br />

      <Input
        defaultValue="hi"
        hint="calendar"
        aria-label="input with config of innerAfter and disabled"
      />
    </div>
  )
}

export default Demo

export const demoMeta = {
  zhName: '水印和前后缀',
  zhDesc: '可以添加水印，为input前后端增加额外内容',
}
