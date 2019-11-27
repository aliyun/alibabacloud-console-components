/* eslint-disable */
const fs = require('fs-extra')
const env = require('./config/env')
const preset = require('./config/babel.preset')
const plugin = require('./config/babel.plugin')
const proposal = require('./config/babel.proposal')

const factory = fn => (...args) => fn(...args).map(item => (
  typeof item === 'function' ? item(...args) : item
)).filter(item => (
  Array.isArray(item) || typeof item === 'string'
))

const generatePresets = factory((api) => {
  const presets = [
    preset.env,
    preset.react,
    preset.ts,
  ]

  return presets
})

const generatePlugins = factory((api) => {
  const plugins = [
    plugin.transformRuntime,
    proposal.objectRestSpread,
    proposal.classProperties,
    proposal.decorators,
    proposal.exportDefaultFrom,
    proposal.exportNamespaceFrom,
    proposal.dynamicImport,
  ]

  if (env.getCompileOption('ignore_style_files')) {
    plugins.push(plugin.ignoreStyleFiles)
  }

  return plugins
})

const generateRestOptions = (api) => {
  const options = {}

  if (env.isProduction()) {
    options.ignore = [
      '**/demo/',
    ]
  }

  return options
}

module.exports = (api) => {
  api.cache.forever()

  const presets = generatePresets(api)
  const plugins = generatePlugins(api)
  const restOptions = generateRestOptions(api)

  const babelOptions = {
    presets,
    plugins,
    ...restOptions
  }

  const logger = env.getCompileOption('logger')

  if (typeof logger !== 'undefined' && logger !== null) {
    console.log(`[logger] Logging Babel's Configuration`)

    if (logger === true || logger === 'console') {
      console.log(babelOptions)
    } else {
      console.log(`[logger] > ${logger}`)
      fs.writeJSONSync(logger, babelOptions, {
        spaces: 2,
      })
    }
  }

  return babelOptions
}
