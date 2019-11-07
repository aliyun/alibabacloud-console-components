# Overlay 弹层

用于生成弹层的工具类集合.


## 基本用法

Overlay 提供了一系列组件用于创建弹层。其中包含：

### Overlay

Overlay 可以在页面中弹出一个浮层，封装了定位，动画及其他一些可用性的功能。Overlay 被设计为无状态的组件，其本身并不控制自己显示和隐藏的状态。

注意: 类似 canCloseby* 的配置也需要配合 onRequestClose 才能关闭弹层。

安全节点

Overlay 提供了点击弹层外文档中节点隐藏该弹层的功能，如果想让某个节点点击后不隐藏弹层（如：触发弹层打开的节点），请将该节点传入 safeNode 属性。

定位
1. align 的值可以是由空格隔开的字符串，如 tl bl，其中 tl 代表目标元素的左上方，bl 代表基准元素的左下方，所以 tl bl 的意思是目标元素的左上方对齐基准元素左下方。其中定位的可选值有 tl, tc, tr, cl, cc, cr, bl, bc, br。t 为 top 的缩写，b 为 bottom 的缩写，c 为 center 的缩写，l 为 left 的缩写，r 为 right 的缩写.
2. align 支持的 Boolean 值仅为 false，在设置为 false 时，不使用 JS 定位，这样你可以根据你的需要传入 style 或者 className 进行 CSS 定位。

### Popup

Popup 是对 Overlay 的封装，它接收某个节点作为触发节点，弹出一个浮层，这个浮层默认情况下使用这个节点作为定位的参照对象。

### 基本

弹出一个弹层

#include "demo/demo1.js"

## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/overlay/index.md)

## Demo

### 遮罩

#include "demo/demo2.js"

带有遮罩的弹层。

### 触发的弹层

#include "demo/demo3.js"

使用 Popup 弹出一个弹层。

### 触发的弹层受控显示隐藏

#include "demo/demo4.js"

展示了 Popup 受控显示隐藏的用法。

### 弹层嵌套

#include "demo/demo5.js"

有弹层嵌套需求时，请使用 container 属性将第二个弹层渲染到第一个弹层内部。

### 弹层跟随滚动

#include "demo/demo6.js"

弹层默认参照 document.body 绝对定位，如果弹层显示隐藏的触发元素所在容器（一般为父节点）有滚动条，那么当容器滚动时，会发生触发元素与弹层相分离的情况，解决的办法是将弹层渲染到触发元素所在的容器中。（触发元素所在的容器，必须设置 position 样式，以完成弹层的绝对定位。）
