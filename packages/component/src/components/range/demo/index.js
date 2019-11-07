import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'
import Demo7 from './demo7'
import './index.less'

const RangeDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <h2>刻度及标识</h2>
    <Demo2 />
    <h2>min,max,step</h2>
    <Demo3 />
    <h2>事件</h2>
    <Demo4 />
    <h2>范围与step</h2>
    <Demo5 />
    <h2>tipRender</h2>
    <Demo6 />
    <h2>选择态反转</h2>
    <Demo1 />
  </div>
)

export default RangeDemo
