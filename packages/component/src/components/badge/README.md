# Badge 徽标数

使用场景：在有新消息，讯息时，或者是app/插件/功能模块可以更新，升级时使用这个组件。


## 基本用法

徽章依托的内容 可以是图标，文字，也可以没有。图标有大图标和小图标两种；通过 Badge 的 count 属性 显示有多少条信息，count 为 0 时隐藏； overflowCount 设置超过这个值，显示 overflowCount 的值；Badge 可以没有 children，独立使用。

#include "demo/demo1.js"

## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/badge/index.md)


## Demo


### 动态徽章

特殊场景下需要展示动态效果。

#include "demo/demo2.js"

### 定制徽章

使用 content 属性定义显示的内容。

#include "demo/demo3.js"








