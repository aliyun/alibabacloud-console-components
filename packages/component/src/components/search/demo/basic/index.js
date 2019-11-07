import React from 'react'
import { Search } from '@alicloud/console-components'
import './index.less'

const onSearch = (v) => { console.log(v) }

const BasicDemo = () => (
  <div>
   <p key="1">simple</p>
    <Search key="2" shape="simple" onSearch={onSearch} style={{width: '400px'}}/>
    <p key="3">default</p>
    <Search key="4"  onSearch={onSearch} style={{width: '400px'}}/>
    <p key="5">custom text </p>
    <Search key="6" searchText={<span style={{color: 'orange'}}>search</span>} onSearch={onSearch} style={{width: '400px'}}/>
    <p key="7">custom text widthout icon</p>
    <Search key="8" hasIcon={false} searchText={<span style={{color: 'orange'}}>search</span>} onSearch={onSearch} style={{width: '400px'}}/>
  </div>
)

export default BasicDemo
