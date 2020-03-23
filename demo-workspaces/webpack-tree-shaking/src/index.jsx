// import '@alicloud/console-components/dist/wind.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Button } from '@alicloud/console-components'

function App() {
  return (
    <div className="App">
      <h1>Console Components Demo</h1>
      <Button type="primary">Button works!</Button>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('.app'))
