import React, { useState } from 'react'
import { Button } from '@alicloud/console-components'
import SlidePanel from '@alicloud/console-components-slide-panel'

const SlidePanelDemo: React.FC<{}> = () => {
  const [active, setActive] = useState(false)

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
        top={50}
        title="CheckPanelShouldBeClosable"
        isShowing={active}
        width="medium"
      >
        content
      </SlidePanel>
    </>
  )
}

export default SlidePanelDemo
