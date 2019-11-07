import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'

import './index.less'

const BadgeDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <br/><br/>
    <Demo2 />
    <br/><br/>
    <h2>自定义徽章</h2>
    <Demo3 />
  </div>
)

export default BadgeDemo
