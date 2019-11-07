import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'
import Demo7 from './demo7'
import Demo8 from './demo8'
import Demo9 from './demo9'
import Demo10 from './demo10'
import Demo11 from './demo11'
import Demo12 from './demo12'
import DemoIntl from './demo-intl'
import './index.less'

const DatePickerDemo = () => (
  <div>
    <h2>基本用法</h2>
    <Demo1 />
    <h2>提供默认值</h2>
    <Demo2 />
    <h2>面板的默认展现日期</h2>
    <Demo3 />
    <h2>不同尺寸</h2>
    <Demo4 />
    <h2>禁止选择某些日期</h2>
    <Demo5 />
    <h2>日期时间选择</h2>
    <Demo6 />
    <h2>禁用日期选择</h2>
    <Demo7 />
    <h2>日期格式</h2>
    <Demo8 />
    <h2>自定义日期范围选择</h2>
    <Demo9 />
    <h2>自定义日期选择器弹层</h2>
    <Demo10 />
    <h2>自定义面板页脚</h2>
    <Demo11 />
    <h2>与Field结合</h2>
    <Demo12 />
    <h2>国际化</h2>
    <DemoIntl />
  </div>
)

export default DatePickerDemo
