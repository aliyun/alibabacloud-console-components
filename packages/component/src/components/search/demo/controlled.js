import React from 'react'
import { Search } from '@alicloud/console-components'

const onSearch = (v) => { console.log(v) }

const Demo1 = () => (
  <div>
    <Search
      shape="simple"
      value="Under controll"
      onSearch={onSearch}
    />
  </div>
)

export default Demo1
