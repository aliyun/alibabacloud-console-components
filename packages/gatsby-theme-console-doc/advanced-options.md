```text
// 是否将demo组件打包到首屏bundle中（以及参与SSR）。
// 一些npm包（比如antv）不支持SSR，如果你的demo中用了这些包，
// 就需要将bundleDemo设置为"async"（异步加载demo），或者false（完全不打包bundle组件，demo展示完全靠codesandbox）。
// 默认为true（demo组件打包到首屏bundle并参与SSR）
// 可选项：true, false, "async"
bundleDemo: 'async',
// 透传给webpack选项resolve.module
// 通过这个配置可以优先从文档项目、根目录解析依赖，
// 如果找不到，再从发起者(即markdown或者demo位置)开始向上解析node_modules，
// 避免不同的markdown解析出各自的'react'
// 默认为['node_modules']
nodeModules: [
  // path.resolve(__dirname, '../../../node_modules'),
  'node_modules',
],
```
