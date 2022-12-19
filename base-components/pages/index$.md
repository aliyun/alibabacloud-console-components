---
title: 开发环境说明
---

# 开发环境说明

这是组件的本地开发环境。你可以开发用例将组件的 demo 目录下，这个目录下的每个 tsx/jsx/mdx 会成为一个页面。

在 demo 中，你可以 `import {xxx} from '@alicloudfe/components'`，从用户的视角来 import 组件库，而不应该用相对路径，以便我们将 demo 通过文档透出给用户。`@alicloudfe/components`会被映射到`src/index.ts`
