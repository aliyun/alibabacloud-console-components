import React from 'react'
import styled from 'styled-components'

const SWrapper = styled(WraperFilterProps)`
  position: relative;
  /* 强制去掉最外层Message的样式 */
  > .${getPrefix}message.${getPrefix}medium {
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
    > .${getPrefix}message-content {
      padding-left: 0;
      padding-right: 0;
    }
    > .${getPrefix}message-symbol-icon {
      display: none;
    }
  }
  /* 定位message-close-icon位置 */
  > .${getPrefix}message.${getPrefix}medium .${getPrefix}message-close {
    top: 10px;
    .${getPrefix}icon-close {
      font-size: 14px;
      transform: ${({ size }) =>
        size === 'large' ? 'scale(1)' : 'scale(0.8)'};
    }
  }
`

function getPrefix({ prefix }: { prefix: string }) {
  return prefix
}

function WraperFilterProps({ prefix, size, ...props }: any) {
  return <div {...props} />
}

export default SWrapper
