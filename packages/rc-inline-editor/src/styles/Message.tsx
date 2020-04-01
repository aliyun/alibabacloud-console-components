import styled from 'styled-components'

type IType = 'error' | 'success' | 'warning'

const COLOR = {
  error: 'inherit',
  success: 'green',
  warning: 'orange',
}

export const MessageBlock = styled.div<{ type?: IType; prefix: string }>`
  margin-bottom: -10px;
  margin-top: 5px;
  &&& {
    ${({ prefix }) => `.${prefix}icon`} {
      vertical-align: top;
    }
  }
  color: ${({ type = 'error' }) => COLOR[type]};
`

export const MessageInline = styled.span<{ type?: IType; prefix: string }>`
  color: ${({ type = 'error' }) => COLOR[type]};
  display: flex;
  align-items: center;
  &&& {
    ${({ prefix }) => `.${prefix}icon`} {
      &:before {
        vertical-align: top;
      }
    }
  }
`

export const Message = styled.span`
  position: relative;
  margin: 0 4px;
`
