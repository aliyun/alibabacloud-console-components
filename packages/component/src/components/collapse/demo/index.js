import React from 'react'
import Demo1 from './Demo1'
import Demo2 from './Demo2'
import Demo3 from './Demo3'
import Demo4 from './Demo4'
import Demo5 from './Demo5'
import './index.less'

const CollapseDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <br/><br/>
    <h2>单例模式</h2>
    <Demo2 />
    <br/><br/>
    <h2>默认展开一项或多项</h2>
    <Demo3 />
    <br/><br/>
    <h2>disabled禁止操作</h2>
    <Demo4 />
    <h2>事件方式控制展开</h2>
    <Demo5 />
  </div>
)

export default CollapseDemo
