import React, { useState } from 'react'
import { Button } from '@alicloud/console-components'
import SlidePanel from '@alicloud/console-components-slide-panel'

const SlidePanelDemo: React.FC<{}> = () => {
  const [active, setActive] = useState(false)
  const [innerActive, setInnerActive] = useState(false)

  return (
    <>
      <Button
        onClick={() => {
          setActive(true)
        }}
      >
        open
      </Button>
      <SlidePanel
        title="CheckPanelShouldBeClosable"
        isShowing={active}
        width="medium"
        onVisibleChange={(v) => {
          setActive(v)
        }}
      >
        content
        <Button
          onClick={() => {
            setInnerActive(true)
          }}
        >
          open inner
        </Button>
        <SlidePanel
          title="CheckPanelShouldBeClosable"
          isShowing={innerActive}
          width="small"
          onVisibleChange={(v) => {
            setActive(v)
          }}
        >
          content
        </SlidePanel>
      </SlidePanel>
    </>
  )
}

export default SlidePanelDemo
