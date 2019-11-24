---
name: collapse
zhName: 折叠面板
---

# Collapse 折叠面板

## 基本用法

Collapse 接受子组件 Panel 展示信息。Panel 可设置： title（标题）、disable（是否可操作）其中 title 可为字符串或 Component 组件。

#include "demo/demo1.js"



## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/collapse/index.md)

## Demo


### 单例模式

Collapse 的 accordion 属性接受一个布尔值, 若为 true, 最多只能有一个组件展开。

#include "demo/demo2.js"

### 默认展开一项模式

Collapse 的 defaultExpandedKeys 属性设置某一项默认展开。defaultExpandedKeys 数组内的元素为字符串，请参考 Demo。

#include "demo/demo3.js"



### disabled 禁止操作

禁止操作有三种方式，如果全部禁止，Collapse 的 disabled 为 true，若部分禁用 dataSource 属性内对 disable 为 true，或者 Panel 直接添加 disabled 属性。

#include "demo/demo4.js"



###   Event

当用户需要在 Panel 上增加比如 Click 事件回调。这时候，用 onExpand 和 expandedKeys 来达到 展开折叠的功能，增加的 Click 事件继续自己的逻辑，请参考 Demo。

#include "demo/demo5.js"

