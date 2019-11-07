import React from 'react'
import { Icon } from '@alicloud/console-components'
import './index.less'

const size = [
  'small',
  'medium',
  'large',
]

const makeIcon = (size) => (
  <li key={`icon-size-${size}`}>
    <div className="icon-item">
      <div className="icon-content">
        <Icon
          type="smile"
          size={size}
        />
      </div>
      <div className="icon-name">{size}</div>
    </div>
  </li>
)

const SizeDemo = () => (
  <div>
    <ul className="icon-demo-size-list">
      {
        size.map(makeIcon)
      }
    </ul>
  </div>
)

export default SizeDemo
