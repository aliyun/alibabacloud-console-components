/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState, useEffect } from 'react'
import { Card } from '@alicloud/console-components'
import styled from 'styled-components'

import DemoRenderer from './DemoRenderer'
import DemoDetailController from './DetailController'
import DemoMeta from './DemoMeta'

export interface IDemoInfo {
  // 用户在demo模块export default Demo组件，我们在这里拿到
  default: React.ComponentType
  // demoFiles是demoPlugin收集到的demo源码，用于创建codesandbox
  __demoSrcInfo: {
    entry: 'string'
    modules: {
      [modulesName: string]: string
    }
    externals: {
      [name: string]: string
    }
  }
  // demoMeta是用户在单个demo中标注的元数据，比如demo名称、描述
  // 比如 https://github.com/aliyun/console-components/blob/1f49c01dec47853987fd3d7c413c9b7360bfc3df/packages/component/src/components/table/demo/demo6.js#L43
  demoMeta?: {
    zhName?: string
    zhDesc?: string
  }
  disableCodesandbox?: boolean
}

type IProps = {
  demoInfo: Promise<IDemoInfo> | IDemoInfo
}

const Demo: React.FC<IProps> = ({ demoInfo: demoInfoOrPromise }) => {
  debugger
  // docMeta是对整个markdown文档标注的元数据
  // const docMetaCtxVal = useDocMetaCtx()

  const demoInfo = useDemoInfo(demoInfoOrPromise)
  // const demoDetail = useDemoDetails()

  if (!demoInfo) {
    return <CustomCard>Loading...</CustomCard>
  }

  return (
    <div>
      <DemoMeta demoInfo={demoInfo} />
      <CustomCard>
        <DemoRenderer demoInfo={demoInfo} />
        <hr />
        <DemoDetailController demoInfo={demoInfo} />
      </CustomCard>
    </div>
  )
}

export default Demo

const CustomCard = styled(Card)`
  && {
    display: inline-block;
    width: 100%;
    margin-bottom: 32px;
    margin-left: 2px;
    overflow: visible;
    > .next-card-body {
      > .next-card-content {
        overflow: visible;
      }
    }
  }
`

function useDemoInfo(demoInfoOrPromise: Promise<IDemoInfo> | IDemoInfo) {
  // null 表示demo信息尚未加载
  const [demoInfo, setDemoInfo] = useState<IDemoInfo | null>(null)

  useEffect(() => {
    ;(async () => {
      const demoInfoBeforeProcess = await demoInfoOrPromise
      setDemoInfo(demoInfoBeforeProcess)
    })()
  }, [demoInfoOrPromise])

  return demoInfo
}
