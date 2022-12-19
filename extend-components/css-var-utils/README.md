# @alicloud/css-var-utils

css-var-utils 帮助你管理 css-var 的 fallback value，生成的代码类似于`background-color: var(--btn-bg-color, #ccc)`。因此组件使用者可以通过定义`--btn-bg-color`来覆盖这个颜色。

css-var-utils 帮助你使用 Typescript 来定义、扩展、使用 Css Variables 主题：

- **定义**一套【css-var 主题】，其中包含 css-var 的名称、默认值、描述
- **覆盖**【css-var 主题】中的默认值，得到一套新的主题
  - 比如原本的 【css-var 主题】是一套亮色主题，你可以通过覆盖其中的默认值，扩展出一套暗色主题的变量定义
- 在 js（如styled-components） 中 **使用**【css-var 主题】中的变量
- 多主题 UI 组件的开发：
  - 组件提供者可以定义多套主题变量，给消费者选择
  - 组件消费者可以选择自己需要的主题
  - 最终的变量生效顺序是：运行时主题变量的实际值`--primary-color` > 组件消费者选择的主题中的变量默认值 > 组件提供者选择的主题中的变量默认值
- 最终为变量使用所生成的代码类似于`color: var(--primary-color, <<default value from theme>>)`。因此这个变量依然可以感知到环境的 css-var，环境可以通过`--primary-color`来动态改变这个颜色（发挥 css-var 的动态性）
  - 我们也会允许变量使用者关闭 css-var 的动态性

好处：

- 规范地定义、维护样式变量
  - 提高代码可维护性，并且有优秀的 Typescript 支持，下面会介绍
  - 有了规范，未来就可以通过可视化的方式配置主题中的各种变量，轻松定制主题
- 只需要在一个地方维护 css-var 的默认值，而不需要在每次使用 css-var 的时候都编写默认值
  - 过去，如果你在多个地方都使用了`var(--primary-color, #005AA5)`这个变量，你需要在每次使用的时候都带上后面的默认值`#005AA5`
  - 使用 css-var-utils 以后，这个默认值只维护在主题定义的地方，在使用变量的时候会自动帮你加上默认值
- css-var-utils 能够充分受益于 Typescript 类型检查：
  - 你在对主题变量进行覆盖、使用的时候，能享受到 **css-var 名称补全和检查**
    - css-var 的名称一般很长，容易写错。因此名称补全和检查能够提高开发效率、减少 bug
  - Typescript 能够汇总对同一个 css-var 的所有引用，因此支持：
    - 跳转到定义
    - Find All References: 找到某个 css-var 在哪里被定义、覆盖、使用，并且快速跳转到对应代码
    - 一键重命名 css-var

使用场景：
让你的 UI 组件支持多种主题（比如亮/暗色）。提高主题变量的维护效率。

TODO:

- 通过脚本，将 fusion 的 css-var 转化成形式化的定义，从而我们在使用 fusion 的 css var 的时候，能够获得上述好处
