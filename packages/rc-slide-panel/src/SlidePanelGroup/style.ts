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

export const SPanelsWrapper = styled('div')<{
  top: string | number
  isShowing: boolean
}>`
  background: #fff;
  position: fixed;
  bottom: 0;
  left: auto !important; // 强行覆盖掉Popup中的默认根据left来定位
  right: 0; // 设置根据right来定位
  top: ${({ top }) => top}!important;
  &.slideInRight {
    animation: 0.25s ${slideInRight} ease-out;
  }
  &.slideOutRight {
    animation: 0.25s ${slideOutRight} ease-out;
  }
`
export const SGlobalStyle = createGlobalStyle<{ top: string }>`
	.wind-slide-panel-wrapper {
		&& {
			.next-overlay-backdrop {
				top: ${({ top }) => top}
			}
		}
	}	
`
