import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import './index.less'

const RadioDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <h2>嵌套组件</h2>
    <Demo2 />
    <h2>受限和非受限 Radio 按钮组</h2>
    <Demo3 />
    <h2>按钮形状</h2>
    <Demo4 />
  </div>
)

export default RadioDemo
