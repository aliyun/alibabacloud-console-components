# Drawer

## 使用指南

抽屉

### 何时使用

抽屉是用于在不离开主路径的情况下，提供用户快速执行简单的操作、确定用户信息或反馈提示的辅助窗口。

## API

### Drawer

> 继承 Overlay.Popup 的 API，除非特别说明

| 参数          | 说明                                                                                                                                                                                                                               | 类型                  | 默认值                                        |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------------------------------ |
| width       | 宽度，仅在 placement是 left right 的时候生效                                                                                                                                                                                                | Number/String       | -                                          |
| height      | 高度，仅在 placement是 top bottom 的时候生效                                                                                                                                                                                                | Number/String       | -                                          |
| closeable   | [废弃]同closeMode, 控制对话框关闭的方式，值可以为字符串或者布尔值，其中字符串是由以下值组成：<br/>**close** 表示点击关闭按钮可以关闭对话框<br/>**mask** 表示点击遮罩区域可以关闭对话框<br/>**esc** 表示按下 esc 键可以关闭对话框<br/>如 'close' 或 'close,esc,mask'<br/>如果设置为 true，则以上关闭方式全部生效<br/>如果设置为 false，则以上关闭方式全部失效 | String/Boolean      | true                                       |
| closeMode   | [推荐]控制对话框关闭的方式，值可以为字符串或者数组，其中字符串、数组均为以下值的枚举：<br/>**close** 表示点击关闭按钮可以关闭对话框<br/>**mask** 表示点击遮罩区域可以关闭对话框<br/>**esc** 表示按下 esc 键可以关闭对话框<br/>如 'close' 或 ['close','esc','mask'], \[]                                                    | Array&lt;Enum>/Enum | -                                          |
| onClose     | 对话框关闭时触发的回调函数<br/><br/>**签名**:<br/>Function(trigger: String, event: Object) => void<br/>**参数**:<br/>_trigger_: {String} 关闭触发行为的描述字符串<br/>_event_: {Object} 关闭时事件对象                                                                     | Function            | () => {}                                   |
| placement   | 位于页面的位置<br/><br/>**可选值**:<br/>'top', 'right', 'bottom', 'left'                                                                                                                                                                      | Enum                | 'right'                                    |
| title       | 标题                                                                                                                                                                                                                               | ReactNode           | -                                          |
| headerStyle | header上的样式                                                                                                                                                                                                                       | Object              | -                                          |
| bodyStyle   | body上的样式                                                                                                                                                                                                                         | Object              | -                                          |
| visible     | 是否显示                                                                                                                                                                                                                             | Boolean             | -                                          |
| hasMask     | 是否显示遮罩                                                                                                                                                                                                                           | Boolean             | true                                       |
| animation   | 显示隐藏时动画的播放方式，支持 { in: 'enter-class', out: 'leave-class' } 的对象参数，如果设置为 false，则不播放动画。 请参考 Animate 组件的文档获取可用的动画名                                                                                                                    | Object/Boolean      | { in: 'expandInDown', out: 'expandOutUp' } |
| onOk | 点击footer确定按钮时的回调。如果有此参数，那么将默认在footer底部增加确定按钮<br/><br/>**签名**:<br/>Function(event: Object) => void<br/>**参数**:<br/>_event_: {Object} 点击事件对象 | Function | - | 
| onCancel | 点击footer取消按钮时的回调。如果有此参数，那么将默认在footer底部增加取消按钮<br/><br/>**签名**:<br/>Function(event: Object) => void<br/>**参数**:<br/>_event_: {Object} 点击事件对象 | Function | - | 
| renderFooter | 自定义渲染footer | ReactNode | - | 
| hasFooterLine | 是否显示footer上部的分割线 | Boolean | false | 
| footerAlign | footer底部按钮的布局 | left \| center \| right | left | 
| okText | 确定按钮文字 | ReactNode | 确定 | 
| cancelText | 取消按钮文字 | ReactNode | 取消 |
| cancelBtnProps | 透传给取消按钮的Props | ButtonProps | - |
| okBtnProps | 透传给确定按钮的Props | ButtonProps | - |
| footerClass | 给footer添加className以自定义样式 | String | - |
| size |快速定制抽屉大小。在size和width同时存在时优先使用width定制大小 | mini \| small \| medium \| large | mini |

## 快捷调用
以下只列举 config 可以传入的常用属性，Dialog 组件的其他属性也可以传入

| 参数          | 说明                                                                                                                                                                                                                               | 类型                  | 默认值                                        |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------------------------------ |
| title       | 标题                                                                                                                                                                                                                               | ReactNode           | -                                          |
| size |快速定制抽屉大小。在size和width同时存在时优先使用width定制大小 | mini \| small \| medium \| large | mini |
|content	| 内容	| ReactNode	 |''|
| onOk | 点击footer确定按钮时的回调。当返回值为 true 时。将会自动关闭 Drawer。<br/><br/>**签名**:<br/>Function(event: Object) => void \| boolean<br/>**参数**:<br/>_event_: {Object} 点击事件对象 | Function | - | 
| onCancel | 点击footer取消按钮时的回调。当返回值为 true 时。将会自动关闭 Drawer。<br/><br/>**签名**:<br/>Function(event: Object) => void \| boolean<br/>**参数**:<br/>_event_: {Object} 点击事件对象 | Function | - | 

```
const { hide, show } = Drawer.show(QuickDrawerProps);
```
快捷调用 `Drawer`。
+ 调用该方法返回 `hide` 和 `show` 方法。直接调用可隐藏/显示该 `Drawer`。
+ 快捷调用的 `onCancel` 和 `onOk` 可以选择返回一个布尔值的类型。当返回值为 `true` 时。将会自动关闭 `Drawer`。


## ARIA and Keyboard

| 键盘        | 说明                                       |
| :-------- | :--------------------------------------- |
| esc       | 按下ESC键将会关闭dialog而不触发任何的动作                |
| tab       | 正向聚焦到任何可以被聚焦的元素， 在Dialog显示的时候，焦点始终保持在框体内 |
| shift+tab | 反向聚焦到任何可以被聚焦的元素，在Dialog显示的时候，焦点始终保持在框体内  |
