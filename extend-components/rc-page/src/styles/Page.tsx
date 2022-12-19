import styled from 'styled-components'
import { flexContainer } from './utils'

const Page = styled.div`
  ${flexContainer({ flexDirection: 'column' })}
  box-sizing: border-box;
  min-height: 100%;
`

export default Page
