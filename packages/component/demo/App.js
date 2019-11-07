import React from 'react'
import { HashRouter, Route, Redirect } from 'react-router-dom'
import AppNav from './Nav'
import AppContent from './Content'
import './app.scss'

const App = () => (
  <HashRouter>
    <div>
      <Route
        exact
        path="/"
        render={() => <Redirect to="/input" />}
      />
      <Route
        path="/:component"
        component={AppNav}
      />
      <Route
        path="/:component"
        component={AppContent}
      />
    </div>
  </HashRouter>
)

export default App
