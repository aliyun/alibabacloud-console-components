import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'
import Demo7 from './demo7'
import './index.less'

const DialogDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <h2>定制底部按钮</h2>
    <Demo2 />
    <h2>自定义底部</h2>
    <Demo3 />
    <h2>更新位置</h2>
    <Demo4 />
    <h2>内容较多的对话框</h2>
    <Demo5 />
    <h2>快捷调用</h2>
    <Demo6 />
    <h2>延迟关闭</h2>
    <Demo7 />
  </div>
)

export default DialogDemo
