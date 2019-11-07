import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import DemoSelect from './demo-select'

const MenuDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <h2>菜单模式</h2>
    <Demo2 />
    <h2>弹出模式</h2>
    <Demo3 />
    <h2>自定义</h2>
    <Demo4 />
    <h2>菜单项选择</h2>
    <DemoSelect />
  </div>
)

export default MenuDemo
