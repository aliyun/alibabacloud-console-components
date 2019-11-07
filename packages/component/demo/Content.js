import React from 'react'
import PropTypes from 'prop-types'
import Loadable from 'react-loadable'
import { pascalCase } from './utils'
import './content.scss'

const Loading = ({
  error,
}) => (
  error ? <div>Error</div> : <div>Loading</div>
)

Loading.propTypes = {
  error: PropTypes.objectOf(PropTypes.any),
}

const AppContent = ({
  match,
}) => {
  const Loader = Loadable({
    loader: () => import(`../src/components/${match.params.component}/demo`),
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
