---
name: pagination
zhName: 翻页器
---

# Pagination 翻页器

使用场景：当需要大量内容显示时，就会使用分页器来处理。

## 非受控分页

非受控分页，是指分页组件的状态由自己维护，组件值的改变可以通过 onChange 事件通知父组件，默认值由 defaultCurrent 初始化。

#include "demo/demo1.js"


## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/pagination/index.md)

## Demo

### 受控分页

#include "demo/demo2.js"

### 分页尺寸

#include "demo/demo3.js"

### 分页类型

#include "demo/demo4.js"

### 前进后退按钮只显示箭头

#include "demo/demo5.js"

### 每页显示

#include "demo/demo6.js"

### 显示总数

#include "demo/demo7.js"

### 分页按钮连接

#include "demo/demo8.js"

### 分页按钮连接

#include "demo/demo8.js"


#include "demo/demo9.js"