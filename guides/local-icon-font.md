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
2. 编写以下 css，使 icon 组件加载你的字体。

```css
@font-face {
  font-family: MyIconFont;
  src: url('//my-company.com/font_file.eot');
}
.next-icon {
  font-family: MyIconFont;
}
```

### 如果你可以使用 scss

如果你可以使用 scss，解决办法是：

1. 开发期间，开发者根据上面的路径拼接逻辑，得到下载路径`at.alicdn.com/t/font_1435786_yq5p1277dwo.eot`，将字体文件文件下载下来，然后自己将这个文件部署到内网能访问的路径。假设你部署的路径为`my-company.com/font_file.eot`。
2. 编写以下 scss，使 icon 组件加载你的字体。

```scss
// 注意不要加字体文件后缀名
$icon-font-path: '//my-company.com/font_file';
// 引入scss格式的样式包
@import '~@alicloud/console-components/index.scss';
```

无需重复引入 【@alicloud/console-components/dist/**wind.css**】 ！
