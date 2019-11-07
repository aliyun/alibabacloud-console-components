import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import './index.less'

const RatingDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <h2>尺寸</h2>
    <Demo2 />
    <h2>半星评分</h2>
    <Demo3 />
    <h2>只读模式</h2>
    <Demo4 />
    <h2>等级提示</h2>
    <Demo5 />
  </div>
)

export default RatingDemo
