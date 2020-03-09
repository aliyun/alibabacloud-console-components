---
name: select
zhName: 选择器
tags:
  select: true
---

# Select 选择器

## Guide

何时使用

### Select

如果你不期望用户输入的值生效而仅仅是选择，那么使用 Select. 同时可以使用 Select 的 showSearch 属性进行过滤。

### AutoComplete

AutoComplete 会保留用户输入的值，本质上是 Input 组件，扩展了 autocomplete 的能力，所以 Input 组件的属性可以直接透传。

常见问题

出现类似的 flatternChildren 的 warning

Select 默认使用 value 作为菜单项的 key，如果没有设置 key 值，则使用默认的序列 index 作为 key 值，确保这些值不会发生重复。

### dataSource 的使用

Select 同时支持 children 和在 props 中传入 dataSource 作为数据源, 如果同时设置, 则以 children 为准.

注意：1. Select 默认使用 value 作为渲染的菜单项的 key 值，所以 value 不能重复, 否则无法渲染下拉菜单。2. value 不允许出现 null/undefined/object/array 类型数值

定制弹出层

参见示例中的 弹层定制。唯一需要注意的是 overlay 的元素记得透传 props. 这是因为 Overlay 的弹层的动画是依靠 className 实现的，如果不透传 props 则会造成无法监听到动画播放结束的事件。

## 基本使用

#include "demo/demo1.js"

## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/select/index.md)

## Demo
 

#include "demo/demo2.js"

#include "demo/demo3.js"

#include "demo/demo16.js"

#include "demo/demo4.js"

#include "demo/demo5.js"

#include "demo/demo6.js"

#include "demo/demo7.js"

#include "demo/demo8.js"

#include "demo/demo17.js"

#include "demo/demo9.js"

#include "demo/demo10.js"

#include "demo/demo11.js"

#include "demo/demo12.js"

#include "demo/demo13.js"

#include "demo/demo14.js"

#include "demo/demo15.js"

#include "demo/demo18.js"

#include "demo/demo19.js"
