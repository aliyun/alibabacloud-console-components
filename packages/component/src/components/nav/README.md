---
name: nav
zhName: 导航
---

# Nav 导航

何时使用

分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

注意事项

 * iconOnly 只适用垂直方向。
 * Nav 继承自 Menu，除特殊说明外，可使用 Menu 的 API。


## 基本

#include "demo/demo1.js"

最简单的使用方式

## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/nav/index.md)

## Demo

### 定制

#include "demo/demo2.js"

Nav 提供了丰富的配置，可以进行个性化定制。

### 只显示图标

#include "demo/demo3.js"

Nav 可设置 iconOnly 属性，只显示图标，以减少占用空间。

### 分组

#include "demo/demo4.js"

建议只在垂直布局中使用。

### 展开模式

#include "demo/demo5.js"

当 Nav 的 mode="inline" 时，openMode 可控制同级内联子导航的展开数量。

### 对齐模式

#include "demo/demo6.js"

当 Nav 的 mode="popup" 时，popAlign 可控制弹出子导航的对齐方式。
