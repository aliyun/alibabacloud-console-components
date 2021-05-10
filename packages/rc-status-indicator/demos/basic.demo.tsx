/**
* @title basic
*/

import React from 'react'
import StatusIndicator from '@alicloud/console-components-status-indicator'

export default () => {
  return (
    <div style={{ padding: '24px' }}>
      <div>
        <StatusIndicator>default</StatusIndicator>
      </div>
      <div>
        <StatusIndicator type="success">Success</StatusIndicator>
      </div>
      <div>
        <StatusIndicator type="warning">Warning</StatusIndicator>
      </div>
      <div>
        <StatusIndicator type="error">Error</StatusIndicator>
      </div>
      <div>
        <StatusIndicator type="disabled">Disabled</StatusIndicator>
      </div>
      <div>
        <StatusIndicator type="loading">Loading</StatusIndicator>
      </div>
    </div>
  )
}
