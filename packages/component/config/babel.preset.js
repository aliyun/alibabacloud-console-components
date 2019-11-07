const { isDevelopment } = require('./env')

exports.env = () => [
  '@babel/preset-env',
  {
    targets: {
      browsers: ['>1%', 'ie 10'],
    },
    useBuiltIns: false,
    modules: 'commonjs',
  },
]

exports.react = () => [
  '@babel/preset-react',
  {
    development: isDevelopment(),
  },
]
