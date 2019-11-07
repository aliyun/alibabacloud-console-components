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

import './index.less'

const TreeDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <h2>使用数据直接生成</h2>
    <Demo2 />
    <h2>带线样式</h2>
    <Demo3 />
    <h2>树节点占满一行</h2>
    <Demo4 />
    <h2>单选与多选</h2>
    <Demo5 />
    <h2>父子节点选中是否关联</h2>
    <Demo6 />
    <h2>可搜索的树</h2>
    <Demo7 />
    <h2>异步加载数据</h2>
    <Demo8 />
    <h2>拖动</h2>
    <Demo9 />
  </div>
)

export default TreeDemo
