import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useContext,
} from 'react'
import { Card, Grid, Balloon, Icon } from '@alicloud/console-components'
import styled from 'styled-components'
import _ from 'lodash'
import createCodesandbox from './createCodesandbox'
import HeaderWithAnchor from './HeaderWithAnchor'
import { docMetaCtx } from './MdxWrapper'

const { Row } = Grid

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
  height: 520px;
  max-height: 520px;
  overflow: hidden;
  transition: max-height 0.7s;
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

const generateIframeSrc = projMeta => (sandboxId: string) =>
  `https://codesandbox.io/embed/${sandboxId}?fontsize=14&codemirror=1${
    projMeta.onlyEditor ? '&view=editor' : '&view=split'
  }&module=${prependSlash(projMeta.entryPath)}`

const isSSR = typeof window === 'undefined'

interface IProps {
  demoInfo: {
    [fileName: string]: string
  }
  DemoComponent:
    | React.ComponentType
    | null
    | Promise<{ default: React.ComponentType }>
  demoMeta?: {
    zhName?: string
    zhDesc?: string
  }
}

/**
 * 当用户配置了bundleDemo: true时，DemoComponent即为用户写的Demo组件；
 * 当用户配置了bundleDemo: false时，DemoComponent为null；
 * 当用户配置了bundleDemo: "async"（默认值）时，DemoComponent为`Promise<{default: React.ComponentType}>`(可以用于React.lazy)；
 *
 * demoInfo始终为demo的文件信息，可以console.log查看。
 */
const DemoRenderer: React.FC<IProps> = ({
  demoInfo,
  DemoComponent,
  demoMeta,
}) => {
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

  const docMetaCtxVal = useContext(docMetaCtx)
  if (docMetaCtxVal.pkgInfo) {
    const {
      prodPkgName,
      actualLoadPkgName,
      actualLoadPkgVersion,
    } = docMetaCtxVal.pkgInfo
    const pkgJson = JSON.parse(demoInfo['package.json'])
    pkgJson.dependencies[actualLoadPkgName] = actualLoadPkgVersion

    const alias = pkgJson.alias || {}
    alias[prodPkgName] = actualLoadPkgName
    pkgJson.alias = alias
    demoInfo['package.json'] = JSON.stringify(pkgJson, null, 2)
  }

  const [iframeSrc, setIframeSrc] = useState<string | null>(null)
  const [isShowingIframe, setIsShowingIframe] = useState(false)

  const showIframe = useCallback(() => {
    setIsShowingIframe(true)
    if (!iframeSrc) {
      const projMeta = JSON.parse(demoInfo['demoMeta.json'])
      createCodesandbox(demoInfo)
        .then(generateIframeSrc(projMeta))
        .then(setIframeSrc)
    }
  }, [demoInfo, iframeSrc])

  useEffect(() => {
    // 无Demo组件可渲染，直接渲染codesandbox
    if (demoCompInfo.demoType === 'notBundled') showIframe()
    // eslint-disable-next-line
  }, [])

  const domRef = useRef<null | HTMLDivElement>(null)

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
    if (docMetaCtxVal.mode === 'local-dev') {
      return (
        <Balloon
          trigger={<SIcon />}
          closable={false}
          followTrigger
          popupContainer={() => domRef.current || document.body}
          popupStyle={{
            width: '480px',
            textAlign: 'center',
          }}
        >
          本地开发模式下不支持codesanbox预览， <br />
          因为codesandbox需要npm包的存在。 <br />
          请在“预发模式”下预览codesanbox。
        </Balloon>
      )
    }
    if (isShowingIframe) {
      // codesanbox已创建好
      if (iframeSrc) {
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
            followTrigger
            popupContainer={() => domRef.current || document.body}
            closable={false}
            popupStyle={{
              width: '180px',
              textAlign: 'center',
            }}
          >
            收起codesandbox
          </Balloon>
        )
      }
      // codesanbox还没创建好
      return null
    }
    return (
      <Balloon
        trigger={<SIcon onClick={showIframe} />}
        closable={false}
        followTrigger
        popupContainer={() => domRef.current || document.body}
        popupStyle={{
          width: '180px',
          textAlign: 'center',
        }}
      >
        在codesandbox中打开
      </Balloon>
    )
  })()

  const demoMetaView = (() => {
    if (!demoMeta) return null
    return (
      <div>
        {demoMeta.zhName && (
          <HeaderWithAnchor level={3} id={demoMeta.zhName}>
            {demoMeta.zhName}
          </HeaderWithAnchor>
        )}
        {demoMeta.zhDesc && <p>{demoMeta.zhDesc}</p>}
      </div>
    )
  })()

  return (
    <div ref={domRef}>
      {demoMetaView}
      <CustomCard contentHeight="auto">
        {renderDemo}
        <SIframeCtn hiding={!isShowingIframe}>
          {iframeSrc && <hr />}
          {iframeSrc && <SIframe {...iFramePreset} src={iframeSrc} />}
        </SIframeCtn>
        <hr />
        <Row justify="center">{iframeController}</Row>
      </CustomCard>
    </div>
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
