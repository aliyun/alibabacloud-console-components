# Calendar 日历


## Guide

按照日历形式展示数据的容器。

何时使用

日历组件是一个偏向于展示与受控的基础组件，可用于日程、课表、价格日历、农历展示等。

日期值的多语言

由于 Calendar 组件内部使用 moment 对象来设置日期（请使用最新版 moment），部分 Locale 读取自 moment，因此用户需要在外部使用时[正确的设置 moment 的 locale](http://momentjs.cn/docs/#/i18n/changing-locale/) 。

## 全屏日历

最简单的日历用法，用户可以切换年/月。

#include "demo/demo1.js"


## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/calendar/index.md)

## Demo
 

### 日历卡片

#include "demo/demo2.js"

### 禁用日期

#include "demo/demo3.js"

### 定制日历内容

#include "demo/demo4.js"

### 日历默认展示月份

#include "demo/demo5.js"

### 日历面板

#include "demo/demo6.js"

### 多语言

#include "demo/demo7.js"

