/**
* @title threshold
*/

import Actions, { LinkButton } from '@alicloud/console-components-actions'
import React, { useState } from 'react'
import { NumberPicker, Button } from '@alicloud/console-components'
import { Container } from './styles'

const Threshold: React.FC<{}> = () => {
  const [threshold, setThreshold] = useState(3)
  const [actionsNum, setActionsNum] = useState(5)
  return (
    <Container>
      <div className="block">
        <Actions threshold={threshold}>
          {Array.from(Array(actionsNum)).map((_, i) => (
            <LinkButton key={i}>操作{i + 1}</LinkButton>
          ))}
        </Actions>
      </div>
      <hr />
      <div className="block">
        current threshold:
        <NumberPicker
          type="inline"
          value={threshold}
          onChange={setThreshold}
          min={0}
        />
      </div>

      <div className="block">
        <Button
          onClick={() => {
            setActionsNum(actionsNum + 1)
          }}
        >
          add action
        </Button>
        <Button
          onClick={() => {
            if (actionsNum === 0) return
            setActionsNum(actionsNum - 1)
          }}
        >
          remove action
        </Button>
      </div>
    </Container>
  )
}

export default Threshold
