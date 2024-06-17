# @alicloud/eslint-config-console-components

见[项目 eslint 配置收敛](https://yuque.antfin-inc.com/docs/share/57ccebfa-435a-4485-b474-6348fed4c240#eslint)。

此项目管理以下配置：

- eslint 相关的 npm 包依赖。比如依赖于哪个版本的 eslint-config-airbnb、eslint-plugin-jest 等。用户项目安装 eslint-config-wind 的时候会自动安装这些依赖。并且用户项目的 package.json 中不需要指定这些依赖。这样，我们可以统一管理 eslint、eslint-plugin-jest 等 npm 包的升级。
- eslint 配置。`@alicloud/eslint-config-console-components`提供了 wind 组件开发时的 eslint 配置。`@alicloud/eslint-config-console-components/test-ts`提供了 wind 组件测试时的配置。

## 使用方式

1. 安装：

```js
npm install -D @alicloud/eslint-config-console-components eslint
```

eslint 是 peerDependencies，用户需要自行安装。用户不再需要主动安装 eslint-plugin-react 这些**配置包**。

2. 在项目根目录添加普通配置`/.eslintrc.json`：

```json
{
  "root": true,
  "extends": ["@alicloud/eslint-config-console-components"]
}
```

如果你不想在根目录增加配置文件`/.eslintrc.json`的话，可以将配置放在`package.json`中：

```json
"eslintConfig": {
  "extends": "@alicloud/eslint-config-console-components"
}
```

3. 如果有测试的话，在测试目录添加测试专用配置`/tests/.eslintrc.json`：

```json
{
  "root": true,
  "extends": ["@alicloud/eslint-config-console-components/test-ts"]
}
```

> [eslint 会不断向上查找配置（即使已经找到配置），直到根路径](https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy)，然后将所有找到的配置按照顺序合并成最终配置。使用`"root": true`是为了告诉 eslint 不要再继续向上查找了。你可以自己决定需不需要这个选项。
