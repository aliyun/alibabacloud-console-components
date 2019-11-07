import React from 'react'
import StatusIndicator from '@alicloud/console-components-status-indicator'

export default () => {
  return (
    <div style={{ padding: '24px' }}>
      <div>
        <StatusIndicator type="success" shape="dot">
          正常
        </StatusIndicator>
      </div>
      <div>
        <StatusIndicator type="warning" shape="dot">
          警告
        </StatusIndicator>
      </div>
      <div>
        <StatusIndicator type="error" shape="dot">
          异常
        </StatusIndicator>
      </div>
      <div>
        <StatusIndicator type="disabled" shape="dot">
          禁用
        </StatusIndicator>
      </div>
      <div>
        <StatusIndicator type="loading" shape="dot">
          启动
        </StatusIndicator>
      </div>
    </div>
  )
}
