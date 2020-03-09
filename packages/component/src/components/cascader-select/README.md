---
name: cascader-select
zhName: 级联选择
tags:
  select: true
---

# CascaderSelect 级联选择

何时使用

级联选择由选择器和级联组成。把级联组件以弹层的方式隐藏，多用于表单场景。


## 基本使用

#include "demo/demo1.js"

展示基本的单选用法。

## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/cascader-select/index.md)

## Demo
 

### 展开触发行为

#include "demo/demo2.js"

展示可通过 expandTriggerType 来设置不同的展开触发行为，支持 click 和 hover，默认值为 click。

### 多选

#include "demo/demo3.js"

展示基本的多选用法。

### 设置是否只能选择叶子项

#include "demo/demo4.js"

展示受控单选以及是否选择即改变。

### 设置父子节点选中是否关联

#include "demo/demo5.js"

展示受控多选以及是否开启严格受控父子节点选中不再关联的用法。

### 搜索

#include "demo/demo6.js"

通过设置 showSearch 为 true，可以开启组件的搜索功能。

### 自定义样式

#include "demo/demo7.js"

可以通过 displayRender 来定制单选时展示的结果，可以通过 listStyle，listClassName 来定制组件宽高。

### 异步加载数据

#include "demo/demo8.js"

展示动态获取数据的用法。
