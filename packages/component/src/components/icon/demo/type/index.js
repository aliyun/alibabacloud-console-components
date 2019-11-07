import React from 'react'
import { Icon } from '@alicloud/console-components'
import './index.less'

const types = [
  'smile',
  'cry',
  'success',
  'warning',
  'prompt',
  'error',
  'help',
  'clock',
  'success-filling',
  'delete-filling',
  'favorites-filling',
  'add',
  'minus',
  'arrow-up',
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'arrow-double-left',
  'arrow-double-right',
  'switch',
  'sorting',
  'descending',
  'ascending',
  'select',
  'semi-select',
  'loading',
  'search',
  'close',
  'ellipsis',
  'picture',
  'calendar',
  'ashbin',
  'upload',
  'download',
  'set',
  'edit',
  'refresh',
  'filter',
  'attachment',
  'account',
  'email',
  'atm',
]

const makeIcon = (type) => (
  <li key={`icon-type-${type}`}>
    <div className="icon-item">
      <div className="icon-content">
        <Icon type={type} />
      </div>
      <div className="icon-name">{type}</div>
    </div>
  </li>
)

const TypeDemo = () => (
  <div>
    <ul className="icon-demo-type-list">
      {
        types.map(makeIcon)
      }
    </ul>
  </div>
)

export default TypeDemo
