import React, { useState, useCallback, useEffect } from 'react'
import { Card, Grid, Balloon, Icon } from '@alicloud/console-components'
import styled from 'styled-components'
import _ from 'lodash'
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
  }
`

const SIcon = styled.div`
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

const SIframeCtn = styled.div<{ hiding?: boolean }>`
  width: 100%;
  height: 500px;
  max-height: 500px;
  overflow: hidden;
  transition: max-height 0.5s;
  ${({ hiding }) => (hiding ? `max-height: 0;` : '')}
`

const SIframe = styled.iframe`
  width: 100%;
  height: 500px;
  border: 0;
  border-radius: 4px;
`

const iFramePreset = {
  sandbox:
    'allow-modals allow-forms allow-popups allow-scripts allow-same-origin',
}

const generateIframeSrc = demoMeta => (sandboxId: string) =>
  `https://codesandbox.io/embed/${sandboxId}?fontsize=14&codemirror=1${
    demoMeta.onlyEditor ? '&view=editor' : ''
  }&module=${prependSlash(demoMeta.entryPath)}`

const isSSR = typeof window === 'undefined'

interface IProps {
  demoInfo: {
    [fileName: string]: string
  }
  DemoComponent:
    | React.ComponentType
    | null
    | Promise<{ default: React.ComponentType }>
}

/**
 * 当用户配置了bundleDemo: true（默认值）时，DemoComponent即为用户写的Demo组件；
 * 当用户配置了bundleDemo: false时，DemoComponent为null；
 * 当用户配置了bundleDemo: "async"时，DemoComponent为`Promise<{default: React.ComponentType}>`(可以用于React.lazy)；
 *
 * demoInfo始终为demo的文件信息，可以console.log查看。
 */
const DemoRenderer: React.FC<IProps> = ({ demoInfo, DemoComponent }) => {
  const [demoCompInfo] = useState(() => {
    if (isPromiseLike(DemoComponent)) {
      return {
        demoType: 'async',
        AsyncDemoComp: React.lazy(() => DemoComponent),
      } as const
    }
    if (!DemoComponent) {
      return {
        demoType: 'notBundled',
      } as const
    }
    return {
      demoType: 'bundled',
      DemoComp: DemoComponent,
    } as const
  })

  const [iframeSrc, setIframeSrc] = useState<string | null>(null)
  const [isShowingIframe, setIsShowingIframe] = useState(false)

  const showIframe = useCallback(() => {
    setIsShowingIframe(true)
    if (!iframeSrc) {
      const demoMeta = JSON.parse(demoInfo['demoMeta.json'])
      createCodesandbox(demoInfo)
        .then(generateIframeSrc(demoMeta))
        .then(setIframeSrc)
    }
  }, [demoInfo, iframeSrc])

  useEffect(() => {
    // 无Demo组件可渲染，直接渲染codesandbox
    if (demoCompInfo.demoType === 'notBundled') showIframe()
    // eslint-disable-next-line
  }, [])
  if (demoCompInfo.demoType === 'notBundled') {
    // 无Demo组件可渲染，直接渲染codesandbox
    return (
      <CustomCard contentHeight="auto">
        <SIframeCtn>
          <SIframe {...iFramePreset} {...iframeSrc} />
        </SIframeCtn>
      </CustomCard>
    )
  }

  const renderDemo = (() => {
    // 懒加载Demo
    if (demoCompInfo.demoType === 'async') {
      // SSR环境不要渲染Suspense，Suspense目前不支持SSR
      if (isSSR) return null
      return (
        <React.Suspense fallback={<div>Loading demo...</div>}>
          <demoCompInfo.AsyncDemoComp />
        </React.Suspense>
      )
    }
    return <demoCompInfo.DemoComp />
  })()

  const iframeController = (() => {
    if (isShowingIframe)
      if (iframeSrc)
        return (
          <Balloon
            trigger={
              <Icon
                size="xs"
                type="arrow-up"
                style={{
                  cursor: 'pointer',
                }}
                onClick={() => {
                  setIsShowingIframe(false)
                }}
              />
            }
            closable={false}
          >
            收起codesandbox
          </Balloon>
        )
      else return null
    return (
      <Balloon trigger={<SIcon onClick={showIframe} />} closable={false}>
        在codesandbox中打开
      </Balloon>
    )
  })()

  return (
    <CustomCard contentHeight="auto">
      {renderDemo}
      {iframeSrc && (
        <>
          {isShowingIframe && <hr />}
          <SIframeCtn hiding={!isShowingIframe}>
            <SIframe {...iFramePreset} src={iframeSrc} />
          </SIframeCtn>
        </>
      )}
      <hr />
      <Row justify="center">{iframeController}</Row>
    </CustomCard>
  )
}

export default DemoRenderer

function prependSlash(path: string) {
  if (path[0] === '/') return path
  return `/${path}`
}

function isPromiseLike(v: unknown): v is Promise<unknown> {
  return typeof _.get(v, 'then') === 'function'
}
