import React from 'react'
import Demo1 from './Demo1'
import Demo2 from './Demo2'
import Demo3 from './Demo3'
import Demo4 from './Demo4'
import Demo5 from './Demo5'
import Group from './group'
import './index.less'

const CheckboxDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <h2>中间状态组件</h2>
    <Demo2 />
    <h2>受限组件</h2>
    <Demo3 />
    <h2>非受限组件</h2>
    <Demo4 />
    <h2>Checkbox嵌套使用</h2>
    <Demo5 />
    <h2>分组</h2>
    <Group />
  </div>
)

export default CheckboxDemo
