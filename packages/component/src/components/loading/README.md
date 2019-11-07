# Loading 加载中

何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

注意事项

Loading 默认使用 display = 'inline-block' 布局的方式包裹内部元素。

如果希望 通栏包裹 可以修改 `<Loading style={{display: 'block'}} />`

### 基本用法

#include "demo/demo1.js"

最简单的用法。

## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/loading/index.md)

## Demo
 

### 自定义 Loading 动画

#include "demo/demo2.js"

你可以自定义动画，把自己的动画元素传进去, 需要自己写动画样式

### 关闭加载

#include "demo/demo3.js"

可切换加载状态。

### 全屏

#include "demo/demo4.js"

全屏展示

### 自定义提示语位置

#include "demo/demo5.js"

你可以选择提示语的位置,目前支持两个值 right/bottom(默认值)

### Loading 动画尺寸

#include "demo/demo6.js"

设置Loading动画的尺寸,只对原生的indicator管用
