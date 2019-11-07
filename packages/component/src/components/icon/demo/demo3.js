import React from 'react'
import { Icon } from '@alicloud/console-components'
import './demo3.less'

const sizes = ['xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl']

const Demo3 = () => (
  <ul className="icon-sizes">
    {sizes.map((size, index) => (
      <li key={index}>
        <Icon type="smile" size={size} />
        <span>{size}</span>
      </li>))}
  </ul>
)

export default Demo3