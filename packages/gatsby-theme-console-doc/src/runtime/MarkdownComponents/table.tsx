import styled from 'styled-components'

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  margin-bottom: 16px;
  margin-top: 0;
  display: block;
  overflow: auto;
  width: 100%;
`

const TH = styled.th`
  ${Table} & {
    font-weight: 600;
    border: 1px solid #dfe2e5;
    padding: 6px 13px;
  }
`

const TD = styled.td`
  ${Table} & {
    border: 1px solid #dfe2e5;
    padding: 6px 13px;
  }
`

const TR = styled.tr`
  ${Table} & {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
    &:nth-child(2n) {
      background-color: #f6f8fa;
    }
  }
`

export default {
  table: Table,
  tr: TR,
  th: TH,
  td: TD,
}
