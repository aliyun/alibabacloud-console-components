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
        placement="bottom"
        title="BottonPanel"
        isShowing={active}
        width="medium"
        onMaskClick={() => {
          setActive(false)
        }}
      >
        content
      </SlidePanel>
    </>
  )
}

export default SlidePanelDemo
