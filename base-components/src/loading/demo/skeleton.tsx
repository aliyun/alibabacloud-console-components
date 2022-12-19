/**
 * @title 骨架屏
 */

import React from 'react'
import { Skeleton } from '@alicloudfe/components'

interface IProps {}

const Demo: React.FC<IProps> = (props) => {
  return (
    <div>
      <div style={{ width: 400 }}>
        <Skeleton count={5} />
      </div>
      <p>
        本骨架屏组件导出自
        <a
          href="https://www.npmjs.com/package/react-loading-skeleton"
          target="_blank"
        >
          react-loading-skeleton
        </a>
        ，更多用法请查阅它的文档。
      </p>
    </div>
  )
}

export default Demo
