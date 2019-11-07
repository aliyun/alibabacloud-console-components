# Switch 开关组件

开 / 关切换器切换单个设置选项的状态。开关控制器中的选项，以及它所在的状态，应该用伴随的内联标签显示清楚。开关选择器具有和单选按钮一样的视觉属性。使用文本“开”和“关”滑动切换已经过时了。使用这里显示的开关选择器代替。


## 基本用法

最简单的用法：disabled 可以设置是否可操作，size 属性设置尺寸。

#include "demo/demo1.js"

## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/switch/index.md)

## Demo


### disabled 模式切换

通过回调函数来改变 switch 组件的属性 disable 值的变化，从而来控制是否可操作。

#include "demo/demo2.js"

### 受控switch 组件

受控开关, 是指组件的值由上层组件决定, 如果开关定义了 value 属性, 就表示此开关是受控开关。
对于受控开关, 每一次 React 数据渲染时, 都会使用传入的值来更新开关, 开关本身是不能更新自己的状态的。

#include "demo/demo3.js"




