import React from 'react'
import { Search } from '@alicloud/console-components'

const onSearch = (v) => { console.log(v) }

const Demo1 = () => (
  <div>
    <p key="1">simple</p>
    <Search key="2" shape="simple" onSearch={onSearch} style={{width: '400px'}}/>
    <p key="3">default</p>
    <Search key="4"  onSearch={onSearch} style={{width: '400px'}}/>
  </div>
)

export default Demo1
