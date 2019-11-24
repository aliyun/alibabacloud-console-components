---
name: balloon
zhName: 气泡提示
---

# Balloon 气泡提示

何时使用

* 当用户与被说明对象（文字，图片，输入框等）发生交互行为的 action 开始时, 即刻跟随动作出现一种辅助或帮助的提示信息。
* 其中 Balloon.Tooltip 是简化版本，主要用于 hover 时显示简单文案。

使用注意

* 对于trigger是自定义的 React Component 的情况，自定义的 React Component 需要透传 onMouseEnter/onMouseLeave/onClick 事件。


## 基本用法

最简单的用法。

#include "demo/demo1.js"


## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/balloon/index.md)

## Demo

### 三种触发方式

#include "demo/demo2.js"

鼠标移入、聚集、点击。

### 边缘对齐设置

#include "demo/demo3.js"

位置有十二个方向。

### 从浮层内关闭, 事件回调

#include "demo/demo4.js"

使用 visible ,属性控制浮层显示, 使 balloon 变为受限组件。

### close 按钮事件，手动控制 visible

#include "demo/demo5.js"

使用 visible,属性控制浮层显示, 使 balloon 变为受限组件

### 嵌套浮层问题

#include "demo/demo6.js"

浮层中如果又有浮层,比如在 Balloon 中有 DatePicker 的浮层,需要用 safeNode 解决 datePicker 选择时, balloon 浮层关闭的问题.

### tooltip

#include "demo/demo7.js"

简化的 Balloon, 只能设置 align, trigger 和 children, 触发条件是 hover.

