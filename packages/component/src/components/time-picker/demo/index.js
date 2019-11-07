import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'
import Demo7 from './demo7'
import Demo8 from './demo8'
import './index.less'

const TimePickerDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <h2>默认值</h2>
    <Demo2 />
    <h2>尺寸</h2>
    <Demo3 />
    <h2>受控</h2>
    <Demo4 />
    <h2>禁用时分秒</h2>
    <Demo5 />
    <h2>时间格式</h2>
    <Demo6 />
    <h2>步长</h2>
    <Demo7 />
    <h2>结合Field使用</h2>
    <Demo8 />
  </div>
)

export default TimePickerDemo
