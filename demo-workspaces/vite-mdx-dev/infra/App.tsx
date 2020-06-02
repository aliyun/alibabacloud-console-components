import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import DocList from './DocList'
import DocLoader from './DocLoader'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/workspace">
          <DocList />
        </Route>
        <Route path="/workspace">
          <DocLoader />
        </Route>
        <Route>
          <Redirect to="/workspace" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
