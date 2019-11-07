import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'
import Demo7 from './demo7'
import Demo8 from './demo8'

const StepDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <h2>垂直模式</h2>
    <Demo2 />
    <br /><br />

    <h2>图标和百分比</h2>
    <Demo3 />
    <br /><br />

    <h2>禁止步骤项</h2>
    <Demo4 />
    <br /><br />

    <h2>Step.Item自定义渲染</h2>
    <Demo5 />
    <br /><br />

    <h2>只读模式</h2>
    <Demo7 />
    <br /><br />
    <Demo6 />
    <br /><br />

    <h2>受控模式</h2>
    <Demo8 />
  </div>
)

export default StepDemo
