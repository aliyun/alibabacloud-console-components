import React from 'react'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import ColoredTag from './colored'

const TagDemo = () => (
  <div>
    <h2>尺寸</h2>
    <Demo1 />
    <h2>可选中标签</h2>
    <Demo2 />
    <h2>可关闭标签</h2>
    <Demo3 />
    <h2>带有颜色的标签</h2>
    <ColoredTag />
  </div>
)

export default TagDemo
