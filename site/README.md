# Wind 组件库官网

使用[gatsbyjs](https://www.gatsbyjs.org/)实现。

本地开发：

```
npm run start
```

构建：

```
npm run build
```

开发者注意：
site 在构建时需要打包所有组件的 API 信息，所以要求所有业务组件目录下的`api-json/api.json`必须存在。在构建之前执行`lerna run prepare`来生成所有组件的 API 信息。
