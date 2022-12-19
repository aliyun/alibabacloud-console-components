import styled from 'styled-components'
import { flexItem, lineHeight } from './utils'

const margin = 16
const fontSize = 12
const padding = 24

const Partial = styled.div`
  ${flexItem()}
  box-sizing: border-box;
  width: 100%;
  font-size: ${fontSize}px;
  line-height: ${lineHeight(fontSize)}px;
  margin-bottom: ${margin}px;
  padding: 0 ${padding}px;

  &:first-child {
    margin-top: ${margin}px;
  }
`

export default Partial
