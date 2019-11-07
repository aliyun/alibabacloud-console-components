import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'
import Demo7 from './demo7'
import Demo8 from './demo8'
import './index.less'

const PaginationDemo = () => (
  <div>
    <h2>非受控分页</h2>
    <Demo1 />
    <h2>受控分页</h2>
    <Demo2 />
    <h2>分页尺寸</h2>
    <Demo3 />
    <h2>分页类型</h2>
    <Demo4 />
    <h2>前进后退按钮只显示箭头</h2>
    <Demo5 />
    <h2>每页显示</h2>
    <Demo6 />
    <h2>显示总数</h2>
    <Demo7 />
    <h2>分页按钮链接</h2>
    <Demo8 />
  </div>
)

export default PaginationDemo
