import styled, { css } from 'styled-components'

const shared = css`
  margin-bottom: 16px;
  margin-top: 0;
  padding-left: 2em;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`

const OL = styled.ol`
  ${shared}
  list-style-type: decimal;
`

const UL = styled.ul`
  ${shared}
  list-style-type: disc;
`

const LI = styled.li`
  word-wrap: break-all;
  & > p {
    margin-top: 16px;
  }
  & + & {
    margin-top: 0.25em;
  }
`

export default {
  ul: UL,
  ol: OL,
  li: LI,
}
