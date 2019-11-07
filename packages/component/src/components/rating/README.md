# Rating 评分

## Guide

评分组件通常用于用户反馈场景。

## 基本

最简单的用法。

#include "demo/demo1.js"

## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/rating/index.md)

## Demo

### 尺寸

#include "demo/demo2.js"

通过 size 属性可以控制评分组件的大小，支持三种尺寸 small, medium, large。 默认尺寸为 medium 。

### 半星评分

#include "demo/demo3.js"

默认情况下评分组件只支持整数评分，通过开启 allowHalf 属性可以支持半星评分。

### 只读模式

#include "demo/demo4.js"

设置 disabled 属性后，评分组件仅展示模式，不可选择。

### 等级提示

#include "demo/demo5.js"

添加 showGrade 属性，使评分组件具有等级提示信息。
