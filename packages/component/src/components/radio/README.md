---
name: radio
zhName: 单按钮
---

# Radio 单按钮

使用场景：单选按钮允许用户从一个数据集中选择单个选项。如果你觉得用户需要并排看到所有的可选项，使用单选按钮进行排他操作。


## 基本用法

调用 Radio 组件，checked 属性可以设置 radio 是否选中，或者 defaultChecked 属性设置默认选中。使用 disabled 设置 radio 是否可操作。


#include "demo/demo1.js"



## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/radio/index.md)

## Demo
 
### Radio 嵌套组件

#include "demo/demo2.js"

### 受限 / 非受限 Radio 按钮组

#include "demo/demo3.js"

### Radio 按钮形状

shape 属性设置为 button 时，单选按钮显示类似于 button 的样子，这时 可以 使用 size 属性设置其尺寸。

#include "demo/demo4.js"







