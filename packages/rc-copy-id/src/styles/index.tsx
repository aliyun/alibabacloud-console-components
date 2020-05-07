import styled from 'styled-components'

export const CopyWrapper = styled.div`
  position: relative;
  line-height: 20px;
  display: inline-flex;
`

export const CopyIconWrapper = styled.span`
  margin: -1px 0 0 6px;
  visibility: hidden;
  cursor: pointer;
  div:hover > & {
    visibility: visible;
  }
  .copy-icon {
    color: #888;
    &:hover {
      color: #555;
    }
  }
`

export const CopyTipWrapper = styled.div`
  i {
    color: #1e8e3e;
    margin-right: 8px;
  }
`

export const CopyTextWrapper = styled.span`
  margin: -1px 0 0 6px;
  cursor: pointer;
`
