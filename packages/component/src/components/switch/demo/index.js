import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import './index.less'

const SwitchDemo = () => (
  <div>
    <h2>基本用法</h2>
    <Demo1 />
    <h2>模式切换</h2>
    <Demo2 />
    <h2>受控组件</h2>
    <Demo3 />
  </div>
)

export default SwitchDemo
