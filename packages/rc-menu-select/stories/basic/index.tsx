import React, { useState } from 'react'
import MenuSelect from '@alicloud/console-components-menu-select'

const dataSource = [
  {
    value: 'title1',
    label: '标题1',
  },
  {
    value: 'title2',
    label: '标题2',
  },
]

const Basic: React.FC<{}> = () => {
  const [value, setValue] = useState('title1')
  return (
    <>
      <MenuSelect
        onSelect={setValue}
        dataSource={dataSource}
        value={value}
        showSelectLabel
        dropdownProps={{
          align: 'tl, bl',
        }}
      />
    </>
  )
}

export default Basic
