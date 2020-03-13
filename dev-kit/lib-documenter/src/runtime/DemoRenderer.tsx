import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react'
import { Card, Grid, Balloon, Icon } from '@alicloud/console-components'
import styled from 'styled-components'
import _ from 'lodash'
import createCodesandbox from './createCodesandbox'
import HeaderWithAnchor from './HeaderWithAnchor'
import { useDocMetaCtx } from './utils/context'

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

interface IDemoInfo {
  // 用户在demo模块export default Demo组件，我们在这里拿到
  default: React.ComponentType
  // _demoSrcFiles是demoPlugin收集到的demo源码，用于创建codesandbox
  _demoSrcFiles: {
    [fileName: string]: string
  }
  // demoMeta是用户在单个demo中标注的元数据，比如demo名称、描述
  // 比如 https://github.com/aliyun/console-components/blob/1f49c01dec47853987fd3d7c413c9b7360bfc3df/packages/component/src/components/table/demo/demo6.js#L43
  demoMeta?: {
    zhName?: string
    zhDesc?: string
  }
}

type IProps = {
  demoInfo: Promise<IDemoInfo> | IDemoInfo
}

const DemoRenderer: React.FC<IProps> = ({ demoInfo: demoInfoOrPromise }) => {
  // docMeta是对整个markdown文档标注的元数据
  const docMetaCtxVal = useDocMetaCtx()

  const [demoInfo, setDemoInfo] = useState<IDemoInfo | null>(null)

  useEffect(() => {
    // 异步加载的demo
    if (isPromiseLike(demoInfoOrPromise)) {
      demoInfoOrPromise.then(demoInfo => {
        setDemoInfo(fixDemoPkgJson(demoInfo))
      })
    } else {
      // 同步加载的demo
      setDemoInfo(fixDemoPkgJson(demoInfoOrPromise))
    }

    function fixDemoPkgJson(demoInfo) {
      const demoSrcFiles = (() => {
        // 修改demo的package.json，让codesandbox正确解析依赖：
        // 将demo中的import xxx from '${prodPkgName}' 解析到
        // actualLoadPkgName的actualLoadPkgVersion版本
        if (docMetaCtxVal.pkgInfo) {
          const {
            prodPkgName,
            actualLoadPkgName,
            actualLoadPkgVersion,
          } = docMetaCtxVal.pkgInfo
          const pkgJson = JSON.parse(demoInfo._demoSrcFiles['package.json'])
          pkgJson.dependencies[actualLoadPkgName] = actualLoadPkgVersion

          const alias = pkgJson.alias || {}
          alias[prodPkgName] = actualLoadPkgName
          pkgJson.alias = alias
          return {
            ...demoInfo._demoSrcFiles,
            'package.json': JSON.stringify(pkgJson, null, 2),
          }
        }
        return demoInfo._demoSrcFiles
      })()
      return {
        ...demoInfo,
        _demoSrcFiles: demoSrcFiles,
      }
    }
  }, [])

  // 通过codesandbox API来上传demo，得到iframe的URL
  // https://codesandbox.io/docs/importing#define-api
  // null表示无上传或上传尚未成功
  const [iframeSrc, setIframeSrc] = useState<string | null>(null)
  // 用户toggle demo区域的状态
  const [isShowingIframe, setIsShowingIframe] = useState(false)

  const showIframe = useCallback(() => {
    // demo还没有加载好
    if (!demoInfo) return
    setIsShowingIframe(true)
    if (!iframeSrc) {
      const projMeta = JSON.parse(demoInfo._demoSrcFiles['demoMeta.json'])
      createCodesandbox(demoInfo._demoSrcFiles)
        .then(generateIframeSrc(projMeta))
        .then(setIframeSrc)
    }
  }, [demoInfo, iframeSrc])

  const domRef = useRef<null | HTMLDivElement>(null)

  const renderDemo = (() => {
    if (!demoInfo) {
      return <div>Loading demo...</div>
    }
    const DemoComponent = demoInfo.default
    return <DemoComponent />
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
    if (!demoInfo || !demoInfo.demoMeta) return null
    const demoMeta = demoInfo.demoMeta
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
