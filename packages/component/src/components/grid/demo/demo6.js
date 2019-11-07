import React from 'react'
import ReactDOM from 'react-dom'
import { Grid } from '@alicloud/console-components'
import './demo6.less'

const { Row, Col } = Grid
const spans = [
  { xs: 12, s: 8, m: 6 },
  { xs: 6, s: 8, m: 6 },
  { xs: 6, s: 8, m: 12 }
]

const breakpoints = {
  xs: 480,
  s: 720,
  m: 990
}

export default class Demo6 extends React.Component {
  componentDidMount() {
    const row = ReactDOM.findDOMNode(this.refs.row)
    const cols = []
    for (let i = 0; i < row.children.length; i++) {
      cols.push(row.children[i])
    }

    this.handleResize = () => {
      let point = ''
      const innerWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      const keys = Object.keys(breakpoints);
      for (let i = 0; i < keys.length; i++) {
        const width = breakpoints[keys[i]]
        const nextWidth = breakpoints[keys[i + 1]]
        if (innerWidth > width && (innerWidth < nextWidth || !nextWidth)) {
          point = keys[i]
          break
        }
      }

      if (point) {
        cols.forEach((col, index) => {
          col.innerHTML = `col-${spans[index][point]}`
        })
      }
    }
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <div className="breakpoint-demo">
        <div className="demo-title">Resize browser to see how each column changes</div>
        <Row ref="row">
          {spans.map((span, index) => (
            <Col key={index} {...span} />
          ))}
        </Row>
      </div>
    )
  }
}

