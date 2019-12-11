---
name: form
zhName: 表单
---

# Form 表单


表单布局、校验、数据提交操作时用到。

注意事项
* 组件不要使用关键字 nodeName 作为 name、id
* Form 默认使用 size=medium, 并且会控制 FormItem 内所有组件的size。 如果想修改组件的 size `<FormItem size="small" >`
* 在垂直表单中如果文字（一般 `<p>` 标签）或者组件向上偏离，可以通过 className="next-form-text-align" 辅助调整
* 必须是被 `<FormItem>`直接包裹的组件才能展示校验错误提示。如果界面不展示错误信息，请检查是否有多个层级。 比如 `<FormItem><div><Input/></div></FormItem>` 是无法展示校验信息的。

## 基本

#include "demo/demo1.js"

## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/form/index.md)

## Demo

#include "demo/demo2.js"

#include "demo/demo14.js"

#include "demo/demo3.js"

#include "demo/demo4.js"

#include "demo/demo5.js"

#include "demo/demo6.js"

#include "demo/demo7.js"

#include "demo/demo8.js"

#include "demo/demo9.js"

#include "demo/demo15.js"

#include "demo/demo10.js"

#include "demo/demo18.js"

#include "demo/demo19.js"

#include "demo/demo11.js"

#include "demo/demo12.js"

#include "demo/demo13.js"

#include "demo/demo16.js"

#include "demo/demo17.js"