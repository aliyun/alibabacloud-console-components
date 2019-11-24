---
name: breadcrumb
zhName: 面包屑
---

# Breadcrumb 面包屑

用来告知用户当前的位置，以及当前页面在整个网站中的位置，属于一种辅助的导航方式，适用于清晰且具多层次结构的网站，每一层内容为层级归属关系，方便用户返回上一级或各个层级的页面。


## 基本用法

使用 Breadcrumb.Item 来设置面包屑子节点，如果设置其 link 属性就是 `<a />` 节点，否则为 `<span />` 节点。

#include "demo/demo1.js"


## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/breadcrumb/index.md)


## Demo

设置显示项数

#include "demo/demo2.js"

可以设置不同的分隔符

#include "demo/demo3.js"





