import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'

const BreadcrumbDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <h2>设置显示项数</h2>
    <Demo2 />
    <h2>自定义分隔图标</h2>
    <Demo3 />
    <h2>Breadcrumb.Item 可下拉选择</h2>
    <Demo4 />
    <h2>设置最大宽度的 Breadcrumb.Item</h2>
    <Demo5 />
    <h2>Breadcrumb 换行展示</h2>
    <Demo6 />
  </div>
)

export default BreadcrumbDemo
