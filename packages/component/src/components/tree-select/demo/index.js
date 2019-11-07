import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import './index.less'

const TreeSelectDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <h2>使用数据直接生成</h2>
    <Demo2 />
    <h2>复选框多选</h2>
    <Demo3 />
    <h2>受控</h2>
    <Demo4 />
    <h2>搜索用法</h2>
    <Demo5 />
  </div>
)

export default TreeSelectDemo
