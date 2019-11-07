# NumberPicker 数字输入框

使用场景：数字选择器，并对输入的数据做正确性检查、自动订正。


## 基本用法

onChange 第一个参数是输入框 value， 第二个参数 e.Event 事件对象。editable 属性设置是否可输入。disabled 禁止输入， type 属性来设置按钮摆放位置，max 、min 设置 最大值和最小值，step 属性设置每一次变化的步长。

#include "demo/demo1.js"


## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/number-picker/index.md)

## Demo

### 不可直接输入

#include "demo/demo2.js"

### 最大最小值

#include "demo/demo3.js"

### 步长

#include "demo/demo4.js"

### 大小

#include "demo/demo5.js"

### 不可用

#include "demo/demo6.js"
 
