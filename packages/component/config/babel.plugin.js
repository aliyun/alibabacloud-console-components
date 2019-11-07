exports.transformRuntime = () => ['@babel/plugin-transform-runtime']

exports.ignoreStyleFiles = () => ['babel-plugin-transform-require-ignore', {
  extensions: ['.less', '.css', '.sass', 'scss'],
}]
