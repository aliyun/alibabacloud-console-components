import styled from 'styled-components'

const calcHeight = (adjustHeight: string | number | (() => number)) => {
  let offset
  switch (typeof adjustHeight) {
    case 'string': {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        // this is executed in SSR
        // document is not defined
        break
      }
      const elem =
        document.getElementById(adjustHeight) ||
        document.querySelector(adjustHeight)

      if (elem && elem.offsetHeight) {
        offset = elem.offsetHeight
      }

      break
    }
    case 'number': {
      offset = adjustHeight
      break
    }
    case 'function': {
      offset = adjustHeight()
      break
    }
    default: {
      break
    }
  }

  return Number.isFinite(offset as number)
    ? `calc(100vh - ${offset}px)`
    : '100vh'
}

const AppLayout = styled.div<{
  adjustHeight: string | number | (() => number)
}>`
  ${(props) => props.theme.varDef}
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  -webkit-font-smoothing: antialiased;
  height: ${({ adjustHeight }) => calcHeight(adjustHeight)};
`

export default AppLayout
