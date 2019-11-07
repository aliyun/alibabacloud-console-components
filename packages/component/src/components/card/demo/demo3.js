import React from 'react'
import { Card } from '@alicloud/console-components'
import'./demo3.less'

const Demo3 = () => (
  <Card className="image-card" contentHeight="auto">
    <img src="https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png" alt="father day" />
    <div className="custom-card">
      <h3>Father's Day</h3>
      <p>Thank you, papa</p>
    </div>
  </Card>
);

export default Demo3
