---
name: menu-button
zhName: 菜单按钮
tags:
  button: true
---

# MenuButton 菜单按钮

使用指南

1. 通过触发按钮打开弹层菜单。支持透传所有的 Button 属性。

2. 子组件 Item, Group, Divider 即 Menu 中对应的子组件，请参考 Menu 文档。


### 基本

#include "demo/demo1.js"

最简单的用法。支持 Button 的 shape, type, size, component, ghost 等属性透传



## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/menu-button/index.md)

## Demos

### 尺寸 

#include "demo/demo2.js"

可以通过 size 属性改变按钮大小。

### 菜单组

#include "demo/demo3.js"

支持菜单组和菜单分割线，使用方法同 Menu.Group, Menu.Item, Menu.Divider。

