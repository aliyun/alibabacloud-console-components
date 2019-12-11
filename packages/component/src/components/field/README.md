---
name: field
zhName: 表单数据获取、校验工具
---

# Field 表单数据获取、校验工具

何时使用

涉及到表单数据操作、校验的地方都可以用Field来管理数据。和组件关联后可以自动对表单数据进行回写、读取、校验。

使用注意

* 使用Field init 过的组件, value onChange 必须放在 init 的第三个参数, 否则有可能被 init 覆盖。
* Form已经和Field 在数据获取和自动校验提示方面做了深度优化，建议在Form中使用Field, 请查看 Form demo。
* initValue 类似组件的 defauValue， 只有在组件第一次 render 的时候才生效( ajax 异步调用设置 initValue 可能已经错过了第一次 render )

## 基本

#include "demo/demo1.js"

## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/field/index.md)

## 自定义组件接入Field标准

- 支持受控模式(value+onChange) `必须`
    - value 控制组件数据展现
    - onChange 组件发生变化时候的回调函数（第一个参数可以给到value)

- 一次完整操作抛一次onChange事件 `建议`
    比如有Process表示进展中的状态，建议增加API `onProcess`；如果有Start表示启动状态，建议增加API `onStart`

- `value={undefined}`的时候清空数据, field 的 reset 函数会给所有组件下发 undefined 数据 `建议`

```
componentWillReceiveProps(nextProps) {
    if ('value' in nextProps ) {
        this.setState({
           value: nextProps.value === undefined? []: nextProps.value   //  设置组件的被清空后的数值
        })
    }
}
```

## 已知问题

- 为何手动调用`this.field.validate`的时候进不了回调函数？ 答: 是不是自定义了validator方法,确保`callback`在任何分支下都能被执行到。

## Demo

#include "demo/demo13.js"

#include "demo/demo2.js"

#include "demo/demo3.js"

#include "demo/demo4.js"

#include "demo/demo5.js"

#include "demo/demo6.js"

#include "demo/demo11.js"

#include "demo/demo12.js"

#include "demo/demo7.js"

#include "demo/demo8.js"

#include "demo/demo9.js"

#include "demo/demo10.js"

