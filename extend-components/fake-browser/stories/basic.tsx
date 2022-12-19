import React from 'react'
import FakeBrowser from '@alicloud/console-components-fake-browser'
import { Switch, Route, Link, RouteComponentProps } from 'dva/router'

const Home: React.FC = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About: React.FC = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic: React.FC<RouteComponentProps<{ topicId: string }>> = ({
  match,
}) => (
  <div style={{ height: '1000px' }}>
    <h2>Topic: {match.params.topicId}</h2>
    <p>This content is 1000px height.</p>
  </div>
)

const NotFound: React.FC = () => {
  return <h2>404 Not Found</h2>
}

const BasicExample = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topic/aaa">Topic a</Link>
      </li>
      <li>
        <Link to="/topic/bbb">Topic b</Link>
      </li>
      <li>
        <Link to="/wrong-path">wrong path</Link>
      </li>
    </ul>

    <hr />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topic/:topicId" component={Topic} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

const AppRouter: React.FC = () => (
  <FakeBrowser>
    <BasicExample />
  </FakeBrowser>
)

export default AppRouter
