import React, { useState } from 'react'
import { Button } from '@alicloud/console-components'
import {
  SlidePanelGroup,
  SlidePanelItem,
  usePanelStack,
  usePanelStackCtx,
} from '@alicloud/console-components-slide-panel'

const FirstPanel: React.FC<{
  setIsPanelShowing: (v: boolean) => void
}> = ({ setIsPanelShowing }) => {
  const panelStackManager = usePanelStackCtx()
  return (
    <SlidePanelItem
      id="item1"
      width="medium"
      title="title1"
      headerExtra="extra1"
      onOk={() => setIsPanelShowing(false)}
      onClose={() => setIsPanelShowing(false)}
      onCancel={() => setIsPanelShowing(false)}
    >
      item1
      <Button
        onClick={() => {
          panelStackManager.push(<SecondPanel />)
        }}
      >
        下探一级
      </Button>
    </SlidePanelItem>
  )
}

const SecondPanel: React.FC = () => {
  const panelStackManager = usePanelStackCtx()
  return (
    <SlidePanelItem
      id="item2"
      width="medium"
      title="title2"
      onOk={() => panelStackManager.pop()}
      onCancel={() => panelStackManager.pop()}
      onClose={() => panelStackManager.pop()}
      onBackArrowClicked={() => panelStackManager.pop()}
    >
      item2
    </SlidePanelItem>
  )
}

const Stack: React.FC<{}> = () => {
  const [isShowing, setIsShowing] = useState(false)

  const { top } = usePanelStack(() => {
    return <FirstPanel setIsPanelShowing={setIsShowing} />
  })

  return (
    <>
      <Button
        onClick={() => {
          setIsShowing(!isShowing)
        }}
      >
        open
      </Button>

      <SlidePanelGroup
        isShowing={isShowing}
        onMaskClick={() => {
          setIsShowing(false)
        }}
        onSlideStarted={() => {
          console.log('onSlideStarted')
        }}
        onSlideCancled={() => {
          console.log('onSlideCancled')
        }}
        onSlideCompleted={() => {
          console.log('onSlideCompleted')
        }}
      >
        {top}
      </SlidePanelGroup>
    </>
  )
}

export default Stack
