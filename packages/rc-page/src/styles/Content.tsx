import styled from 'styled-components'
import Partial from './Partial'
import { flexContainer, flexItem } from './utils'

const Content = styled(Partial)`
  ${flexContainer()};
  flex-grow: 1;
  margin-bottom: 0;
`

export const Side = styled.div`
  ${flexItem({ flexShrink: 0 })};
  position: relative;
  min-width: 180px;
  padding-right: 20px;
`

export const Main = styled.div`
  ${flexItem({ flexGrow: 1 })};
  padding-bottom: 40px;
  width: 100%;
  /* https://stackoverflow.com/a/43809765 */
  /* 让内容宽度恰好等于去掉Side以后的剩余宽度 */
  min-width: 0;
  /* 允许一些box-shadow溢出 */
  overflow: visible;
`

export default Content
