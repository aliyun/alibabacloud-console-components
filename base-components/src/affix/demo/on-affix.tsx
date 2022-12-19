/**
 * @title 固钉事件
 * @description `onAffix` 该函数会在状态变化时返回固钉状态。向下滚动查看效果
 */

import * as React from 'react'
import styled from 'styled-components'

import { Affix, Button } from '@alicloudfe/components'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      affixed: false
    }
  }

  onAffix = (affixed) => {
    this.setState({
      affixed
    })
  }

  render() {
    const state = this.state

    return (
      <div>
        <Affix onAffix={this.onAffix} style={{ display: 'inline-flex' }}>
          <Button type="primary">
            {state.affixed ? 'Affixed Button' : 'Unaffixed Button'}
          </Button>
        </Affix>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
