import { HybridCloudDarkTheme as MenuTheme } from '@alicloud/console-components-console-menu'
import { HybridCloudDarkTheme } from '@alicloud/console-components-app-layout'

import Basic from '../basic/basic2'

import React from 'react'

interface IProps {}

const Demo: React.FC<IProps> = (props) => {
  return (
    <HybridCloudDarkTheme>
      <MenuTheme>
        <Basic />
      </MenuTheme>
    </HybridCloudDarkTheme>
  )
}

export default Demo
