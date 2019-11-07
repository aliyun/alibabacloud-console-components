import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'
import Demo7 from './demo7'
import './index.less'

const MessageDemo = () => (
  <div>
    <h2>信息类型</h2>
    <Demo1 />
    <h2>信息外观</h2>
    <Demo2 />
    <h2>信息尺寸</h2>
    <Demo3 />
    <h2>可关闭组件</h2>
    <Demo4 />
    <h2>受控显示隐藏</h2>
    <Demo5 />
    <h2>弹窗用法</h2>
    <Demo6 />
    <h2>弹窗便捷方法</h2>
    <Demo7 />
  </div>
)

export default MessageDemo
