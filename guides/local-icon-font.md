---
name: local-icon-font
zhName: Icon字体本地化
sort: 5
---

# icon 字体本地化

## 字体加载原理

简单来说，console-components 渲染 icon 的原理如下：

```scss
$icon-font-path: '//at.alicdn.com/t/font_1435786_yq5p1277dwo';
// 请到以下页面搜索"$icon-font-path"，来得到最新的icon地址：
// https://www.unpkg.com/browse/@alicloud/console-components/lib/_/fetched-files/variables.scss

// 定义字体文件的加载路径
@font-face {
  font-family: NextIcon;
  src: url('#{$icon-font-path}.eot');
  src: url('#{$icon-font-path}.eot?#iefix') format('embedded-opentype'), url('#{$icon-font-path}.woff2')
      format('woff2'), url('#{$icon-font-path}.woff') format('woff'), url('#{$icon-font-path}.ttf')
      format('truetype'), url('#{$icon-font-path}.svg#NextIcon') format('svg');
}

.next-icon {
  font-family: NextIcon;
  .next-icon-loading:before {
    // 渲染字体文件中的某个字符，就有了icon的形状
    content: '\e646';
  }
}
```

因此，如果你的用户处于内网环境，无法从 at.alicdn.com 下载到字体文件时，icon 就展示不出来。

## 解决方案

### 如果你无法使用 scss

如果你无法使用 scss，解决办法是：

1. 开发期间，开发者根据上面的路径拼接逻辑，得到下载路径`at.alicdn.com/t/font_1435786_yq5p1277dwo.eot`，将字体文件文件下载下来，然后自己将这个文件部署到内网能访问的路径。假设你部署的路径为`my-company.com/font_file.eot`。
2. 在项目入口引入不带 NextIcon 字体声明的样式：`import '@alicloud/console-components/dist/wind-without-icon-font.css'`（而不是普通的`@alicloud/console-components/dist/wind.css`）。
   > 这个版本的 css 除了不带`@font-face { font-family: NextIcon; ... }`声明以外，其它地方与普通的`wind.css`完全相同。
3. 编写以下 css，定义 NextIcon 字体，使 icon 组件加载你部署的字体。

```css
@font-face {
  font-family: NextIcon;
  src: url('//my-company.com/font_file.eot');
}
```

### 如果你可以使用 scss

如果你的构建工具支持 scss，解决办法是：

1. 开发期间，开发者根据上面的路径拼接逻辑，得到下载路径`at.alicdn.com/t/font_1435786_yq5p1277dwo.eot`，将字体文件文件下载下来，然后自己将这个文件部署到内网能访问的路径。假设你部署的路径为`my-company.com/font_file.eot`。
2. 编写以下 scss，使 icon 组件加载你的字体。

```scss
// 注意不要加字体文件后缀名
$icon-font-path: '//my-company.com/font_file';
// 引入scss格式的样式包
// 引入scss以后无需再引入`@alicloud/console-components/dist/wind.css`！
@import '~@alicloud/console-components/index.scss';
```
