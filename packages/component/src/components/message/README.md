---
name: message
zhName: 信息提示
---

# Message 信息提示

开发指南

## 信息类型

通过设置type调整信息类型

#include "demo/demo1.js"

## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/message/index.md)

## Demo

### 信息外观

#include "demo/demo2.js"

通过设置shape调整信息外观

### 信息尺寸

#include "demo/demo3.js"

通过size设置尺寸

### 可关闭组件

#include "demo/demo4.js"

通过增加closeable属性可以控制提示框是否可关闭。

### 受控显示隐藏

#include "demo/demo5.js"

### 弹窗用法

#include "demo/demo6.js"

可以通过Message.show和Message.hide方法来方便的显示或隐藏反馈弹窗。

### 弹窗便捷方法

#include "demo/demo7.js"

可以通过Message.success等静态方法来方便的显示指定类型的信息弹窗。
