---
name: select
zhName: 选择器
---

# Select 选择器

## Guide

何时使用

### Select

如果你不期望用户输入的值生效而仅仅是选择，那么使用 Select. 同时可以使用 Select 的 showSearch 属性进行过滤。

### AutoComplete

AutoComplete 会保留用户输入的值，本质上是 Input 组件，扩展了 autocomplete 的能力，所以 Input 组件的属性可以直接透传。

常见问题

出现类似的 flatternChildren 的 warning

Select 默认使用 value 作为菜单项的 key，如果没有设置 key 值，则使用默认的序列 index 作为 key 值，确保这些值不会发生重复。

### dataSource 的使用

Select 同时支持 children 和在 props 中传入 dataSource 作为数据源, 如果同时设置, 则以 children 为准.

注意：1. Select 默认使用 value 作为渲染的菜单项的 key 值，所以 value 不能重复, 否则无法渲染下拉菜单。2. value 不允许出现 null/undefined/object/array 类型数值

定制弹出层

参见示例中的 弹层定制。唯一需要注意的是 overlay 的元素记得透传 props. 这是因为 Overlay 的弹层的动画是依靠 className 实现的，如果不透传 props 则会造成无法监听到动画播放结束的事件。

## 基本使用

#include "demo/demo1.js"

## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/select/index.md)

## Demo
 

### 标签

#include "demo/demo2.js"

标签模式，输入的内容可以作为选项

### 多选

#include "demo/demo3.js"

多选模式

### 选择器

#include "demo/demo4.js"

演示了 Select 的多种形态.

### 级联选择

#include "demo/demo5.js"

使用 Select 构建级联选择框

### 分组

#include "demo/demo6.js"

使用 OptionGroup 针对选项进行分组，也可以使用原生的 html 标签 optgroup

### 自定义value

#include "demo/demo7.js"

Select 的 value 可以是任意非空类型的值，但是要保证 toString() 后是唯一的。

### 搜索框

#include "demo/demo8.js"

使用 showSearch 显示搜索框，如果需要动态更新 dataSource，需要关闭 filterLocal

### 对象数据

#include "demo/demo9.js"

useDetailValu 把 value 从字符串变成对象

### 自动完成

#include "demo/demo10.js"

AutoComplete 继承了 Input 的能力，并在其基础上增加了 autoComplete 的功能。

### 自动完成大小

#include "demo/demo11.js"

AutoComplete 大小、disabled、清除

### 动态数据

#include "demo/demo12.js"

使用动态数据填充 AutoComplete, 设置 filterLocal 为 false

### 图文展示

#include "demo/demo13.js"

展示较为复杂的内容展示

### 自定义渲染

#include "demo/demo14.js"

通过 itemRender 和 valueRender (仅 Select) 自定义渲染的节点内容。

### 弹层定制

#include "demo/demo15.js"

通过 popupContent 定制 select 弹层

