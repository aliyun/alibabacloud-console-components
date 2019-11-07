import React from 'react'
import { Badge, Icon } from '@alicloud/console-components'
import './demo1.less'

const Demo1 = () => (
  <div className="badge-demo1-container">
    <h3>小图标</h3>
    <br />
    <Badge dot>
      <Icon type="email" size="xs" />
    </Badge>
    
    <h3>大图标</h3>
    <br />
    <Badge dot>
      <Icon type="email" />
    </Badge>
  
    <h3>链接</h3>
    <br />
    <Badge dot>
      <a href="#">这是一个链接</a>
    </Badge>
    <Badge dot>
      <a href="#"><Icon type="atm" /></a>
    </Badge>
    

    <h3>大数字</h3>
    <br />
    <Badge count={100}>
      <a href="#" className="head-example"></a>
    </Badge>
    <Badge count={200} overflowCount={199}>
      <a href="#" className="head-example"></a>
    </Badge>
      <br /><br />

    <h3>独立使用</h3>
  
    <Badge count={25} />
    <Badge count={4} style={{backgroundColor: '#fff', color: '#73777A', border: '1px solid #C3C5C6'}} />
    <Badge count={109} style={{backgroundColor: '#06B624'}} />
    <Badge dot />
    <Badge content="hot" style={{backgroundColor: '#f54743', color: '#fff'}} />
  </div>
)

export default Demo1
