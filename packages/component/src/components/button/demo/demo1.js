import React from 'react'
import { Button } from '@alicloud/console-components'
import './demo1.less'

const Demo1 = () => (
  <div className="button-demo-type-list">
    <Button type="normal">普通按钮</Button>
    <Button type="normal" loading>普通按钮</Button>
    <Button type="normal" disabled>普通按钮</Button>
    <Button type="normal" warning>普通按钮</Button>
    <Button type="normal" text>文字按钮</Button>
    <br/><br/>
    
    <Button type="primary">主要按钮</Button>
    <Button type="primary" loading>主要按钮</Button>
    <Button type="primary" disabled>主要按钮</Button>
    <Button type="primary" warning>主要按钮</Button>
    <Button type="primary" text>主要按钮</Button>
    <br/><br/>
    <Button type="secondary">Secondary</Button>
    <Button type="secondary" loading>Secondary</Button>
    <Button type="secondary" disabled>Secondary</Button>
  </div>
)

export default Demo1
