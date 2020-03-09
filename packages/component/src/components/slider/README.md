---
name: slider
zhName: 图片轮播
tags:
  slider: true
---

# Slider 图片轮播

## Guide

轮播组件，就是以幻灯片的方式，在页面中横向展示诸多内容的组件。 轮播内容相互独立，前后在内容以及数据上都不存在逻辑关系。

何时使用

* 单图轮播：该样式通常用于承载运营 banner，是一个位置相对固定的模块。
* 多图轮播：单元信息浏览

使用注意点

1. 当轮播组件中只有一张图片的时候，轮播组件会隐藏导航锚点、禁止自动循环（即使上层设置了）、禁止拖拽播放（即使上层设置了）。
2. 如果您要将 Slider 放到 Dialog 中，此时你需要关闭 Dialog 的动画，避免 Slider 在计算内部元素宽度时造成出错。
3. 如果出现图片高度 1px 的问题，可以尝试在 img 标签的外部包裹一层 div 标签。

## 基本

轮播组件共有两种类型：单图轮播和多图同时轮播。 在默认模式下（不指定任何属性值），轮播组件为单图轮播模式。

注意： 如果出现图片 1px 高度的问题，建议将图片的外部包括一层 div 来避免这个问题。

#include "demo/demo1.js"

## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/slider/index.md)

## 说明

next-slider is forked from [react-slick](https://github.com/akiran/react-slick)

## Demo

### 多图轮播

#include "demo/demo2.js"

在单图轮播的基础上，通过指定 slidesToShow 属性值，可以同时进行多图轮播。 可以通过 slidesToScroll 属性制定单次轮播图片的个数。

### 垂直滑动

#include "demo/demo3.js"

轮播组件可以通过 slideDirection 属性设置两种轮播方向。当值为 ver 时轮播方向为垂直方向， 默认为值为 hoz 。垂直模式也可以设置单图和多图轮播。

### 导航按钮尺寸

#include "demo/demo4.js"

可以通过 arrowSize 属性来更改导航组件的按钮尺寸，默认值为 normal， 对特定场景，比如展示的图片较大的情况下，可以选择 large，将导航按钮设置为大按钮。

### 导航锚点方向

#include "demo/demo5.js"

通过 dotsDirection 可以改变导航锚点的位置，默认为 hoz 即水平方向。 当其值设为 ver 时为垂直方向展示。

### 导航锚点触发方式

#include "demo/demo6.js"

通过 triggerType 可以定义dots触发方式，共有两种触发方式：['click', 'hover']; 当其值设为 hover 时为鼠标经过触发滚动。

### 自定义导航锚点

#include "demo/demo7.js"

通过 dotsRender 可以自定义修改dost，通过 dotsClass 可覆盖dots的样式。

### 自定义导航箭头

#include "demo/demo8.js"

开发者可以通过 prevArrow 和 nextArrow 两个属性传入自定义的导航箭头组件。

### 导航箭头位置

#include "demo/demo9.js"

轮播组件的导航按钮在默认情况下为内置模式。在多图同时导航的情况下，如果想要使用外置按钮， 可以通过指定 arrowPosition 的属性值为 outer，使用外置按钮，其默认值为inner。

### 自动播放

#include "demo/demo10.js"

可以通过 autoplay 和 autoplaySpeed 属性来设置组件是否自动轮播 和 自动轮播的速度。

### 禁止循环

#include "demo/demo11.js"

默认情况下，轮播组件的表现为无穷循环模式。如果你不想无穷循环， 可以通过设置 infinite 为 false，用来禁止循环模式。

值得注意的是，由于组件的默认行为是无穷模式，所以默认情况下，自动将单张图片复制了两份， 如果你不想启用这样的复制效果，只要关闭 infinite 属性即可。


### 悬浮时暂停

#include "demo/demo12.js"

可以通过设置 pauseOnHover 属性为 true 使得 Slide 在鼠标悬浮时自动停止轮播。

### 外部控制

#include "demo/demo13.js"

用户可以包装 Slider 组件，以便进行外部控制。例如通过包装组件实现外部对 Slider 组件 autoplay 和 autoplaySpeed 值的控制。

### 居中模式

#include "demo/demo14.js"

居中模式可以突出显示最核心区域的内容，您可以通过设置 centerMode 属性址为 true 开启该功能。

### ActiveIndex

#include "demo/demo15.js"

通过 index 属性可以快速的定位到指定次序的 slider 。

### 不同图片宽度

#include "demo/demo16.js"

Slider 在默认情况下会认为所有的子元素是等宽的。 通过设置 variableWidth 为 true，您可以在 Slider 中放置不同宽度的图片。

### 使用自定义组件

#include "demo/demo17.js"

你可以为传递自定义组件到 Slider 组件中。前提是该组件一定要开放透传 props 到下层组件或元素，Slider 底层需要执行元素的 clone 操作。

### 弹出来的跑马灯

#include "demo/demo18.js"

如果你要将 Slider 放到 Dialog 中，此时你需要关闭 Dialog 的动画，避免 Slider 在计算内部元素宽度时造成出错。

### Fade

#include "demo/demo19.js"

切换跑马灯时使用渐变效果。

### onChange 钩子

#include "demo/demo20.js"

你可以利用 onChange 钩子函数处理一些额外的逻辑。
