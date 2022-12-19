import styled from 'styled-components'
import { Message } from '@alicloud/console-components'

const SMessageItem = styled(Message)`
  &&& {
    padding: 5px 0 5px 16px;
    &.medium-message {
      .${getPrefix}message-title {
        font-size: 12px;
        font-family: 'PingFangSC-Regular';
        color: ${({ type }) => (type === 'error' ? '#D93026' : '#555')};
        font-weight: normal;
        padding-left: 20px;
      }
    }
    &.large-message {
      padding: 12px 0 10px 16px;
      .${getPrefix}message-content {
        padding-top: 5px;
        color: #555;
      }
    }
    /* type==="info" 不需要展示icon */
    &.no-icon-title {
      &&.${getPrefix}message.${getPrefix}medium .${getPrefix}message-symbol {
        display: none;
      }
      &&.${getPrefix}message.${getPrefix}medium .${getPrefix}message-title {
        padding-left: 0;
      }

      &&.${getPrefix}message.${getPrefix}medium .${getPrefix}message-content {
        padding-left: 0;
      }
    }
    .${getPrefix}message-title, .${getPrefix}message-content {
      /* 强制去掉右边的padding */
      padding-right: 0;
    }
  }
  /* 设置icon的位置上下居中 */
  &&.${getPrefix}message.${getPrefix}medium .${getPrefix}message-symbol {
    line-height: 20px;
  }
  .link-detail {
    font-weight: normal;
    word-break: keep-all;
  }
  .link-title {
    /* title与link之间的padding */
    padding-right: 10px;
  }
`

function getPrefix({ prefix }: { prefix: string }): string {
  return prefix
}

export default SMessageItem
