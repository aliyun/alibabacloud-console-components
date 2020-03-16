import React from 'react'
import { render } from 'react-dom'
import '@alicloud/console-components/dist/wind.css'
import * as MDX from '@entry-mdx'
import { wrapMdxModule } from '@alicloud/console-components-lib-documenter/src/runtime/MdxWrapper'

const { default: DocComp } = wrapMdxModule(MDX)

const wrapperStyle = { padding: '10px 20px' }
render(
  <div style={wrapperStyle}>
    <DocComp mode="local-dev" />
  </div>,
  document.querySelector('.app')
)
