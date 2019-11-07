import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Controlled from './controlled'
import './index.less'

const SearchDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <h2>不同类型</h2>
    <Demo2 />
    <h2>filter</h2>
    <Demo3 />
    <h2>受控</h2>
    <Controlled />
    <h2>自定义下拉</h2>
    <Demo4 />
  </div>
)

export default SearchDemo
