import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import './index.less'

const DropdownDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <h2>触发的事件类型</h2>
    <Demo2 />
    <h2>从弹层外关闭</h2>
    <Demo3 />
  </div>
)

export default DropdownDemo
