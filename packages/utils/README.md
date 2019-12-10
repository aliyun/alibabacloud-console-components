# console-components-utils

## 用法

apiClient

```js
import { createApiClient } from '@alicloud/console-components-utils'

export default createApiClient({
  ignoreError: false,
  riskOptions: {
    code: {
      success: '200',
      doubleConfirm: 'FoundRiskAndDoubleConfirm',
      forbidden: 'FoundRiskAndTip',
      verifyCodeInvalid: 'verifyCodeInvalid',
    },
    url: {
      generateVerificationCode: '/risk/sendVerifyMessage.json',
      setVerificationMethod: 'https://account.console.aliyun.com/#/secure',
      changeVerificationMethod: 'https://account.console.aliyun.com/#/secure',
      bindMobileHelp: 'https://account.console.aliyun.com',
    },
  }
})
```


Class Component

```
import React, { Component } from 'react'
import apiClient from './apiClient

export default class extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    // single Api
    apiClient.request(
      'ecs', 
      'getInstances', 
      { RegionId: 'cn-hangzhou'}
    ).then((res) => {
      this.setState({ data: res.data })
    }).catch((error) => {
      alert(error.message)
    })
    // multi Api
    apiClient.request(
      'ecs', 
      [
        {
          action: 'getInstance',
          customKey: 'ecs-instance-1',
          params: { InstanceId: 'ecs-instance-1'}
        },
        {
          action: 'getInstance',
          customKey: 'ecs-instance-2',
          params: { InstanceId: 'ecs-instance-2'}
        },
      ],
    ).then((res) => {
      this.setState({ data: res.data })
    }).catch((error) => {
      alert(error.message)
    })
  }

  render() {
    return (
      <ul>
        {
          data.map(instance => (
            <li key={instance.id}>{instance.name}</li>
          ))
        }
      </ul>
    )
  }
}
```

## API

### 创建 Api Client， 返回请求方法。

`apiClient = createApiClient(opts)`

`opts` 包含：

- `ignoreError?: boolean`：是否忽略报错，设置为 `true` 时，当 response 中 code 为非 200 的值时，也当做正常数据返回。
- `risk`：风控配置。

###  请求 API

`apiClient.request(product, action, params, opts)`


```js
import {
  createApiClient,
  getConsoleConfig,
  getGlobalVariable,
  getLocale,
  getUmid,
  getActiveRegionId,
  getCollina,
  getRiskInfo,
  getSecToken,
} from '@alicloud/console-components-utils

```