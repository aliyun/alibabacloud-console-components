import React from 'react'
import Truncate from '@alicloud/console-components-truncate'

const Demo = () => {
  return (
    <div className="truncate-demo">
      <Truncate type="width" threshold={200} tooltipMaxWidth={500}>
        supercalifragilisticexpialidocious@supercalifragilisticexpialidocious.com
      </Truncate>
      <br />
      <br />
      <Truncate type="width" threshold={200} tooltipMaxWidth={120}>
        superc alifragilis ticexpialidoc ous@supercal ifragil isticexpial idocio
        ussdfgds
      </Truncate>
    </div>
  )
}
export default Demo
