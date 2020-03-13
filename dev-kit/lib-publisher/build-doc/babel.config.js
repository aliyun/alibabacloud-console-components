module.exports = {
  // preset的顺序影响编译正确性
  presets: [
    '@babel/react',
    ['@babel/env', { modules: false, useBuiltIns: 'usage', corejs: '3' }],
    '@babel/preset-typescript',
  ],
}
