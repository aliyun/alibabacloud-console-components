import { HybridCloudLightTheme as MenuTheme } from '@alicloud/console-components-console-menu'
import { HybridCloudLightTheme } from '@alicloud/console-components-app-layout'

import Basic from '../basic/basic2'

import React from 'react'

interface IProps {}

const Demo: React.FC<IProps> = (props) => {
  return (
    <HybridCloudLightTheme>
      <MenuTheme>
        <Basic />
      </MenuTheme>
    </HybridCloudLightTheme>
  )
}

export default Demo
