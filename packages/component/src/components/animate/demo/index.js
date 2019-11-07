import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import './index.less'

const AnimateDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <h2>多个子元素动画</h2>
    <Demo2 />
    <h2>展开收起动画</h2>
    <Demo3 />
  </div>
)

export default AnimateDemo
