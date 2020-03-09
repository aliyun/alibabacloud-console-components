---
name: date-picker
zhName: 日期选择框
tags:
  dateTime: true
---

# DatePicker 日期选择框

## Guide

输入或选择日期的控件。当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

交互说明

DatePicker/RangePicker 在交互上增加了操作焦点的设置，意味着，如果某个输入框处于 focus 态，那么当前选择的日期将会作用于该输入框对应的日期。

## 基本用法

#include "demo/demo1.js"

最基本的用法。可以通过 onChange 监听选中值的变化。

## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/date-picker/index.md)

## Demo
 

### 提供默认值

#include "demo/demo2.js"

可以通过 defaultValue 属性为日期选择器提供初值，所提供的初值必须为 moment 对象。

### 面板的默认展现日期

#include "demo/demo3.js"

可以通过 defaultVisibleMonth 属性可以修改面板的默认展现日期。

### 不同尺寸

#include "demo/demo4.js"

通过 size 属性可以改变 Input 组件的尺寸，默认为 medium。

### 禁止选择某些日期

#include "demo/demo5.js"

可以通过 disabledDate 属性来禁止用户选择或输入某些特定日期。

### 日期时间选择

#include "demo/demo6.js"

如果需要同时选择时间，可以通过 showTime 属性开启，showTime 支持传入 TimePickerPanel 的属性，例如 format, defaultValue 等。

### 禁用日期选择

#include "demo/demo7.js"

当开启 disabled 属性时，选择框处于完全禁用状态。

### 日期格式

#include "demo/demo8.js"

通过 format 属性可以约束日期选择器的日期格式，该格式同时会限定用户的输入格式。

### 自定义日期范围选择

#include "demo/demo9.js"

如果默认的 RangePicker 在交互上无法满足您的使用需求，还可以基于 DatePicker 封装实现类似的功能。 例如，示例中的日期选择可以自由的更改开始或结束日期，而不必每次选择时重置日期。

### 自定义日期选择器弹层

#include "demo/demo10.js"

组件对外透出了 visible, defaultVisible, onVisibleChange, popupTriggerType, popupAlign, popupContainer, popupStyle, popupClassName 等属性用于直接定制弹层。此外，如果这些属性仍然无法满足需求，可以通过 popupProps 进行透传。

### 自定义面板页脚

#include "demo/demo11.js"

可以通过 footerRender 自定义对面板页脚的定制。

### 与 Field 结合

#include "demo/demo12.js"

与 Field 结合使用，简单示范自定义返回值
