import React, { useRef } from 'react'
import Truncate from '@alicloud/console-components-truncate'

const sentence2 =
  '毕竟西湖六月中，风光不与四时同。接天莲叶无穷碧，映日荷花别样红。'

const Demo = () => {
  const updaterRef = useRef<null | (() => void)>(null)
  return (
    <div className="truncate-demo">
      <Truncate type="width" threshold={200}>
        <span>{sentence2}</span>
      </Truncate>
      <br />
      <br />
      <Truncate type="width" threshold={200} omission="。。。">
        <span>{sentence2}</span>
      </Truncate>

      <br />
      <br />
      <Truncate
        type="width"
        threshold={200}
        omission=""
        align="br"
        tooltipMaxWidth={1200}
        // 从Truncate拿到updater
        updaterRef={updaterRef}
      >
        <img
          src="https://img.alicdn.com/tfs/TB1Ly5oS3HqK1RjSZFPXXcwapXa-238-54.png"
          width={300}
          onLoad={() => {
            // 图片的异步加载相当于绕过React直接更新子元素的宽度，
            // 因此需要手动调用updater来检查是否需要截断
            updaterRef.current && updaterRef.current()
          }}
          alt="alicloud logo"
        />
      </Truncate>
    </div>
  )
}
export default Demo
