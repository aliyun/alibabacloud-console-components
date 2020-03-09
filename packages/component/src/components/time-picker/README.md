---
name: time-picker
zhName: 时间选择框
tags:
  dateTime: true
---

# TimePicker 时间选择框

## Guide

何时使用

当用户需要输入一个时间，可以点击输入框，在弹出的时间选择面板上操作。时间选择面板仅支持 24 小时制。

组件默认使用 moment 实例作为输入输出值，推荐使用结合 moment 的方式使用组件。此外，组件也支持传入时间字符串的方式，例如直接传入 "12:00:00"。用户传入什么类型的 value/defaultValue 值，就会在 onChange 中返回相应的类型。


### 基本

#include "demo/demo1.js"


## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/time-picker/index.md)

## Demo
 

### 默认值 

#include "demo/demo2.js"

可以通过 defaultValue 传入默认时间值，并且可以通过选择改变该值。onChange 回调参数的值的类型取决于 defaultValue 的类型。

### 尺寸 

#include "demo/demo3.js"

TimePicker 使用和 Input 组件相同的输入框尺寸，可以通过 size 属性进行设置。

### 受控 

#include "demo/demo4.js"

通过 value 和 onChange 实现受控，仅支持通过选择实现受控。

### 禁用时分秒

#include "demo/demo5.js"

禁用全部和禁用部分选择项

### 时间格式

#include "demo/demo6.js"

可以通过 format 属性格式化时间值，此外该属性还会影响到时间列的展示。

### 步长

#include "demo/demo7.js"

可以通过 hourStep, minuteStep, secondStep 分别设置时分秒的选项间隔。

### 结合 Field 使用

#include "demo/demo8.js"

配合 Field 使用

