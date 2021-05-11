# @alicloud/console-components-intl

帮助你的项目快速应用国际化和本地化。前端开发者在编写代码的时候，不再耦合于某一语种，而是依赖于一个“文案 key”，而`文案id=>文案内容`的配置在顶层统一完成。

## 安装

```
$ yarn add @alicloud/console-components-intl
```

## 用法说明

- 正常用法：使用 intl 单例。你在项目的各个地方`import intl from '@alicloud/console-components-intl'`得到的都是同一个 intl 实例。方便文案的全局共享。
- 进阶用法：自己创建 intl 实例。各个 intl 实例可以有自己的文案字典，让你更加精确地控制文案的作用区域。

## 使用 intl 单例

你在项目的各个地方`import intl from '@alicloud/console-components-intl'`得到的都是同一个 intl 实例。方便文案的全局共享。

- 在项目入口初始化文案

```js
import intl from '@alicloud/console-components-intl'

// 通过任何方式拿到当前用户的语言文案，比如由服务端将文案注入到window.messages中
const messages = {
  'app.title': 'English title',
}

intl.set({ messages })
```

- 在顶层组件外部包裹一层 HOC

```tsx
import { render } from 'react-dom'
import intl from '@alicloud/console-components-intl'

const App = intl.withProvider()(OriginApp)
render(<App />, document.getElementById('app'))
```

- 在项目模块中使用 intl 进行国际化声明

```tsx
import intl from '@alicloud/console-components-intl'

const Title = () => <h1>{intl('app.title')}</h1>

export default Title
```

在字典定义中，在文案中可以用 `{` `}` 声明参数，并且在使用`intl`解析文案时传入参数。关于更多的语法说明，可以参考[ICU Message Syntax](https://formatjs.io/guides/message-syntax/)。下面有使用例子。

注意到，有了 intl 组件以后，前端开发者在编写代码的时候，不再耦合于某一语种，而是依赖于一个“文案 key”，而`文案id=>文案内容`的配置在顶层统一完成。

## 自己创建 intl 实例

如果你想要更加精确地控制文案的作用区域，你不应该使用`@alicloud/console-components-intl`给你创建好的顶层实例，而是自己创建 intl 实例。

```js
import { reactIntlFactory } from '@alicloud/console-components-intl'
const intl = reactIntlFactory()
```

## 使用示例

以下每个 demo 都使用了`reactIntlFactory`来创建独立的 intl 实例，避免 demo 之间的文案相互影响。

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-intl-docs&entryKey=basic/index)
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-intl-docs&entryKey=withVar/index)
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-intl-docs&entryKey=date/index)
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-intl-docs&entryKey=number/index)
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-intl-docs&entryKey=overwriteBaseComponent/index)
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-intl-docs&entryKey=withRcIntl/index)

## API

### intl.set

设定国际化的基本环境变量

```tsx
intl.set(data: IntlData, options: IntlOptions): void
```

#### IntlData

```tsx
IntlData = {
  messages: Object,
  locale: String,
}
```

- messages: 国际化需要的字典描述对象
- locale: BCP-47 locale 字符串。比如简体中文是`zh-Hans-CN`，英文是`en-US`。

#### IntlOptions

```tsx
IntlOptions = {
  determineLocale: DetermineLocale,
}
```

- determineLocale: 确定 locale 自动获取的方式。无特殊需求无需了解。

  ```tsx
  DetermineLocale = {
    globalIdentifier?: String|Array<String>,
    cookie?: String|Array<String>,
    html?: Boolean,
    navigator?: Boolean,
    fallback?: String,
  }
  ```

  - globalIdentifier: 从全局变量中获取 locale，这个获取逻辑是优先级最高的，如果该值是一个字符串，将会将该字符串作为全局变量的声明引用进行 locale 取值；如果该值为一个字符串数组，则会依次将数组中的字符串作为全局变量的声明顺序进行 locale 的取值，直到取得有效的值。如果 globalIdentifier 设置的值可以获取有效的 locale，则不再执行 `cookie`，`html`，`navigator`，`fallback` 的相关获取逻辑
  - cookie: 从 cookie 中获取 locale，当 globalIdentifier 未获取到有效的值时，将执行和 cookie 相关的获取处理逻辑。如果该值是一个字符串，将会将该字符串作为 cookie 的 key 进行 locale 取值；如果该值为一个字符串数组，则会依次将数组中的字符串作为 cookie 的 key 顺序进行 locale 的取值，直到取得有效的值。如果 cookie 设置的值可以获取有效的 locale，则不再执行 `html`，`navigator`，`fallback` 的相关获取逻辑
  - html: 从 html 标签中获取语言信息(lang)，当 globalIdentifier 和 cookie 都未获取到有效的 locale 值，且 html 的值为真值(truthy value)，则尝试从 html 标签中获取 lang 属性的值，如果可以获得有效的 lang 值，则将获取到的 lang 作为 locale 的值，不再执行后续的获取逻辑
  - navigator: 从 navigator.language 获取语言信息，当前面的获取逻辑均为获取到有效的 locale 值，且 navigator 的值为真值，则尝试从浏览器对象 navigator.language 中获取语言信息，如果可以获得有效的 language 的值，并将其作为 locale 的值，不再执行后续的获取逻辑
  - fallback: 如果从上述的获取逻辑中未去到任何有效的 locale 值，则将 fallback 指定的语言信息字符串作为当前的 locale 值

