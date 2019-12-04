import React, { useState, useCallback, useEffect } from 'react'
import { Card, Grid, Balloon } from '@alicloud/console-components'
import styled from 'styled-components'
import createCodesandbox from './createCodesandbox'

const { Row } = Grid

const CustomCard = styled(Card)`
  display: inline-block;
  width: 1000px;
  margin-bottom: 32px;
  margin-left: 2px;
  & > .next-card-body {
    & > .next-card-content {
      overflow: visible;
    }
    /* & > .next-card-footer {
      display: none;
    } */
  }
`

const Icon = styled.div`
  float: right;
  margin-left: 12px;
  width: 20px;
  height: 20px;
  overflow: hidden;
  text-indent: -9999px;
  ${`background: transparent url(https://gw.alipayobjects.com/zos/rmsportal/aaYmtdDyHSCkXyLZVgGK.svg) center / 14px no-repeat;`}
  border: 0;
  cursor: pointer;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
`

const iFrameProps = {
  style: {
    width: '950px',
    height: '500px',
    border: 0,
    borderRadius: '4px',
    overflow: 'hidden',
  },
  sandbox:
    'allow-modals allow-forms allow-popups allow-scripts allow-same-origin',
}

const generateIframeData = demoMeta => (sandboxId: string) => {
  const url = `https://codesandbox.io/embed/${sandboxId}?fontsize=14&codemirror=1${
    demoMeta.onlyEditor ? '&view=editor' : ''
  }&module=${prependSlash(demoMeta.entryPath)}`
  return {
    src: url,
  }
}

const isSSR = typeof window === 'undefined'

const DemoRenderer: React.FC<any> = ({ demoInfo, DemoComponent }) => {
  const [{ hasDemoComp, AsyncDemoComp }] = useState(() => {
    // eslint-disable-next-line no-shadow
    const hasDemoComp = !!DemoComponent
    // eslint-disable-next-line no-shadow
    const AsyncDemoComp =
      hasDemoComp &&
      typeof DemoComponent.then === 'function' &&
      React.lazy(() => DemoComponent)
    return { hasDemoComp, AsyncDemoComp }
  })

  const [iframeData, setIframeData] = useState<any>(null)
  const demoMeta = JSON.parse(demoInfo['demoMeta.json'])
  const showIframe = useCallback(() => {
    createCodesandbox(demoInfo)
      .then(generateIframeData(demoMeta))
      .then(setIframeData)
  }, [demoInfo, demoMeta])
  // console.log(demoInfo, DemoComponent, iframeData, hasDemoComp, AsyncDemoComp)
  useEffect(() => {
    if (!hasDemoComp) showIframe()
    // eslint-disable-next-line
  }, [])

  if (!hasDemoComp) {
    return (
      <CustomCard contentHeight="auto">
        <iframe title="demo" {...iFrameProps} {...iframeData} />
      </CustomCard>
    )
  }

  const renderDemo = (() => {
    if (AsyncDemoComp && !isSSR) {
      return (
        <React.Suspense fallback={<div>Loading demo...</div>}>
          <AsyncDemoComp />
        </React.Suspense>
      )
    }
    // SSR环境不要渲染Suspense，Suspense目前不支持SSR
    return null
  })()

  return (
    <CustomCard contentHeight="auto">
      {renderDemo}
      <hr />
      {iframeData ? (
        <iframe title="demo" {...iFrameProps} {...iframeData} />
      ) : (
        <Row justify="center">
          <Balloon trigger={<Icon onClick={showIframe} />} closable={false}>
            在codesandbox中打开
          </Balloon>
        </Row>
      )}
    </CustomCard>
  )
}

export default DemoRenderer

function prependSlash(path: string) {
  if (path[0] === '/') return path
  return `/${path}`
}
