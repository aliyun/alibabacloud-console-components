import styled, { keyframes, createGlobalStyle } from 'styled-components'

export const slideInRight = keyframes`
  0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`

export const slideOutRight = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(1000px);
    opacity: 0;
  }
`

export const slideInBottom = keyframes`
  0% {
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`

export const slideOutBottom = keyframes`
  0% {
    transform: translateY(0px);
    opacity: 0;
  }
  100% {
    transform: translateY(1000px);
    opacity: 1;
  }
`

export const SPanelsWrapper = styled('div')<{
  top: string | number | undefined
  isShowing: boolean
  placeBottom: boolean
}>`
  background: #fff;
  background: var(--dialog-bg, #fff);
  &.placeRight {
    position: fixed;
    bottom: 0;
    left: auto !important; // 强行覆盖掉Popup中的默认根据left来定位
    right: 0;
  }
  &.placeBottom {
    right: 0;
  }

  &.slideIn {
    animation: 0.25s
      ${({ placeBottom }) => (placeBottom ? slideInBottom : slideInRight)}
      ease-out;
  }
  &.slideOut {
    animation: 0.25s
      ${({ placeBottom }) => (placeBottom ? slideOutBottom : slideOutRight)}
      ease-out;
  }
`

export const SGlobalStyle = createGlobalStyle<{
  top: string | number | undefined
}>`
	.wind-slide-panel-wrapper {
		&&& {
			> * {
				${({ top }) => (top === undefined ? '' : `top: ${ensureUnit(top)} !important;`)}
        z-index: 101;
			}
		}
  }
`

function ensureUnit(v: number | string) {
  return typeof v === 'number' ? `${v}px` : `${v}`
}
