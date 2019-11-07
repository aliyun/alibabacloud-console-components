import React from 'react'
import StatusIndicator from '@alicloud/console-components-status-indicator'

export default () => {
  return (
    <div style={{ padding: '24px' }}>
      <div>
        <StatusIndicator type="success" shape="icon" iconType="smile">
          正常
        </StatusIndicator>
      </div>
      <div>
        <StatusIndicator type="warning" shape="icon" iconType="cry">
          警告
        </StatusIndicator>
      </div>
      <div>
        <StatusIndicator type="error" shape="icon" iconType="cry-fill">
          异常
        </StatusIndicator>
      </div>
      <div>
        <StatusIndicator type="disabled" shape="icon" iconType="eye-slash">
          禁用
        </StatusIndicator>
      </div>
      <div>
        <StatusIndicator type="loading" shape="icon" iconType="poweroff">
          启动
        </StatusIndicator>
      </div>
    </div>
  )
}
