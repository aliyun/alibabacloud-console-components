---
name: config-provider
zhName: 修改wind配置
---

# ConfigProvider 修改wind配置

开发指南

何时使用

* 修改组件类名前缀，Next 组件类名的默认前缀都是 'next-'，如 'next-btn'，你可能在以下两种情况下想改变这个默认前缀：
  * 自定义组件品牌，如 'my-btn'，'my-select'
  * 一个页面中同时引入两个主题，防止相同类名样式互相覆盖
* 实现多语言文案切换
* 开启 Pure Render 模式，提高性能，注意同时可能会带来副作用、

## 基本

最简单的用法，展示 ConfigProvider 是如何工作的。

#include "demo/demo1.js"

## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/config-provider/index.md)

## Demo

### 支持国际化的组件

#include "demo/demo2.js"

### 国际化

#include "demo/demo3.js"



