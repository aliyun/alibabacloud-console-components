import React from 'react'
import Demo1 from './Demo1'
import Demo2 from './Demo2'
import Demo3 from './Demo3'
import Demo4 from './Demo4'
import Demo5 from './Demo5'
import './index.less'

const CardDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <h2>自定义内容高度</h2>
    <Demo2 />
    <h2>自定义卡片样式</h2>
    <Demo3 />
    <h2>标题无项目符号</h2>
    <Demo4 />
    <h2>隐藏头部下划线</h2>
    <Demo5 />
  </div>
)

export default CardDemo
