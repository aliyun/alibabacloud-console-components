/**
 * @title 列间距
 * @description 列与列间距默认为0，可以通过设置 `Row` 的 `gutter` 属性来改变列间距。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Range, Grid } from '@alicloudfe/components'

const { Row, Col } = Grid

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      gutter: 0
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(gutter) {
    this.setState({
      gutter
    })
  }

  render() {
    const { gutter } = this.state

    return (
      <div className="gutter-demo">
        <Range
          value={gutter}
          onChange={this.handleChange}
          marks={4}
          step={4}
          max={16}
          hasTip={false}
          style={{ width: '400px', marginLeft: '20px', marginTop: '30px' }}
        />
        <Row gutter={gutter}>
          <Col span="6">
            <div className="demo-col-inset">col-6</div>
          </Col>
          <Col span="6">
            <div className="demo-col-inset">col-6</div>
          </Col>
          <Col span="6">
            <div className="demo-col-inset">col-6</div>
          </Col>
          <Col span="6">
            <div className="demo-col-inset">col-6</div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .gutter-demo .grid-fixed-demo-title {
    margin-left: 20px;
  }

  .gutter-demo .next-row {
    margin: 10px 0;
  }

  .gutter-demo .demo-col-inset {
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #ececec;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
`
