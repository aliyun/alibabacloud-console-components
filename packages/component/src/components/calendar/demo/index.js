import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'
import Demo7 from './demo7'
import './index.less'


const CalendarDemo = () => (
  <div>
    <h2>全屏日历</h2>
    <Demo1 />
    <h2>日历卡片</h2>
    <Demo2 />
    <h2>禁用日期</h2>
    <Demo3 />
    <h2>定制日历内容</h2>
    <Demo4 />
    <h2>日历默认展示月份</h2>
    <Demo5 />
    <h2>日历面板</h2>
    <Demo6 />
    <h2>多语言</h2>
    <Demo7 />
  </div>
)

export default CalendarDemo
