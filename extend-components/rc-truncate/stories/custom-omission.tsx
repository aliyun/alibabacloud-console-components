import React from 'react'
import Truncate from '@alicloud/console-components-truncate'
import { Icon } from '@alicloud/console-components'

const sentence2 =
  '毕竟西湖六月中，风光不与四时同。接天莲叶无穷碧，映日荷花别样红。'

const Demo = () => {
  return (
    <div className="truncate-demo">
      <Truncate type="length" threshold={20} omission={<Icon type="smile" />}>
        {sentence2}
      </Truncate>
      <br />
      <br />
      <Truncate
        type="width"
        threshold={200}
        omission={<Icon style={{ marginLeft: '6px' }} type="ellipsis" />}
      >
        {sentence2}
      </Truncate>
    </div>
  )
}
export default Demo
