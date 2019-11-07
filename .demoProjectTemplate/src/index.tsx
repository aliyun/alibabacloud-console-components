import * as React from 'react'
import { render } from 'react-dom'
import '@alicloud/console-components/dist/wind.css'
import App from './demo/{{DEMO_ENTRY_NAME}}'

const rootElement = document.getElementById('root')
render(<App />, rootElement)
