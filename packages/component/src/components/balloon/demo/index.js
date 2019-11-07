import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'
import Demo7 from './demo7'
import './index.less'

const BalloonDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <h2>三种触发方式</h2>
    <Demo2 />
    <h2>边缘对齐设置</h2>
    <Demo3 />
    <h2>从浮层内关闭,事件回调</h2>
    <Demo4 />
    <h2>close按钮事件,手动控制visible</h2>
    <Demo5 />
    <h2>嵌套浮层问题</h2>
    <Demo6 />
    <h2>tooltip</h2>
    <Demo7 />
  </div>
)

export default BalloonDemo
