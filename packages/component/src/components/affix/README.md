# Affix 固钉

## Guide

何时使用

当用户需要将某个组件固定在页面的某个位置时，可以使用 Affix 组件使用固定。


## 基本用法

默认情况下，Affix 的默认目标容器元素是整个 window，并且 offsetTop = 0， 也就意味着当页面往下滚动时，当 Affix 元素接触到浏览器边框时，此时会将 Affix 钉住。

#include "demo/demo1.js"

## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/affix/index.md)


## Demo
 

### 自定义偏移量

#include "demo/demo2.js"

可以通过 offsetTop 或 offsetBottom 自定义偏移量。

### 自定义目标容器

#include "demo/demo3.js"

可以通过 container 属性设置 Affix 组件需要监听其滚动事件的元素，该属性接收一个函数作为参数，默认为 () => window。

### onAffix

#include "demo/demo4.js"

可以通过传入 onAffix 的事件回调函数来监听元素是否发生了固钉状态。该函数会在状态变化时返回固钉状态。