### intl

输出字典对应 key 的信息

```tsx
intl(key: String, values?: Object, preferString?: Boolean): String|ReactElement
```

#### 初始化

首先我们先准备一个字典，并使用 `intl.set` 导入字典声明

**locales/messages.js**

```tsx
export default {
  'app.title': '国际化控制台',
  'app.desc': '共有{count}个控制台使用了wind国际化功能',
  'app.desc.html':
    '共有<strong>{count, number}</strong>个控制台使用了wind国际化功能',
}
```

在字典定义中，变量可以用 `{` `}` 进行声明，并且在使用时进行赋值，关于更多的语法说明，可以参考

- [ICU Message Syntax](https://formatjs.io/guides/message-syntax/)

**initializer.js**

```tsx
import intl from '@alicloud/console-components-intl'
import messages from './locales/messages'

intl.set({ messages })
```

在入口文件处引用初始化文件

**app.js**

```tsx
import React from 'react'
import { render } from 'react-dom'
import './initializer'
import App from './App'

render(<App />, document.getElementById('app'))
```

#### 使用 intl 输出字典值

在 App 中的任意模块都可以使用 intl 方法输出字典值

**Title.js**

```tsx
import intl from '@alicloud/console-components-intl'

const Title = () => <h1>{intl('app.title')}</h1>

export default Title
```

#### 使用模板变量

**Desc.js**

```tsx
import intl from '@alicloud/console-components-intl'

const Desc = ({ count }) => <mark>{intl('app.desc', { count })}</mark>

export default Desc
```

#### 在变量中使用 React 组件

模板变量可以传入 React 组件，来完成定制化的渲染需求，让我们对 `Desc.js` 进行一些修改，让 `count` 变量接受一个组件

**Desc.js**

```tsx
import intl from '@alicloud/console-components-intl'

const Desc = ({ count }) => (
  <mark>
    {intl('app.desc', {
      count: <strong>{intl.number(count)}</strong>,
    })}
  </mark>
)

export default Desc
```

需要注意的是，如果字典中使用了 ICU 的格式化语法，如 `I have {count, number} cats` ，请不要在变量中传入组件

#### 默认使用字符串作为国际化输出结果

与之前的 `wind-intl` 不同，使用 `intl()` 的返回结果默认是一个字符串，你可以在诸如 `input.placeholder` 等属性中直接使用

```tsx
<Input placeholder={intl('app.title')} />
```

在以下两种情况下，使用 `intl()` 会返回一个 React 组件：

- 至少有一个变量值是 React 组件
- 强制指定 `preferString` 参数为 `false`

### intl.html

将带有 html 标签的字典值输出成一段 html，该方法将始终返回一个 React 组件

```tsx
intl.html(key: String, value?: Object): ReactElement
```

#### 输出带有 html 标签的字典值

**DescHtml.js**

```tsx
import intl from '@alicloud/console-components-intl'

const DescHtml = ({ count }) => (
  <mark>{intl.html('app.desc.html', { count })}</mark>
)

export default DescHtml
```

### intl.date

将时间日期进行本地化输出

```tsx
intl.date(date: Date, options?: DateTimePresetFormat|Intl.DateTimeFormatOptions): String
```

#### DateTimePresetFormat

```tsx
DateTimePresetFormat = String(
  'date',
  'time',
  'dateTime',
  'dateTimeWithTimeZone'
)
```

#### Intl.DateTimeFormatOptions

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat)

#### 输出本地化的时间格式

**CurrentDateTime.js**

```tsx
import intl from '@alicloud/console-components-intl'

const CurrentDateTime = () => <span>{intl.date(new Date())}</span>

export default CurrentDateTime
```

#### 使用预设输出本地化的时间格式

`@alicloud/console-components-intl` 默认提供三种时间预设：

- `date` : 只输出日期
- `time` : 只输出时间
- `dateTime` : (default) 输出日期和时间
- `dateTimeWithTimeZone` : 输出日期时间以及当前的时区

你可以以字符串的形式指定 `intl.date()` 的第二个参数，使用对应的预设方案

**CurrentDateTime.js**

```tsx
import intl from '@alicloud/console-components-intl'

const CurrentDateTime = () => <span>{intl.date(new Date(), 'date')}</span>

export default CurrentDateTime
```

### intl.number

将数字进行本地化输出

```tsx
intl.number(value: Number, options?: Intl.NumberFormatOptions)
```

#### Intl.NumberFormatOptions

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat)

#### 输出本地化的数字格式

**Counter.js**

```tsx
import intl from '@alicloud/console-components-intl'

const Counter = ({ count }) => <span>{intl.number(count)}</span>

export default Counter
```
