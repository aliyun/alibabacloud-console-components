# Progress 进度

使用场景：在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态；操作在后台运行，需要耗费一定的客户端等待时间；操作需要展示一个完成进度的百分比。


## 基本进度条

普通模式的进度条，通过 textRender 来自定义进度条提示信息，当返回 false 时，不显示进度条提示内容。可以通过 size 属性制定进度条的大小。
Progress 有三种状态，分别是常规状态、成功状态，和失败状态。您可以通过 state 属性展示流程的不同周期。或者不提供 state 属性值， shape 设置进度条的样式。

#include "demo/demo1.js"


## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/progress/index.md)

## Demo


### 圆形进度条

#include "demo/demo2.js"

### 尺寸

#include "demo/demo3.js"

### 进度条不同状态

#include "demo/demo4.js"

### Progressive

#include "demo/demo5.js"

### 动态展示

#include "demo/demo6.js"






