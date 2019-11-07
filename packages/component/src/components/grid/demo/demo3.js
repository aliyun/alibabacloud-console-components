import React from 'react'
import { Range, Grid } from '@alicloud/console-components'
import './demo3.less'

const { Row, Col } = Grid

export default class Demo extends React.Component {
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
    const { gutter } = this.state;

    return (
      <div className="gutter-demo">
        <Range value={gutter} onChange={this.handleChange} marks={4} step={4} max={16} hasTip={false} style={{ width: '400px', marginLeft: '20px', marginTop: '30px' }} />
        <Row gutter={gutter}>
          <Col span="6"><div className="demo-col-inset">col-6</div></Col>
          <Col span="6"><div className="demo-col-inset">col-6</div></Col>
          <Col span="6"><div className="demo-col-inset">col-6</div></Col>
          <Col span="6"><div className="demo-col-inset">col-6</div></Col>
        </Row>
      </div>
    )
  }
}


