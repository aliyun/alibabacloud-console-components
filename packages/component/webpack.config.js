/* eslint-disable global-require, no-console */
const fs = require('fs-extra')
const env = require('./config/env')

module.exports = (...args) => {
  let config = null

  if (env.isDevelopment()) {
    console.log('Bundle files with development mode...')
    config = require('./config/webpack.dev')
  }

  if (env.isProduction()) {
    console.log('Bundle files with production mode...')
    config = require('./config/webpack.prod')
  }

  if (config) {
    const webpackConfig = config(...args)
    const logger = env.getCompileOption('logger')

    if (typeof logger !== 'undefined' && logger !== null) {
      console.log('[logger] Logging Babel\'s Configuration')

      if (logger === true || logger === 'console') {
        console.log(webpackConfig)
      } else {
        console.log(`[logger] > ${logger}`)
        fs.writeJSONSync(logger, webpackConfig, {
          spaces: 2,
        })
      }
    }

    return webpackConfig
  }

  throw new ReferenceError(`Cannot resolve config in mode: ${env}`)
}
