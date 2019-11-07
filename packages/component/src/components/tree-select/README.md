# TreeSelect 树形选择控件

何时使用

类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。


## 基本

#include "demo/demo1.js"

最简单的单选用法。

## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/tree-select/index.md)

## Demo

### 使用数据直接生成

#include "demo/demo2.js"

使用 dataSource 生成树结构，除设置 label, value, key, children 属性外，还可传入 TreeNode 的其他属性，包括 selectable, disabled, checkboxDisabled, isLeaf，推荐使用 dataSource 而不是手动生成 TreeNode 的方式生成树，这样使用更简单，性能更好。

### 复选框多选

#include "demo/demo3.js"

展示复选框多选的功能。

### 受控

#include "demo/demo4.js"

展示树选择受控的用法。

### 搜索用法

#include "demo/demo5.js"

展示树选择的搜索用法。
