import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import './index.less'

const ConfigProviderDemo = () => (
  <div>
    <h2>基本</h2>
    <Demo1 />
    <h2>支持国际化的组件</h2>
    <Demo2 />
    <h2>国际化</h2>
    <Demo3 />
  </div>
)

export default ConfigProviderDemo
