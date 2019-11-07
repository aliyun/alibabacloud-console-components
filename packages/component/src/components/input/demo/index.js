import React from 'react'
import { Input } from '@alicloud/console-components'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
const InputDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <h2>input 状态</h2>
    <Demo2 />
    <h2>组合输入框</h2>
    <Demo3 />
    <h2>前缀/后缀搜索</h2>
    <Demo4 />
  </div>
)

export default InputDemo
