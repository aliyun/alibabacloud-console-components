import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'
import './index.less'

const LoadingDemo = () => (
  <div>
    <h2>基本用法</h2>
    <Demo1 />
    <h2>自定义Loading动画</h2>
    <Demo2 />
    <h2>关闭加载</h2>
    <Demo3 />
    <h2>全屏</h2>
    <Demo4 />
    <h2>自定义提示语位置</h2>
    <Demo5 />
    <h2>Loading动画尺寸</h2>
    <Demo6 />
  </div>
)

export default LoadingDemo
