import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'
import './index.less'

const ProgressDemo = () => (
  <div>
    <h2>基本进度条</h2>
    <Demo1 />
    <h2>圆形进度条</h2>
    <Demo2 />
    <h2>尺寸</h2>
    <Demo3 />
    <h2>进度条不同状态</h2>
    <Demo4 />
    <h2>Progressive</h2>
    <Demo5 />
    <h2>动态展示</h2>
    <Demo6 />
  </div>
)

export default ProgressDemo
