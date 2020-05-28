/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState, useEffect } from 'react'
import { Grid, Balloon, Icon } from '@alicloud/console-components'
import styled from 'styled-components'

import type { IDemoInfo } from './index'
import { renderCodesandboxDetail } from './CodesandboxDetail'
// import { useDocMetaCtx } from '../utils/context'

const { Row } = Grid

interface IProps {
  demoInfo: IDemoInfo
}

const DemoDetailController: React.FC<IProps> = ({ demoInfo }) => {
  const [isShowing, setIsShowing] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  const [details, setDetails] = useState<React.ReactNode | null>(null)

  // const docMetaCtxVal = useDocMetaCtx()

  useEffect(() => {
    if (isShowing && !details && !isFetching) {
      setIsFetching(true)
      renderCodesandboxDetail(demoInfo).then((ui) => {
        setDetails(ui)
        setIsFetching(false)
      })
    }
  }, [demoInfo, details, isFetching, isShowing])

  const controllerButton = (() => {
    if (!isShowing) {
      return buttonWithBalloon({
        children: '在codesandbox中打开',
        trigger: <SCodesandboxIcon onClick={() => setIsShowing(true)} />,
      })
    }
    return buttonWithBalloon({
      children: '收起codesandbox',
      trigger: <SArrowIcon onClick={() => setIsShowing(false)} />,
    })
  })()

  return (
    <div>
      <SDemoDetailCtn hiding={!isShowing}>{details}</SDemoDetailCtn>
      {isShowing && <hr />}
      <Row justify="center" key={String(isShowing)}>
        {controllerButton}
      </Row>
    </div>
  )
}

export default DemoDetailController

const SCodesandboxIcon = styled(({ disabled, ...restProps }) => (
  <div {...restProps} />
))`
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
  ${({ disabled }) => (disabled ? 'cursor: disabled;' : '')}
`

const SArrowIcon = styled((props: React.ComponentProps<typeof Icon>) => (
  <Icon size="xs" type="arrow-up" {...props} />
))`
  cursor: pointer;
`

const SDemoDetailCtn = styled.div<{ hiding?: boolean }>`
  width: 100%;
  height: 520px;
  max-height: 520px;
  overflow: hidden;
  transition: max-height 0.7s;
  ${({ hiding }) => (hiding ? `max-height: 0;` : '')}
`

function buttonWithBalloon(props: React.ComponentProps<typeof Balloon>) {
  return <SBalloon closable={false} followTrigger {...props} />
}

const SBalloon = styled(Balloon)`
  width: 180px;
  text-align: center;
`
