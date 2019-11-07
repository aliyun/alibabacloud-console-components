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
import './index.less'

const TabDemo = () => (
  <div>
    <h2>简单用法</h2>
    <Demo1 />
    <h2>shape</h2>
    <Demo2 />
    <h2>size</h2>
    <Demo3 />
    <h2>Tab 位置</h2>
    <Demo4 />
    <h2>Trigger type</h2>
    <Demo5/>
    <h2>自定义样式</h2>
    <Demo6/>
    <h2>Extra</h2>
    <Demo7 />
    <h2>可编辑 Tab</h2>
    <Demo8 />
    <h2>嵌套模式</h2>
    <Demo9 />
    <h2>可关闭 Tab</h2>
    <Demo10 />
  </div>
)

export default TabDemo
