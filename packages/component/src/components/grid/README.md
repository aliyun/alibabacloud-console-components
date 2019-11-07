# Grid 栅格


基本使用

此栅格系统提供了320，480，720, 990，1200，1500等几乎所有主流分辨率场景的响应规则。
响应式栅格采用24列栅格体系和5分比实现，以满足2，3，4，5，6分比布局等多种情况。
固定栅格采用 20px 宽度作为单位栅格， 推荐使用9，10，12，14，16，18，24，但同时也提供了从1到30的所有栅格，也可根据需求定制固定栅格列。
响应式断点阈值为：xss(320px), xs(480px), s(720px), m(990px), l(1200px), xl(1500px)。
基于Flex实现，对 IE9 通过 display:table; 兼容实现，但 IE9 仅支持基本的响应式布局（详情请参考 API 和 DEMO 的说明）。

### 基础布局

通过 Col 的 span 属性指定该列宽度占整行宽度24分之几或5分之几。

#include "demo/demo1.js"

## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/grid/index.md)

## Demo

### 固定宽度列

#include "demo/demo2.js"

通过 Col 的 fixedSpan 属性来指定某列为固定宽度列，其宽度的计算方式为 20 * fixedSpan。

### 列间距

#include "demo/demo3.js"

列与列间距默认为0，可以通过设置 Row 的 gutter 属性来改变列间距。

### 溢出后是否换行

#include "demo/demo4.js"

（不支持 IE9 浏览器）默认列在行中宽度溢出后不会换行，如果想自动换行，请为 Row 设置 wrap 为 true。

### 嵌套布局

#include "demo/demo5.js"

Col 下也可嵌套 Row，以完成更细致的布局。

### 响应式布局

#include "demo/demo6.js"

### 显示与隐藏

#include "demo/demo7.js"

提供了强大的响应式的显示与隐藏功能，支持在不同断点下的显示与隐藏。

### 设置行的宽度

#include "demo/demo8.js"

默认 Row 的宽度被设置为100%，可以通过设置 fixed 属性为 true，来让 Row 的宽度不立刻随着是视口大小变动而变动，而是在某个断点下维持固定的宽度，也可以通过设置 fixedWidth 属性为某一断点值，从而固定 Row 的宽度，不再随着视口大小变动而变动。

### 偏移

#include "demo/demo9.js"

（不支持 IE9 浏览器）列可以向右偏移一定距离，该距离的计算方式和列所占宽度计算方式相同。

### 固定宽度偏移

#include "demo/demo10.js"

（不支持 IE9 浏览器）列可以向右偏移一定距离，该距离的计算方式和固定宽度列的宽度相同。

### 多列垂直方向对齐方式

#include "demo/demo11.js"

（不支持 IE9 浏览器）基于 Flex 的 align-items 和 align-self 属性实现，在 Row 上设置 align 属性，即可控制 Row 下面所有 Col 的垂直方向对齐方式：top（顶部对齐，默认），center（居中对齐），bottom（底部对齐），baseline（第一行文字的基线对齐），stretch（如果未设置高度或设为 auto，将占满整个容器的高度）；在 Col 上设置 align 属性，可允许它与其它列不一样的对齐方式，覆盖 Row 的 align 属性。

### 多列水平方向对齐方式

#include "demo/demo12.js"

（不支持 IE9 浏览器）基于 Flex 的 justify-content 属性实现，在 Row 上设置 justify 属性，即可行内多列水平方向对齐方式：start（左对齐，默认），center（居中对齐），end（右对齐），space-between（两端对齐，项目之间的间隔都相），space-around（两侧的间隔相等，列之间的间隔比列与左右两端的间隔大一倍）。

