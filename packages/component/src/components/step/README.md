# Step 步骤

用来告知用户当前业务流程的进程，属于流程可视化的一种辅助的方式，通过 Step ，用户可以清晰地知道自己现在处于哪个进程。


## 基本用法

在最简单的情况下，Step 有三种类型，可以通过 shape 属性进行切换。
可以通过 animation 属性关闭步骤条的动画，使 Step 变为纯展示型。

#include "demo/demo1.js"



## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/step/index.md)

## Demo


### 垂直模式 

垂直模式可以添加 content 的内容，对于点型和圆圈型的 Step 组件而言，可以通过设置 direction 属性设置其展示方向为垂直。 箭头形不支持垂直模式。

#include "demo/demo2.js"

### 图标和百分比

可以在点型和圆形步骤条中使用图标，圆形步骤条还可以使用百分比。

#include "demo/demo3.js"

### 禁止步骤项

可以通过在 Step.Item 上设置 disabled 属性来禁用某个步骤。

#include "demo/demo4.js"

### Step 自定义渲染

Step.Item 默认有三种状态，分别是 wait, process, finish。 用户可以通过传递 Step 组件的 itemRender 属性进行自定义的渲染其样式。

#include "demo/demo5.js"

### 只读模式

只读模式，不可触发回调。

#include "demo/demo6.js"

#include "demo/demo7.js"

### 受控模式

默认情况下，Step 定义为展示型组件，上层组件可以通过修改传入的 current 属性值来修改当前的步骤，同时可以设置每个节点的 click 事件，来自定义回调。

#include "demo/demo8.js"



