// 打印上一个loader的输出
// 一般用来debug babel-loader、mdx-loader的转译结果
module.exports = function(...args) {
  console.log('debug loader: \n', args[0])
  this.callback.apply(this, [null].concat(args))
}
