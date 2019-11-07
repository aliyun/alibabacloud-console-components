import React from 'react'
import { Badge, Icon } from '@alicloud/console-components'
import './demo3.less'

const Demo3 = () => (
  <div className="badge-demo3-container">
    <Badge content="hot" style={{backgroundColor: '#f54743', color: '#fff'}}>
      <a href="#" className="head-example"></a>
    </Badge>
    <Badge content={<Icon type="error" />} style={{backgroundColor: 'transparent', color: '#f54743', padding: 0}}>
      <a href="#" className="head-example"></a>
    </Badge>
  </div>
)

export default Demo3
