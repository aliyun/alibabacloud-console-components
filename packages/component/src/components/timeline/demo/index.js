import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import './index.less'

const TimelineDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <h2>设置节点不同状态</h2>
    <Demo2 />
    <h2>可折叠</h2>
    <Demo3 />
    <h2>timeLeft</h2>
    <Demo4 />
    <h2>自定义</h2>
    <Demo5 />
  </div>
)

export default TimelineDemo
