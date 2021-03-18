---
name: date-picker
zhName: 日期选择框
tags:
  dateTime: true
---

# DatePicker 日期选择框

## Guide

输入或选择日期的控件。当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

### 日期选择模式

DatePicker/RangePicker 在交互上增加了**操作焦点**的设置，意味着，如果某个输入框处于 focus 态，那么当前选择的日期将会作用于该输入框对应的日期。

如上图所示，带时间的 RangePicker 有 4 个输入焦点，分别为开始日期、开始时间、结束日期、结束时间。当用户激活某个输入框时，此时下拉选择的日期将会作用域该输入框。同时设置了如下两个规则：

1.  已选定日期范围后，当焦点在开始日期时，如果即将选择的日期大于结束日期，将会重设开始日期。
2.  已选定日期范围后，当焦点在结束日期时，如果即将选择的日期小于开始日期，将会重设开始日期。

### 日期值的多语言

由于 Calendar 组件内部使用 moment 对象来设置日期（请使用最新版 moment），部分 Locale 读取自 moment，因此用户需要在外部使用时[正确的设置 moment 的 locale](http://momentjs.cn/docs/#/i18n/changing-locale/) 。

-   Q: 文档站点上看是中式日历，为什么我本地却是美式日历呢？如何进行多语言适配？<br/>
    A: 日期的多语言情况比较复杂，涉及到年、月、日、星期、阅读习惯等多方面(美式从周日到周六，中式从周一到周日)，因此我们借助了成熟的时间库 moment.js 来进行日期的多语言处理。
     moment.js 默认支持美式表达，如需中文等其他语言，请引入moment-with-locales.js语言包。

```js
import moment from 'moment';

moment.locale('zh-cn');
```

此外，当改变 moment 的全局 locale 时并不会修改之前的已有实例，例如：

```js
moment.locale('fr');
const m = moment(1316116057189);
m.fromNow(); // il y a une heure

moment.locale('en');
m.fromNow(); // il y a une heure
moment(1316116057189).fromNow(); // an hour ago
```

除了全局设置 moment 的多语言，还可以只对某个 moment 实例设置多语言。比如：

```js
const value = moment();
value.locale('fr'); // set this instance to use French
```

### Moment 对象和字符串

DatePicker 默认情况下接收和返回的数据类型都是 Moment 对象。为了便于用户的使用，DatePikcer 还支持直接传入字符串（组件内部仍然会格式化为 Moment 对象）。使用方法如下：

标准非受控

```jsx
<DatePicker onChange={val => console.log(val)} />
// select 2019-01-23
// >> MomentObject

<DatePicker defaultValue={moment()} onChange={val => console.log(val)} />
// select 2019-01-23
// >> MomentObject

<DatePicker defaultValue="2018-01-23" onChange={val => console.log(val)} />
// select 2019-01-23
// >> "2019-01-23"
```

标准受控

```jsx
<DatePicker value={moment()} onChange={val => console.log(val)} />
// setProps({ value: moment().add(1, 'months') })
// >> MomentObject

<DatePicker value="2018-01-23" onChange={val => console.log(val)} />
// setProps({ value: '2019-01-23' })
// >> "2019-01-23"
```

交互说明

DatePicker/RangePicker 在交互上增加了操作焦点的设置，意味着，如果某个输入框处于 focus 态，那么当前选择的日期将会作用于该输入框对应的日期。

## 基本用法

#include "demo/demo1.js"

最基本的用法。可以通过 onChange 监听选中值的变化。

## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/date-picker/index.md)

## Demo
 

### 提供默认值

#include "demo/demo2.js"

可以通过 defaultValue 属性为日期选择器提供初值，所提供的初值必须为 moment 对象。

### 面板的默认展现日期

#include "demo/demo3.js"

可以通过 defaultVisibleMonth 属性可以修改面板的默认展现日期。

### 不同尺寸

#include "demo/demo4.js"

通过 size 属性可以改变 Input 组件的尺寸，默认为 medium。

### 禁止选择某些日期

#include "demo/demo5.js"

可以通过 disabledDate 属性来禁止用户选择或输入某些特定日期。

### 日期时间选择

#include "demo/demo6.js"

如果需要同时选择时间，可以通过 showTime 属性开启，showTime 支持传入 TimePickerPanel 的属性，例如 format, defaultValue 等。

### 禁用日期选择

#include "demo/demo7.js"

当开启 disabled 属性时，选择框处于完全禁用状态。

### 日期格式

#include "demo/demo8.js"

通过 format 属性可以约束日期选择器的日期格式，该格式同时会限定用户的输入格式。

### 自定义日期范围选择

#include "demo/demo9.js"

如果默认的 RangePicker 在交互上无法满足您的使用需求，还可以基于 DatePicker 封装实现类似的功能。 例如，示例中的日期选择可以自由的更改开始或结束日期，而不必每次选择时重置日期。

### 自定义日期选择器弹层

#include "demo/demo10.js"

组件对外透出了 visible, defaultVisible, onVisibleChange, popupTriggerType, popupAlign, popupContainer, popupStyle, popupClassName 等属性用于直接定制弹层。此外，如果这些属性仍然无法满足需求，可以通过 popupProps 进行透传。

### 自定义面板页脚

#include "demo/demo11.js"

可以通过 footerRender 自定义对面板页脚的定制。

### 与 Field 结合

#include "demo/demo12.js"

与 Field 结合使用，简单示范自定义返回值
