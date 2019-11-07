const { isDevelopment } = require('./env')

exports.env = () => [
  '@babel/preset-env',
  {
    targets: {
      browsers: ['>1%', 'ie 10'],
    },
    useBuiltIns: 'usage',
    modules: 'commonjs',
    corejs: 2,
  },
]

exports.react = () => [
  '@babel/preset-react',
  {
    development: isDevelopment(),
  },
]
