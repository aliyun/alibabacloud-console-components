const { isDevelopment } = require('./env')

exports.env = () => [
  '@babel/preset-env',
  {
    targets: {
      browsers: ['>1%', 'ie 10'],
    },
    // https://github.com/babel/babel/issues/10271#issuecomment-528379505
    // https://github.com/babel/babel/issues/10008
    // useBuiltIns: 'usage',
    // corejs: 2,
    modules: 'commonjs',
  },
]

exports.react = () => [
  '@babel/preset-react',
  {
    development: isDevelopment(),
  },
]

exports.ts = () => ['@babel/preset-typescript']
