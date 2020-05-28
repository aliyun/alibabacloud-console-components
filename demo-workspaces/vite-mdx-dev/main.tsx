import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { MDXProvider } from '@mdx-js/react'

import { markdownComponents } from '@alicloud/console-components-doc-runtime'

ReactDOM.render(
  <React.StrictMode>
    <MDXProvider components={markdownComponents}>
      <App />
    </MDXProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
