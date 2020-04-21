import React from 'react'
import type { IDemoInfo } from './index'
import HeaderWithAnchor from '../HeaderWithAnchor'

interface IProps {
  demoInfo: IDemoInfo
}
const DemoMeta: React.FC<IProps> = ({ demoInfo }) => {
  if (!demoInfo || !demoInfo.demoMeta) return null
  const { demoMeta } = demoInfo
  return (
    <div>
      {demoMeta.zhName && (
        <HeaderWithAnchor level={3} id={demoMeta.zhName} className="cc-doc-toc">
          {demoMeta.zhName}
        </HeaderWithAnchor>
      )}
      {demoMeta.zhDesc && <p>{demoMeta.zhDesc}</p>}
    </div>
  )
}

export default DemoMeta
