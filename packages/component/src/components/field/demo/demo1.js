import React from 'react'
import { Input, Button, Field } from '@alicloud/console-components'
import styled from 'styled-components'

export default class Demo1 extends React.PureComponent {
  field = new Field(this, { forceUpdate: true })

  onGetValue() {
    console.log(this.field.getValue('input'))
  }

  render() {
    const { init, setValue, reset } = this.field

    return (
      <SWrapper>
        <Input {...init('input', { initValue: 'test' })} />
        <br />
        <br />
        <Button type="primary" onClick={this.onGetValue.bind(this)}>
          getValue
        </Button>
        <Button
          type="primary"
          onClick={() => setValue('input', 'set me by click')}
        >
          setValue
        </Button>
        <Button onClick={() => reset()}>reset</Button>
      </SWrapper>
    )
  }
}

export const demoMeta = {
  zhName: `基本`,
  zhDesc: '`getValue` `setValue` `reset` 的使用',
}

const SWrapper = styled.div`
  .next-btn {
    margin-right: 8px;
  }
`
