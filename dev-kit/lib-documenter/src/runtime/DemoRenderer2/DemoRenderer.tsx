import React from 'react'

import type { IDemoInfo } from './index'

interface IProps {
  demoInfo: IDemoInfo
}

const DemoRenderer: React.FC<IProps> = ({ demoInfo }) => {
  const Comp = demoInfo.default
  return <Comp />
}

export default DemoRenderer
