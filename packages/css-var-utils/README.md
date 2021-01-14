# @alicloud/css-var-utils

Define your theme with CSS custom properties (CSS variables). Describe your theme variables in js.

避免在 styled-components 中多次重复编写 fallback value 。

一个 cssvar 名称（比如--btn-bg-color），可能在多套主题都有不同的定义（比如亮暗色）。css-var-utils 帮助你定义这些主题。ts 类型支持：在输入 cssvar 名称的时候有类型补全，写错的时候有类型报错，避免 cssvar 名称写错。

css-var-utils 帮助你管理 css-var 的 fallback value，生成的代码类似于`background-color: var(--btn-bg-color, #ccc)`。因此组件使用者可以通过定义`--btn-bg-color`来覆盖这个颜色。
