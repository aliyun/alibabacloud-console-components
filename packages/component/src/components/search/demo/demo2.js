import React from 'react'
import { Search } from '@alicloud/console-components'
import './index.less'

const onSearch = (v) => { console.log(v) }

const Demo2 = () => (
  <div>
    <h2>Normal</h2>
    <Search type="primary" placeholder="primary"/>
    <br/> <br/>
    <Search type="secondary" placeholder="Secondary"/>
    <br/> <br/>
    <Search type="normal" placeholder="normal"/>
  </div>
)

export default Demo2
