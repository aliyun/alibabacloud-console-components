import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'
import Demo7 from './demo7'
import Demo8 from './demo8'
import Demo9 from './demo9'
import Demo10 from './demo10'
import './index.less'

const FieldDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <h2>自定义数据获取</h2>
    <Demo2 />
    <h2>关联控制</h2>
    <Demo3 />
    <h2>自定义错误</h2>
    <Demo4 />
    <h2>检验</h2>
    <Demo5 />
    <h2>redux中使用</h2>
    <Demo6 />
    <h2>组合使用</h2>
    <Demo7 />
    <h2>自定义受控字段</h2>
    <Demo8 />
    <h2>自定义组件使用</h2>
    <Demo9 />
    <h2>获取对象或数组</h2>
    <Demo10 />
  </div>
)

export default FieldDemo
