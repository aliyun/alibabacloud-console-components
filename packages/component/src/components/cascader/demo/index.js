import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'
import Demo7 from './demo7'
import './index.less'

const CascaderDemo = () => (
  <div>
    <h2>基本使用</h2>
    <Demo1 />
    <h2>展开触发行为</h2>
    <Demo2 />
    <h2>多选</h2>
    <Demo3 />
    <h2>设置是否只能选择子项</h2>
    <Demo4 />
    <h2>设置父子节点选中是否关联</h2>
    <Demo5 />
    <h2>自定义样式</h2>
    <Demo6 />
    <h2>异步加载数据</h2>
    <Demo7 />
  </div>
)

export default CascaderDemo
