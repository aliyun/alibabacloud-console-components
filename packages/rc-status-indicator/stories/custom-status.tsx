import React from 'react'
import { Icon } from '@alicloud/console-components'
import StatusIndicator from '@alicloud/console-components-status-indicator'

export default () => {
  return (
    <div style={{ padding: '24px' }}>
      <h3>自定义状态-图标</h3>
      <div>
        <StatusIndicator
          icon={<Icon type="bell" size="xs" style={{ color: '#0070cc' }} />}
        >
          提醒
        </StatusIndicator>
      </div>
      <div>
        <StatusIndicator
          icon={<Icon type="eye" size="xs" style={{ color: 'blue' }} />}
        >
          注视
        </StatusIndicator>
      </div>
      <h3>自定义状态-圆点</h3>
      <div>
        <StatusIndicator dotStyle={{ background: '#0070cc' }}>
          提醒
        </StatusIndicator>
      </div>
      <div>
        <StatusIndicator dotStyle={{ background: 'pink' }}>
          提醒
        </StatusIndicator>
      </div>
    </div>
  )
}
