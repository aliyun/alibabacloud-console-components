import React from 'react'
import { Button, Icon } from '@alicloud/console-components'

const Demo3 = () => (
  <div>
    <Button.Group>
      <Button type="primary">OK</Button>
      <Button type="secondary">Cancel</Button>
    </Button.Group>
    &nbsp;&nbsp;
    <Button.Group>
      <Button disabled>Left</Button>
      <Button disabled>Middle</Button>
      <Button disabled>Right</Button>
    </Button.Group>
    <br />
    <br />

    <Button.Group>
      <Button type="primary"><Icon type="arrow-left" /> Backward</Button>
      <Button type="primary">Forward <Icon type="arrow-right" /></Button>
    </Button.Group>
    &nbsp;&nbsp;
    <Button.Group>
      <Button type="primary"><Icon type="prompt" /></Button>
      <Button type="primary"><Icon type="clock" /></Button>
      <Button type="primary"><Icon type="set" /></Button>
    </Button.Group>
  </div>
)

export default Demo3
