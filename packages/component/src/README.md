# 一些开发 tips

- 打包的时候，分别以`/src/index.js`和`/src/index.scss`为入口，打包得到 js bundle 和 css bundle。
- 之所以我们要在`/src/components/affix/index.js`里面写`import './index.scss'`，是因为运行 demo 的时候，需要这种依赖关系来做按需加载和 hot-module-replacement。import scss 的语句只在运行 demo 的时候有用，打包的时候我们会 ignore 掉它（请搜索代码"ignore_style_files"了解），直接通过顶层的`/src/index.scss`来收集所有样式。
  - 我们在`/src/components/card/index.scss`这种样式文件中`@import '~@alicloud/xconsole-theme/styles/variables.scss';`也是一样的道理，仅仅为了满足 demo 需要，因为 demo 的样式编译以`/src/components/card/index.scss`这种文件为入口，而不是`/src/index.scss`
- 声明 sass 变量的时候，尽量声明在 block 内部（即局部变量），减少使用全局变量，避免冲突。
