import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import './index.less'

const AffixDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <h2>自定义偏移量</h2>
    <Demo2 />
    <h2>自定义目标容器</h2>
    <Demo3 />
    <h2>onAffix</h2>
    <Demo4 />
  </div>
)

export default AffixDemo
