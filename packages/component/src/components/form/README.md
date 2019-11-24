---
name: form
zhName: 表单
---

# Form 表单


表单布局、校验、数据提交操作时用到。

注意事项
* 组件不要使用关键字 nodeName 作为 name、id
* Form 默认使用 size=medium, 并且会控制 FormItem 内所有组件的size。 如果想修改组件的 size `<FormItem size="small" >`
* 在垂直表单中如果文字（一般 `<p>` 标签）或者组件向上偏离，可以通过 className="next-form-text-align" 辅助调整
* 必须是被 `<FormItem>`直接包裹的组件才能展示校验错误提示。如果界面不展示错误信息，请检查是否有多个层级。 比如 `<FormItem><div><Input/></div></FormItem>` 是无法展示校验信息的。

## 基本

拉伸浏览器的时候label宽度不变。

如果组件比较靠上，可以用 className="next-form-text-align" 做调整

#include "demo/demo1.js"

## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/form/index.md)

## Demo

### 水平

#include "demo/demo2.js"

### 尺寸

#include "demo/demo3.js"

size 会强制设置 FormItem 下的所有组件的 size

labelAlign label 方位

labelTextAlign 文字左右对齐方式

### 标签在上

#include "demo/demo4.js"

size 会强制设置 FormItem 下的所有组件的 size

labelAlign label 方位

labelTextAlign 文字左右对齐方式

### 标签内嵌

#include "demo/demo5.js"

通过设置 labelAlign="inset" (只适用于 Input、Select组件，其他组件不适用)

### 表单组合

#include "demo/demo6.js"

展示和表单相关的其他组件。

### 嵌套

#include "demo/demo7.js"

FormItem 嵌套

### 自定义布局

#include "demo/demo8.js"

标签位置：上、左

配合 Row Col 控制表单内元素布局 (注意：FormItem非Form直接子元素需要不能直接直接在Form上设置布局)

### 回车提交

#include "demo/demo9.js"

需要Form里面有 htmlType="submit" 的元素

### 校验提示

#include "demo/demo10.js"

为 `<FormItem>` 定义 state 属性控制三种校验状态。

如果是 `<Input>` 组件, 可在`<FormItem>`上面添加 hasFeedback 控制图标的展示

注意: 反馈图标只对 `<Input />` 有效。

### 校验

#include "demo/demo11.js"

基本的表单校验例子。

### 配合 redux 使用

#include "demo/demo12.js"

在 redux 中结合 componentWillReceiveProps setValues 使用

### 手动设置错误

#include "demo/demo13.js"

在 redux 中结合 componentWillReceiveProps setErrors 使用

如果需要自己控制错误位置，可以让 help="" 然后自己放置展示错误的地方
