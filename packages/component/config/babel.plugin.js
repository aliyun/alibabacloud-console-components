exports.transformRuntime = () => [
  '@babel/plugin-transform-runtime',
  {
    corejs: 2,
  },
]

exports.ignoreStyleFiles = () => [
  'babel-plugin-transform-require-ignore',
  {
    extensions: ['.less', '.css', '.sass', 'scss'],
  },
]
