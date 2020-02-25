import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'

import './index.less'

const BadgeDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <br />
    <br />
    <Demo2 />
    <br />
    <br />
    <h2>自定义徽章</h2>
    <Demo3 />
    <h2>气泡徽章</h2>
    <Demo4 />
  </div>
)

export default BadgeDemo
