import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const app = AppComponent => {
  ReactDOM.render(
    <AppComponent />,
    document.getElementById('app')
  )
}

app(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    app(App)
  })
}
