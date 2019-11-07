import React, { useState, useCallback } from 'react'
import { Card, Grid, Balloon } from '@alicloud/console-components'
import styled from 'styled-components'
import createCodesandbox from '@siteBuildTools/createCodesandbox'

const { Row, Col } = Grid

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

function generateIframeData(sandboxId: string) {
  const url = `https://codesandbox.io/embed/${sandboxId}?fontsize=14`
  return {
    src: url,
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
}

const DemoRenderer: React.FC<any> = ({ demoInfo, DemoComponent }) => {
  // console.log(demoInfo, DemoComponent)
  const [iframeData, setIframeData] = useState<any>(null)
  const showIframe = useCallback(() => {
    createCodesandbox(demoInfo)
      .then(generateIframeData)
      .then(setIframeData)
  }, [demoInfo])

  return (
    <CustomCard contentHeight="auto">
      <DemoComponent />
      <hr />

      {iframeData ? (
        <iframe title="test" {...iframeData} />
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
