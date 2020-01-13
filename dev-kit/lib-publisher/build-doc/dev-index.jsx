import React from 'react'
import { render } from 'react-dom'
import '@alicloud/console-components/dist/wind.css'
import MDX from '@entry-mdx'

const wrapperStyle = { padding: '10px 20px' }
render(
  <div style={wrapperStyle}>
    {/* 本地开发模式下，codesandbox无效（因为codesandbox需要从npm加载包） */}
    <MDX mode="local-dev" />
  </div>,
  document.querySelector('.app')
)
