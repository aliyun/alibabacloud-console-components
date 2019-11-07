import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'
import './index.less'

const OverlayDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <h2>遮罩</h2>
    <Demo2 />
    <h2>触发的弹层</h2>
    <Demo3 />
    <h2>触发的弹层受控显示隐藏</h2>
    <Demo4 />
    <h2>弹层嵌套</h2>
    <Demo5 />
    <h2>弹层跟随滚动</h2>
    <Demo6 />
  </div>
)

export default OverlayDemo
