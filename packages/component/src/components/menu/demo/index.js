import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import DemoSelect from './demo-select'
import Demo6 from './demo6'
import Demo7 from './demo7'
import Demo8 from './demo8'

const MenuDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <h2>内连菜单展开模式</h2>
    <Demo2 />
    <h2>弹出菜单</h2>
    <Demo3 />
    <h2>hover 打开子菜单</h2>
    <Demo5 />
    <h2>自定义弹出内容</h2>
    <Demo4 />
    <h2>菜单项选择</h2>
    <DemoSelect />
    <h2>自定义菜单项选择</h2>
    <Demo6 />
    <h2>横向菜单条</h2>
    <Demo7 />
    <h2>创建上下文菜单</h2>
    <Demo8 />
  </div>
)

export default MenuDemo
