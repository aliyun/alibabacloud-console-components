module.exports = {
  // 阻止babel-loader自己找到其他的配置
  configFile: false,
  babelrc: false,
  // preset的顺序影响编译正确性
  presets: [
    '@babel/react',
    ['@babel/env', { modules: false }],
    '@babel/preset-typescript',
  ],
  plugins: ['@babel/proposal-class-properties'],
}
