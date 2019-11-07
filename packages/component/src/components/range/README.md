# Range 区段选择器

何时使用

滑块控件( Sliders，简称滑块)可以让我们通过在连续或间断的区间内滑动锚点来选择一个合适的数值。区间最小值放在左边，对应的，最大值放在右边。滑块( Sliders )可以在滑动条的左右两端设定图标来反映数值的强度。这种交互特性使得它在设置诸如音量、亮度、色彩饱和度等需要反映强度等级的选项时成为一种极好的选择。

使用注意

* onChange 是和 value 进行配置做受控处理的。onChange 在滑动过程中不会触发，滑动停止后会触发。
* onProcess 不建议内部做 setState 进行受控，因为会频繁触发，整个滑动过程中会一直触发。

## 基本

基本滑块，当 slider 为 double 时，渲染为双滑块。当 disabled 为 true 时，滑块处于不可用状态。

#include "demo/demo1.js"

## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/range/index.md)

## Demo

### 刻度及标识

#include "demo/demo2.js"

通过 scales 与 marks 属性设置刻度及标识。

### min,max,step

#include "demo/demo3.js"

可以通过 min 与 max 设置范围边界。通过 step(被 max - min 整除) 设置移动的最小步频。min默认为0,max默认为100.

### 事件

#include "demo/demo4.js"

onChange , onProcess 事件

### 范围与step

#include "demo/demo5.js"

与 number-picker 结合,外部控制,与 Icon 结合设置边界 Icon

### tipRender

#include "demo/demo6.js"

tipRender 示例

### 选择态反转

#include "demo/demo7.js"

设置reverse为true, 选中态会反转。





