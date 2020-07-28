import React from 'react'
import PropTypes from 'prop-types'
import Loadable from 'react-loadable'
import { pascalCase } from './utils'
import './content.scss'

const Loading = ({ error }) => (error ? <div>Error</div> : <div>Loading</div>)

const ctx = require.context('../src/components/', true, /demo\/index\.[jt]sx?/)

const keys = ctx.keys()

function loader(component) {
  const res = ctx(
    keys.find((key) => {
      if (key.includes(`${component}/demo/index`)) return true
    })
  )
  return Promise.resolve(res)
}

Loading.propTypes = {
  error: PropTypes.objectOf(PropTypes.any),
}

const AppContent = ({ match }) => {
  const Loader = Loadable({
    loader: () => loader(match.params.component),
    loading: Loading,
  })
  return (
    <div className="wind-demo-content">
      <h1>{pascalCase(match.params.component)}</h1>
      <Loader />
    </div>
  )
}

AppContent.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
}

export default AppContent
