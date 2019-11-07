import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'
import './index.less'

const NumberPickerDemo = () => (
  <div>
    <h2>基本用法</h2>
    <Demo1 />
    <h2>不可直接输入</h2>
    <Demo2 />
    <h2>最大最小值</h2>
    <Demo3 />
    <h2>步长</h2>
    <Demo4 />
    <h2>大小</h2>
    <Demo5 />
    <h2>不可用</h2>
    <Demo6 />
  </div>
)

export default NumberPickerDemo
