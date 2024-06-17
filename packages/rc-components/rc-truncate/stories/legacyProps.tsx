import React from 'react'
import Truncate from '@alicloud/console-components-truncate'

const sentence1 = 'To be or not to be, this is a question. —— Hamlet'
const sentence2 =
  '毕竟西湖六月中，风光不与四时同。接天莲叶无穷碧，映日荷花别样红。'

const Demo = () => {
  return (
    <div className="truncate-demo">
      <h1>原文</h1>
      <Truncate value="50">{sentence1}</Truncate>
      <br />
      <br />
      <Truncate type="length" value="50">
        {sentence2}
      </Truncate>
      <br />
      <br />
      <h1>length 截断（20）</h1>
      <Truncate value="20">{sentence1}</Truncate>
      <br />
      <br />
      <Truncate value="20">{sentence2}</Truncate>
      <br />
      <br />
      <h1>width 截断（200px）</h1>
      <Truncate type="width" value="200px" align="t">
        {sentence1}
      </Truncate>
      <br />
      <br />
      <Truncate type="width" value="200px" tooltipMaxWidth={500}>
        supercalifragilisticexpialidocious@supercalifragilisticexpialidocious.com
      </Truncate>
      <br />
      <br />
      <Truncate type="width" value="200" omission="。。。">
        {sentence2}
      </Truncate>
      <br />
      <br />
      <h1>Disable Tooltip</h1>
      <Truncate tooltip="disable" omission="。。。">
        {sentence1}
      </Truncate>
      <br />
      <br />
      <Truncate tooltip="disable" type="width" value="200" omission="。。。">
        {sentence2}
      </Truncate>
      <br />
      <br />
    </div>
  )
}
export default Demo
