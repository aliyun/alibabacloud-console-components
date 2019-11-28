---
name: component-1
zhName: 组件1
---

# 组件 1

组件说明

## 代码块示例

```javascript
import Page from "@alicloud/console-components-page";
import { Link } from "dva/router";

const { Breadcrumb, Header } = Page;

const breadcrumb = (
  <Breadcrumb>
    <Breadcrumb.Item key="home">
      <Link to="/home">首页</Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item key="list">
      <Link to="/list">列表</Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item key="detail">详情</Breadcrumb.Item>
  </Breadcrumb>
);

const Detail = () => (
  <Page>
    <Header breadcrumb={breadcrumb} title="详情" />
  </Page>
);
```

### 组件 DEMO

[MDXInstruction:importDemo:WithMenuDemo](./stories/basic.tsx)
